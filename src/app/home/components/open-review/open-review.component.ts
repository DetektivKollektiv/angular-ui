import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-open-review',
  templateUrl: './open-review.component.html',
  styleUrls: ['./open-review.component.scss'],
  inputs: ['cases']
})
export class OpenReviewComponent implements OnInit {
  public cases: any[]
  constructor(
  ) {

  }

  ngOnInit(): void {
  }
}
