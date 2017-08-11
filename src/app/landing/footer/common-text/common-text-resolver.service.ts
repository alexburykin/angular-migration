import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../_shared/services/api.service';


@Injectable()
export class CommonTextResolver implements Resolve<any> {

  public constructor(
    @Inject(ApiService) private _api: ApiService,
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this._api.get(`/api/v1/core/get-single-page/${ route.params.slug }/`)
      .catch((err: Error) => Observable.of(err.message ||
        'CommonTextResolver: getCommonTextData -> server error'));
  }

}
