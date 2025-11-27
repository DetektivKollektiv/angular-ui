import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item, ReviewTag } from '../../model/item';

type RatingVariant = {
  label: string;
  badgeClass: string;
  colorClass: string;
};

@Component({
  selector: 'app-archive-item',
  templateUrl: './archive-item.component.html',
  styleUrls: ['./archive-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArchiveItemComponent {
  @Input() item!: Item;

  get imageUrl(): string | undefined {
    return this.item?.opengraph?.images?.[0];
  }

  get rating(): RatingVariant {
    const score = this.item?.result_score ?? 0;
    if (score >= 3) {
      return { label: 'Vertrauenswürdig', badgeClass: 'badge--trusted', colorClass: 'rating--trusted' };
    }
    if (score >= 2) {
      return { label: 'Eher vertrauenswürdig', badgeClass: 'badge--mostly-trusted', colorClass: 'rating--mostly-trusted' };
    }
    if (score >= 1) {
      return { label: 'Eher nicht vertrauenswürdig', badgeClass: 'badge--mostly-untrusted', colorClass: 'rating--mostly-untrusted' };
    }
    return { label: 'Nicht vertrauenswürdig', badgeClass: 'badge--untrusted', colorClass: 'rating--untrusted' };
  }

  trackByContentTag(_index: number, tag: string): string {
    return tag;
  }

  trackByReviewTag(_index: number, tag: ReviewTag): string {
    return tag.text;
  }
}
