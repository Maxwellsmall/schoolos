import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '../../../generated/prisma';
import { IsEnum, IsString, IsUUID } from 'class-validator';

export class CreateParentDto {
  @ApiProperty()
  @IsString()
  firstName!: string;
  @ApiProperty()
  @IsString()
  lastName!: string;
  @ApiProperty()
  @IsString()
  email!: string;
  @ApiProperty()
  @IsString()
  phoneNumber!: string;
  @ApiProperty({ enum: $Enums.GuardianRelationship })
  @IsEnum($Enums.GuardianRelationship)
  relationship!: $Enums.GuardianRelationship;
  @ApiProperty()
  @IsString()
  password!: string;
  @ApiProperty()
  @IsUUID()
  schoolId!: string;
}
