import { Bucketlist } from './../bucketlist-items/bucketlist-details';
import { BucketLists } from './../../shared/models/bucketlist';

import { Injectable, } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BucketlistService {
  private bucketlistUrl: string = 'http://127.0.0.1:5000/api/v1/bucketlists/';
  private apiUrl: string = 'http://127.0.0.1:5000';

  constructor(private http: Http) { }
  getAllBucketLists(): Observable<BucketLists> {
    // provide the authentication token here.
    return this.http.get(this.bucketlistUrl, { headers: this.addHeaders() })
      .map((res: Response) => res.json())
      .do((data) => {
        console.log(data);

      })
      .catch(this.handleError);

  }
  private handleError(error: Response) {
    // console.log(error.text());
    return Observable.throw(error || 'Server Error');
  }
  getBucketlistSingle(id: number): Observable<Bucketlist> {
    return this.http.get(this.bucketlistUrl + id + '/', { headers: this.addHeaders() })
      .map((response: Response) => <Bucketlist>response.json()['bucketlist']);
  }



  createBucketlist(name) {
    let options = new RequestOptions({ headers: this.addHeaders() });
    let body = JSON.stringify(name);
    return this.http.post(this.bucketlistUrl, body, options).map((res: Response) => res.json());
  }
  updateBucketlist(name, id) {
    let options = new RequestOptions({ headers: this.addHeaders() });
    let body = JSON.stringify(name);
    return this.http.put(this.bucketlistUrl + id + '/', body, options).map((res: Response) => res.json());

  }
  deleteBucketlist(id: number) {
    return this.http.delete(this.bucketlistUrl + id + '/', { headers: this.addHeaders() })
      .map((response: Response) => response.json());
  }

  addHeaders() {
    let headers = new Headers();
    let token = localStorage.getItem('auth_token');
    headers.set('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${token}`);

    return headers;
  }

}

