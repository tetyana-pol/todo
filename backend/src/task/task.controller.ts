import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTaskDto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return id;
  }
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Delete('/:id')
  removeList(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
