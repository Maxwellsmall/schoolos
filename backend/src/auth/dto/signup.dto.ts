import { ApiProperty } from '@nestjs/swagger';
import { CreateSchoolDto } from '../../schools/dto/create-school.dto';
import { IsString } from 'class-validator';

export class SignupDto extends CreateSchoolDto {
  @ApiProperty()
  @IsString()
  adminName!: string;
  @ApiProperty()
  @IsString()
  password!: string;
}
