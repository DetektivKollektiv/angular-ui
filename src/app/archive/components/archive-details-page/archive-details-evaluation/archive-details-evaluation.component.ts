import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../../../model/item';

type RatingKey = 'trusted' | 'mostly-trusted' | 'mostly-untrusted' | 'untrusted';

type EvaluationQuestion = {
  id: string;
  text: string;
  tag: string;
  rating: RatingKey;
};

type EvaluationCategory = {
  id: string;
  title: string;
  questions: EvaluationQuestion[];
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

  get categories(): EvaluationCategory[] {
    const rating = this.getRatingKey(this.item?.result_score ?? 0);
    const fallbackText =
      this.item?.opengraph?.description || this.item?.opengraph?.title || this.item?.content || 'Frage nicht vorhanden';

    const baseQuestions: EvaluationQuestion[] = [
      { id: 'q1', text: fallbackText, tag: 'Fehlerhafte Grammatik', rating },
      { id: 'q2', text: fallbackText, tag: 'Fehlerhafte Grammatik', rating },
      { id: 'q3', text: fallbackText, tag: 'Fehlerhafte Grammatik', rating }
    ];

    return [
      { id: 'source', title: 'Quelle', questions: baseQuestions },
      { id: 'images', title: 'Bilder & Videos', questions: baseQuestions },
      { id: 'quotes', title: 'Zitate', questions: baseQuestions },
      { id: 'medium', title: 'Medium', questions: baseQuestions },
      { id: 'content', title: 'Inhalte', questions: baseQuestions }
    ];
  }

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

  trackCategory(_index: number, category: EvaluationCategory): string {
    return category.id;
  }

  trackQuestion(_index: number, question: EvaluationQuestion): string {
    return question.id;
  }

  getRatingKey(score: number): RatingKey {
    if (score >= 3) return 'trusted';
    if (score >= 2) return 'mostly-trusted';
    if (score >= 1) return 'mostly-untrusted';
    return 'untrusted';
  }
}
