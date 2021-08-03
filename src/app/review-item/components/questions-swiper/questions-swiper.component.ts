import { Component, HostListener, OnInit } from '@angular/core';
import SwiperCore from 'swiper/core';

@Component({
  selector: 'app-questions-swiper',
  templateUrl: './questions-swiper.component.html',
  styleUrls: ['./questions-swiper.component.scss'],
})
export class QuestionsSwiperComponent implements OnInit {
  public questions: any[];

  constructor(
  ) {
    this.questions = [
      {
        title: "Woran erkenne ich eine gute Quelle?",
        description: "Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen",
        icon: "thing"
      },
      {
        title: "Woran erkenne ich eine gute Quelle?",
        description: "Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen",
        icon: "thing"
      },
      {
        title: "Woran erkenne ich eine gute Quelle?",
        description: "Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen",
        icon: "thing"
      },
    ]
  }

  ngOnInit(): void {

  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
