// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-todo-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './todo-list.component.html',
//   styleUrl: './todo-list.component.css'
// })
// export class TodoListComponent {

// }

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }

  toggleComplete(id: number): void {
    this.todoService.toggleComplete(id);
  }
}
