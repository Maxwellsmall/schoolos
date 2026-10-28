import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '../../../generated/prisma';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateStudentDto extends CreateUserDto {
  @ApiProperty()
  @IsString()
  admissionNumber!: string;

  @IsString()
  @ApiProperty()
  middleName!: string;

  @IsEnum(Gender)
  @ApiProperty({ enum: Gender })
  gender!: Gender;

  @IsDateString()
  @ApiProperty()
  dateOfBirth!: Date;

  @IsUUID()
  @ApiProperty()
  classId!: string;

  @IsUUID()
  @ApiProperty()
  guardianId!: string;

  @IsUUID()
  @ApiProperty()
  schoolId!: string;

  @IsString()
  @ApiProperty()
  address!: string;

  @IsString()
  @ApiProperty()
  bloodGroup!: string;

  @IsEmail()
  @ApiProperty()
  loginEmail?: string;

  @MinLength(6)
  @IsString()
  @ApiProperty()
  password!: string;
}
