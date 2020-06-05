import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/auth/auth-service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public username: string;
  public loggedIn: boolean;

  constructor(private router: Router,
              private authService: AuthService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn);
    this.authService.auth$.subscribe(({username}) => {
      this.username = username;
      this.changeDetectorRef.detectChanges();
    });
  }

  checkItem(): void {
    this.router.navigate(['/check']);
  }

  reviewItem(): void {
    this.router.navigate(['/review']);
  }

  listItems(): void {
    this.router.navigate(['/items']);
  }
}
