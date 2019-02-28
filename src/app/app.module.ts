import { InMemoryDataService } from './shared/mock/in-memory-data.service';
import { environment } from './../environments/environment';
import { TodosEffects } from './shared/store/todos.effects';
import { reducers } from './shared/store/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './shared/services/api.service';
import { LayoutModule } from './shared/modules/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@angular/flex-layout';
import { StoreModule } from '../../node_modules/@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '../../node_modules/@ngrx/effects';
import { RouterModule } from '../../node_modules/@angular/router';
import { StoreRouterConnectingModule } from '../../node_modules/@ngrx/router-store';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpClientInMemoryWebApiModule } from '../../node_modules/angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    CoreModule,
    HttpClientModule,

    environment.useHttpMock
      ? HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { delay: 1000, post204: false, put204: false }
      )
      : [],

    StoreModule.forRoot(reducers), 
     StoreDevtoolsModule.instrument({
      name: 'to do'
    }),
    EffectsModule.forRoot([TodosEffects]),
    RouterModule.forRoot([
      {
        path: 'todo', component: TodoListComponent
      },
      {
        path: '', redirectTo: 'todo', pathMatch: 'full',
      },
      {
        path: 'todo/:id', component: TodoListComponent
      }
    ]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    })
    
  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
