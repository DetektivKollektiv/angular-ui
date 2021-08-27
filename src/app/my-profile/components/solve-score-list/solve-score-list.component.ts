import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-solve-score-list',
  templateUrl: './solve-score-list.component.html',
  styleUrls: ['./solve-score-list.component.scss'],
})
export class SolveScoreListComponent implements OnInit {
  @Input() scores: Item[];
  public fontColor = 'white';

  constructor() { }

  ngOnInit(): void {

  }
}
