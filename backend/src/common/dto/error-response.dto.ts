import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseDto {
  @ApiProperty({ description: 'The status code returned with your request' })
  statusCode!: number;
  @ApiProperty({ description: 'The error message returned with your request' })
  message!: string;
  @ApiProperty({ description: 'The error returned with your request' })
  error?: string;
}
