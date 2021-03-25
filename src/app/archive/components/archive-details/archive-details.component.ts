import { Component, Inject, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-archive-details',
  templateUrl: './archive-details.component.html',
  styleUrls: ['./archive-details.component.scss'],
})
export class ArchiveDetailsComponent implements OnInit {
  @Input() public item: Item;

  public link: string;

  constructor() {}

  ngOnInit(): void {
    this.link = `${window.location.origin}/archive?id=${this.item.id}`;
  }
}
