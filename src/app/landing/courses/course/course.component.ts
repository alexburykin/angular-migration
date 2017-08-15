import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
})
export class CourseComponent implements OnInit {

  public coursesLimit = 15;
  public course: any;
  public otherCourses: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _coursesService: CoursesService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this._coursesService.getBySlug(params.slug).subscribe(res => {
        this.course = res.course;
        this.otherCourses = res.other_courses;
      });
    });
  }

}
