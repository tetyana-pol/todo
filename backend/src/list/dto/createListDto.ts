import { IsNumber, IsString } from 'class-validator';

export class CreateListDto {
  @IsString()
  title: string;
}

export class UpdateListDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;
}
