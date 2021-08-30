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
import { GetDetailItem, CreateComment } from '../../state/archive.actions';
import { Review } from 'src/app/review-item/model/review';
import { ReviewsService } from 'src/app/review-item/services/reviews/reviews.service';

@Component({
  selector: 'app-archive-details-page',
  templateUrl: './archive-details-page.component.html',
  styleUrls: ['./archive-details-page.component.scss'],
})
export class ArchiveDetailsPageComponent implements OnInit {
  @Select(ArchiveState.filteredItems) items$: Observable<Item[]>;
  @Select(ArchiveState.detailItem) detailItem$: Observable<any>;

  public user: any;
  public userInfo: any;

  public reviewSituation: any;
  public case: any;
  public items: any;
  public loaded: any;
  public caseId = '';
  public shortenedCaseId = '';
  public tags: any[];
  public percentageResponses: {[key: string]: number} = {};
  public commentText
  public caseCollapse: boolean = true;
  public communityCollapse: boolean = true;
  public questions: any[];
  public showQuestions: any[];
  public review: Review;

  public users: { [key:string]: {
    user: string,
    user_id: string,
    color: string,
    avatarCharacter: string
    }
  } = {};

  public detectives: {
    user: string,
    user_id: string,
    color: string,
    avatarCharacter: string
  }[] = [];

  public score: number;

  //todo: change this somehow :)
  public colors = [
    'color__rating-red',
    'color__rating-tweeter',
    'color__rating-light-green',
    'color__rating-green',
    'color__purple',
    'color__supernova',
  ];

  public answers: string[] = ['Stimme eher nicht zu', 'Stimme nicht zu', 'Stimme zu', 'Stimme eher zu', 'Kriterium nicht anwendbar'];
  // private openCases: Item[];

