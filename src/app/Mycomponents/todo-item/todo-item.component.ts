import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo={sno:0,title:'',desc:'',completed:false};
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() markTodo:EventEmitter<Todo>=new EventEmitter();
  
  constructor() {
   }

  ngOnInit(): void {
  }

  onClick(todo:Todo){
    this.todoDelete.emit(todo)
    // console.log(todo)
  }

  checkboxClick(todo:Todo){
    this.markTodo.emit(todo)

  }

  

}
