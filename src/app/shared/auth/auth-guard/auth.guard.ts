import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Auth} from 'aws-amplify';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../auth-service/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private snackBar: MatSnackBar,
              private authService: AuthService,
              private router: Router,
              private translateService: TranslateService,
              @Inject(PLATFORM_ID) private platformId) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Promise<boolean> {
    return Auth.currentAuthenticatedUser().then(
      () => {
        return true;
      }
    ).catch(() => {
      const snackBar = this.snackBar.open(
        this.translateService.instant('snack.login.message'),
        this.translateService.instant('snack.login.action'),
        {
          duration: 2000
        });

      snackBar.onAction().subscribe(() => this.authService.signIn());
      snackBar.afterDismissed().subscribe(() => this.router.navigate(['/home']));
      return false;
    });
  }
}
