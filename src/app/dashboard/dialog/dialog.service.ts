import { ConfirmDialog, EditDialog } from './dialog.component';

import { Observable } from 'rxjs/Rx';

import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MdDialogRef<ConfirmDialog>;

        dialogRef = this.dialog.open(ConfirmDialog);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }

    public edit(title: string): Observable<any> {
        let dialogRef: MdDialogRef<EditDialog>;
        dialogRef = this.dialog.open(EditDialog);
        dialogRef.componentInstance.title = title;

        return dialogRef.afterClosed();

    }
    
}