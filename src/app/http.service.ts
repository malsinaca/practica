import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class HTTPService {

  constructor( private http: Http) { }

  public checkLogin( username: string, password: string) {
    console.log('//////////////');
    console.log('Checking data');

    // We prepare our request data
    // Content of the request
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    // Body of the request (parameters)
    const body = 'user=' + username + '&passwd=' + password;

    // NOTE:
    // Another way to construct the body of your request is using the new class ES6 URLSearchParams()
    const params = new URLSearchParams();
    params.append('user', username);
    params.append('passwd', password);
    // Using URLSearchParams and toString() you will obtain the same body for your request
    console.log('/////Using URLSearchParams body : ' + params.toString());
    // END NOTE

    return new Promise(
      resolve => {
        this.http.post('http://multimedia.uoc.edu/frontend/auth.php', body, {headers: headers})
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          });
      }
    );
  }



}
