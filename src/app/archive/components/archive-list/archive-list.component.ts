import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.scss'],
})
export class ArchiveListComponent implements OnInit {
  @Input() archives: Item[];

  public page = 1;
  public pageSize = 10;
  public count = 0;


  constructor() { }

  ngOnInit(): void {
    // this.count = this.archives.length;
    this.count = 199;
  }

  handlePageChange(event: number) {
    this.page = event
  }

}
