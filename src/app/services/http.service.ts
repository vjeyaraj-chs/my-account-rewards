import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private urlParam:string = environment.apiUriPrefix + '/';
    
    constructor(private http:HttpClient) {}

    sendGetRequest(url:string):Observable<any> {
        return this.http
            .get(this.urlParam + url)
            .map((response:Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    sendPostRequest(url:string, params):Observable<any> {
        return this.http
            .post(this.urlParam + url, params)
            .map((response:Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error:Response) {
        return Observable.throw(error.json());
    }
}
