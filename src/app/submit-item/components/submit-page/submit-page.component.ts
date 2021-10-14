import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Item } from '../../../model/item';
import { ItemSources } from '../../../model/item-source';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { SubmitFormData } from '../../model/submit-form-data.interface';
import { ItemTypesService } from '../../services/item-types/item-types.service';
import { SubmitItemService } from '../../services/submit-item.service';
import { QuestionPrompt } from './../../model/question-prompt.interface';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.scss'],
  providers: []
})
export class SubmitPageComponent {
  itemTypes$ = this.itemTypesService.getItemTypes();

  itemSources: string[] = Object.values(ItemSources);

  questionPrompts: QuestionPrompt[] = [
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
    }
  ];

  /**
   * The form data. Filled with initial values.
   */
  form: SubmitFormData = {
    item_type_id: '1',
    content: null,
    source: null,
    other_source: null,
    frequency: null,
    received_date: null,
    mail: null,
    policy: false,
    condition: false
  };

  constructor(
    private submitItemService: SubmitItemService,
    private itemTypesService: ItemTypesService,
    private router: Router,
    private loaderService: LoaderService,
    private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    this.loaderService.show();

    const { policy, condition, other_source, ...itemData } = this.form;
    const item = new Item();
    Object.assign(item, itemData);
    if (item.source === 'other' && !!other_source) {
      item.source = other_source;
    }
    this.submitItemService
      .submitItem(item)
      .then((responseItem) => {
        if (responseItem.status === 'closed') {
          this.goToArchive(responseItem);
        } else {
          this.goToSuccess(responseItem, !!itemData.mail);
        }
      })
      .finally(() => this.loaderService.hide());
  }

  private goToSuccess(responseItem: Item, withEmail: boolean) {
    this.router.navigate(['submit', 'success'], { state: { item: responseItem, withEmail } });
  }

  private goToArchive(responseItem: Item) {
    this.snackBar.open('Sieht so aus, als hätte unsere Community den Fall schon bearbeitet. 😊', '', {
      duration: 5000
    });
    this.router.navigate(['archive', responseItem.id]);
  }
}
