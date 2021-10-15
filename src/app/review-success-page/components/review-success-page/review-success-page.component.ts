import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from 'src/app/review-item/services/items/items.service';
import { AuthService } from 'src/app/shared/auth/auth-service/auth.service';
import { AuthState } from 'src/app/shared/auth/model/auth-state';


@Component({
  selector: 'app-review-success-page',
  templateUrl: './review-success-page.component.html',
  styleUrls: ['./review-success-page.component.scss'],
  providers: [
  ],
})
export class ReviewSuccessPageComponent implements OnInit {
  @Input() cases: any[];

  public authenticated = false;
  public authState: AuthState;

  is_open_review: boolean;
  private showSlider: boolean;

  constructor(
    private authService: AuthService,
    private itemsService: ItemsService,
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
        this.is_open_review = openCases.is_open_review;
        this.showSlider = (this.cases && this.cases.length && !this.is_open_review);
      });

  }
}
