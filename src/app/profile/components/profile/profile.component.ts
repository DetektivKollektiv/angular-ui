import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { User } from '../../../core/model/user';
import { Router } from '@angular/router';
import { AuthState } from '@shared/auth/model/auth-state';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { globals } from 'src/environments/globals';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public user: User;
  public authState: AuthState;

  public hideMessageBadge: boolean;
  public hideFileBadge: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,

  ) { }

  ngOnInit(): void {
    this.userService.user$.subscribe(value => {
      if (value) {
        this.user = value;
        this.hideMessageBadge = true;
        this.hideFileBadge = true;
      }
    });
    this.authService.auth$.subscribe((authState: AuthState) => {
      this.authState = authState;
    });
  }

  ngOnDestroy(): void {
  }

  navigate(url: string) {
    this.router.navigateByUrl(url)
      .then()
      .catch();
  }

  logout(): void {
    if (!this.authState.isLoggedIn) {
      return;
    }

    this.authService.signOut()
      .then(() => this.router.navigate(['/dashboard']))
      .catch();
  }
  openSignal(): void{
    window.open(globals.signalLink,'_blank');
  }
}
