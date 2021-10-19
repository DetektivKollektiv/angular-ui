import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-archive-details',
  templateUrl: './archive-details.component.html',
  styleUrls: ['./archive-details.component.scss']
})
export class ArchiveDetailsComponent implements OnInit {
  @Input() item: Item;

  link: string;

  ngOnInit(): void {
    this.link = `${window.location.origin}/archive?id=${this.item.id}`;
  }
}
