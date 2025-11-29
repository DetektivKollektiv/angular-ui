import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import Swiper from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Comment } from '../../../model/item';

@Component({
  selector: 'app-archive-details-comments',
  templateUrl: './archive-details-comments.component.html',
  styleUrls: ['./archive-details-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArchiveDetailsCommentsComponent {
  @Input() comments: Comment[] = [];

  readonly swiperBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  };

  readonly swiperSpacing = 16;

  private navigationState: { isBeginning: boolean; isEnd: boolean } = { isBeginning: true, isEnd: false };

  constructor(private cdr: ChangeDetectorRef) {}

  trackComment(_index: number, comment: Comment): string {
    return comment.id;
  }

  handleSwiperInit(swiper: Swiper): void {
    this.updateNavigation(swiper);
  }

  handleSlideChange(swiper?: Swiper): void {
    if (!swiper) return;
    this.updateNavigation(swiper);
  }

  slideNext(swiper?: SwiperComponent): void {
    swiper?.swiperRef.slideNext();
    this.handleSlideChange(swiper?.swiperRef);
  }

  slidePrev(swiper?: SwiperComponent): void {
    swiper?.swiperRef.slidePrev();
    this.handleSlideChange(swiper?.swiperRef);
  }

  isBeginning(): boolean {
    return this.navigationState.isBeginning;
  }

  isEnd(): boolean {
    return this.navigationState.isEnd;
  }

  private updateNavigation(swiper: Swiper): void {
    const next = { isBeginning: swiper.isBeginning, isEnd: swiper.isEnd };
    if (next.isBeginning !== this.navigationState.isBeginning || next.isEnd !== this.navigationState.isEnd) {
      this.navigationState = next;
      this.cdr.markForCheck();
    }
  }
}
