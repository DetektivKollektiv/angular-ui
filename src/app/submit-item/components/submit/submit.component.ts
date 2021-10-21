import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubmitItemService } from '../../services/submit-item.service';
import { Item } from '../../../model/item';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { LoaderService } from '@shared/loader/service/loader.service';
import { ItemTypesService } from '../../services/item-types/item-types.service';
import { ItemType } from '../../../model/item-type';
import { ResultScoreMode } from '@shared/helper/components/result-score/result-score-mode';

export const MY_FORMATS = {
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class SubmitComponent implements OnInit {
  typeFormGroup: FormGroup;
  contentFormGroup: FormGroup;
  additionalFormGroup: FormGroup;
  confirmationFormGroup: FormGroup;

  formGroup: FormGroup;
  typeFormControl: FormControl;
  contentFormControl: FormControl;
  sourceFormControl: FormControl;
  sourceTextFormControl: FormControl;
  frequencyFormControl: FormControl;
  receivedFormControl: FormControl;
  emailFormControl: FormControl;
  privacyBox: FormControl;
  termBox: FormControl;
  checkboxFormControl: FormControl;

  submitEnabled: boolean;
  today = moment();
  itemTypes: ItemType[];

  submitted: boolean;
  itemClosed: boolean;
  mailGiven: boolean;
  item: Item;

  public submitQuestions: any[];

  public resultScoreMode = ResultScoreMode.text;

  constructor(
    private formBuilder: FormBuilder,
    private submitItemService: SubmitItemService,
    private itemTypesService: ItemTypesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private loaderService: LoaderService
  ) {
    this.submitQuestions = [
      {
        title: 'Wann sehe ich etwas im Archiv?',
        description: 'Hier kommt einiges zusammen. Genaue Details findest du hier.',
        background: '#ff7268',
        icon: 'fal fa-question-circle'
      },
      {
        title: 'Wie errechnet sich der Score?',
        description: 'Eine Anleitung für genau solche Fälle findest du auf dieser Seite.',
        background: '#722ed1',
        icon: 'fal fa-plus'
      },
      {
        title: 'Eine weitere Frage?',
        description: 'Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.',
        background: '#8f1fff',
        icon: 'fal fa-archive'
      },
      {
        title: 'Eine weitere Frage?',
        description: 'Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.',
        background: '#ff7268',
        icon: 'fal fa-meteor'
      }
    ];
  }

  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  ngOnInit(): void {
    this.submitted = false;
    this.submitEnabled = false;

    this.typeFormControl = new FormControl('', Validators.required);
    this.contentFormControl = new FormControl('', Validators.required);
    this.sourceFormControl = new FormControl();
    this.sourceTextFormControl = new FormControl();
    this.frequencyFormControl = new FormControl();
    this.receivedFormControl = new FormControl({
      value: moment(),
      disabled: true
    });
    this.emailFormControl = new FormControl('', Validators.email);
    this.privacyBox = new FormControl(false, Validators.requiredTrue);
    this.termBox = new FormControl(false, Validators.requiredTrue);
    this.checkboxFormControl = new FormControl(false);

    this.typeFormGroup = this.formBuilder.group({
      typeFormControl: this.typeFormControl
    });

    this.contentFormGroup = this.formBuilder.group({
      contentFormControl: this.contentFormControl
    });

    this.additionalFormGroup = this.formBuilder.group({
      sourceFormControl: this.sourceFormControl,
      sourceTextFormControl: this.sourceTextFormControl,
      frequencyFormControl: this.frequencyFormControl,
      receivedFormControl: this.receivedFormControl
    });

    this.confirmationFormGroup = this.formBuilder.group({
      emailFormControl: this.emailFormControl,
      privacyBox: this.privacyBox,
      termBox: this.termBox,
      checkboxFormControl: this.checkboxFormControl
    });

    this.getItemTypes();
    this.mailGiven = false;
  }

  getItemTypes(): void {
    this.loaderService.show();

    this.itemTypesService
      .getItemTypes()
      .then((itemTypes) => (this.itemTypes = itemTypes))
      .catch()
      .finally(() => this.loaderService.hide());
  }

  submit() {
    if (this.checkboxFormControl.value) {
      this.submitted = true;
      return;
    }
    const item = {
      content: this.contentFormControl.value,
      received_date: this.receivedFormControl.value.format('YYYY-MM-DD HH:mm:ss'),
      frequency: this.frequencyFormControl.value,
      item_type_id: this.typeFormControl.value,
      source:
        this.sourceFormControl.value === 'other' && this.sourceTextFormControl.value && this.sourceTextFormControl.value !== ''
          ? this.sourceTextFormControl.value
          : this.sourceFormControl.value
    } as Item;
    if (this.emailFormControl.value && this.emailFormControl.value !== '') {
      item.mail = this.emailFormControl.value;
      this.mailGiven = true;
    }

    this.loaderService.show();
    this.submitItemService
      .submitItem(item)
      .then((result) => {
        this.router.navigateByUrl('submit/success').then().catch();
        if (result.status === 'closed') {
          this.item = result;
          this.itemClosed = true;
        }

        this.submitted = true;
      })
      .catch((_) => {
        this.snackBar.open('Dein Fall konnte nicht eingereicht werden. Versuch es später nochmal.', 'Ok', {
          duration: 2000
        });
      })
      .finally(() => this.loaderService.hide());
  }

  navigate(url: string) {
    this.router.navigateByUrl(url).then().catch();
  }
}
