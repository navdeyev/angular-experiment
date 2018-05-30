import {Injectable} from '@angular/core';

import { userList } from 'src/app/domains/testMock';
import {User} from 'src/app/domains/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  public getUsers(): Array<User> {
    return userList;
  }

}
