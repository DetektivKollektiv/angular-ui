import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../auth-service/auth.service';
import {LoaderService} from '../../../loader/service/loader.service';
import {ConfirmResult} from '../../model/confirm-result';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  public confirmForm: FormGroup;
  public confirmationInvalid: boolean;
  closeResult = {
    success: true
  } as ConfirmResult;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ConfirmComponent>,
              private authService: AuthService,
              private loaderService: LoaderService,
              private formBuilder: FormBuilder) {
    this.dialogRef.disableClose = true;
  }

  get title() {
    return this.data.initial
      ? 'Gib hier den Code ein, den du gerade per E-Mail von uns erhalten hast um deine E-Mail Adresse zu verifizieren.'
      : 'Bei deiner Registrierung haben wir dir einen Code zugeschickt. Gib ihn hier ein um deine E-Mail Adresse zu verifizieren.';
  }

  get formControls() {
    return this.confirmForm.controls;
  }

  ngOnInit(): void {
    this.confirmForm = this.formBuilder.group({
      username: ['', Validators.required],
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

  }
}
