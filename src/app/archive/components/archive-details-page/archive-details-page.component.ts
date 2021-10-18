/* eslint-disable max-len */
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { UserService } from '../../../core/services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { ArchiveState } from '../../state/archive.state';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { AuthState } from '../../../shared/auth/model/auth-state';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { GetDetailItem, CreateComment } from '../../state/archive.actions';
import { Review } from 'src/app/review-item/model/review';
import { BreadcrumbLink } from 'src/app/shared/breadcrumb/model/breadcrumb-link.interface';

@Component({
  selector: 'app-archive-details-page',
  templateUrl: './archive-details-page.component.html',
  styleUrls: ['./archive-details-page.component.scss']
})
export class ArchiveDetailsPageComponent implements OnInit {
  @Select(ArchiveState.filteredItems) items$: Observable<Item[]>;
  @Select(ArchiveState.detailItem) detailItem$: Observable<any>;

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Gelöste Fälle', link: '/archive' }];
  archiveQuestions: any[] = [];

  public authState: AuthState;
  public authenticated = false;
  public user: any;
  public reviewSituation: any;
  public case: any;
  public items: any;
  public loaded: any;
  public caseId = '';
  public shortenedCaseId = '';
  public tags: any[];

  public percentageResponses: { [key: string]: number } = {};

  public commentText;
  public caseCollapse = true;
  public communityCollapse = true;
  public questions: any[];
  public showQuestions: any[];
  public review: Review;

  public reviewQuestions: any[] = [];

  public users: {
    [key: string]: {
      user: string;
      color: string;
      avatarCharacter: string;
    };
  } = {};

  public detectives: {
    user: string;
    color: string;
    avatarCharacter: string;
  }[] = [];

  public score: number;

  //todo: change this somehow :)
  public colors = [
    'color__rating-red',
    'color__rating-tweeter',
    'color__rating-light-green',
    'color__rating-green',
    'color__purple',
    'color__supernova'
  ];

  public answers: string[] = ['Stimme eher nicht zu', 'Stimme nicht zu', 'Stimme zu', 'Stimme eher zu', 'Kriterium nicht anwendbar'];
  // private openCases: Item[];

