import { Injectable } from '@nestjs/common';
import { CreateListDto, UpdateListDto } from './dto/createListDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from 'src/entities/list.entity';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List) private readonly listRepo: Repository<List>,
  ) {}

  async findAll() {
    return await this.listRepo.find();
  }

  async findOne(id: number) {
    return await this.listRepo.findOne({ where: { id: id } });
  }

  async create(createListDto: CreateListDto) {
    const list = await this.listRepo.create(createListDto);
    return await this.listRepo.save(list);
  }

  async update(dto: UpdateListDto) {
    const list = await this.listRepo.findOne({ where: { id: dto.id } });
    Object.assign(list, dto);
    return await this.listRepo.save(list);
  }
}
