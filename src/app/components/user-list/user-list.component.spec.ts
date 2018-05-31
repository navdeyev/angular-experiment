import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserService} from 'src/app/domains/users/user.service';
import {UserServiceMock} from 'src/app/domains/users/user.service.mock';
import {UserInfoComponent} from 'src/app/components/user-info/user-info.component';

import {UserListComponent} from './user-list.component';

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
