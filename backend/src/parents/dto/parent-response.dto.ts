import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Guardian } from '../../../generated/prisma';
import { UserBaseResponseDto } from '../../users/dto/user-response.dto';

export class GuardianBaseResponseDto implements Guardian {
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

export class GuardianResponseDto extends GuardianBaseResponseDto {
  @ApiProperty({ type: () => UserBaseResponseDto })
  user!: UserBaseResponseDto;
}
