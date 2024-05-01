import { CreateTaskDto } from './dto/createTaskDto';
import { Repository } from 'typeorm';
import { Task } from 'src/entities/task.entity';
export declare class TaskService {
    private readonly taskRepo;
    constructor(taskRepo: Repository<Task>);
    findAll(): Promise<Task[]>;
    findListTasks(listId: number): Promise<Task[]>;
    create({ listId, ...createTaskDto }: CreateTaskDto): Promise<Task>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
