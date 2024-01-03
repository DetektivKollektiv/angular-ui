import { Component, OnInit } from '@angular/core';

export interface NewsItem {
  image: string;
  text: string;
  source: string;
  link: string;
  type?: string;
  button_text?: string;
}

@Component({
  selector: 'app-kit-advantages-section',
  templateUrl: './kit-advantages-section.component.html',
  styleUrls: ['./kit-advantages-section.component.scss']
})
export class KitAdvantagesSectionComponent {
  constructor() {}
}
