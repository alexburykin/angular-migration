import { Injectable } from '@angular/core';
import { ApiService } from '../../_shared/services/api.service';

@Injectable()
export class EventsService {

  constructor(
    private _api: ApiService
  ) { }

  public getEvent(id: string) {
    return this._api.get(`/api/v1/events/web/single-event/${id}/`);
  }

}
