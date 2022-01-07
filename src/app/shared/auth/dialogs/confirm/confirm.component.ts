import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../auth-service/auth.service';
import {LoaderService} from '../../../loader/service/loader.service';
import {ConfirmResult} from '../../model/confirm-result';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  public title = 'Bei deiner Registrierung haben wir dir einen Code zugeschickt. Gib ihn hier ein um deine E-Mail-Adresse zu verifizieren.';

  public confirmForm: FormGroup;
  public confirmationInvalid: boolean;
  closeResult = {
    success: true
  } as ConfirmResult;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ConfirmComponent>,
              private authService: AuthService,
              private loaderService: LoaderService,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder) {
    this.dialogRef.disableClose = true;
  }

  get formControls() {
    return this.confirmForm.controls;
  }

  ngOnInit(): void {
    this.confirmForm = this.formBuilder.group({
      username: [this.data.username ?? '', Validators.required],
      code: ['', Validators.required]
    });
  }

  onConfirmSubmit() {
    if (this.confirmForm.invalid) {
      return;
    }

    this.loaderService.show();

    this.confirmationInvalid = false;

    this.authService.confirmSignUp(this.formControls.username.value, this.formControls.code.value)
      .then(() => {
        this.dialogRef.close({success: true} as ConfirmResult);
      })
      .catch(() => this.confirmationInvalid = true)
      .finally(() => this.loaderService.hide());
  }

  resendCode() {
    if (this.formControls.username.invalid) {
      return;
    }

    this.loaderService.show();

    this.authService.resendSignUp(this.formControls.username.value)
      .then(() => this.snackBar.open('Wir haben dir einen neuen Link zugesendet.', '', {duration: 3000}))
      .catch(() => this.snackBar.open('Leider ist etwas schiefgelaufen. Versuche es später nochmal.', '', {duration: 3000}))
      .finally(() => this.loaderService.hide());
  }
}
