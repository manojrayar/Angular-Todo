import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './Mycomponents/todo/todo.component';
import { TodoItemComponent } from './Mycomponents/todo-item/todo-item.component';
import { AddTodoComponent } from './Mycomponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutpageComponent } from './Mycomponents/aboutpage/aboutpage.component';
import { ContactComponent } from './Mycomponents/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutpageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
