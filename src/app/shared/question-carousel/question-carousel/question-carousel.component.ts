import { Component, Input, OnInit } from '@angular/core';
import SwiperCore from 'swiper/core';
@Component({
  selector: 'app-question-carousel',
  templateUrl: './question-carousel.component.html',
  styleUrls: ['./question-carousel.component.scss'],
})
export class QuestionCarouselComponent implements OnInit {
  @Input() public questions: any[];

  constructor() { }

  ngOnInit() {
  }

}
