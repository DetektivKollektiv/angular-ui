import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.scss'],
  providers: [
  ],
})
export class SubmitPageComponent implements OnInit {
  public questionPrompts: any[];
  constructor(
  ) {}
  ngOnInit(): void {
    this.questionPrompts = [
      {
        title: 'Woran erkenne ich eine gute Quelle?',
        description: 'Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen',
        background: '#ff7268',
        icon: 'fal fa-question-circle'
      },
      {
        title: 'Die Quelle ist nicht mehr abrufbar. Was kann ich tun?',
        description: 'Eine Anleitung für genau solche Fälle findest du auf dieser Seite.',
        background: '#5f38fa',
        icon: 'fal fa-plus'
      },
      {
        title: 'Kann ich den Fall abgeben?',
        description: 'Ja, das geht. Hier erfährst du wie.',
        background: '#722ed1',
        icon: 'fal fa-archive'
      },
      {
        title: 'Eine weitere Frage??',
        description: 'Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.',
        background: '#ff7268',
        icon: 'fal fa-meteor'
      },
    ];
  }
}
