import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Injectable()
export class ConfirmService {
    private _item = new BehaviorSubject<Object>({});

    item$ = this._item.asObservable();

    setItem(item:Object) {
        this._item.next(item);
    }
}