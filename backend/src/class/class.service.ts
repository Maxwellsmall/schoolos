import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassDto, ClassResponseDto, UpdateClassDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../../generated/prisma';

@Injectable()
export class ClassService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createClassDto: CreateClassDto): Promise<ClassResponseDto> {
    // const school =  await this.prisma
    const {
      class: className,
      classArm,
      classCapacity,
      roomLocation,
      schoolId,
      staffId,
    } = createClassDto;

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
