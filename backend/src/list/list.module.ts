import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { TaskService } from 'src/task/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from 'src/entities/list.entity';

import { Task } from 'src/entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([List, Task])],
  controllers: [ListController],
  providers: [ListService, TaskService],
})
export class ListModule {}
