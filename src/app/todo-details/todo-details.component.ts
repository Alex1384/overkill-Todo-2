import { selectedTodoSelector } from './../shared/store/selectors/selector';
import { State } from './../shared/store/index';
import { Store, select } from '@ngrx/store';
import { Todo } from './../shared/models/todo.model';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  public selectedTodo$: Observable<Todo> = this.store.pipe(select(selectedTodoSelector));
    constructor(private store: Store<State>) { }

    public selectedTodo: Todo;
    public description: string;


  ngOnInit() {
  }

}
