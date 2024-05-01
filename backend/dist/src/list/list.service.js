"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const list_entity_1 = require("../entities/list.entity");
let ListService = class ListService {
    constructor(listRepo) {
        this.listRepo = listRepo;
    }
    async findAll() {
        return await this.listRepo.find();
    }
    async findOne(id) {
        return await this.listRepo.findOne({ where: { id: id } });
    }
    async create(createListDto) {
        const list = await this.listRepo.create(createListDto);
        return await this.listRepo.save(list);
    }
    async update(dto) {
        const list = await this.listRepo.findOne({ where: { id: dto.id } });
        Object.assign(list, dto);
        return await this.listRepo.save(list);
    }
};
exports.ListService = ListService;
exports.ListService = ListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(list_entity_1.List)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ListService);
//# sourceMappingURL=list.service.js.map