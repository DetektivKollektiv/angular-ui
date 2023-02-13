import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@shared/auth/auth-service/auth.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent {
  loggedIn$ = this.authService.auth$.pipe(map((authState) => authState.isLoggedIn && this.router.url.startsWith('/landingpage') === false));
  hiddenCommunity: boolean;
  focusedCommunity: boolean;
  hiddenWorkshop: boolean;
  focusedWorkshop: boolean;
  hiddenAboutUs: boolean;
  focusedAboutUs: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.hiddenCommunity = false;
    this.focusedCommunity = false;
    this.hiddenWorkshop = false;
    this.focusedWorkshop = false;
    this.hiddenAboutUs = false;
    this.focusedAboutUs = false;
  }

  mouseOverCommunity() {
    this.focusedCommunity = true;
    this.hiddenWorkshop = true;
    this.hiddenAboutUs = true;
  }

  mouseOutCommunity() {
    this.focusedCommunity = false;
    this.hiddenWorkshop = false;
    this.hiddenAboutUs = false;
  }

  mouseOverWorkshop() {
    this.focusedWorkshop = true;
    this.hiddenCommunity = true;
    this.hiddenAboutUs = true;
  }

  mouseOutWorkshop() {
    this.focusedWorkshop = false;
    this.hiddenCommunity = false;
    this.hiddenAboutUs = false;
  }

  mouseOverAboutUs() {
    this.focusedAboutUs = true;
    this.hiddenCommunity = true;
    this.hiddenWorkshop = true;
  }

  mouseOutAboutUs() {
    this.focusedAboutUs = false;
    this.hiddenCommunity = false;
    this.hiddenWorkshop = false;
  }

}

