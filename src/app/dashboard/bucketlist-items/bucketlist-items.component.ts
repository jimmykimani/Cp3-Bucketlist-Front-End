import { Component, OnInit } from '@angular/core';
import { BucketlistItem } from './bucketlist-item';
import { BucketlistItemsService } from './bucketlist-items.service';
import { ActivatedRoute , Params} from '@angular/router';

@Component({
  selector: 'c-bucketlist-items',
  templateUrl: './bucketlist-items.component.html',
  styleUrls: ['./bucketlist-items.component.scss']
})
export class BucketlistItemsComponent implements OnInit {
  items: BucketlistItem[] = [];
  id: number;
  private sub: any;


  constructor(
    private serviceItem: BucketlistItemsService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
  //  Get all bucketlist items in a bucket

  // getItems(): void{
  //   this.serviceItem.getAllItems()
  //   .subscribe
  // }
}
