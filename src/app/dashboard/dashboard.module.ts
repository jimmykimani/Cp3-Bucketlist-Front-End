import { ConfirmDialog, EditDialog } from './dialog/dialog.component';
import { BucketlistsComponent, Dialog1, Dialog2 } from './bucketlists/bucketlists.component';

import { NavigationModule } from '../navigation/navigation.module';
import { SharedModule } from '../shared/shared.module';
import { dashboardRouting } from './dashboard.routing';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdSnackBar } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BucketlistItemsComponent } from './bucketlist-items/bucketlist-items.component';

import { TagsComponent } from './tags/tags.component';
import { SettingsComponent } from './settings/settings.component';
import { ArchiveComponent } from './archive/archive.component';
import { DoneComponent } from './done/done.component';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { MdDialogModule, MdButtonModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { BucketlistService } from './bucketlists/bucketlist.service';
import { DialogsService } from './dialog/dialog.service';

@NgModule({
  imports: [
    dashboardRouting,
    NavigationModule,
    MaterialModule,
    SharedModule,
    // MaterializeModule,
    CommonModule,
    AgmCoreModule,
    FormsModule,
    MdDialogModule, MdButtonModule
  ],
  exports: [
    ConfirmDialog, EditDialog
  ],
  entryComponents: [Dialog1, Dialog2, ConfirmDialog,EditDialog],
  providers: [
    BucketlistService, MdSnackBar, DialogsService
  ],
  declarations: [BucketlistItemsComponent, DashboardComponent, BucketlistsComponent, ConfirmDialog, EditDialog,
    TagsComponent, SettingsComponent, ArchiveComponent, DoneComponent, Dialog1, Dialog2]
})
export class DashboardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DashboardModule,


    }
  }

}
