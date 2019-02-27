import { todoListSelector, selectedTodoSelector } from './../shared/store/selector';
import { ApiService } from './../shared/services/api.service';
import { Todo } from './../shared/models/todo.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as todosAction from '../shared/store/todos.action'
import { Store, select } from '../../../node_modules/@ngrx/store';
import { State } from '../shared/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]> = this.store.pipe(select(todoListSelector));
  
  public selectedTodo$: Observable<Todo> = this.store.pipe(select(selectedTodoSelector));
  constructor(private apiService: ApiService, private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new todosAction.FetchTodo());
  }

  public toggleTodo(index: number) {
    this.store.dispatch(new todosAction.ToggleTodo(index));
    }

}
