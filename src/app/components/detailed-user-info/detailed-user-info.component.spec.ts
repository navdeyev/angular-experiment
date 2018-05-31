import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';

import {UserInfoComponent} from 'src/app/components/user-info/user-info.component';
import {UserService} from 'src/app/domains/users/user.service';
import {UserServiceMock} from 'src/app/domains/users/user.service.mock';

import {DetailedUserInfoComponent} from './detailed-user-info.component';

describe('DetailedUserInfoComponent', () => {
  let component: DetailedUserInfoComponent;
  let fixture: ComponentFixture<DetailedUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent, DetailedUserInfoComponent],
    })
      .overrideComponent(DetailedUserInfoComponent, {
        set: {
          providers: [
            {provide: UserService, useClass: UserServiceMock},
            {provide: ActivatedRoute, useValue: {snapshot: {paramMap: {get: () => '1'}}}}
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await expect(component).toBeTruthy();
  });

});
