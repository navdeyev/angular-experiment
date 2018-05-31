import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Observable, of} from 'rxjs';

import {UserService} from 'src/app/domains/users/user.service';
import {UserGetter} from 'src/app/domains/users/user.service';
import {userList} from 'src/app/domains/testMock';
import {User} from 'src/app/domains/types';
import {UserInfoComponent} from 'src/app/components/user-info/user-info.component';

import {UserListComponent} from './user-list.component';

export class UserServiceMock implements UserGetter {
  public getUsers(): Observable<Array<User>> {
    return of(userList);
  }
}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent, UserListComponent],
    })
      .overrideComponent(UserListComponent, {
        set: {
          providers: [
            {provide: UserService, useClass: UserServiceMock}
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
