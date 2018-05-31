import {Observable, of} from 'rxjs';
import {user, userList} from 'src/app/domains/testMock';
import {User} from 'src/app/domains/types';

import {IUserService} from './user.service';

export class UserServiceMock implements IUserService {
  public getUsers(): Observable<Array<User>> {
    return of(userList);
  }

  public getUser(id: string): Observable<User> {
    return of(user);
  }
}
