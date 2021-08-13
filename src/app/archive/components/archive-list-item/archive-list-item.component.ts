import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-archive-list-item',
  templateUrl: './archive-list-item.component.html',
  styleUrls: ['./archive-list-item.component.scss'],
})
export class ArchiveListItemComponent implements OnInit {
  @Input() archive: any;
  constructor() { }

  ngOnInit(): void {
  }

}
