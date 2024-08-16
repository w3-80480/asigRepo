// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-todo-item',
//   standalone: true,
//   imports: [],
//   templateUrl: './todo-item.component.html',
//   styleUrl: './todo-item.component.css'
// })
// export class TodoItemComponent {

// }


import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() toggleComplete = new EventEmitter<number>();

  onDelete(): void {
    this.delete.emit(this.todo.id);
  }

  onToggleComplete(): void {
    this.toggleComplete.emit(this.todo.id);
  }
}
 





