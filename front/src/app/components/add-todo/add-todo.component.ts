// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-todo',
//   standalone: true,
//   imports: [],
//   templateUrl: './add-todo.component.html',
//   styleUrl: './add-todo.component.css'
// })
// export class AddTodoComponent {

// }


import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  addTodo(): void {
    if (this.newTodo.trim()) {
      const newId = Date.now();
      const todo: Todo = {
        id: newId,
        title: this.newTodo,
        completed: false
      };
      this.todoService.addTodo(todo);
      this.newTodo = '';
    }
  }
}
