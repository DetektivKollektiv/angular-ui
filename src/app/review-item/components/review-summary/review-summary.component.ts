import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../model/review';

@Component({
  selector: 'app-review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.scss'],
})
export class ReviewSummaryComponent implements OnInit {
  @Input() public review: Review;

  constructor() {}

  ngOnInit(): void {}
}
