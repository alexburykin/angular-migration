import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.sass']
})
export class TeachersComponent implements OnInit {

  @Input() public page;

  constructor() { }

  ngOnInit() {
  }

}
