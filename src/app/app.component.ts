import {Component, OnInit} from '@angular/core';
import {AuthService} from './shared/auth/auth-service/auth.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from './detektiv-kollektiv/components/dialogs/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'detektiv-kollektiv';
  user: { id: string; username: string; email: string };

  constructor(private authService: AuthService,
              private router: Router,
              private dialog: MatDialog) {
    this.authService.auth$.subscribe(({id, username, email}) => {
      this.user = {id, username, email};
    });
  }

  logout() {
    this.authService.signOut().then(() => this.router.navigate(['/dashboard']));
  }

  login() {
    this.dialog.open(LoginComponent);
  }
}
