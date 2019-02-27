import { Todo } from '../models/todo.model';
import { Injectable } from '@angular/core';
import { Observable, timer, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getTodos(): Observable<Todo[]> {
    return timer(2000).pipe(
                map( () => [
            {
                id: "1",
                content: 'manger une pizza',
                done: false
            },
            
            {
                id: "2",
                content: 'Aller à la plage',
                done: false
            },

            {
                id: "3",
                content: 'Faire du ski',
                done: false
            }
        ])
    )
  }
}
