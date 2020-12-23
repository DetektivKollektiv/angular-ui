import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-high-score-sidebar',
  templateUrl: './high-score-sidebar.component.html',
  styleUrls: ['./high-score-sidebar.component.scss']
})
export class HighScoreSidebarComponent implements OnInit {
  public expanded: boolean;
  public index: number;

  constructor() {
  }

  ngOnInit(): void {
    this.expanded = false;
  }

  expand() {
    if (!this.expanded) {
      this.expanded = true;
    }
  }

  collapse() {
    if (this.expanded) {
      this.expanded = false;
    }
  }
}
