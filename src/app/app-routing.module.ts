import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserListComponent} from './components/user-list/user-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UserListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {
}
