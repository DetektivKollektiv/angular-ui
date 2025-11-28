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

  getReviewTagClass(tag: ReviewTag): string {
    const score = tag.score ?? 0;
    if (score >= 3.5) {
      return 'archive-card__rating-tag--high';
    }
    if (score >= 2.5) {
      return 'archive-card__rating-tag--mid';
    }
    if (score >= 1.5) {
      return 'archive-card__rating-tag--low';
    }
    return 'archive-card__rating-tag--very-low';
  }

  getPreviewTags(maxLength: number = 80): ReviewTag[] {
    const sorted = [...(this.item.review_tags || [])].sort((a, b) => (a.score ?? 0) - (b.score ?? 0));

    let charCount = 0;
    let truncated = false;

    const result = sorted.reduce<ReviewTag[]>((acc, tag, index) => {
      if (truncated) return acc;

      const separator = index === 0 ? 0 : 2; // ', ' length
      const newTotal = charCount + separator + tag.text.length;

      if (newTotal > maxLength) {
        acc.push({ ...tag, text: '...' });
        truncated = true;
        return acc;
      }

      charCount = newTotal;
      acc.push(tag);
      return acc;
    }, []);

    return result;
  }
}

