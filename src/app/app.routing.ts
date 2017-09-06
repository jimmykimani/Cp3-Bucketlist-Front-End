import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
  {
    path : 'auth', loadChildren : './authentication/authentication.module#AuthenticationModule'
  },
  {path : '', redirectTo : '/dashboard/home', pathMatch: 'full'},
  
  {path : '**', redirectTo : '/dashboard/home'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
