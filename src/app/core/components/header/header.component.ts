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
      this.userService.getCurrentUser().then(user => {
        this.user = user;
        this.changeDetectorRef.detectChanges();
      });
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
