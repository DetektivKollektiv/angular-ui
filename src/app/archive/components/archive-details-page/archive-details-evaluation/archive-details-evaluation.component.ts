import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item, QuestionRating, RatingCategory } from '../../../model/item';

type RatingKey = 'trusted' | 'mostly-trusted' | 'mostly-untrusted' | 'untrusted';

type EvaluationQuestion = {
  id: string;
  text: string;
  tag: string;
  rating: RatingKey;
};

@Component({
  selector: 'app-archive-details-evaluation',
  templateUrl: './archive-details-evaluation.component.html',
  styleUrls: ['./archive-details-evaluation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArchiveDetailsEvaluationComponent {
  @Input() item!: Item;

  expandedCategoryIds = new Set<string>(['source']);

  readonly ratingGradients: Record<RatingKey, { start: string; end: string; label: string }> = {
    trusted: { start: '#16a34a', end: '#22c55e', label: 'Vertrauenswürdig' },
    'mostly-trusted': { start: '#2563eb', end: '#3b82f6', label: 'Eher vertrauenswürdig' },
    'mostly-untrusted': { start: '#f59e0b', end: '#f97316', label: 'Eher nicht vertrauenswürdig' },
    untrusted: { start: '#ef4444', end: '#f43f5e', label: 'Nicht vertrauenswürdig' }
  };

  toggleCategory(categoryId: string): void {
    if (this.expandedCategoryIds.has(categoryId)) {
      this.expandedCategoryIds.delete(categoryId);
    } else {
      this.expandedCategoryIds.add(categoryId);
    }
  }

  isExpanded(categoryId: string): boolean {
    return this.expandedCategoryIds.has(categoryId);
  }

  trackCategory(_index: number, category: RatingCategory): string {
    return category.category_id;
  }

  trackQuestion(_index: number, question: QuestionRating): string {
    return question.question_id;
  }

  getRatingKey(score: number): RatingKey {
    if (score >= 3) return 'trusted';
    if (score >= 2) return 'mostly-trusted';
    if (score >= 1) return 'mostly-untrusted';
    return 'untrusted';
  }
}

