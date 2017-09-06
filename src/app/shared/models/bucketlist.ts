import { BucketlistItem } from '../bucketlist-items/bucketlist-item';
import { Bucketlist } from '../bucketlist-items/bucketlist-details';



export interface BucketLists {
  bucketlist : Bucketlist[];
  next_page: string;
  prev_page: string;
  total_pages: number;
}
