import { Injectable } from '@angular/core';
import { ApiService } from '../../../_shared/services/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeacherService {

  constructor(
    private _api: ApiService
  ) {}

  public get(id: string) {
    return this._api.get(`/api/v1/core/get-single-teacher-data/${ id }/`)
      .catch((err: Error) => Observable.of(err.message ||
        'TeacherResolver: getTeacherData -> server error'));
  }
}
