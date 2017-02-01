import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class Toast {
    public type?: string;
    public message: string;
    public timeout?: number;
    constructor(toast:Toast) {
        this.type = toast.type || 'danger';
        this.message = toast.message || '';
        switch (true) {
            case toast.timeout == 0:
                this.timeout = undefined;
                break;
            case toast.timeout == undefined:
                this.timeout = 5000;
                break;
            default:
                this.timeout = toast.timeout;
                break
        }
    }
}

@Injectable()
export class ToastService {
    private _toasts = new BehaviorSubject<Toast[]>([]);

    toasts$ = this._toasts.asObservable();

    toast(toast:Toast) {
        let toasts = this._toasts.getValue();
        toasts.push(new Toast(toast));
        this._toasts.next(toasts);
    }
}