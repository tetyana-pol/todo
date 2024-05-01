"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_entity_1 = require("./src/entities/list.entity");
const task_entity_1 = require("./src/entities/task.entity");
const config = {
    type: 'postgres',
    database: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'matedata',
    entities: [list_entity_1.List, task_entity_1.Task],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map