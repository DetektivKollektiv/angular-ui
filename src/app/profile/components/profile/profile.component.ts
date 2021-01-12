import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { User } from '../../../core/model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public user: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.user$.subscribe(value => {
      if (value) {
        this.user = value;
      }
    });
  }

  ngOnDestroy(): void {
  }

  navigate(url: string) {
    this.router.navigateByUrl(url)
      .then()
      .catch();
  }
}
