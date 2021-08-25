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
import { GetDetailItem } from '../../state/archive.actions';
import { AuthState } from '../../../shared/auth/model/auth-state';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';

@Component({
  selector: 'app-archive-details-page',
  templateUrl: './archive-details-page.component.html',
  styleUrls: ['./archive-details-page.component.scss'],
})
export class ArchiveDetailsPageComponent implements OnInit {
  @Select(ArchiveState.filteredItems) items$: Observable<Item[]>;
  @Select(ArchiveState.detailItem) detailItem$: Observable<any>;

  public authState: AuthState;
  public authenticated = false;
  public user: any;
  public userInfo: any;

  public reviewSituation: any;
  public case: any;
  public items: any;
  public loaded: any;
  public caseId = '';
  public shortenedCaseId = '';
  public tags: any[];
  // private openCases: Item[];

  constructor(
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private loader: LoaderService,
    private router: Router,
    private store: Store,
    private authService: AuthService,
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


  ngOnInit(): void {
    this.authService.auth$.subscribe((authState: AuthState) => {
      this.authState = authState;
      this.authenticated = !!authState.isLoggedIn;
    });
    if (!this.router.url.split('/')[2]) {
      this.router.navigate(['/']);
    } else {
      this.caseId = this.router.url.split('/')[2];
      if(this.caseId){
        this.shortenedCaseId = this.caseId.split('-')[0];
      }
    }



    // this.openReview = false;
    // this.caseAccepted = false;
    // this.finished = false;
    // // this.getNewCase();

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
    /*

      todo...

      We need to fetch the data for this case.
      from archive_service/items/<item_id>

      see archive.service.ts

      we need to add nx actions and stuff to make it work.
      new GetDetailItem. doesn't exist yet.

    */
    this.store.dispatch(new GetDetailItem(this.caseId)).subscribe((detailItem) => {
      console.log('Wahoo!!!', detailItem);
    });


    this.items$.subscribe((items) => {
      // Safari timestamp fix
      // TODO: Remove when format is adapted in API
      // const itemsSafariSafe = [];
      // items.forEach(val => itemsSafariSafe.push(Object.assign({}, val)));
      // itemsSafariSafe.forEach((item) => {
      //   item.open_timestamp = item.open_timestamp.replace(/\s/g, 'T');
      //   item.close_timestamp = item.close_timestamp.replace(/\s/g, 'T');
      // });

      this.items = items;
      /*
        TODO Find the case with the correct id or redirect.

      */





      const firstCase = items[0];
      this.case = {
        ...firstCase,
        comments: firstCase && 'comments' in firstCase && Array.isArray(firstCase!.comments) ? firstCase!.comments : sampleComments,
        // urls: 'urls' in firstCase && Array.isArray(firstCase!.urls) ? firstCase!.urls : sampleUrls,
          // urls: sampleUrls,
          // tags: sampleTags,
      };

      console.log({zzz: firstCase});


      this.loaded = true;
    });
  }
}
