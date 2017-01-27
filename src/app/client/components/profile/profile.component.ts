import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

    users: User[];
    selectedUser: User;

    constructor(private userService: UserService) { }

    getUsers(): void {
      this.userService.getUsers().then(users => {
        this.users = users;
        this.selectedUser = users[0];
      });
    }

    ngOnInit(): void {
      this.selectedUser = {
        id: 0,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: ''
      };

      this.getUsers();
    }

    onSelect(user: User): void {
      this.selectedUser = user;
    }
}
