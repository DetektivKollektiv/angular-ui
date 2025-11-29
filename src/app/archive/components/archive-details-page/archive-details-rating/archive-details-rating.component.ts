import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../../../model/item';

type RatingKey = 'untrusted' | 'mostly-untrusted' | 'mostly-trusted' | 'trusted';

@Component({
  selector: 'app-archive-details-rating',
  templateUrl: './archive-details-rating.component.html',
  styleUrls: ['./archive-details-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'archive-details-rating'
  }
})
export class ArchiveDetailsRatingComponent {
  @Input() item!: Item;

  readonly options: { key: RatingKey; label: string }[] = [
    { key: 'trusted', label: 'Vertrauenswürdig' },
    { key: 'mostly-trusted', label: 'Eher vertrauenswürdig' },
    { key: 'mostly-untrusted', label: 'Eher nicht vertrauenswürdig' },
    { key: 'untrusted', label: 'Nicht vertrauenswürdig' }
  ];

  get activeKey(): RatingKey {
    const score = this.item?.result_score ?? 0;
    if (score >= 3) return 'trusted';
    if (score >= 2) return 'mostly-trusted';
    if (score >= 1) return 'mostly-untrusted';

    return 'untrusted';
  }

  trackByOption(_index: number, option: { key: RatingKey; label: string }): RatingKey {
    return option.key;
  }
}

