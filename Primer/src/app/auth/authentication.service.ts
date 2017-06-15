import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { UserRegister, UserLogin } from './user-details';



@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) { }

    registerUser(user: UserRegister): Observable<any> {
        return this.http.post('/api/v1/auth/register', JSON.stringify(user), { headers: this.getHeaders() })
            .map((response: Response) => response.json());
    }

    login(user: UserLogin): Observable<any> {
        return this.http.post('/api/v1/auth//login',
           JSON.stringify(user),
            { headers: this.getHeaders() })
            .map((response: Response) => response.json());
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}
