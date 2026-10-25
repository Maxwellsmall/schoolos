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
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { JwtGuard, RolesGuard } from '../auth/guard';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from '../auth/decorators';
import { ClassResponseDto } from './dto';

@ApiBearerAuth()
@UseGuards(RolesGuard)
@UseGuards(JwtGuard)
@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @ApiOperation({ summary: 'Create  a new class' })
  @ApiResponse({ type: ClassResponseDto, status: 201 })
  @Roles(['school_admin'])
  @Post()
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto);
  }

  @Get()
  findAll() {
    return this.classService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(+id, updateClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classService.remove(+id);
  }
}
