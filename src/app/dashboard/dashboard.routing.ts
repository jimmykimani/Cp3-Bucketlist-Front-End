import { DefaultLayoutComponent } from '../navigation/layouts/default/default.layout.component';
import { RouterModule } from '@angular/router';
import { BucketlistsComponent } from './bucketlists/bucketlists.component';
import { BucketlistItemsComponent } from './bucketlist-items/bucketlist-items.component';
import { TagsComponent } from './tags/tags.component';
import { ArchiveComponent } from './archive/archive.component';
import { SettingsComponent } from './settings/settings.component';
import { DoneComponent } from './done/done.component';
import { DashboardComponent } from './dashboard.component';

export const dashboardRouting = RouterModule.forChild([
  {
    path: 'dashboard', component: DefaultLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
      { path: 'bucketlist', component: BucketlistsComponent },
      { path: 'items/:id', component: BucketlistItemsComponent },
      { path: 'tags', component: TagsComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'done', component: DoneComponent},


    ]
  }
]);
