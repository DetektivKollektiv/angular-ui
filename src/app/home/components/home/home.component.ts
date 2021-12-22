import { Component } from '@angular/core';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  authenticated$ = this.authService.auth$.pipe(map((authState) => authState.isLoggedIn));

  constructor(private authService: AuthService) {}
}
