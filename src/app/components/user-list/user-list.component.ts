import {Component, OnInit} from '@angular/core';

import {User} from 'src/app/domains/types';
import {UserService} from 'src/app/domains/users/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  protected userList: Array<User>;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userList = this.userService.getUsers();
  }

}
