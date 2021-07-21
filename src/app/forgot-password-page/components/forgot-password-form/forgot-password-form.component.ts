import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { OperationResult } from '../../../shared/helper/model/operation-result';
import { LoginResult } from '../../../shared/auth/model/login-result';
import { LoginResultReason } from '../../../shared/auth/model/LoginResultReason';
import { ConfirmComponent } from '../../../shared/auth/dialogs/confirm/confirm.component';
import { ConfirmResult } from '../../../shared/auth/model/confirm-result';
import { ForgotPasswordComponent } from '../../../shared/auth/dialogs/forgot-password/forgot-password.component';
import { ForgotPasswordSubmitComponent } from '../../../shared/auth/dialogs/forgot-password-submit/forgot-password-submit.component';
import { Globals } from '../../../shared/helper/globals/globals';
import { ForgotPasswordResult } from '../../../shared/auth/model/forgot-password-result';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {
  public loginForm: FormGroup;
  public loginInvalid: boolean;
  closeResult = {
    success: true,
    reason: LoginResultReason.Cancelled,
  } as LoginResult;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onLoginSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loaderService.show();

    this.loginInvalid = false;

    this.authService
      .signIn(
        this.formControls.username.value,
        this.formControls.password.value
      )
      .then(() => {
          this.router.navigate(['/']);
      })
      .catch((reason: OperationResult<any>) => {
        if (reason.payload?.code === 'UserNotConfirmedException') {
          this.confirm();
        }

        this.loginInvalid = true;
      })
      .finally(() => this.loaderService.hide());
  }

  forgotPassword() {
    this.dialog
      .open(ForgotPasswordComponent, {
        ...Globals.dialogData,
        ...{ data: { username: this.formControls.username.value } },
      })
      .afterClosed()
      .subscribe((value: ForgotPasswordResult) => {
        if (value.success) {
          this.dialog.open(ForgotPasswordSubmitComponent, {
            ...Globals.dialogData,
            ...{
              data: {
                username: this.formControls.username.value,
                details: value.deliveryDetails,
              },
            },
          });
        }
      });
  }

  private confirm() {
    this.dialog
      .open(ConfirmComponent, {
        ...Globals.dialogData,
        ...{ data: { username: this.formControls.username.value } },
      })
      .afterClosed()
      .subscribe((result: ConfirmResult) => {
        if (result.success) {
          this.onLoginSubmit();
        }
      });
  }
}
