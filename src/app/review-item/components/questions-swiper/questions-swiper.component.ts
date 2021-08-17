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
        title: 'Woran erkenne ich eine gute Quelle?',
        description: 'Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen',
        background: '#68a8ff',
        icon: 'fal fa-newspaper'
      },
      {
        title: 'Die Quelle ist nicht mehr abrufbar. Was kann ich tun?',
        description: 'Eine Anleitung für genau solche Fälle findest du auf dieser Seite.',
        background: '#3a9832',
        icon: 'fal fa-scroll-old'
      },
      {
        title: 'Kann ich den Fall abgeben?',
        description: 'Ja, das geht. Hier erfährst du wie.',
        background: '#be9843',
        icon: 'fal fa-hands-helping'
      },
      {
        title: 'Eine weitere Frage??',
        description: 'Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.',
        background: '#8f1fff',
        icon: 'fal fa-leaf'
      },
    ];
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
