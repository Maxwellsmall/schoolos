import { ConflictException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'argon2';
import { StudentResponseDto } from './dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createStudentDto: CreateStudentDto,
  ): Promise<StudentResponseDto> {
    const {
      address,
      admissionNumber,
      bloodGroup,
      classId,
      dateOfBirth,
      firstName,
      gender,
      guardianId,
      lastName,
      schoolId,
      password,
    } = createStudentDto;
    const loginEmail =
      createStudentDto.loginEmail ||
      `${createStudentDto.firstName.toLowerCase()}${createStudentDto.lastName.toLowerCase()}@iqra.edu.ng`;

    const existingStudent = await this.prisma.student.findFirst({
      where: { user: { email: loginEmail }, admissionNumber },
    });

    if (existingStudent)
      throw new ConflictException(
        'Student email already in use try another one',
      );

    const passwordHash = await hash(password);

    const student = await this.prisma.student.create({
      data: {
        address,
        admissionNumber,
        bloodGroup,
        dateOfBirth,
        guardian: { connect: { id: guardianId } },
        class: { connect: { id: classId } },
        gender,
        user: {
          create: {
            firstName,
            lastName,
            email: loginEmail,
            role: 'student',
            schoolId,
            passwordHash,
          },
        },
      },
      include: { user: true },
    });

    return student;
  }

  findAll() {
    return `This action returns all students`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
