// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way binding

// import { AppComponent } from './app.component';
// import { AddTodoComponent } from './components/add-todo/add-todo.component';
// import { TodoListComponent } from './components/todo-list/todo-list.component';
// import { TodoItemComponent } from './components/todo-item/todo-item.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AddTodoComponent,      // Declare AddTodoComponent
//     TodoListComponent,     // Declare TodoListComponent
//     TodoItemComponent      // Declare TodoItemComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule  // Don't forget to include FormsModule for ngModel to work
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
