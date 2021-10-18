import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-case-result-card',
  templateUrl: './case-result-card.component.html',
  styleUrls: ['./case-result-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaseResultCardComponent {
  @Input() case: Item;

  get score(): number {
    return this.case?.result_score ? Math.round(this.case.result_score * 25) : 0;
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
}
