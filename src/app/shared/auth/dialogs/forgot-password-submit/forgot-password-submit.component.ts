import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../auth-service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../../loader/service/loader.service';

@Component({
  selector: 'app-forgot-password-submit',
  templateUrl: './forgot-password-submit.component.html',
  styleUrls: ['./forgot-password-submit.component.scss'],
})
export class ForgotPasswordSubmitComponent implements OnInit {
  public title: string;

  public invalid: boolean;

  public form: FormGroup;
  public closeResult = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ForgotPasswordSubmitComponent>,
    private authService: AuthService,
    private loaderService: LoaderService,
    private formBuilder: FormBuilder
  ) {
    this.dialogRef.disableClose = true;
  }

  get formControls() {
    return this.form.controls;
  }

  ngOnInit(): void {
    switch (this.data.details.deliveryMedium) {
      case 'SMS':
        this.title = `Wir haben dir einen Code zum Zurücksetzen deines Passworts per SMS an die Nummer `
        + `${this.data.details.Destination} geschickt.`;
        break;
      case 'EMAIL':
        this.title = `Wir haben dir einen Code zum Zurücksetzen deines Passworts per E-Mail an die Adresse `
        + `${this.data.details.Destination} geschickt.`;
        break;
      default:
        this.title = ``;
        break;
    }

    this.form = this.formBuilder.group({
      username: [this.data.username, Validators.required],
      code: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  forgotPasswordSubmit() {
    this.invalid = false;

    this.loaderService.show();

    this.authService
      .forgotPasswordSubmit(
        this.formControls.username.value,
        this.formControls.code.value,
        this.formControls.password.value
      )
      .then((value) => {
        this.dialogRef.close(value);
      })
      .catch(() => (this.invalid = true))
      .finally(() => this.loaderService.hide());
  }
}
