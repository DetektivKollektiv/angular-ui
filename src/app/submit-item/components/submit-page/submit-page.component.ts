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
  public policyChecked = false;
  public conditionChecked = false;
  public buttonStatus = true;
  public textareaValue: string;
  constructor(
  ) {}
  ngOnInit(): void {
    this.questionPrompts = [
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

    this.textareaValue = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor" +
                          "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et" +
                          "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.";
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
