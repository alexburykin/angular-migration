import { Injectable } from '@angular/core';
import { ApiService } from '../../_shared/services/api.service';

@Injectable()
export class CoursesService {

  constructor(
    private _api: ApiService
  ) {}

  public getBySlug(slug: string) {
    return this._api.get(`/api/v1/core/get-single-course-data/${ slug }`);
  }

  public getLectureBySlug(slug: string) {
    return this._api.get(`/api/v1/core/get-single-lecture-data/${ slug }`);
  }
}
