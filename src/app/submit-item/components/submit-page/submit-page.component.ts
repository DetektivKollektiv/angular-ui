import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Item } from '../../../model/item';
import { ItemSources } from '../../../model/item-source';
import { LoaderService } from '@shared/loader/service/loader.service';
import { SubmitFormData } from '../../model/submit-form-data.interface';
import { ItemTypesService } from '../../services/item-types/item-types.service';
import { SubmitItemService } from '../../services/submit-item.service';
import { QuestionPrompt } from './../../model/question-prompt.interface';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})
export class SubmitPageComponent {

  itemTypes$ = this.itemTypesService.getItemTypes();

  itemSources: string[] = Object.values(ItemSources);

  questionPrompts: QuestionPrompt[] = [
    {
      title: 'Wie reiche ich einen Fall ein?',
      description: 'Fülle das Formular auf dieser Seite aus. Bei Interesse kannst Du optionale Angaben machen. ' +
      'Klicke am Ende auf "Fall einreichen".',
      background: 'color__neon-blue',
      icon: 'fal fa-plus'
    },
    {
      title: 'Was kann ich als Fall einreichen?',
      description: 'Du kannst Links zu Online-Artikeln, aber auch Text-Nachrichten aus Sozialen Medien ' +
      'oder einem Messenger einreichen.',
      background: 'color__bittersweet',
      icon: 'fal fa-question-circle'
    },
    {
      title: 'Kann ich einen Video-Beitrag einreichen?',
      description: 'Videos können nur mit unverhältnismäßig hohem Aufwand bearbeitet und analysiert werden, ' +
      'du kannst deshalb Videos zur Zeit nicht als Fall einreichen.',
      background: 'color__gold',
      icon: 'fal fa-video-slash'
    },
    {
      title: 'Gibt es diesen Fall schon?',
      description: 'Bereits gelöste Fälle kannst du im <a href="/archive" target="_blank">Archiv</a> ansehen.',
      background: 'color__purple',
      icon: 'fal fa-archive'
    }
  ];

  form: SubmitFormData = {
    item_type_id: null,
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
