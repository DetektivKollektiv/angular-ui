import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SubmitItemService} from '../../services/submit-item.service';
import {Item} from '../../../model/item';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import * as moment from 'moment';
import {LoaderService} from '../../../shared/loader/service/loader.service';

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
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class SubmitComponent implements OnInit {
  formGroup: FormGroup;

  contentFormControl = new FormControl('', Validators.required);
  sourceFormControl = new FormControl();
  sourceTextFormControl = new FormControl();
  channelFormControl = new FormControl();
  channelTextFormControl = new FormControl();
  frequencyFormControl = new FormControl();
  receivedFormControl = new FormControl({ value: moment(), disabled: true });
  emailFormControl = new FormControl('', Validators.email);
  mobileFormControl = new FormControl();
  privacyBox = new FormControl(false, Validators.requiredTrue);
  termBox =  new FormControl(false, Validators.requiredTrue);
  submitEnabled: boolean;
  today = moment();
  submitted: boolean;

  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  constructor(private formBuilder: FormBuilder,
              private submitItemService: SubmitItemService,
              private router: Router,
              private snackBar: MatSnackBar,
              private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.submitted = false;
    this.submitEnabled = false;

    this.contentFormControl = new FormControl('', Validators.required);
    this.sourceFormControl = new FormControl();
    this.sourceTextFormControl = new FormControl();
    this.channelFormControl = new FormControl();
    this.channelTextFormControl = new FormControl();
    this.frequencyFormControl = new FormControl();
    this.receivedFormControl = new FormControl({ value: moment(), disabled: true });
    this.emailFormControl = new FormControl('', Validators.email);
    this.mobileFormControl = new FormControl();
    this.privacyBox = new FormControl(false, Validators.requiredTrue);
    this.termBox =  new FormControl(false, Validators.requiredTrue);

    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          contentFormControl: this.contentFormControl
        }),
        this.formBuilder.group({
          sourceFormControl: this.sourceFormControl,
          sourceTextFormControl: this.sourceTextFormControl,
          channelFormControl: this.channelFormControl,
          channelTextFormControl: this.channelTextFormControl,
          frequencyFormControl: this.frequencyFormControl,
          receivedFormControl: this.receivedFormControl
        }),
        this.formBuilder.group({
          emailFormControl: this.emailFormControl,
          mobileFormControl: this.mobileFormControl,
          privacyBox : this.privacyBox,
          termBox :  this.termBox,
        })
      ]),
    });
  }

  submit() {
    const item = {
      content: this.contentFormControl.value,
      mail: this.emailFormControl.value,
      received_date: this.receivedFormControl.value.format('YYYY-MM-DD HH:mm:ss'),
      phone: this.mobileFormControl.value,
      frequency: this.frequencyFormControl.value,
      source: this.sourceFormControl.value === '4' ? this.sourceTextFormControl.value : this.sourceFormControl.value,
      channel: this.channelFormControl.value === 'other' ? this.channelTextFormControl.value : this.channelFormControl.value
    } as Item;


    this.loaderService.show();
    this.submitItemService.submitItem(item)
      .then(_ => {
        this.submitted = true;
        this.loaderService.hide();
        // this.router.navigate(['finish']).then(() => this.loaderService.hide());
      })
      .catch(_ => {
        this.loaderService.hide();
        this.snackBar.open('Dein Fall konnte nicht eingereicht werden. Versuch es später nochmal.', 'Ok', {
          duration: 2000
        });
      });
  }


  resolved(response: string) {
    this.submitEnabled = true;
  }

  disabled(){
    return !this.submitEnabled || !this.privacyBox.value || !this.termBox.value;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url).then();
  }
}
