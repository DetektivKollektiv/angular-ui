import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Item } from '../../../model/item';
import { RatingColorPipe } from '../../pipes/rating-color.pipe';

@Component({
  selector: 'app-case-result-card',
  templateUrl: './case-result-card.component.html',
  styleUrls: ['./case-result-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaseResultCardComponent {
  @Input() case: Item;

  @HostBinding('class') get ratingColor(): string {
    return this.case ? 'rating-color-bg--' + this.ratingColorPipe.transform(this.case.result_score) : '';
  }

  get detectivesCount(): number {
    return this.case?.reviews
      ? Object.values(
          this.case.reviews.reduce((detectives, review) => {
            const name = review.user.trim().toLowerCase() === 'deleted' ? 'Deaktiviert' : review.user;
            detectives[name] = review;
            return detectives;
          }, {})
        ).length
      : 0;
  }

  constructor(private ratingColorPipe: RatingColorPipe) {}
}
