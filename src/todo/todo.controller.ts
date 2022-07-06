import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService){}

  @Get(':id')
  findOne(@Param('id') id: string){
  return this.todoService.findOne(id);
  }

  @Get()
  findAll(): Todo[]{
    return this.todoService.findAll();
  }

  @Post()
  createTodo(@Body() newTodo){
   this.todoService.create(newTodo);
  }

 @Patch(':id')
 updateTodo(@Param('id') id:string, @Body() todo: Todo){
this.todoService.update(id, todo);
 }

 @Delete(':id')
 deleteTodo(@Param('id') id: string){
  this.todoService.delete(id);
 }
}
