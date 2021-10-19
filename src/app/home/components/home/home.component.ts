import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

//
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Item } from 'src/app/model/item';

import { ItemsService } from '../../../review-item/services/items/items.service';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { AuthState } from '../../../shared/auth/model/auth-state';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cases: any[];
  isOpenReview: boolean;

  public authState: AuthState;
  public authenticated = false;
  private openCases: any[];
  private showSlider: boolean;

  constructor(
    private authService: AuthService,
    private itemsService: ItemsService,
    private router: Router
  ) {
    this.showSlider = false;
  }

  ngOnInit(): void {
    this.authService.auth$.subscribe((authState: AuthState) => {
      this.authState = authState;
      this.authenticated = this.authState.isLoggedIn;
    });

    if (!this.authState.isLoggedIn) {
      return;
    }


    this.itemsService
      .getOpenItems()
      .then((openCases) => {
        this.cases = openCases.items;
        this.isOpenReview = openCases.is_open_review;
        this.showSlider = (this.cases && this.cases.length && !this.isOpenReview);
      });

  }

  navigate(url: string) {
    this.router.navigateByUrl(url)
      .then()
      .catch();
  }
}
