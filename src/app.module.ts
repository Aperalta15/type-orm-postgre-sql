import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from "./tasks/entities/task.entity";

@Module({
  imports: [TasksModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'motorola',
      database: 'my_db',
      entities: [Task],
      synchronize: true,
    })
    ,],
  controllers: [],
  providers: [],
})
export class AppModule {}
