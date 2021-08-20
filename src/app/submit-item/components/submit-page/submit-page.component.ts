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

  favoriteSeason: string;
  questionOptions: string[] = [
    'Per Messenger (z.B. Whatsapp, Telegram oder SMS)',
    'Über soziale Medien (z.B. Facebook, Twitter, Instagram)',
    'Beim Surfen im Internet',
    'Über andere Medien (z.B. Fernsehen, Radio, Zeitung)',
    'Aus Gesprächen (z.B. mit Freunden oder Familienmitgliedern)',
    'Sonstiges'
  ];

  questionOptions2: string[] = [
    'Per Messenger (z.B. Whatsapp, Telegram oder SMS)',
    'Über soziale Medien (z.B. Facebook, Twitter, Instagram)',
  ];


  public policyChecked = false;
  public conditionChecked = false;
  public buttonStatus = true;
  public textareaValue: string = "";

  constructor(
  ) {}

  ngOnInit(): void {
    this.questionPrompts = [
      {
        title: 'Woran erkenne ich eine gute Quelle?',
        description: 'Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen',
        background: 'color__bittersweet',
        icon: 'fal fa-question-circle'
      },
      {
        title: 'Die Quelle ist nicht mehr abrufbar. Was kann ich tun?',
        description: 'Eine Anleitung für genau solche Fälle findest du auf dieser Seite.',
        background: 'color__neon-blue',
        icon: 'fal fa-plus'
      },
      {
        title: 'Kann ich den Fall abgeben?',
        description: 'Ja, das geht. Hier erfährst du wie.',
        background: 'color__purple',
        icon: 'fal fa-archive'
      },
      {
        title: 'Eine weitere Frage??',
        description: 'Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.',
        background: 'color__bittersweet',
        icon: 'fal fa-meteor'
      },
    ];
  }

  agreePolicy(event) {
    this.policyChecked = event.checked;
    this.checkButtonStatus();
  }

  agreeCondition(event) {
    this.conditionChecked = event.checked;
    this.checkButtonStatus();
  }

  checkButtonStatus() {
    if (this.policyChecked === true && this.conditionChecked === true) {
      this.buttonStatus = false;
    } else {
      this.buttonStatus = true;
    }
  }
}
