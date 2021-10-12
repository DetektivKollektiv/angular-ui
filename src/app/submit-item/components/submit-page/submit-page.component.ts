import { Component } from '@angular/core';
import { Item } from '../../../model/item';
import { InformationSource } from '../../model/information-source.interface';
import { SubmitFormData } from '../../model/submit-form-data.interface';
import { SubmitItemService } from '../../services/submit-item.service';
import { QuestionPrompt } from './../../model/question-prompt.interface';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.scss'],
  providers: [],
})
export class SubmitPageComponent {
  informationSources: InformationSource[] = [
    { label: 'Per Messenger (z.B. Whatsapp, Telegram oder SMS)', value: 0 },
    {
      label: 'Über soziale Medien (z.B. Facebook, Twitter, Instagram)',
      value: 1,
    },
    { label: 'Beim Surfen im Internet', value: 2 },
    { label: 'Über andere Medien (z.B. Fernsehen, Radio, Zeitung)', value: 3 },
    {
      label: 'Aus Gesprächen (z.B. mit Freunden oder Familienmitgliedern)',
      value: 4,
    },
    { label: 'Sonstiges', value: 5 },
  ];

  questionPrompts: QuestionPrompt[] = [
    {
      title: 'Woran erkenne ich eine gute Quelle?',
      description:
        'Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen',
      background: 'color__bittersweet',
      icon: 'fal fa-question-circle',
    },
    {
      title: 'Die Quelle ist nicht mehr abrufbar. Was kann ich tun?',
      description:
        'Eine Anleitung für genau solche Fälle findest du auf dieser Seite.',
      background: 'color__neon-blue',
      icon: 'fal fa-plus',
    },
    {
      title: 'Kann ich den Fall abgeben?',
      description: 'Ja, das geht. Hier erfährst du wie.',
      background: 'color__purple',
      icon: 'fal fa-archive',
    },
    {
      title: 'Eine weitere Frage??',
      description:
        'Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.',
      background: 'color__bittersweet',
      icon: 'fal fa-meteor',
    },
  ];

  /**
   * The form data. Filled with initial values.
   */
  form: SubmitFormData = {
    medium: 'link',
    content: null,
    source: null,
    frequency: null,
    received_date: null,
    mail: null,
    policy: false,
    condition: false,
  };

  constructor(private submitItemService: SubmitItemService) {}

  onSubmit() {
    const { policy, condition, ...item } = this.form;
    console.log(item);
    // this.submitItemService.submitItem(item);
  }
}
