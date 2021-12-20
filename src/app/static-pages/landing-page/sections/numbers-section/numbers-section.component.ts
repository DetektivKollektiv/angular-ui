import { Component, OnInit } from '@angular/core';

export interface Detective {
  name: string;
}

export interface Case {
  score: number;
}

export interface Data {
  detectives: Detective[];
  cases: Case[];

  ratingCount: number;
  commentCount: number;
  levelUpCount: number;
}

@Component({
  selector: 'app-numbers-section',
  templateUrl: './numbers-section.component.html',
  styleUrls: ['./numbers-section.component.scss']
})
export class NumbersSectionComponent implements OnInit {
  public data: Data;

  private characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor() {}

  ngOnInit(): void {}
}
