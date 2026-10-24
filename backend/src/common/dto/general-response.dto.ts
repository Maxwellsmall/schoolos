import { ApiProperty } from '@nestjs/swagger';

export class GeneralOkResponseDto {
  @ApiProperty({
    description: 'A message from the request you send',
  })
  messages!: string;
}
