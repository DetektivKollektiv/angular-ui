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

@Component({
  selector: 'app-archive-details-page',
  templateUrl: './archive-details-page.component.html',
  styleUrls: ['./archive-details-page.component.scss'],
})
export class ArchiveDetailsPageComponent implements OnInit {
  @Select(ArchiveState.filteredItems) items$: Observable<Item[]>;

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
      this.case = items[0]

      console.log({zzz: this.case})
      this.loaded = true;
    });
  }
}
