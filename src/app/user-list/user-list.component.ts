import {Component} from '@angular/core';

import {User} from 'src/app/types';

import {userList} from 'src/app/testMock';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  protected userList: Array<User>;

  constructor() {
    this.userList = userList;
  }

}
