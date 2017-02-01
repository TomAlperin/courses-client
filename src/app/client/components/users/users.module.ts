//core modules
import {NgModule}                     from '@angular/core';
import {BrowserModule}                from '@angular/platform-browser';
import {FormsModule}                  from '@angular/forms';
import {HttpModule}                   from '@angular/http';
import {routing}                      from '../../app.routing';

//bootstrap module
import {Ng2BootstrapModule}           from "ng2-bootstrap";

//local modules
import {CommonModule}                 from "../common/common.module";

//components
import {UsersComponent}          from './users.component';
// import {EditUserComponent}       from './edit-user/edit-user.component';
import {UserComponent}           from './user/user.component';
//services
// import {UsersService}                from "./users.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2BootstrapModule,
        CommonModule,
        routing
    ],
    declarations: [
        UsersComponent,
        // EditUserComponent,
        UserComponent
    ],
    exports: [
        UsersComponent,
        UserComponent
    ],
    providers:[
        // UsersService
    ]
})
export class UsersModule {}