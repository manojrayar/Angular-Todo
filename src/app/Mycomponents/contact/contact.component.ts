import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  }

}
