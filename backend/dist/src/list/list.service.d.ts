import { CreateListDto, UpdateListDto } from './dto/createListDto';
import { Repository } from 'typeorm';
import { List } from 'src/entities/list.entity';
export declare class ListService {
    private readonly listRepo;
    constructor(listRepo: Repository<List>);
    findAll(): Promise<List[]>;
    findOne(id: number): Promise<List>;
    create(createListDto: CreateListDto): Promise<List>;
    update(dto: UpdateListDto): Promise<List>;
}
