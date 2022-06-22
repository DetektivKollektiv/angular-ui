import { Component, OnInit } from '@angular/core';
import data from '../../../../../assets/data/news.json';

export interface NewsItem {
  image: string;
  text: string;
  source: string;
  link: string;
  type?: string;
}

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {
  public items: NewsItem[] = [];

  ngOnInit(): void {
    this.items = data;
  }
}
