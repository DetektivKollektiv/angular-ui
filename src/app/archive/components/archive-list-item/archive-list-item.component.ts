import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-archive-list-item',
  templateUrl: './archive-list-item.component.html',
  styleUrls: ['./archive-list-item.component.scss'],
})
export class ArchiveListItemComponent implements OnInit {
  @Input() case: any;
  public color: string;

  public result_score: number;
  public startTime: string;
  public endTime: string;
  public taggies = [];
  public comments = [];
  public linkUrl: string;
  constructor() { }

  ngOnInit(): void {
    this.result_score = Math.ceil(this.case.result_score * 25);

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

    if ('comments' in this.case && this.case.comments) {
      this.comments = this.case.comments;
    }

    const startTimeArr = this.case.open_timestamp.split(" ")[0].split("-");
    this.startTime = `${startTimeArr[2]}.${startTimeArr[1]}.${startTimeArr[0]}`;
    const endTimeArr = this.case.close_timestamp.split(" ")[0].split("-");
    this.endTime = `${endTimeArr[2]}.${endTimeArr[1]}.${endTimeArr[0]}`;

    this.linkUrl = `/archive/${this.case.id}`
  }

}
