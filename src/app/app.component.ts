import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

import {Todo, TodosService} from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  error = '';

  constructor(
    private todosService: TodosService
  ) {}

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo(event: any) {
    if (!this.todoTitle.trim()) {
      return;
    }
    event.target.disabled = true;
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };
    this.todosService.addTodo(newTodo)
      .subscribe((todo: Todo) => {
        this.todos.unshift(todo);
        this.todoTitle = '';
        event.target.disabled = false;
      });
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe({
        next: (todos: Todo[]) => {
          this.todos = todos;
          this.loading = false;
        },
        error: error => {
          this.error = error.message;
        }
      });
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(
          todo => todo.id !== id
        );
      });
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id)
      .subscribe(todo => {
        this.todos.find(
          t => t.id === todo.id
          ).completed = true;
      });
  }
}
