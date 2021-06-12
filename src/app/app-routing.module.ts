import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './Mycomponents/aboutpage/aboutpage.component';
import { ContactComponent } from './Mycomponents/contact/contact.component';
import { TodoComponent } from './Mycomponents/todo/todo.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
