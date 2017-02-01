import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Injectable()
export class EditModalService {
    private _item = new BehaviorSubject<Object>({});

    item$ = this._item.asObservable();
    clone:Object;
    open:boolean = false;
    mask:boolean = false;

    changeItem(item:Object) {
        this._item.next(item);
        this.clone = _.cloneDeep(item);
    }
}