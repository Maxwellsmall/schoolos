import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassDto, ClassResponseDto, UpdateClassDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../../generated/prisma';

@Injectable()
export class ClassService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createClassDto: CreateClassDto,
    user: User,
  ): Promise<ClassResponseDto> {
    const {
      class: className,
      classArm,
      classCapacity,
      roomLocation,
      schoolId,
      staffId,
    } = createClassDto;
    const [school, staff] = await Promise.all([
      this.prisma.school.findFirst({
        where: {
          id: schoolId,
          users: { some: { staff: { userId: user.id } } },
        },
      }),
      this.prisma.staff.findFirst({ where: { id: staffId } }),
    ]);

    if (!school) throw new NotFoundException('School not found');
    if (!staff) throw new NotFoundException('Staff not found');

    const createdClass = await this.prisma.class.create({
      data: {
        class: className,
        classArm,
        classCapacity,
        roomLocation,
        assignedStaff: { connect: { id: staffId } },
        school: { connect: { id: schoolId } },
      },
      include: { assignedStaff: { include: { user: true } } },
    });
    return createdClass;
  }

  async findAll(user: User): Promise<ClassResponseDto[]> {
    const classes = await this.prisma.class.findMany({
      where: { schoolId: user.schoolId },
      include: { assignedStaff: { include: { user: true } } },
    });
    if (classes.length === 0)
      throw new NotFoundException('No classes registered yet');

    return classes;
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
