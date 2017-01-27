import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

//bootstrap module
import {Ng2BootstrapModule}   from "ng2-bootstrap";

// Local
import { AppComponent }       from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent }   from './components/profile/profile.component';
import { HomeComponent }      from './components/home/home.component';
import { routing }            from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    Ng2BootstrapModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
