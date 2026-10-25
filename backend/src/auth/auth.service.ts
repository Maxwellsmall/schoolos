import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, LoginResponseDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { verify } from 'argon2';
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
}
