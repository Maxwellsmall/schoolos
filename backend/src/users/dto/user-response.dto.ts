import { ApiProperty } from '@nestjs/swagger';
import {
  $Enums,
  Guardian,
  Staff,
  Student,
  User,
} from '../../../generated/prisma';

export class StudentResponseDto implements Student {
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

export class StaffResponseData implements Staff {
  @ApiProperty()
  id!: string;
  @ApiProperty()
  role!: string;
  @ApiProperty()
  phoneNumber!: string;
  @ApiProperty()
  userId!: string;
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
  updatedAt!: Date;
}

export class GuardianResponseDto implements Guardian {
  @ApiProperty()
  id!: string;
  @ApiProperty()
  phoneNumber!: string;
  @ApiProperty({ enum: $Enums.GuardianRelationship })
  relationship!: $Enums.GuardianRelationship;
  @ApiProperty()
  userId!: string;
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
  updatedAt!: Date;
}

export class UserResponseDto implements User {
  @ApiProperty()
  id!: string;
  @ApiProperty()
  firstName!: string;
  @ApiProperty()
  lastName!: string;
  @ApiProperty()
  email!: string;
  @ApiProperty()
  passwordHash!: string;
  @ApiProperty({ enum: $Enums.UserRole })
  role!: $Enums.UserRole;
  @ApiProperty()
  schoolId!: string;
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
  updatedAt!: Date;

  @ApiProperty({ type: StudentResponseDto, required: false })
  student?: StudentResponseDto;
  @ApiProperty({ type: StaffResponseData, required: false })
  staff?: StaffResponseData;
  @ApiProperty({ type: GuardianResponseDto, required: false })
  guardian?: GuardianResponseDto;
}
