import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../../shared/auth/auth-service/auth.service';
import {TranslateService} from '@ngx-translate/core';
import {AuthState} from '../../shared/auth/model/auth-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: AuthState;

  constructor(private router: Router,
              private dialog: MatDialog,
              private authService: AuthService,
              private translateService: TranslateService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
      this.authService.auth$.subscribe((authState: AuthState) => {
      this.user = authState;
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
    if (!this.user.isLoggedIn) {
      this.authService.signIn();
    } else {
      this.router.navigate(['/profile']);
    }
  }
}
