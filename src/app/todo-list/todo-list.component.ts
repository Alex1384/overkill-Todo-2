import { ApiService } from './../shared/services/api.service';
import { Todo } from './../shared/models/todo.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]> = this.apiService.todos$;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
