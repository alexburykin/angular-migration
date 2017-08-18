import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from './teacher.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.sass'],
  providers: [ TeacherService ],
})
export class TeacherComponent implements OnInit {

  public teacher: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _teacherService: TeacherService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this._teacherService.get(params.id).subscribe( teacher => this.teacher = teacher);
    });
  }

}
