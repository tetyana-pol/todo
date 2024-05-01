"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListModule = void 0;
const common_1 = require("@nestjs/common");
const list_controller_1 = require("./list.controller");
const list_service_1 = require("./list.service");
const task_service_1 = require("../task/task.service");
const typeorm_1 = require("@nestjs/typeorm");
const list_entity_1 = require("../entities/list.entity");
const task_entity_1 = require("../entities/task.entity");
let ListModule = class ListModule {
};
exports.ListModule = ListModule;
exports.ListModule = ListModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([list_entity_1.List, task_entity_1.Task])],
        controllers: [list_controller_1.ListController],
        providers: [list_service_1.ListService, task_service_1.TaskService],
    })
], ListModule);
//# sourceMappingURL=list.module.js.map