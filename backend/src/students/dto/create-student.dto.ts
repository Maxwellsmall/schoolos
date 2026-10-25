import { Gender } from '../../../generated/prisma';
import { CreateUserDto } from '../../users/dto/create-user.dto';

export class CreateStudentDto extends CreateUserDto {
  middleName!: string;
  gender!: Gender;
  dateOfBirth!: Date;
  classId!: string;
  guardianId!: string;
  address!: string;

  loginEmail!: string;
  password!: string;
}
