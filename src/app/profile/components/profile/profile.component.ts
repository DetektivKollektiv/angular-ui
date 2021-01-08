import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { User } from '../../../core/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public user: User;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.user$.subscribe(value => {
      if (value) {
        this.user = value;
        // this.user.progress = 20;
      }
    });
  }

  ngOnDestroy(): void {
  }

}
