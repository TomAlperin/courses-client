import {Component, OnInit} from "@angular/core";
import {ToastService, Toast}   from './toast.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'toast',
    templateUrl: 'toast.component.html',
    styleUrls: ['toast.component.css']
})

export class ToastComponent implements OnInit {
    toasts:Toast[];
    subscription:Subscription;

    constructor(private toastService: ToastService) {}

    ngOnInit() {
        this.subscription = this.toastService.toasts$
            .subscribe(toasts => this.toasts = toasts);
    }

    closeAlert(i:number):void {
        this.toasts.splice(i, 1);
    }

    toastIcon(type:string) {
        switch (true) {
            case type == 'danger':
                return 'fa fa-fw fa-exclamation';
            case type == 'warning':
                return 'fa fa-fw fa-exclamation-triangle';
            case type == 'success':
                return 'fa fa-fw fa-check-circle';
            default:
                return '';
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}