import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss'],
})
export class ScoreListComponent implements OnInit {
  @Input() scores: Item[];

  public page = 1;
  public pageSize = 4;
  public count = 0;


  constructor() { }

  ngOnInit(): void {
    this.count = this.scores.length;
  }

  handlePageChange(event: number) {
    this.page = event;
  }

}