  constructor(
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private loader: LoaderService,
    private router: Router,
    private store: Store,
    private reviewService: ReviewsService
  ) {
    this.reviewSituation = {
      title: 'Der Tatbestand',
      text: 'asdfdsafas',
      open_timesteamp: '01.01.0001',
      //urls: {"https://eine-url.tld", "https://eine-url.tld","https://eine-url.tld","https://eine-url.tld"},
      //tags:{ "4444444444",  "4444444444", "4444444444" , "4444444444"},
    };

    this.tags = [
      'kein impressum', 'hatespeech', 'keine quellen'
    ]

  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random()*this.colors.length)];
  }

  getUser(userId, userName)
  {
    const color = this.getRandomColor();
    const name = userName.trim().toLowerCase() === "deleted" ? "Deaktiviert" : userName
    const avatarCharacter = userName === 'deleted' ? "?" : userName[0].toUpperCase()
    // if the user is already set, then use it.
    // so that the color stays consistent


    const user = ( userId && this.users[userId]) ?? {
      user: name,
      user_id: userId,
      color,
      avatarCharacter
    }

    if(userId && !this.users[userId]) {
      this.users[userId] = user;
    }

    return user;
  }

  getDetectives(reviews: any[]) {
    const users = reviews.reduce((acc:any, currentReview) => {
      const name = currentReview.user.trim().toLowerCase() === "deleted" ? "Deaktiviert" : currentReview.user
      const avatarCharacter = currentReview.user === 'deleted' ? "?" : currentReview.user[0].toUpperCase()
      // const isAUserWeHaveDataFor = false
      // const color = isAUserWeHaveDataFor ? 'use the users actual color' : this.getRandomColor();

      const user = this.getUser(currentReview.user_id, currentReview.user);

      acc[currentReview.user] = user
      return acc;
    }, {})

    // if the user has been deactivated then the .user prop will be 'deleted'
    // set the name to Deaktiviert
    // and the avatar needs to be ?
    // ignore the medals
    // ignore the subtext (level description)
    return users;
  }


  ngOnInit(): void {
    if (!this.router.url.split('/')[2]) {
      this.router.navigate(['/']);
    } else {
      this.caseId = this.router.url.split('/')[2];
      if(this.caseId){
        this.shortenedCaseId = this.caseId.split('-')[0];
      }
    }

    this.user = { xp: 100 };
    this.userService.user$.subscribe((user: any) => {
      this.userInfo = user;
    });

    function getColorClass(color) {
      if(color === 'purple') {
        return `color__purple`;
      } else if(color === 'red') {
        return `color__rating-red`;
      } else if(color === 'light-green') {
        return `color__rating-light-green`;
      }
    }

    const sampleComments = [
      {
        name: 'Jorny Gonponicamo',
        text: "this be comment",
        date: "2010-08-04",
        medal: '',
        color: getColorClass('purple')//color__purple
      },
      {
        name: 'Lawn Rediko',
        text: "another one",
        date: "2011-08-04",
        medal: '',
        color: getColorClass('red')//color__rating-red
      },
      {
        name: 'Scrawp Amadoo',
        text: "etc.etc.etc.etc.etc.etc.\nnewline etc.etc.etc.\n newline etc\n newline etc..",
        date: "2012-08-04",
        medal: '',
        color: getColorClass('light-green')//color__rating-light-green
      },
    ];

    const tempIdForDev  = "4fff2318-5b56-4cb3-b8d7-842545992e50";
    this.store.dispatch(new GetDetailItem(tempIdForDev)).subscribe(({archive}) => {
    // this.store.dispatch(new GetDetailItem(this.caseId)).subscribe(({archive}) => {
      const { detailItem } = archive;
      const aggregated : {[key: string]: number} = getAggregatedResponses(detailItem);
      const numberResponses: number = Object.values(aggregated).reduce(
        (accumulator: number, value: number) => accumulator+=value,
        0
        );
      const allkeys = Object.keys(detailItem);


      // this.aggegatedResponses = aggregated
      this.percentageResponses = getPercentages(aggregated, numberResponses);

      this.case = {
        ...detailItem,
        comments: detailItem && 'comments' in detailItem && Array.isArray(detailItem!.comments) ? detailItem!.comments : sampleComments,
        // urls: 'urls' in detailItem && Array.isArray(detailItem!.urls) ? detailItem!.urls : sampleUrls,
        // urls: sampleUrls,
        // tags: sampleTags,
      };

      this.score = Math.floor(detailItem.result_score * 25);

      this.detectives = Object.values(this.getDetectives(detailItem.reviews));
    });

    // function getRandomColor() {
    //   return this.colors[Math.floor(Math.random()*this.colors.length)];
    // }


    function getPercentages(aggregatedResponses:any, numberResponses: number)
    {
      return Object.keys(aggregatedResponses).reduce((acc:any, currentKey:string) => {
        acc[currentKey] = Math.round(aggregatedResponses[currentKey] / numberResponses * 100);
        return acc;
      }, {});
    }

    function getAggregatedResponses(detailItem:any)
    {
      const aggregated = {};

      for(let i = 0; i < detailItem.reviews.length; i++) {
        const review = detailItem.reviews[i];

        for(let j = 0; j < review.questions.length; j++) {
          const question = review.questions[j];
          const { options, answer_value, answer_id }  = question
          const theOption = options.find((opt:any) => opt.value === answer_value)
          if(!answer_value) {
            continue;
          }

          const { text } = theOption;


          if(!(text in aggregated)) {
            aggregated[text] = 1;
          } else {
            aggregated[text]++;
          }
        }
      }

      return aggregated;
    }

    this.reviewService
            .createReview(this.caseId)
            .then((review) => {
              this.review = review;
              this.questions = review.questions;
              this.showQuestions = this.questions.filter(question => !question.parent_question_id);
            });
  }

  changeCaseCollapse() {
    this.caseCollapse = !this.caseCollapse;
  }

  changeCommunityCollapse() {
    this.communityCollapse = !this.communityCollapse;
  }

  onPostComment() {
    this.store.dispatch(new CreateComment(this.caseId, this.commentText, this.userInfo.id)).subscribe(({result}) => { })
  }
}
