import { Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper/core';
@Component({
  selector: 'app-question-carousel',
  templateUrl: './question-carousel.component.html',
  styleUrls: ['./question-carousel.component.scss'],
  inputs: ['questions']
})
export class QuestionCarouselComponent implements OnInit {

  public questions: any[];

  constructor() { }

  ngOnInit() {
  }

}
