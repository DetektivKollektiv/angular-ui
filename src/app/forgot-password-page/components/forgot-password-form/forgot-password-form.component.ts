import { Router } from '@angular/router';
import {Component, Inject, inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { OperationResult } from '../../../shared/helper/model/operation-result';
import { LoginResult } from '../../../shared/auth/model/login-result';
import { ForgotPasswordResult } from '../../../shared/auth/model/forgot-password-result';
import { LoginResultReason } from '../../../shared/auth/model/LoginResultReason';
import { ConfirmComponent } from '../../../shared/auth/dialogs/confirm/confirm.component';
import { ConfirmResult } from '../../../shared/auth/model/confirm-result';
import { ForgotPasswordComponent } from '../../../shared/auth/dialogs/forgot-password/forgot-password.component';
import { ForgotPasswordSubmitComponent } from '../../../shared/auth/dialogs/forgot-password-submit/forgot-password-submit.component';
import { Globals } from '../../../shared/helper/globals/globals';


@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})

export class ForgotPasswordFormComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  invalid: boolean;

  constructor(
      private authService: AuthService,
      private loaderService: LoaderService,
      private formBuilder: FormBuilder,
      private router: Router,
    ) {

  }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  get formControls() {
    return this.forgotPasswordForm.controls;
  }

  onSubmit() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    this.invalid = false;

    this.loaderService.show();

    this.authService.forgotPassword(this.formControls.username.value)
      .then(value => {
        if (value.success && value.payload.CodeDeliveryDetails) {
        this.router.navigate(['/set-password']);
        }
      })
      .catch(() => this.invalid = true)
      .finally(() => this.loaderService.hide());
  }
}
