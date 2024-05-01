import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDateString()
  duedate: string;

  @IsString()
  priority: string;

  @IsNumber()
  listId: number;
}
