import {Component, OnInit} from '@angular/core';
import {LoginComponent} from "../../detektiv-kollektiv/components/dialogs/login/login.component";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../shared/auth/auth-service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: { id: string; username: string; email: string };

  constructor(private router: Router,
              private dialog: MatDialog,
              private authService: AuthService) {
  }

  ngOnInit(): void {
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
