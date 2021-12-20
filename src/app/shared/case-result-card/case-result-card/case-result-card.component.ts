import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { RatingService } from '../../../services/rating.service';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-case-result-card',
  templateUrl: './case-result-card.component.html',
  styleUrls: ['./case-result-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaseResultCardComponent {
  @Input()
  get case(): Item {
    return this.item;
  }
  set case(item: Item) {
    this.item = item;
    this.setContent();
  }

  @HostBinding('class') get ratingColor(): string {
    return this.item ? 'rating-color-bg--' + this.ratingService.getColorForScore(this.item.result_score) : '';
  }

  title: string;
  infoText: string;

  private item: Item;

  constructor(private ratingService: RatingService) {}

  private setContent() {
    if (!this.item) {
      return;
    }
    this.title = this.ratingService.getTitleForScore(this.item.result_score);
    this.infoText = this.ratingService.getInfoTextForScore(this.item.result_score);
  }
}
