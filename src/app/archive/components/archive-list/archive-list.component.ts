import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.scss']
})
export class ArchiveListComponent implements OnInit {
  @Input() archives: Item[];
  @Output() pageChanged = new EventEmitter<number>();

  page = 1;
  pageSize = 10;
  count = 0;

  ngOnInit(): void {
    this.count = this.archives.length;
  }

  handlePageChange(event: number) {
    this.page = event;
    this.pageChanged.emit(this.page);
  }
}
