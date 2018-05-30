import {inject, TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

import {userList} from 'src/app/domains/testMock';
import {User} from 'src/app/domains/types';

import {UserService} from './user.service';

class HttpClientMock {
  public get(): Observable<Array<User>> {
    return of(userList);
  }
}

describe('UserServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: UserService, useClass: UserService},
        {provide: HttpClient, useClass: HttpClientMock},
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
