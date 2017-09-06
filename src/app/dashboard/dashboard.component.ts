import { BucketLists } from './../shared/models/bucketlist';
import { Component, OnInit } from '@angular/core';
// import { BucketlistsComponent } from './bucketlists/bucketlists.component';
import { BucketlistService } from './bucketlists/bucketlist.service';

import { Bucketlist } from './bucketlist-items/bucketlist-details';

import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username: string = localStorage.getItem('currentUser');
  token: any = localStorage.getItem('token');
  bucketlists: Bucketlist[] = [];
  bucketListsData: BucketLists;
  isLoading: boolean = true;
  errorMessage: string;

  constructor(
    private service: BucketlistService,
  ) { }

  ngOnInit(): void {
    this.service.getAllBucketLists()

  }
  getBucketlists(): void {
    this.service.getAllBucketLists()
      .subscribe(
      data => {
        this.bucketListsData = data;
        this.bucketlists = data.bucketlist;
      }, error => this.errorMessage = error.json(),
      () => this.isLoading = false);
  }

}
