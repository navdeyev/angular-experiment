import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './components/app/app.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {UserListComponent} from './components/user-list/user-list.component';
import { DetailedUserInfoComponent } from './components/detailed-user-info/detailed-user-info.component';
import { AppRoutingModule } from './app-routing.module';
import { AddressInfoComponent } from './components/address-info/address-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserListComponent,
    DetailedUserInfoComponent,
    AddressInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
