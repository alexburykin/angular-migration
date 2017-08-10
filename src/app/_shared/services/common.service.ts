/* tslint:disable no-any */
import { Inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class CommonService {

    public constructor(
        @Inject('DOMAIN') private _domain: string,
        private _http: ApiService
    ) {}

    public haveQuestionRequest( data: haveQuestionData ): Observable<boolRes> {
        return this._http.post(`/api/core/contact-request`, JSON.stringify(data));
    }

    public subscribeToNewsletter( email: string ): Observable<boolRes> {
        return this._http.post(`/api/core/newsletter`, JSON.stringify({email}));
    }
}
