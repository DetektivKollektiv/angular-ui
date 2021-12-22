import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.scss']
})
export class ArchiveListComponent {
  @Input()
  get archives(): Item[] {
    return this.items;
  }
  set archives(items: Item[]) {
    this.items = items;
    this.count = this.items?.length || 0;
    this.page = 1;
  }

  @Output() pageChanged = new EventEmitter<number>();

  page = 1;
  pageSize = 10;
  count: number;

  private items: Item[];

  handlePageChange(event: number) {
    this.page = event;
    this.pageChanged.emit(this.page);
  }
}
