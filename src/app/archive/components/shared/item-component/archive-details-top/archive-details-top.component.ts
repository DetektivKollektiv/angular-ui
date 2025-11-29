import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../../../../model/item';

@Component({
  selector: 'app-archive-details-top',
  templateUrl: './archive-details-top.component.html',
  styleUrls: ['./archive-details-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'archive-details-top'
  }
})
export class ArchiveDetailsTopComponent {
  @Input() item!: Item;

  get title(): string {
    return this.item?.opengraph?.title || this.item?.title || this.item?.content || '';
  }

  get description(): string {
    return this.item?.opengraph?.description || this.item?.content || '';
  }

  get link(): string | undefined {
    return this.item?.opengraph?.url || this.item?.content;
  }

  get imageUrl(): string | undefined {
    return this.item?.opengraph?.images?.[0];
  }

  trackByTag(_index: number, tag: string): string {
    return tag;
  }
}

