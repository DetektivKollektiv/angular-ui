import { Component } from '@angular/core';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  loggedIn$ = this.authService.auth$.pipe(map((authState) => authState.isLoggedIn));

  constructor(private authService: AuthService) {}
}
