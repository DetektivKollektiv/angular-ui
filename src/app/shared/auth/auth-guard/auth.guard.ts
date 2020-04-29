import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';
import {Auth} from 'aws-amplify';
import {MatDialog} from '@angular/material/dialog';
import {NotLoggedInDialogComponent} from '../../../detektiv-kollektiv/components/dialogs/not-logged-in-dialog/not-logged-in-dialog.component';
import {LoginComponent} from '../../../detektiv-kollektiv/components/dialogs/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private dialog: MatDialog,
              @Inject(PLATFORM_ID) private platformId) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (isPlatformBrowser(this.platformId)) {
      return Auth.currentAuthenticatedUser()
        .then(() => {
          return true;
        })
        .catch(
          () => {
            this.dialog.open(LoginComponent).afterClosed().subscribe(value => {
              return value;
            });
            return false;
          });
    } else {
      return true;
    }
  }
}
