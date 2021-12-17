import { Component, Input, OnInit } from '@angular/core';
import { NewsItem } from '../news-section.component';

@Component({
  selector: 'app-news-section-item',
  templateUrl: './news-section-item.component.html',
  styleUrls: ['./news-section-item.component.scss']
})
export class NewsSectionItemComponent {
  @Input() item: NewsItem;
}
