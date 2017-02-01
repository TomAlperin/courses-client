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
import {CoursesComponent}             from './courses.component';
import { CourseEditComponent }    from './course-edit/course-edit.component';

//services
// import {CoursesService}                from "./courses.service";

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
        CoursesComponent,
        CourseEditComponent
    ],
    exports: [
        CoursesComponent,
        CourseEditComponent
    ],
    providers:[
        // CoursesService
    ]
})
export class CoursesModule {}