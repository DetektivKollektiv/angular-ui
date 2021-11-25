import {Component, Input, OnInit} from '@angular/core';

interface Faq {
  question: string;
  answer: string;
}


@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent implements OnInit {
  @Input() item: Faq;

  show: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
