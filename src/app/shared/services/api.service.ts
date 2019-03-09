import { Todo } from '../models/todo.model';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'api/todos';
  

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  createTodo(todo: Todo): Observable<Todo> {
    console.log('create', todo)
    return this.http.post<Todo>(`${this.apiUrl}/todos/`, todo);
  }

  deleteTodo(action: any): Observable <any>  {
    console.log('action', action)
    return this.http.delete(`${this.apiUrl}/todos/${action.payload}`);
  }

}