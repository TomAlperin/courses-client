import {Component} from '@angular/core';
import {EditModalService} from '../common/edit-modal/edit-modal.service';
import {ToastService} from '../common/toast/toast.service';

import * as _ from 'lodash';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

    edit = (item:Object) => {
        this.editModalService.changeItem(item);
        this.editModalService.open = true;
        this.editModalService.mask = true;
    }

    delete = (item:Object) => {
        console.log('delete ', item);
    }

    //column headings for table
    headings = [
        {title:'First Name', key:'first'},
        {title: 'Last Name', key:'last'},
        {title:'Email', key:'email'},
        {title:'Edit', key: this.edit, icon:'fa-pencil', color: '#8e8e1e'},
        {title:'Delete', key: this.delete, icon:'fa-minus-circle', color: '#7A1501'}
    ];

    // input fields for edit user modal
    inputs = [
        {label: 'First Name', type: 'text', key:'first'},
        {label: 'Last Name', type: 'text', key: 'last'},
        {label: 'Email', type: 'email', key: 'email'},
        {label: 'Address', type: 'text', key: 'address'},
        {label: 'Administrator', type: 'checkbox', key: 'isAdmin'}
    ]

    testData = [
        {_id:'1', first: 'John', last: 'Doe', email:'john@example.com', isAdmin: false},
        {_id:'2', first: 'Jane', last: 'Doe', email:'jane@example.com', isAdmin: true},
        {_id:'3', first: 'John', last: 'Doe', email:'john@example.com', isAdmin: true},
        {_id:'4', first: 'John', last: 'Doe', email:'john@example.com', isAdmin: true},
        {_id:'5', first: 'John', last: 'Doe', email:'john@example.com', isAdmin: true},
        {_id:'6', first: 'Tom', last: 'Alperin', email:'tom@me.com', isAdmin: true},
    ];

    scopedUsers:Object = _.sortBy(this.testData, ['last', 'first']);

    constructor(
        private editModalService: EditModalService,
        private toastService: ToastService
    ) {}

    toast() {
        this.toastService.toast({
            message:'Hello World.',
            type: 'success'
        });
    }

    getScopedUsers = (value:string) => {
        this.scopedUsers = _.sortBy(this.testData.filter(user => {
            switch (true) {
                case user.first.toLowerCase().indexOf(value.toLowerCase()) !== -1:
                    return true;
                case user.last.toLowerCase().indexOf(value.toLowerCase()) !== -1:
                    return true;
                case user.email.toLowerCase().indexOf(value.toLowerCase()) !== -1:
                    return true;
                default:
                    return false;
            }
        }), ['last', 'first']);
    }
}