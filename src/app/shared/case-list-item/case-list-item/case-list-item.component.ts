import { Component, OnInit, Input } from '@angular/core';
import { RatingColorService } from '../../../services/rating-color-service/rating-color.service';

@Component({
  selector: 'app-case-list-item',
  templateUrl: './case-list-item.component.html',
  styleUrls: ['./case-list-item.component.scss']
})
export class CaseListItemComponent implements OnInit {
  @Input() case: any;

  score: number;
  color: string;

  constructor(private ratingColorService: RatingColorService) {}

  ngOnInit(): void {
    this.score = Math.round(this.case.result_score * 25);
    this.color = this.ratingColorService.getColorForScore(this.score);
  }
}
