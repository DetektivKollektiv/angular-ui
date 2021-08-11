import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { OperationResult } from '../../../shared/helper/model/operation-result';
// import { LoginResult } from '../../../shared/auth/model/set-password-result';
// import { LoginResultReason } from '../../../shared/auth/model/LoginResultReason';
import { ConfirmComponent } from '../../../shared/auth/dialogs/confirm/confirm.component';
import { ConfirmResult } from '../../../shared/auth/model/confirm-result';
import { ForgotPasswordComponent } from '../../../shared/auth/dialogs/forgot-password/forgot-password.component';
// import { ForgotPasswordSubmitComponent } from '../../../shared/auth/dialogs/forgot-password-submit/forgot-password-submit.component';
import { Globals } from '../../../shared/helper/globals/globals';
import { ForgotPasswordResult } from '../../../shared/auth/model/forgot-password-result';

@Component({
  selector: 'app-set-password-form',
  templateUrl: './set-password-form.component.html',
  styleUrls: ['./set-password-form.component.scss']
})


export class SetPasswordFormComponent implements OnInit {
  public title: string;

  public invalid: boolean;

  public form: FormGroup;
  public closeResult = {};

  constructor(
    // privata data: any;
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService,
    private formBuilder: FormBuilder
  ) {
  }

  get formControls() {
    return this.form.controls;
  }


  ngOnInit(): void {
    // todo: figure out how to pass in this.data

    // switch (this.data.details.DeliveryMedium) {
    //   case 'SMS':
    //     this.title = `Wir haben dir einen Code zum Zurücksetzen deines Passworts per SMS an die Nummer ${this.data.details.Destination} geschickt.`;
    //     break;
    //   case 'EMAIL':
    //     this.title = `Wir haben dir einen Code zum Zurücksetzen deines Passworts per E-Mail an die Adresse ${this.data.details.Destination} geschickt.`;
    //     break;
    //   default:
    //     this.title = ``;
    //     break;
    // }
    const title = `Wir haben dir einen Code zum Zurücksetzen deines Passworts per E-Mail geschickt.`;
    this.title = title;
    this.form = this.formBuilder.group({
      username: ['', Validators.required], // todo: fix to use username
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
      .then(() => {
          this.router.navigate(['/login']);
      })
      .catch(() => (this.invalid = true))
      .finally(() => this.loaderService.hide());
  }
}
