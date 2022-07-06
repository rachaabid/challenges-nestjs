import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodoService {
   todos = [
    {id: 1,
    title: 'todo1',
    description: 'create nestjs todo app'},
    {id: 2,
      title: 'todo2',
    description: 'create nestjs todo app'}
  ];

findOne(id: string){
  return this.todos.find(todo=>todo.id ===Number(id));
}

  findAll(): Todo[]{
    return this.todos;
  }

  create(todo: Todo){
    this.todos=[...this.todos, todo]
  }

  update(id: string, todo: Todo){
    const todoToUpdate = this.todos.find(t=>t.id === +id);
    if(todo.title){
      todoToUpdate.title = todo.title;
    }
    if(todo.description){
      todoToUpdate.description = todo.description;
    }
    const updatedTodos = this.todos.map(t=> t.id !== +id ? t : todoToUpdate);
    this.todos = [...updatedTodos];
    return {updatedTodo: 1, todo: todoToUpdate};
  }

  delete(id: string){
    const nbreTodoBeforeDelete = this.todos.length;
    this.todos = [...this.todos.filter(t=>t.id !== +id)];
    if(this.todos.length<nbreTodoBeforeDelete){
      return {deletedTodos: 1, nbTodos: this.todos.length};
    }
    else {
      return {deletedTodos: 0, nbTodos: this.todos.length};
    }
  }
}
