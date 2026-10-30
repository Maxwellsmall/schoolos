import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto, UpdateSubjectDto } from './dto';
import { JwtGuard, RolesGuard } from '../auth/guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { GetUser, Roles } from '../auth/decorators';
import { type User } from '../../generated/prisma';

@ApiBearerAuth()
@UseGuards(JwtGuard, RolesGuard)
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Roles(['school_admin'])
  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto, @GetUser() user: User) {
    return this.subjectService.create(createSubjectDto);
  }

  @Get()
  findAll() {
    return this.subjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectService.update(+id, updateSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectService.remove(+id);
  }
}
