import { ConflictException, Injectable } from '@nestjs/common';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'argon2';
import { GuardianResponseDto } from './dto';
import { User } from '../../generated/prisma';

@Injectable()
export class ParentsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createParentDto: CreateParentDto,
    user: User,
  ): Promise<GuardianResponseDto> {
    const {
      email,
      firstName,
      lastName,
      phoneNumber,
      relationship,
      password,
      schoolId,
    } = createParentDto;
    const [existingParent] = await Promise.all([
      this.prisma.guardian.findFirst({
        where: { user: { email: createParentDto.email } },
      }),
      this.prisma.school.findFirst({
        where: {
          id: schoolId,
          users: { some: { id: user.id } },
        },
      }),
    ]);
    if (existingParent)
      throw new ConflictException('Emails already in use, try another');

    const passwordHash = await hash(password);

    const parent = await this.prisma.guardian.create({
      data: {
        phoneNumber,
        relationship,
        user: {
          create: {
            email,
            firstName,
            lastName,
            passwordHash,
            role: 'parent',
            schoolId,
          },
        },
      },
      include: { user: true },
    });

    return parent;
  }

  findAll() {
    return `This action returns all parents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parent`;
  }

  update(id: number, updateParentDto: UpdateParentDto) {
    return `This action updates a #${id} parent`;
  }

  remove(id: number) {
    return `This action removes a #${id} parent`;
  }
}
