import { Injectable } from '@nestjs/common';
import { UserResponse } from './dto';
import { type User } from '../../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async findMe(user: User): Promise<UserResponse> {
    const userData = await this.prisma.user.findUniqueOrThrow({
      where: { id: user.id },
      include: { guardian: true, staff: true, student: true },
    });

    return userData;
  }

  findOne(id: string, user: User): UserResponse {
    return `This action returns a #${id} user`;
  }
}
