import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SubmitItemService } from '../../services/submit-item.service';
import { Item } from '../../../model/item';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { ItemTypesService } from '../../services/item-types/item-types.service';
import { ItemType } from '../../model/item-type';
import { TranslatePipe } from '@ngx-translate/core';

export const MY_FORMATS = {
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
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
  mobileFormControl: FormControl;
  privacyBox: FormControl;
  termBox: FormControl;

  submitEnabled: boolean;
  today = moment();
  submitted: boolean;
  itemTypes: ItemType[];

  constructor(
    private formBuilder: FormBuilder,
    private submitItemService: SubmitItemService,
    private itemTypesService: ItemTypesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private loaderService: LoaderService
  ) {}

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
      disabled: true,
    });
    this.emailFormControl = new FormControl('', Validators.email);
    this.mobileFormControl = new FormControl();
    this.privacyBox = new FormControl(false, Validators.requiredTrue);
    this.termBox = new FormControl(false, Validators.requiredTrue);

    this.typeFormGroup = this.formBuilder.group({
      typeFormControl: this.typeFormControl,
    });

    this.contentFormGroup = this.formBuilder.group({
      contentFormControl: this.contentFormControl,
    });

    this.additionalFormGroup = this.formBuilder.group({
      sourceFormControl: this.sourceFormControl,
      sourceTextFormControl: this.sourceTextFormControl,
      frequencyFormControl: this.frequencyFormControl,
      receivedFormControl: this.receivedFormControl,
    });

    this.confirmationFormGroup = this.formBuilder.group({
      emailFormControl: this.emailFormControl,
      privacyBox: this.privacyBox,
      termBox: this.termBox,
    });

    this.getItemTypes();
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
    const item = {
      content: this.contentFormControl.value,
      mail: this.emailFormControl.value,
      received_date: this.receivedFormControl.value.format(
        'YYYY-MM-DD HH:mm:ss'
      ),
      phone: this.mobileFormControl.value,
      frequency: this.frequencyFormControl.value,
      item_type_id: this.typeFormControl.value,
      source:
        this.sourceFormControl.value === '4'
          ? this.sourceTextFormControl.value
          : this.sourceFormControl.value,
    } as Item;

    this.loaderService.show();
    this.submitItemService
      .submitItem(item)
      .then((_) => {
        this.submitted = true;
        this.loaderService.hide();
      })
      .catch((_) => {
        this.loaderService.hide();
        this.snackBar.open(
          'Dein Fall konnte nicht eingereicht werden. Versuch es später nochmal.',
          'Ok',
          {
            duration: 2000,
          }
        );
      });
  }

  resolved() {
    this.submitEnabled = true;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url).then().catch();
  }
}
