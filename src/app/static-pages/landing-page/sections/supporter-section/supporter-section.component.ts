import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

export interface Supporter {
  image: string;
}

@Component({
  selector: 'app-supporter-section',
  templateUrl: './supporter-section.component.html',
  styleUrls: ['./supporter-section.component.scss']
})
export class SupporterSectionComponent implements OnInit {
  @Input() withHeadline = true;
  @Input() wide = true;
  supporters: Supporter[];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Supporter[]>('assets/data/supporter.json').subscribe((supporters) => (this.supporters = supporters));
  }
}
