import { Todo } from '../models/todo.model';
import { Injectable } from '@angular/core';
import { Observable, timer, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'api/todos';
  

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

   /* createTodo(todo: Todo): Observable<Todo> {
    return this.http.post(`${this.apiUrl}/todos/`, todo) 
    .map(response => response.json() as Todo)   
  } */

  /* deleteTodo(index: number): Observable <any>  {
    return this.http.delete(`${this.apiUrl}/todos/${index}`);         
  }  */
        
}
