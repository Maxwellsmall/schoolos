import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../../../generated/prisma';
import { IsEmail, IsEnum, IsString } from 'class-validator';

export class LoginDto {
  @IsEnum(UserRole)
  @ApiProperty({ enum: UserRole })
  role!: UserRole;

  @IsEmail()
  @ApiProperty()
  email!: string;

  @IsString()
  @ApiProperty()
  password!: string;
}
