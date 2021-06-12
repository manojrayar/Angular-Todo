import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[]
  constructor() {
    var items=localStorage.getItem("mytodos")
    if(items==null){
      this.todos=[]
    }else{
      this.todos=JSON.parse(items)
    }
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo)
    var i=this.todos.indexOf(todo)
    this.todos.splice(i,1)
    localStorage.setItem("mytodos",JSON.stringify(this.todos))
  }

  todoAdd(todo:Todo){
    // console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("mytodos",JSON.stringify(this.todos))
  }

  changeCompleted(todo:Todo){
    // console.log("mark"+todo)
    var i=this.todos.indexOf(todo)
    this.todos[i].completed=true
    localStorage.setItem("mytodos",JSON.stringify(this.todos))
  }

}
