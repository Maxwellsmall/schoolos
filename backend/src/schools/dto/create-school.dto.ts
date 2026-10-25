import { ApiProperty } from '@nestjs/swagger';
import { School } from '../../../generated/prisma';
import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class CreateSchoolDto implements Omit<
  School,
  'id' | 'masterPasswordHash' | 'createdAt' | 'updatedAt'
> {
  @ApiProperty({})
  @IsString()
  name!: string;

  @ApiProperty({})
  @IsString()
  motto!: string;

  @ApiProperty({})
  @IsPhoneNumber()
  phoneNumber!: string;

  @ApiProperty({})
  @IsEmail()
  email!: string;

  @ApiProperty({})
  @IsString()
  address!: string;

  @ApiProperty({})
  @IsString()
  ministryAccreditationNumber!: string;
}
