import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {User} from 'src/app/types';
import {user as userMock} from 'src/app/testMock';

import {UserInfoComponent} from './user-info.component';

@Component({
  selector: 'app-host-component',
  template: '<app-user-info [user]="user"></app-user-info>'
})
class TestHostComponent {
  protected user: User = userMock;
}

describe('UserInfoComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('testHost', testHost);
    expect(testHost).toBeTruthy();
  });

});
