import { List } from './list.entity';
export declare class Task {
    id: number;
    name: string;
    description: string;
    duedate: Date;
    priority: string;
    list: List;
    listId: number;
}
