import { Injectable } from '@nestjs/common';
import { CreateClassDto, ClassResponseDto, UpdateClassDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createClassDto: CreateClassDto): Promise<ClassResponseDto> {
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

  findAll() {
    return `This action returns all class`;
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
