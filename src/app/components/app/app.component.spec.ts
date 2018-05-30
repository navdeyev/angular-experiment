import {async, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import {UserInfoComponent} from 'src/app/components/user-info/user-info.component';
import {UserListComponent} from 'src/app/components/user-list/user-list.component';

import {AppComponent} from './app.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserInfoComponent,
        UserListComponent
      ],
      imports: [
        HttpClientModule
      ],
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
