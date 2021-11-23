import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { AuthState } from '@shared/auth/model/auth-state';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public authState: AuthState;
  public authenticated = false;

  constructor(
    private authService: AuthService

  ) { }

  ngOnInit(): void {
    this.authService.auth$.subscribe((authState: AuthState) => {
      this.authState = authState;
      this.authenticated = !!authState.isLoggedIn;
    });
  }

}
