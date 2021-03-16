import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TasksService } from "./../services/tasks.service";

@Controller('api/tasks')
export class TasksController {

    constructor(
        private taskService: TasksService
    ){}

    @Get()
    getAll(){
        return this.taskService.findAll();
    }

    @Get(':id')
    getOne(@Param('id')id: number){
        return this.taskService.findOne(id);
    }

    @Post()
    create(@Body()body: any){
        return this.taskService.create(body);
    }

    @Put(':id')
    update(@Body() body: any, @Param('id')id: number){
        return this.taskService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.taskService.delete(id);
    }
}
