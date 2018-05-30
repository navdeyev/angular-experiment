import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './components/app/app.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {UserListComponent} from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
