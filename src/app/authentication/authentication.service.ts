import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from '../common/headers';

@Injectable()
export class AuthService {
  private authUrl: string = 'http://127.0.0.1:5000/api/v1/auth/login';
  private loggedIn: boolean = false;

  constructor(private http: Http, private router: Router) {
    // look at localStorage to check if the user is logged in
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  /**
   * Check if the user is logged in
   */
  isLoggedIn() {
    return this.loggedIn;
  }

  /**
   * Log the user in
   */
  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.authUrl}`, { username, password },{ headers: contentHeaders })
      .map(res => res.json())
      .do(res => {
        if (res.token) {
          localStorage.setItem('auth_token', res.token);
          localStorage.setItem('currentUser', username);

          this.loggedIn = true;
        }
      })
      .catch(this.handleError);
  }

  /**
   * Log the user out
   */
  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['login']);
    this.loggedIn = false;
  }

  /**
   * Handle any errors from the API
   */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

}
