import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.sass']
})
export class TeacherComponent implements OnInit {

  public teacher: any;

  constructor(
    private _activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activateRoute.data.subscribe( data => this.teacher = data.teacher);
  }

}
