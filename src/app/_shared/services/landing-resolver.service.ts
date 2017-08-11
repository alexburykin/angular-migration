import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';


@Injectable()
export class LandingResolver implements Resolve<any> {

  public landingData: any;
  public constructor(
    @Inject(ApiService) private _api: ApiService,
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    if (this.landingData) {
      return Observable.of(this.landingData);
    }
    return this._api.get(`/api/v1/core/get-landings-data/`)
      .map((res: any) => {
        this.landingData = res;
        return res;
      })
      .catch((err: Error) => Observable.of(err.message ||
        'LandingResolver: getLandingData -> server error'));
  }

}
