import { Injectable } from '@angular/core';
import { ResponseOptions,InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const todos = [
      {
        'id': 1,
        'done': false,
        'content': 'List my TODOs',
        'description': 'As a user I would like to list my current todos'
      },
      {
        'id': 2,
        'done': false,
        'content': 'Change a TODO state',
        'description': 'As a user I would like to change a todo state by checking a "box"'
      },
      {
        'id': 3,
        'done': false,
        'content': 'Detail a TODO',
        'description': `As a user I would like to display one of my todo in a separate or dedicated view.
        This todo will contain its title and a description (which is a new information not shown in the previous view).`
      },
      {
        'id': 4,
        'done': false,
        'content':' Add a new TODO',
        'description': `As a user I would like to add a new todo in my list`
      }
    ];
    return { todos };
  }

  responseInterceptor(resOptions: ResponseOptions, reqInfo: RequestInfo) {
    console.log('[Mock API RequestInfo]', reqInfo);
    console.log('[Mock API response]', resOptions);
    return resOptions;
  }
}
