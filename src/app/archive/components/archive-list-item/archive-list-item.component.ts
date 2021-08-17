import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-archive-list-item',
  templateUrl: './archive-list-item.component.html',
  styleUrls: ['./archive-list-item.component.scss'],
})
export class ArchiveListItemComponent implements OnInit {
  @Input() archive: any;
  public color: string;
  constructor() { }

  ngOnInit(): void {
    const score = this.archive.result_score
    if (score <= 33) {
      this.color = 'red';
    }
    if (score > 33 && score <= 66) {
      this.color = 'orange';
    }
    if (score > 66 && score <= 83) {
      this.color = 'light-green';
    }
    if (score > 84 && score <= 100) {
      this.color = 'green';
    }
  }

}
