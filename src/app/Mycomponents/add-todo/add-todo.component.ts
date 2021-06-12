import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string=''
  desc:string=''
  @Output() addTodo:EventEmitter<Todo>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.addTodo.emit({
      sno:1,
      title:this.title,
      desc:this.desc,
      completed:false
    })
    this.title=""
    this.desc=""
    // console.log(this.title)
  }

}
