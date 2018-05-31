import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from 'src/app/domains/types';

export interface IUserService {
  getUsers(): Observable<Array<User>>;

  getUser(id: string): Observable<User>;
}

const BASE_USERS_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(BASE_USERS_URL);
  }

  public getUser(id: string): Observable<User> {
    return this.http.get<User>(`${BASE_USERS_URL}/${id}`);
  }

}
