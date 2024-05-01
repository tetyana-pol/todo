import { List } from 'src/entities/list.entity';
import { Task } from 'src/entities/task.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'matedata',
  entities: [List, Task],
  synchronize: true,
};

export default config;
