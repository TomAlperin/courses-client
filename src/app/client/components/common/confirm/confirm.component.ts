import {Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
    selector: 'confirm',
    templateUrl: 'confirm.component.html',
    styleUrls: ['confirm.component.css']
})

// Required inputs HTML should look like:

// <confirm
//     #confirm
//     confirmTitle="Title For Modal"
//     confirmOk="OK Button Text"
//     confirmMessage="Message for body of modal"
//     (onConfirm)="functionOnComplete($event)" Event is the object passed to the modal using showConfirmModal
//     [color]="color" Color to use for heading and button color
// ></confirm>

export class ConfirmComponent {
    @Input() confirmTitle: string;
    @Input() confirmMessage: string;
    @Input() confirmOk: string = 'OK';
    @Output() onConfirm = new EventEmitter<Object>();
    @ViewChild('confirmModal') public confirm: any;
    item:Object = {};

    public showConfirmModal = (item:Object):void => {
        this.item = item;
        console.log(this.confirm)
        this.confirm.show();
    }
    
    public hideConfimrModal():void {
        this.confirm.hide();
    }
    
    doConfirm(): void {
        this.onConfirm.emit(this.item);
    }

}