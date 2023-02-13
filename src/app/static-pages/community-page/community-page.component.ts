import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@shared/auth/auth-service/auth.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss']
})
export class CommunityPageComponent {
  loggedIn$ = this.authService.auth$.pipe(map((authState) => authState.isLoggedIn && this.router.url.startsWith('/community') === false));

  constructor(private authService: AuthService, private router: Router) {
  }
}
