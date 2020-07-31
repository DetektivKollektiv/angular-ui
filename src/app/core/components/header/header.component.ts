import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';
import {AuthState} from '../../../shared/auth/model/auth-state';
import {AuthService} from '../../../shared/auth/auth-service/auth.service';
import {UserService} from '../../services/user/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public authState: AuthState;
  public user: User;
  public userLoaded = true;

  constructor(private router: Router,
              private dialog: MatDialog,
              private authService: AuthService,
              private userService: UserService,
              private translateService: TranslateService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.authService.auth$.subscribe((authState: AuthState) => {
      this.authState = authState;

      if (this.authState.isLoggedIn) {
        this.changeDetectorRef.detectChanges();
      }
    });

    this.userService.user$.subscribe((user: User) => {
      if (user.name !== undefined) {
        this.userLoaded = true;
      } else {
        this.userLoaded = false;
      }

      this.user = user;
      this.changeDetectorRef.detectChanges();
    });
  }

  public setLanguage(language: string) {
    this.translateService.use(language);
  }

  logout() {
    this.authService.signOut().then(() => this.router.navigate(['/dashboard']));
  }

  login() {
    if (!this.authState.isLoggedIn) {
      this.authService.signIn();
    }
  }
}
