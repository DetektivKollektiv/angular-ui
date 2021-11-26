import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faq-block',
  templateUrl: './faq-block.component.html',
  styleUrls: ['./faq-block.component.scss']
})
export class FaqBlockComponent implements OnInit {

  @Input() headline: string;
  @Input() json: string;

  faq: any = [];


  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get('assets/data/' + this.json).subscribe(data => {
      this.faq = data;
    });
  }

}
