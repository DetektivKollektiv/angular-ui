import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// 
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Item } from 'src/app/model/item';

import { ItemsService } from '../../../review-item/services/items/items.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cases:any[];

  private openCases: any[];

  constructor(
              private itemsService: ItemsService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.itemsService
      .getOpenItems()
      .then((openCases) => {
        console.log({openCases})
        this.cases = openCases.items;

        // if (openCases.is_open_review) {
        //   this.openReview = true;

        //   this.dialog
        //     .open(OpenReviewDialogComponent)
        //     .afterClosed()
        //     .subscribe((resume) => {
        //       if (resume) {
        //         this.loader.show();

        //         this.reviewService
        //           .createReview(openCases.items[0].id)
        //           .then((review) => {
        //             this.review = review;
        //             this.caseAccepted = true;
        //           })
        //           .finally(() => this.loader.hide());
        //       }
        //     });
        })

  }

  navigate(url: string) {
    this.router.navigateByUrl(url)
      .then()
      .catch();
  }
}
