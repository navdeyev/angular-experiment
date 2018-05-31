import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {User} from 'src/app/domains/types';
import {UserService} from 'src/app/domains/users/user.service';

@Component({
  selector: 'app-detailed-user-info',
  templateUrl: './detailed-user-info.component.html',
  styleUrls: ['./detailed-user-info.component.css']
})
export class DetailedUserInfoComponent implements OnInit {

  protected user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe((user) => {
      this.user = user;
    });
  }

}
