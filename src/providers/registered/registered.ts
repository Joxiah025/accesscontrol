import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the RegisteredProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RegisteredProvider {

  private apiUrl;
  constructor(public http: Http) {
    console.log('Hello RegisteredProvider Provider');
    this.apiUrl = "http://events.blwcampusministry.com/registered/";
  }

  getRegistered(data: any): Observable<any>{
    let url = this.apiUrl+data;
    return this.http.get(url)
           .map(this.extractData)
           .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
    return body;
  }

  private handleError(error: Response | any){
    let errMsg: string;
    if(error instanceof Response){
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else{
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
