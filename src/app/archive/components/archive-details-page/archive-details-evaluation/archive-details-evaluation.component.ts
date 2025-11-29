import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import Swiper from 'swiper';
import { Item, QuestionRating, RatingCategory } from '../../../model/item';

type RatingKey = 'trusted' | 'mostly-trusted' | 'mostly-untrusted' | 'untrusted';

type DistributionEntry = {
  key: keyof QuestionRating['distribution'];
  percent: number;
  color: string;
};

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

  readonly swiperBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 3 }
  };

  readonly swiperSpacing = 16;

  navigationState: Record<string, { isBeginning: boolean; isEnd: boolean }> = {};

  private readonly distributionColors: Record<keyof QuestionRating['distribution'], string> = {
    0: '#ef4444', // untrusted
    1: '#f97316', // mostly-untrusted
    2: '#facc15', // mostly-trusted (yellow accent)
    3: '#22c55e', // trusted
    4: '#d1d5db' // not rated
  };

  private readonly distributionKeys: Array<keyof QuestionRating['distribution']> = [0, 1, 2, 3, 4];

  readonly ratingGradients: Record<RatingKey, { start: string; end: string; label: string }> = {
    trusted: { start: '#16a34a', end: '#22c55e', label: 'Vertrauenswürdig' },
    'mostly-trusted': { start: '#2563eb', end: '#3b82f6', label: 'Eher vertrauenswürdig' },
    'mostly-untrusted': { start: '#f59e0b', end: '#f97316', label: 'Eher nicht vertrauenswürdig' },
    untrusted: { start: '#ef4444', end: '#f43f5e', label: 'Nicht vertrauenswürdig' }
  };

  constructor(private cdr: ChangeDetectorRef) {}

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

  handleSwiperInit(categoryId: string, swiper: Swiper): void {
    const current = this.navigationState[categoryId];
    const nextState = { isBeginning: swiper.isBeginning, isEnd: swiper.isEnd };

    if (!current || current.isBeginning !== nextState.isBeginning || current.isEnd !== nextState.isEnd) {
      this.navigationState[categoryId] = nextState;
      this.cdr.markForCheck();
    }
  }

  handleSlideChange(categoryId: string, swiper?: Swiper): void {
    if (!swiper) return;

    const current = this.navigationState[categoryId];
    const nextState = { isBeginning: swiper.isBeginning, isEnd: swiper.isEnd };

    if (!current || current.isBeginning !== nextState.isBeginning || current.isEnd !== nextState.isEnd) {
      this.navigationState[categoryId] = nextState;
      this.cdr.markForCheck();
    }
  }

  slideNext(swiper?: SwiperComponent): void {
    swiper?.swiperRef.slideNext();
  }

  slidePrev(swiper?: SwiperComponent): void {
    swiper?.swiperRef.slidePrev();
  }

  isBeginning(categoryId: string): boolean {
    return this.navigationState[categoryId]?.isBeginning ?? true;
  }

  isEnd(categoryId: string): boolean {
    return this.navigationState[categoryId]?.isEnd ?? false;
  }

  getTagStyle(score: number): Record<string, string> {
    const gradient = this.ratingGradients[this.getRatingKey(score)];
    return {
      '--pill-start': gradient.start,
      '--pill-end': gradient.end,
      background: `linear-gradient(90deg, ${gradient.start}, ${gradient.end})`
    };
  }

  getDistributionEntries(distribution: QuestionRating['distribution']): DistributionEntry[] {
    return this.distributionKeys.map(key => ({
      key,
      percent: distribution[key],
      color: this.distributionColors[key]
    }));
  }
}
