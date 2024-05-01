import { Controller, Post, Get, Body, Param, Put } from '@nestjs/common';
import { CreateListDto, UpdateListDto } from './dto/createListDto';
import { ListService } from './list.service';
import { TaskService } from 'src/task/task.service';

@Controller('list')
export class ListController {
  constructor(
    private readonly listService: ListService,
    private readonly taskService: TaskService,
  ) {}

  @Get()
  findAll() {
    return this.listService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.listService.findOne(id);
  }

  @Post()
  create(@Body() createListDto: CreateListDto) {
    return this.listService.create(createListDto);
  }

  @Put()
  update(@Body() dto: UpdateListDto) {
    return this.listService.update(dto);
  }
}
