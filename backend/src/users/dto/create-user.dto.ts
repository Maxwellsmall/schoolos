import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../generated/prisma';
import { IsString } from 'class-validator';

export class CreateUserDto implements Pick<User, 'firstName' | 'lastName'> {
  @IsString()
  @ApiProperty()
  firstName!: string;

  @IsString()
  @ApiProperty()
  lastName!: string;
}
