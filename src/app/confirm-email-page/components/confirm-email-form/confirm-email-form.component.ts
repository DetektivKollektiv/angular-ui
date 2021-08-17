import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { OperationResult } from '../../../shared/helper/model/operation-result';
import { ConfirmComponent } from '../../../shared/auth/dialogs/confirm/confirm.component';
import { ConfirmResult } from '../../../shared/auth/model/confirm-result';
import { ForgotPasswordComponent } from '../../../shared/auth/dialogs/forgot-password/forgot-password.component';
import { Globals } from '../../../shared/helper/globals/globals';
import {MatSnackBar} from '@angular/material/snack-bar';



import { CustomValidators } from '../../../shared/helper/validators/custom-validators';
import { LoginResult } from '../../../shared/auth/model/login-result';

import { SignupResult } from '../../../shared/auth/model/signup-result';

@Component({
  selector: 'app-confirm-email-form',
  templateUrl: './confirm-email-form.component.html',
  styleUrls: ['./confirm-email-form.component.scss']
})


export class ConfirmEmailFormComponent implements OnInit {
  public form: FormGroup;
  public invalid: boolean;
  public title = 'Bei deiner Registrierung haben wir dir einen Code zugeschickt. Gib ihn hier ein um deine E-Mail Adresse zu verifizieren.';

  closeResult = {
    success: true
  } as ConfirmResult;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private loaderService: LoaderService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    let userName = '';
    this.route.queryParams
      .subscribe(params => {
        userName = params.username;
      }
    );

    this.form = this.formBuilder.group({
      // username: [this.data.username ?? '', Validators.required],
      username: [userName, Validators.required],
      code: ['', Validators.required]
    });
  }

  get formControls() {
    return this.form.controls;
  }

  onConfirmSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.loaderService.show();

    this.invalid = false;

    this.authService.confirmSignUp(this.formControls.username.value, this.formControls.code.value)
      .then(() => {
        this.router.navigate(['/login'], {queryParams: {username: this.formControls.username.value}});
      })
      .catch(() => this.invalid = true)
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
