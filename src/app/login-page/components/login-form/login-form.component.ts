import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { OperationResult } from '../../../shared/helper/model/operation-result';
import { LoginResult } from '../../../shared/auth/model/login-result';
import { LoginResultReason } from '../../../shared/auth/model/LoginResultReason';
// import { ConfirmComponent } from '../../../shared/auth/components/confirm/confirm.component';
import { ConfirmResult } from '../../../shared/auth/model/confirm-result';
// import { ForgotPasswordComponent } from '../../../shared/auth/dialogs/forgot-password/forgot-password.component';
// import { ForgotPasswordSubmitComponent } from '../forgot-password-submit/forgot-password-submit.component';
// import { Globals } from '../../../helper/globals/globals';
// import { ForgotPasswordResult } from '../../../shared/auth/model/forgot-password-result';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  public loginInvalid: boolean;
  closeResult = {
    success: true,
    reason: LoginResultReason.Cancelled,
  } as LoginResult;

  constructor(
    // public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService,
    private loaderService: LoaderService,
    // private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    // this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onLoginSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    // this.loaderService.show();

    this.loginInvalid = false;

    this.authService
      .signIn(
        this.formControls.username.value,
        this.formControls.password.value
      )
      // .then(() => {
      //   this.dialogRef.close({
      //     success: true,
      //     reason: LoginResultReason.LoginSuccessful,
      //   } as LoginResult);
      // })
      .catch((reason: OperationResult<any>) => {
        if (reason.payload?.code === 'UserNotConfirmedException') {
          // this.confirm();
        }

        this.loginInvalid = true;
      })
      // .finally(() => this.loaderService.hide());
  }

  forgotPassword() {
    
  }


}
