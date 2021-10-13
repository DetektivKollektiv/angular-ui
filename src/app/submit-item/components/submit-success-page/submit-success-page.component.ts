import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ItemsService } from 'src/app/review-item/services/items/items.service';
import { AuthService } from 'src/app/shared/auth/auth-service/auth.service';
import { AuthState } from 'src/app/shared/auth/model/auth-state';
import { ArchiveService } from '../../../archive/services/archive.service';
import { Item } from '../../../model/item';
import { QuestionPrompt } from '../../model/question-prompt.interface';

@Component({
  selector: 'app-submit-success-page',
  templateUrl: './submit-success-page.component.html',
  styleUrls: ['./submit-success-page.component.scss'],
  providers: []
})
export class SubmitSuccessPageComponent implements OnInit {
  mockItem: Item = {
    id: 'cc92e969-5c5f-42bc-8d3d-ec3ea3a3bdd8',
    item_type_id: '1',
    content: 'afsdsfeee',
    language: null,
    status: 'unconfirmed',
    variance: null,
    result_score: null,
    // open_reviews_level_1: 4,
    // open_reviews_level_2: 4,
    open_reviews: 4,
    // in_progress_reviews_level_1: 0,
    // in_progress_reviews_level_2: 0,
    open_timestamp: '2021-10-13 09:31:56',
    close_timestamp: null
  } as Item;

  item: Item;

  closedItems$ = this.archiveService.getClosedItems();
  closedItemCount = 10;

  loginFormData = {
    email: null,
    password: null
  };

  questionPrompts: QuestionPrompt[] = [
    {
      title: 'Kann ich den Fall abgeben?',
      description: 'Ja, das geht. Hier erfährst du wie.',
      background: 'color__purple',
      icon: 'fal fa-archive'
    }
  ];

  authenticated = false;
  authState: AuthState;
  cases: any[];
  is_open_review: boolean;
  withEmail: boolean;

  constructor(
    private authService: AuthService,
    private itemsService: ItemsService,
    private archiveService: ArchiveService,
    private router: Router
  ) {
    const state = this.router.getCurrentNavigation().extras?.state;
    if (state) {
      const { item, withEmail } = state;
      this.item = item;
      this.withEmail = withEmail;
    } else {
      this.item = this.mockItem;
    }
  }

  ngOnInit(): void {
    this.authService.auth$.subscribe((authState: AuthState) => {
      this.authState = authState;
      this.authenticated = this.authState.isLoggedIn;

      if (this.authState.isLoggedIn) {
        this.loadOpenItems();
      }
    });
  }

  loadOpenItems(): void {
    this.itemsService.getOpenItems().then((openCases) => {
      this.cases = openCases.items;
      this.is_open_review = openCases.is_open_review;
    });
  }
}
