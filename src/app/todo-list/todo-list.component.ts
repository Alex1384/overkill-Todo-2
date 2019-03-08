import { todoListSelector, selectedTodoSelector } from './../shared/store/selector';
import { Todo } from './../shared/models/todo.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as todosAction from '../shared/store/todos.action'
import { Store, select } from '../../../node_modules/@ngrx/store';
import { State } from '../shared/store';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]> = this.store.pipe(select(todoListSelector));
  
  public selectedTodo$: Observable<Todo> = this.store.pipe(select(selectedTodoSelector));
  constructor(private store: Store<State>) { }

  public selectedTodo: Todo;
  public content: string;
  public description: string;

  ngOnInit() {
    this.store.dispatch(new todosAction.FetchTodo());
  }

  public toggleTodo(index: number) {
    this.store.dispatch(new todosAction.ToggleTodo(index));
  }

  public addTodo() {
    this.store.dispatch(new todosAction.CreateTodo({ content: this.content, done: false, id:uuid(),description: this.description}));
    this.content = "";
  }

  public deleteTodo(id: string) {
    this.store.dispatch(new todosAction.DeleteTodo(id));
  }

}
