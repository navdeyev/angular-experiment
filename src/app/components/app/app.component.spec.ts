import {async, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import {AppRoutingModule} from 'src/app/app-routing.module';
import {UserInfoComponent} from 'src/app/components/user-info/user-info.component';
import {UserListComponent} from 'src/app/components/user-list/user-list.component';
import {DetailedUserInfoComponent} from 'src/app/components/detailed-user-info/detailed-user-info.component';
import {AddressInfoComponent} from 'src/app/components/address-info/address-info.component';

import {AppComponent} from './app.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AddressInfoComponent,
        UserInfoComponent,
        UserListComponent,
        DetailedUserInfoComponent
      ],
      imports: [
        HttpClientModule,
        AppRoutingModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-experiment');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-experiment!');
  }));

});
