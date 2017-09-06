import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BucketlistItem } from './bucketlist-item';

Injectable()

export class BucketlistItemsService {
  private apiUrl: string = 'http://127.0.0.1:5000/api/v1/bucketlists/';
  constructor(private http: Http) { }

  // get all items
  getAllItems(id): Observable<BucketlistItem[]> {
    return this.http.get(this.apiUrl + id + '/items/', { headers: this.addHeaders() })
      .map((res: Response) => res.json())
      .do((data) => {
        console.log(data);

      })
      .catch(this.handleError);
  }
  //  Create a bucketlist Item

  // Update a bucketlist Items

  // Delete bucketlist Items

  // Get headers 
  addHeaders() {
    let headers = new Headers();
    let token = localStorage.getItem('auth_token');
    headers.set('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${token}`);

    return headers;
  }
  private handleError(error: Response) {
    // console.log(error.text());
    return Observable.throw(error || 'Server Error');
  }
}
