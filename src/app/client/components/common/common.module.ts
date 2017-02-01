//core modules
import {NgModule}                     from '@angular/core';
import {BrowserModule}                from '@angular/platform-browser';
import {FormsModule}                  from '@angular/forms';
import {HttpModule}                   from '@angular/http';
import {routing}                      from '../../app.routing';

//bootstrap module
import {Ng2BootstrapModule}           from "ng2-bootstrap";

//components
import {PageTitleComponent}           from './page-title/page-title.component';
import {DataTableComponent}           from './table/data-table.component';
import {EditModalComponent}           from './edit-modal/edit-modal.component';
import {ToastComponent}               from './toast/toast.component';
import {ConfirmComponent}             from './confirm/confirm.component';

//services
import {EditModalService}             from './edit-modal/edit-modal.service';
import {ConfirmService}               from './confirm/confirm.service';
import {ToastService}                 from './toast/toast.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2BootstrapModule,
        routing
    ],
    declarations: [
        DataTableComponent,
        PageTitleComponent,
        EditModalComponent,
        ToastComponent,
        ConfirmComponent
    ],
    exports: [
        DataTableComponent,
        PageTitleComponent,
        EditModalComponent,
        ToastComponent,
        ConfirmComponent
    ],
    providers:[
        EditModalService,
        ConfirmService,
        ToastService
    ]
})
export class CommonModule {}