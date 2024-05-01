import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { List } from './list.entity';

@Entity('rtasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duedate: Date;

  @Column()
  priority: string;

  @ManyToOne(() => List, (list) => list.tasks)
  list: List;

  @RelationId((task: Task) => task.list)
  public listId: number;
}
