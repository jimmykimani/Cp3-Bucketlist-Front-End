import { BucketlistItem } from './bucketlist-item';
export interface Bucketlist {
  id : number;
  name: string;
  created_by: string;
  items: BucketlistItem[]
  date_created: string;
  date_modified: string;
  uri: string;
}
