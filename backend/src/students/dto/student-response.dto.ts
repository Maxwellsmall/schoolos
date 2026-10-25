import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Student } from '../../../generated/prisma';
import { UserBaseResponseDto } from '../../users/dto/user-response.dto';

export class StudentBaseResponseDto implements Student {
  @ApiProperty()
  id!: string;
  @ApiProperty()
  admissionNumber!: string;
  @ApiProperty()
  dateOfBirth!: Date;
  @ApiProperty({ enum: $Enums.Gender })
  gender!: $Enums.Gender;
  @ApiProperty()
  bloodGroup!: string;
  @ApiProperty()
  guardianModelId!: string;
  @ApiProperty()
  classId!: string;
  @ApiProperty()
  userId!: string;
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
  updatedAt!: Date;
}
export class StudentResponseDto extends StudentBaseResponseDto {
  @ApiProperty({ type: UserBaseResponseDto })
  user!: UserBaseResponseDto;
}
