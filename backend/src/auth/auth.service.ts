import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto, LoginResponseDto, SignupDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { email, password, role } = loginDto;

    const user = await this.prisma.user.findUnique({ where: { email } });

    if (user?.role !== role)
      throw new UnauthorizedException('Invalid email or password');

    const isPasswordValid = await verify(user.passwordHash, password);

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid email or password');

    const tokenPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const token = this.jwt.sign(tokenPayload, {
      secret: this.config.get('JWT_ACCESS_SECRET'),
    });

    return { access_token: token };
  }

  async signup(signupDto: SignupDto): Promise<LoginResponseDto> {
    const {
      address,
      adminFirstName,
      adminLastName,
      email,
      ministryAccreditationNumber,
      motto,
      password,
      phoneNumber,
      name,
    } = signupDto;
    // check if account already exist
    const [existingUser, existingSchool] = await Promise.all([
      this.prisma.user.findUnique({
        where: { email },
      }),
      this.prisma.school.findUnique({
        where: { email },
      }),
    ]);

    if (existingUser || existingSchool)
      throw new ConflictException('Email already in use');

    const passwordHash = await hash(password);

    // create school
    // create  user account with admin role
    const [adminUser] = await this.prisma.$transaction(async (tx) => {
      const school = await tx.school.create({
        data: {
          address,
          email,
          masterPasswordHash: passwordHash,
          ministryAccreditationNumber,
          motto,
          name,
          phoneNumber,
        },
      });
      const adminUser = await tx.staff.create({
        data: {
          phoneNumber,
          role: 'Head Admin',
          user: {
            create: {
              firstName: adminFirstName,
              lastName: adminLastName,
              email: email,
              passwordHash,
              role: 'school_admin',
              school: { connect: { id: school.id } },
            },
          },
        },
        select: { user: true },
      });

      return [adminUser];
    });
    // login the user
    return await this.login({
      email: adminUser.user.email,
      password,
      role: adminUser.user.role,
    });
  }
}
