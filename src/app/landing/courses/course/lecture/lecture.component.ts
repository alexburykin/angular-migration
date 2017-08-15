import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.sass']
})
export class LectureComponent implements OnInit {

  public lecture;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _coursesService: CoursesService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this._coursesService.getLectureBySlug(params.lectureSlug).subscribe(res => this.lecture = res);
    });
  }

}
