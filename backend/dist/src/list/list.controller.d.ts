import { CreateListDto, UpdateListDto } from './dto/createListDto';
import { ListService } from './list.service';
import { TaskService } from 'src/task/task.service';
export declare class ListController {
    private readonly listService;
    private readonly taskService;
    constructor(listService: ListService, taskService: TaskService);
    findAll(): Promise<import("src/entities/list.entity").List[]>;
    findOne(id: number): Promise<import("src/entities/list.entity").List>;
    create(createListDto: CreateListDto): Promise<import("src/entities/list.entity").List>;
    update(dto: UpdateListDto): Promise<import("src/entities/list.entity").List>;
}
