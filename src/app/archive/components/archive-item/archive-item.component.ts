import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-archive-item',
  templateUrl: './archive-item.component.html',
  styleUrls: ['./archive-item.component.scss'],
})
export class ArchiveItemComponent implements OnInit {
  @Input() public item: Item;
  @Input() public index: number;
  @Input() public length: number;

  constructor() {}

  ngOnInit(): void {}
}
