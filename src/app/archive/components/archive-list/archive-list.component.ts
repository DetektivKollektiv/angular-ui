import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.scss'],
})
export class ArchiveListComponent implements OnInit {
  @Input() archives: Item[];

  constructor() { }

  ngOnInit(): void {

  }

}