  constructor(
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private loader: LoaderService,
    private router: Router,
    private store: Store,

    private authService: AuthService
  ) {
    this.reviewSituation = {
      title: 'Der Tatbestand',
      text: 'asdfdsafas',
      open_timesteamp: '01.01.0001'
      //urls: {"https://eine-url.tld", "https://eine-url.tld","https://eine-url.tld","https://eine-url.tld"},
      //tags:{ "4444444444",  "4444444444", "4444444444" , "4444444444"},
    };

    this.tags = ['kein impressum', 'hatespeech', 'keine quellen'];
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  getUserColor() {
    // todo: use localStorage to retrieve color as set by profile-picture.component.split
    // however, that file needs to be adapted to the correct color scheme.
    return this.colors[0];
  }

  getUser(userName) {
    const color = userName === this.user?.name ? this.getUserColor() : this.getRandomColor();
    const name = userName.trim().toLowerCase() === 'deleted' ? 'Deaktiviert' : userName;
    const avatarCharacter = userName === 'deleted' ? '?' : userName[0].toUpperCase();
    // if the user is already set, then use it.
    // so that the color stays consistent

    const user = (userName && this.users[userName]) ?? {
      user: name,
      color,
      avatarCharacter
    };

    if (userName && !this.users[userName]) {
      this.users[userName] = user;
    }

    return user;
  }

  getDetectives(reviews: any[]) {
    const users = reviews.reduce((acc: any, currentReview) => {
      const name = currentReview.user.trim().toLowerCase() === 'deleted' ? 'Deaktiviert' : currentReview.user;
      const avatarCharacter = currentReview.user === 'deleted' ? '?' : currentReview.user[0].toUpperCase();
      // const isAUserWeHaveDataFor = false
      // const color = isAUserWeHaveDataFor ? 'use the users actual color' : this.getRandomColor();

      const user = this.getUser(currentReview.user);

      acc[currentReview.user] = user;
      return acc;
    }, {});

    // if the user has been deactivated then the .user prop will be 'deleted'
    // set the name to Deaktiviert
    // and the avatar needs to be ?
    // ignore the medals
    // ignore the subtext (level description)
    return users;
  }

  getQuestions(reviews) {
    const questionsMap = {};

    for (const review of this.case.reviews) {
      for (const question of review.questions) {
        if (!(Object.keys(questionsMap).indexOf(question.question_id) > -1)) {
          questionsMap[question.question_id] = question;
        }
      }
    }

    return Object.values(questionsMap);
  }

  ngOnInit(): void {
    this.authService.auth$.subscribe((authState: AuthState) => {
      this.authState = authState;
      this.authenticated = !!authState.isLoggedIn;
    });
    if (!this.router.url.split('/')[2]) {
      this.router.navigate(['/']);
    } else {
      this.caseId = this.router.url.split('/')[2];
      if (this.caseId) {
        this.shortenedCaseId = this.caseId.split('-')[0];
      }
    }

    this.userService.user$.subscribe((user: any) => {
      this.user = user;
    });

    const getColorClass = (color) => {
      if (color === 'purple') {
        return `color__purple`;
      } else if (color === 'red') {
        return `color__rating-red`;
      } else if (color === 'light-green') {
        return `color__rating-light-green`;
      }
    };

    const sampleComments = [
      {
        user: 'Jorny Gonponicamo',
        comment: 'this be comment',
        timestamp: '2010-08-04',
        medal: '',
        is_review_comment: 'False',
        color: getColorClass('purple') //color__purple
      },
      {
        user: 'Lawn Rediko',
        comment: 'another one',
        timestamp: '2011-08-04',
        medal: '',
        is_review_comment: 'False',
        color: getColorClass('red') //color__rating-red
      },
      {
        user: 'Scrawp Amadoo',
        comment: 'this is a review comment .\nnewline etc.etc.etc.\n newline etc\n newline etc..',
        timestamp: '2012-08-04',
        medal: '',
        is_review_comment: 'True',
        color: getColorClass('light-green') //color__rating-light-green
      }
    ];

    // const tempIdForDev  = "4fff2318-5b56-4cb3-b8d7-842545992e50";
    // this.store.dispatch(new GetDetailItem(tempIdForDev)).subscribe(({archive}) => {
    this.store.dispatch(new GetDetailItem(this.caseId)).subscribe(({ archive }) => {
      const { detailItem } = archive;
      const aggregated: { [key: string]: number } = getAggregatedResponses(detailItem);
      const numberResponses: number = Object.values(aggregated).reduce((accumulator: number, value: number) => (accumulator += value), 0);
      const allkeys = Object.keys(detailItem);

      // this.aggegatedResponses = aggregated
      this.percentageResponses = getPercentages(aggregated, numberResponses);
      const comments =
        detailItem && 'comments' in detailItem && Array.isArray(detailItem?.comments) ? detailItem?.comments : sampleComments;

      const commentsWithUsers = comments.map((comment: any) => {
        const user = this.getUser(comment.user);

        return {
          ...comment,
          color: user.color,
          avatarCharacter: user.avatarCharacter
        };
      });
      const reviewComments = commentsWithUsers.filter((comment: any) => comment.is_review_comment === 'True');
      const nonReviewComments = commentsWithUsers.filter((comment: any) => comment.is_review_comment !== 'True');

      this.case = {
        ...detailItem,
        comments: nonReviewComments,
        reviewComments
        // urls: 'urls' in detailItem && Array.isArray(detailItem!.urls) ? detailItem!.urls : sampleUrls,
        // urls: sampleUrls,
        // tags: sampleTags,
      };

      this.questions = this.case.reviews[0].questions;
      this.showQuestions = this.questions.filter((question) => !question.parent_question_id);

      this.reviewQuestions = this.getQuestions(this.case.reviews);

      this.score = Math.floor(detailItem.result_score * 25);

      this.detectives = Object.values(this.getDetectives(detailItem.reviews));
    });

    const getPercentages = (aggregatedResponses: any, numberResponses: number) =>
      Object.keys(aggregatedResponses).reduce((acc: any, currentKey: string) => {
        acc[currentKey] = Math.round((aggregatedResponses[currentKey] / numberResponses) * 100);
        return acc;
      }, {});

    const getAggregatedResponses = (detailItem: any) => {
      const aggregated = {};
      for (const review of detailItem.reviews) {
        for (const question of review.questions) {
          const { options, answer_value, answer_id } = question;

          if (!answer_value) {
            continue;
          }

          const theOption = options.find((opt: any) => opt.value === answer_value);

          const { text } = theOption;

          if (!(text in aggregated)) {
            aggregated[text] = 1;
          } else {
            aggregated[text]++;
          }
        }
      }

      return aggregated;
    };
  }

  changeCaseCollapse() {
    this.caseCollapse = !this.caseCollapse;
  }

  changeCommunityCollapse() {
    this.communityCollapse = !this.communityCollapse;
  }

  onPostComment(text) {
    this.store.dispatch(new CreateComment(this.caseId, text, this.user.id)).subscribe(({ result }) => {});
  }
}
