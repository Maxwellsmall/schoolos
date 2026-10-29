import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
// import { Roles } from '../auth/decorators/roles.decorator';
import { JwtGuard, RolesGuard } from '../auth/guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiUserResponse } from './dto/user-response.dto';
import { GetUser } from '../auth/decorators';
import { type User } from '../../generated/prisma';

@ApiBearerAuth()
@UseGuards(JwtGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  findMe(@GetUser() user: User) {
    return this.usersService.findMe(user);
  }
  @Get(':id')
  findOne(@Param('id') id: string, @GetUser() user: User) {
    return this.usersService.findOne(id, user);
  }
}
