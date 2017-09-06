import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdSnackBar } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavigationModule } from './navigation/navigation.module';
import { BaseService } from './shared/services/base.service';
import { ICoreOptions } from './navigation/navigation.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthenticationModule } from './authentication/authentication.module';
// import { MaterializeModule } from 'ng2-materialize';


const defaultOptions: ICoreOptions = {
  appTitle: 'PRIMER',
  openSidenavStyle: 'side',
  closedSidenavStyle: 'icon overlay'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NavigationModule.forRoot(defaultOptions),
    SharedModule.forRoot(),
    DashboardModule,
    routing,
    MaterialModule.forRoot(),
    // MaterializeModule.forRoot(),
    // FlexLayoutModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_API_KEY_HERE' // Enter your key here!
    }),
    AuthenticationModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [BaseService, MdSnackBar,],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
