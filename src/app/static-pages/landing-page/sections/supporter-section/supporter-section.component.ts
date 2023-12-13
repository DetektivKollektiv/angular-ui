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
  @Input() headline = "Unsere Partner:innen, Unterstützer:innen und Netzwerke";
  @Input() wide = true;
  @Input() supporter_file = 'assets/data/supporter.json';
  @Input() left_aligned = false; 
  @Input() headline_color = 'grey';
  supporters: Supporter[];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Supporter[]>(this.supporter_file).subscribe((supporters) => (this.supporters = supporters));
  }
}
