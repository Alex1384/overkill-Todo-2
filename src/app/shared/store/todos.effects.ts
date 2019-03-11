import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  FETCH_TODO,
  FetchTodo,
  FetchTodoSuccess,
  FetchTodoError,
  TODO_CREATE,
  TODO_DELETE,
  CreateTodoSuccess,
  CreateTodoError,
  DeleteTodoSuccess,
  DeleteTodoError } from './todos.action';
import { ApiService } from '../services/api.service';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodosEffects {

  id: number;

  @Effect()
    fetchTodo$: Observable<Action> = this.actions$.pipe(
      ofType(FETCH_TODO),
      switchMap((fetchTodo: FetchTodo) => this.apiService.getAllTodos()),
      map((todos: Todo[]) => new FetchTodoSuccess(todos)),
      catchError((err: any) => of(new FetchTodoError(err)))
    );

    @Effect()
     createTodo$: Observable<Action> = this.actions$.pipe(
      ofType(TODO_CREATE),
      switchMap((todo: Todo) => this.apiService.createTodo(todo)
        .pipe(
          map((action: any) => new CreateTodoSuccess(action.payload)),
          catchError((error) => {
            return of(new CreateTodoError({ error: error }));
          }))
      )
    );

    @Effect()
    deleteTodo$: Observable<Action> = this.actions$.pipe(
      ofType(TODO_DELETE),
      switchMap((action: any) => this.apiService.deleteTodo(action.payload)
        .pipe(
          map(() => new DeleteTodoSuccess(action.payload)),
          catchError((error) => {
            return of(new DeleteTodoError({ error: error }));
          }))
      )
    );
    constructor(private apiService: ApiService, private actions$: Actions) {}
  }
