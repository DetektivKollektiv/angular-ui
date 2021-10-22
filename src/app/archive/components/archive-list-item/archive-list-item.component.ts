import { Component, Input } from '@angular/core';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-archive-list-item',
  templateUrl: './archive-list-item.component.html',
  styleUrls: ['./archive-list-item.component.scss']
})
export class ArchiveListItemComponent {
  @Input() case: Item;

  private maxTags = 3;

  get tagsCount(): number {
    const { tags, warning_tags } = this.case;
    return tags.length + warning_tags.length <= this.maxTags ? tags.length : Math.min(tags.length, Math.round(this.maxTags / 2));
  }

  get warningTagsCount(): number {
    const { warning_tags } = this.case;
    return Math.min(this.maxTags - this.tagsCount, warning_tags.length);
  }
}
