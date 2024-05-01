import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/createTaskDto';
import { Repository } from 'typeorm';
import { Task } from 'src/entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepo: Repository<Task>,
  ) {}

  async findAll() {
    return await this.taskRepo.find();
  }

  async findListTasks(listId: number) {
    const tasks = await this.taskRepo.find({
      where: {
        list: { id: listId },
      },
    });
    return tasks;
  }

  async create({ listId, ...createTaskDto }: CreateTaskDto) {
    const task = this.taskRepo.create({
      ...createTaskDto,
      list: { id: listId },
    });
    await this.taskRepo.save(task);
    return task;
  }

  async remove(id: number) {
    return await this.taskRepo.delete(id);
  }
}
