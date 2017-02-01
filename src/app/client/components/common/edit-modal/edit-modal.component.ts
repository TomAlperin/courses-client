import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import {EditModalService}   from './edit-modal.service';
import {Subscription} from 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'edit-modal',
  templateUrl: './edit-modal.component.html',
    styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
    subscription:Subscription;
    open_subscription:Subscription;
    record:Object;
    @Input() model:string;
    @Input() inputs:Object[];

    constructor(private editModalService: EditModalService) {}

    ngOnInit() {
        this.subscription = this.editModalService.item$
            .subscribe(item => this.record = item);
    }

    hideEditModal():void {
      this.editModalService.open = false;
      setTimeout(() => {
        this.editModalService.changeItem({});
        this.editModalService.mask = false;
      }, 500);
    }

    cancel(): void {
      Object.assign(this.record, this.editModalService.clone);
    }

    ngOnDestroy() {
        this.editModalService.open = false;
        this.editModalService.mask = false;
        this.editModalService.changeItem({});
        this.subscription.unsubscribe();
    }
}