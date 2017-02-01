import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

//bootstrap module
import {Ng2BootstrapModule}     from "ng2-bootstrap";

// Local
import { AppComponent }         from './app.component';
import { LoginComponent }       from './components/login/login.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { NavigationComponent }  from './components/navigation/navigation.component';
import { ProfileComponent }     from './components/profile/profile.component';
import { HomeComponent }        from './components/home/home.component';
import { routing }              from './app.routing';

// modules
import { CommonModule }         from './components/common/common.module'
import { UsersModule }          from './components/users/users.module';
import { CoursesModule }        from './components/courses/courses.module';

@NgModule({
  imports: [
    BrowserModule,
    Ng2BootstrapModule.forRoot(),
    routing,
    CommonModule,
    UsersModule,
    CoursesModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    HomeComponent,
    ProfileComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
