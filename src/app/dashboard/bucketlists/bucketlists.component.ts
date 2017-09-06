import { BucketLists } from './../../shared/models/bucketlist';
import { Bucketlist } from './../bucketlist-items/bucketlist-details';
import { Component, Optional, OnInit, Pipe, ViewContainerRef } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { SearchService } from '../../shared/services/search.service';
import { BucketlistService } from './bucketlist.service';


import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { MdDialogModule, MdButtonModule } from '@angular/material';
import { MdSnackBar } from '@angular/material';
import { MdSnackBarRef } from '@angular/material/snack-bar/snack-bar-ref';
import { ActivatedRoute } from '@angular/router';
import { DialogsService } from '../dialog/dialog.service';


@Component({
  selector: 'app-bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.scss']
})
export class BucketlistsComponent implements OnInit {
  errorMessage: string;
  public bucketlists: Bucketlist[] = [];
  bucketListsData: BucketLists;
  newBucketlistName: string;
  isLoading: boolean = true;
  message: string;
  bucket: Bucketlist
  id: number;
  public result: any;
  dialogRef: MdDialogRef<any>;
  username: string = localStorage.getItem('currentUser');

  constructor(private service: BucketlistService,
    private route: ActivatedRoute,
    private dialogsService: DialogsService,
    public dialog: MdDialog,
    public viewContainerRef: ViewContainerRef,
    public snackBar: MdSnackBar) {

  }

  ngOnInit(): void {
    this.getBucketlists();
    // let id = this.route.snapshot.params['id'];
    // this.service.getBucketlistSingle(id).subscribe(
    //   bucket => this.bucket = bucket
    // );

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

  createBucketlist(name) {
    let bucket = { name: name };

    this.service.createBucketlist(bucket).subscribe(
      data => {
        // refresh the list
        this.getBucketlists();
        this.snackBar.open('You are awesome! :)', 'Success', {
          duration: 5000,
        });

        return true;
      },
      error => {
        // console.error("Error saving name!");
        this.snackBar.open("error.body", 'Fail', {
          duration: 5000,
        });

      }
    );
  }
  updateDialog(){
    this.dialogsService
    .edit('edit bucket')
    .subscribe(res => this.result = res);
  }

  // update bucketlist
  updateBucketlist(name, id: number) {
    id = Number(id);
    this.service.updateBucketlist(name, id)
      .subscribe(
      data => {
        this.getBucketlists();
      }
      )
  }

  openDialog(id) {
    this.dialogsService
      .confirm('Delete Bucketlist', 'Are you sure you want to do this?')
     .subscribe(res => {
         if (res === true) {
           this.deleteBucketlist(id)
       }
     }
     );
   }

  // delete bucketlist
  deleteBucketlist(id: number): void {
    id = Number(id);
    this.service.deleteBucketlist(id)
      .subscribe(
      data => {
        // refresh the bucket items
        this.getBucketlists();
        this.snackBar.open('Bucketlist Trashed! :)', 'Success', {
          duration: 5000,
        });
        return true
      },
      error => {
        console.error("error deleting bucketlist")
        this.snackBar.open("Dah!", 'Fail', {
          duration: 5000,
        });
      }
      )
  }


  open(key) {
    this.dialogRef = this.dialog.open(dialogsMap[key]);
    this.dialogRef.componentInstance.param1 = `July 3 2017 at 5 :30pm`;
    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }
}

@Component({
  selector: 'dialog1',
  template: `
    <div class="flex-container  dialog layout-column">
  <h1>Bucketlist Details : </h1>
  <p>Edited on: {{ param1 }}</p>
  <p>Created on : July 3 2017 at 4:30 pm </p>
  </div>
  <button md-raised-button color="accent" (click)="dialogRef.close()">Close dialog</button>`,
  styleUrls: ['./bucketlists.component.scss']
})
export class Dialog1 {
  param1: string;
  bucketlists: Bucketlist[] = [];
  constructor(public dialogRef: MdDialogRef<any>) { }
}

@Component({
  selector: 'dialog2',
  template: `
  <h1>Edit Bucketlist </h1>
  <div class="flex-container  dialog layout-column">
<md-input placeholder="Edit Bucketlist......"></md-input>
</div>
  <button md-raised-button  color="accent" (click)="dialogRef.close()">Done</button>`,
  styleUrls: ['./bucketlists.component.scss']
})
export class Dialog2 {
  param1: string;
  constructor(public dialogRef: MdDialogRef<any>) { }
}

const dialogs = [Dialog1, Dialog2];
const dialogsMap = {
  'dialog1': Dialog1,
  'dialog2': Dialog2
}