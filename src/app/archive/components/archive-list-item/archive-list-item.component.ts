import { Component, Input } from '@angular/core';
import { Item } from '../../../model/item';
import { RatingColorService } from '../../../services/rating-color-service/rating-color.service';

@Component({
  selector: 'app-archive-list-item',
  templateUrl: './archive-list-item.component.html',
  styleUrls: ['./archive-list-item.component.scss']
})
export class ArchiveListItemComponent {
  @Input() case: Item;

  get tagsCount(): number {
    const { tags, warning_tags } = this.case;
    return tags.length + warning_tags.length <= 5 ? tags.length : Math.min(tags.length, 3);
  }

  get warningTagsCount(): number {
    const { warning_tags } = this.case;
    return Math.min(5 - this.tagsCount, warning_tags.length);
  }

  constructor(private ratingColorService: RatingColorService) {}
}
