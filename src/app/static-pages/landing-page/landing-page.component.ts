import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  loggedIn$ = this.authService.auth$.pipe(map((authState) => authState.isLoggedIn && this.router.url !== '/landingpage'));
  constructor(private authService: AuthService, private router: Router) {
  }
}
