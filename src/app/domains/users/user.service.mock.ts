import {Observable, of} from 'rxjs';
import {userList} from 'src/app/domains/testMock';
import {User} from 'src/app/domains/types';
import {UserGetter} from './user.service';

export class UserServiceMock implements UserGetter {
  public getUsers(): Observable<Array<User>> {
    return of(userList);
  }
}
