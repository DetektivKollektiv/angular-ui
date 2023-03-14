import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-workshop-page',
  templateUrl: './workshop-page.component.html',
  styleUrls: ['./workshop-page.component.scss']
})
export class WorkshopPageComponent {
  loggedIn$ = this.authService.auth$.pipe(map((authState) => authState.isLoggedIn && this.router.url.startsWith('/workshop') === false));
  constructor(private authService: AuthService, private router: Router) {}
}
