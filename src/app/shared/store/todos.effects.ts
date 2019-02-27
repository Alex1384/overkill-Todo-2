import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FETCH_TODO, FetchTodo, FetchTodoSuccess, FetchTodoError, TODO_CREATE, CreateTodo, TODO_DELETE, DeleteTodo } from './todos.action';
import { ApiService } from '../services/api.service';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodosEffects {
  @Effect()
  fetchTodo$: Observable<Action> = this.actions$.pipe(
    ofType(FETCH_TODO),
    switchMap((fetchTodo: FetchTodo) => this.apiService.getTodos()),
    map((todos: Todo[]) => new FetchTodoSuccess(todos)),
    catchError((err: any) => of(new FetchTodoError(err)))
  );

  constructor(private apiService: ApiService, private actions$: Actions) {}
}