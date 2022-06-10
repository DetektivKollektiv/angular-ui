import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface NewsItem {
  image: string;
  text: string;
  source: string;
  link: string;
  type: string;
}

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {
  public items: NewsItem[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<NewsItem[]>('assets/data/news.json').subscribe((data) => {
      this.items = data;
    });
  }
}
