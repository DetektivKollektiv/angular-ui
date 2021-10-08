import { Component, OnInit, Input } from '@angular/core';
import { RatingColorService } from '../../../services/rating-color-service/rating-color.service';

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
  constructor(private ratingColorService: RatingColorService) { }

  ngOnInit(): void {
    this.result_score = Math.ceil(this.case.result_score * 25);


    this.color = this.ratingColorService.getColorForScore(this.result_score);


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
