import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';


export const FETCH_TODO = '[todo] fetch';
export const FETCH_TODO_SUCCESS = '[todo] fetch success';
export const FETCH_TODO_ERROR ='[todo] fetch error'
export const TODO_CREATE = '[todo] create';
export const TODO_CREATE_ERROR = '[todo] create error';
export const TODO_CREATE_SUCCESS = '[todo] create success';
export const TODO_DELETE = '[todo] delete';
export const TODO_DELETE_SUCCESS = '[todo] delete success';
export const TODO_DELETE_ERROR = '[todo] delete error';
export const TODO_TOGGLE = '[todo] toggle';


export class FetchTodo implements Action {
  readonly type = FETCH_TODO;
}

export class FetchTodoSuccess implements Action {
  readonly type = FETCH_TODO_SUCCESS;
  constructor(public payload: Todo[]){}
}

export class FetchTodoError implements Action {
  readonly type = FETCH_TODO_ERROR;
  constructor(public payload: any) {}
}

export class CreateTodo implements Action {
  readonly type = TODO_CREATE;
  constructor(public payload: Todo) {}
}

export class CreateTodoSuccess implements Action {
  readonly type = TODO_CREATE_SUCCESS
  constructor(public payload: Todo){}
}

export class CreateTodoError implements Action {
  readonly type = TODO_CREATE_ERROR;
  constructor(public payload: any) {}
}

export class DeleteTodo implements Action {
  readonly type = TODO_DELETE;
  constructor(public payload: string) {}
}

export class DeleteTodoSuccess implements Action {
  readonly type = TODO_DELETE_SUCCESS;
  constructor(public payload: string) {}
}

export class DeleteTodoError implements Action {
  readonly type = TODO_DELETE_ERROR;
  constructor(public payload: any) {}
}

export class ToggleTodo implements Action {
  readonly type = TODO_TOGGLE;
  constructor(public payload: number) {}
}



export type TodosActionType = CreateTodo |
                              CreateTodoSuccess |
                              CreateTodoError |
                              DeleteTodo |
                              DeleteTodoSuccess |
                              DeleteTodoError |
                              ToggleTodo |
                              FetchTodo |
                              FetchTodoSuccess |
                              FetchTodoError;