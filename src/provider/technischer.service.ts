import { BASEPATH } from '../app/app.module';
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TechnischerService {
  
  
  constructor(private http: Http) {}
  
  private createAuthorizationHeader(): Headers {
    let header = new Headers();
    if(sessionStorage.getItem('token'))
      header.append('Authorization', 'Bearer ' + sessionStorage.getItem('token')); 
     return header;
  }

  public getRequest(ressourceAPI: string) {
    return this.http.get(BASEPATH + ressourceAPI).map((data) => data.json()).catch(
      (e) => {
        // Warum nur die Fehler zurück geben ?
        // if (e.status >= 400) {
        //   return Observable.throw(e);
        // }
        return Observable.throw(e);
      });

  }
  
  public postFormRequest(ressourceAPI: string, body: any) {
    let headers = this.createAuthorizationHeader();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(BASEPATH + ressourceAPI, body, {headers: headers}).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
    });

  }
  
  public postRequest(ressourceAPI: string, body: any) {
    return this.http.post(BASEPATH + ressourceAPI, body, {headers: this.createAuthorizationHeader()}).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
      });

  }


  public putRequest(ressourceAPI: string, body: any) {
    return this.http.put(BASEPATH + ressourceAPI, body, {headers: this.createAuthorizationHeader()}).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
      });
  }

  public deleteRequest(ressourceAPI: string) {
    return this.http.delete(BASEPATH + ressourceAPI, {headers: this.createAuthorizationHeader()}).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
      });
  }

}