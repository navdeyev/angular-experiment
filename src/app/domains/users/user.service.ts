import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from 'src/app/domains/types';

export interface UserGetter {
  getUsers(): Observable<Array<User>>;
}

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserGetter {

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('https://jsonplaceholder.typicode.com/users');
  }

}
