import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AuthState } from '../../../shared/auth/model/auth-state';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { UserService } from '../../services/user/user.service';
import { User } from '../../model/user';
import { DeleteUserDialogComponent } from '../../dialogs/delete-user-dialog/delete-user-dialog.component';
import { LoginComponent } from '../../../shared/auth/dialogs/login/login.component';
import { MenuDialogComponent } from '../../dialogs/menu-dialog/menu.component';
import { SignupComponent } from '../../../shared/auth/dialogs/signup/signup.component';
import { ConfirmComponent } from '../../../shared/auth/dialogs/confirm/confirm.component';
import { LoginResult } from '../../../shared/auth/model/login-result';
import { LoginResultReason } from '../../../shared/auth/model/LoginResultReason';
import { SignupResult } from '../../../shared/auth/model/signup-result';
import { Globals } from '../../../shared/helper/globals/globals';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public authState: AuthState;
  public user: User;
  public authenticated = false;
  public userLoaded = true;


  constructor(
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
    private userService: UserService,
    private translateService: TranslateService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.auth$.subscribe((authState: AuthState) => {
      console.log('ayy');
      this.authState = authState;
      this.authenticated = !!authState.isLoggedIn;

      console.log({authenticated: this.authenticated, condition: !this.authenticated});
    });

    this.userService.user$.subscribe((user: User) => {
      console.log('yoo');
      if (user) {
        this.userLoaded = true;
        this.authenticated = !!this.authState.isLoggedIn;
      } else {
        this.userLoaded = false;
      }

      this.user = user;
    });
    console.log(`header!`,{user: this.user, userLoaded: this.userLoaded});
  }

  public setLanguage(language: string) {
    this.translateService.use(language);
  }

  logout(): void {
    if (!this.authState.isLoggedIn) {
      return;
    }

    this.authService
      .signOut()
      .then(() => this.router.navigate(['/dashboard']))
      .catch();
  }

  login(): void {
    if (this.authState.isLoggedIn) {
      return;
    }

    this.dialog
      .open(LoginComponent, Globals.dialogData)
      .afterClosed()
      .subscribe((result: LoginResult) => {
        if (result.success) {
          return;
        }

        switch (result.reason) {
          case LoginResultReason.LoginSuccessful:
            break;
          case LoginResultReason.ConfirmationMissing:
            this.dialog.open(ConfirmComponent, {
              ...Globals.dialogData,
              ...{ data: { username: result.username } },
            });
            break;
          case LoginResultReason.Cancelled:
            break;
          default:
            break;
        }
      });
  }

  signUp(): void {
    if (this.authState.isLoggedIn) {
      return;
    }

    this.dialog
      .open(SignupComponent, Globals.dialogData)
      .afterClosed()
      .subscribe((result: SignupResult) => {
        if (result.success) {
          this.snackBar
            .open(
              'Dein Account wurde erfolgreich erstellt, du kannst dich nun einloggen.',
              'Einloggen',
              {
                verticalPosition: 'top',
                duration: 3000,
              }
            )
            .onAction()
            .subscribe(() => {
              this.login();
            });
        }
      });
  }

  openMenuDialog(): void {
    this.dialog
      .open(MenuDialogComponent, { panelClass: 'no-padding-dialog-container' });
  }
}
