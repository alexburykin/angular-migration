import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../_shared/services/api.service';


@Injectable()
export class TeacherResolver implements Resolve<any> {

  public constructor(
    @Inject(ApiService) private _api: ApiService,
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this._api.get(`/api/v1/core/get-single-teacher-data/${ route.params.id }/`)
      .catch((err: Error) => Observable.of(err.message ||
        'TeacherResolver: getTeacherData -> server error'));

  }

}
