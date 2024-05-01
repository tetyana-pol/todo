import { CreateTaskDto } from './dto/createTaskDto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getAll(): Promise<import("src/entities/task.entity").Task[]>;
    findById(id: string): string;
    create(createTaskDto: CreateTaskDto): Promise<import("src/entities/task.entity").Task>;
    removeList(id: string): Promise<import("typeorm").DeleteResult>;
}
