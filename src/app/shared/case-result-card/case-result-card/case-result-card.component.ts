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

  constructor(private ratingColorPipe: RatingColorPipe) {}
}
