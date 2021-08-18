import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-archive-list-item',
  templateUrl: './archive-list-item.component.html',
  styleUrls: ['./archive-list-item.component.scss'],
})
export class ArchiveListItemComponent implements OnInit {
  @Input() archive: any;
  public color: string;
  public result_score: number;
  constructor() { }

  ngOnInit(): void {
    this.result_score = Math.ceil(this.archive.result_score * 25);

    if (this.result_score <= 33) {
      this.color = 'red';
    }
    if (this.result_score > 33 && this.result_score <= 66) {
      this.color = 'orange';
    }
    if (this.result_score > 66 && this.result_score <= 83) {
      this.color = 'light-green';
    }
    if (this.result_score > 84 && this.result_score <= 100) {
      this.color = 'green';
    }
  }

}
