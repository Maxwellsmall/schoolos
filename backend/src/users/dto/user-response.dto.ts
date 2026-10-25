import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';
import { $Enums, Guardian, Staff, User } from '../../../generated/prisma';
import { StudentBaseResponseDto } from '../../students/dto';

export class StaffResponseDto implements Staff {
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

type UserRole = $Enums.UserRole;
type StaffRole = 'teacher' | 'school_admin' | 'school_super_admin';

type UserBase = Omit<User, 'passwordHash' | 'role'>;
type UserWith<R extends UserRole, P> = UserBase & { role: R } & P;

export type UserResponse =
  | UserWith<'student', { student: StudentBaseResponseDto }>
  | UserWith<StaffRole, { staff: StaffResponseDto }>
  | UserWith<'parent', { guardian: GuardianResponseDto }>
  | UserWith<'root_admin', Record<never, never>>;

export type UserResponseFor<R extends UserRole> = UserResponse extends infer V
  ? V extends { role: infer VR }
    ? [R] extends [VR]
      ? V
      : never
    : never
  : never;

export class UserBaseResponseDto implements UserBase {
  @ApiProperty()
  id!: string;
  @ApiProperty()
  firstName!: string;
  @ApiProperty()
  lastName!: string;
  @ApiProperty()
  email!: string;
  @ApiProperty()
  schoolId!: string;
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
  updatedAt!: Date;
}

export class StudentUserResponseDto
  extends UserBaseResponseDto
  implements UserResponseFor<'student'>
{
  @ApiProperty({ enum: ['student'] }) role!: 'student';
  @ApiProperty({ type: StudentBaseResponseDto })
  student!: StudentBaseResponseDto;
}

export class StaffUserResponseDto
  extends UserBaseResponseDto
  implements UserWith<StaffRole, { staff: StaffResponseDto }>
{
  @ApiProperty({ enum: ['teacher', 'school_admin', 'school_super_admin'] })
  role!: StaffRole;
  @ApiProperty({ type: StaffResponseDto }) staff!: StaffResponseDto;
}

export class GuardianUserResponseDto
  extends UserBaseResponseDto
  implements UserResponseFor<'parent'>
{
  @ApiProperty({ enum: ['parent'] }) role!: 'parent';
  @ApiProperty({ type: GuardianResponseDto }) guardian!: GuardianResponseDto;
}

export class AdminUserResponseDto
  extends UserBaseResponseDto
  implements UserResponseFor<'root_admin'>
{
  @ApiProperty({ enum: ['root_admin'] }) role!: 'root_admin';
}

const userModelByRole: Record<UserRole, Type<UserBaseResponseDto>> = {
  root_admin: AdminUserResponseDto,
  school_super_admin: StaffUserResponseDto,
  school_admin: StaffUserResponseDto,
  teacher: StaffUserResponseDto,
  parent: GuardianUserResponseDto,
  student: StudentUserResponseDto,
};

const userModels = [...new Set(Object.values(userModelByRole))];

export const ApiUserResponse = () =>
  applyDecorators(
    ApiExtraModels(...userModels),
    ApiOkResponse({
      schema: {
        oneOf: userModels.map((m) => ({ $ref: getSchemaPath(m) })),
        discriminator: {
          propertyName: 'role',
          mapping: Object.fromEntries(
            Object.entries(userModelByRole).map(([role, model]) => [
              role,
              getSchemaPath(model),
            ]),
          ),
        },
      },
    }),
  );
