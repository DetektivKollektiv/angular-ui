import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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
    // private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private loaderService: LoaderService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    let userName = '';
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    // });

    this.route.queryParams
        // .filter(params => params.username)
        .subscribe(params => {
          console.log(params); // { order: "popular" }

          userName = params.username;
          console.log(userName); // popular
        }
      );

    this.loginForm = this.formBuilder.group({
      username: [userName , Validators.required],
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
          this.router.navigate(['/confirm-email'], { queryParams: { username: this.formControls.username.value}});  
        }

        this.loginInvalid = true;
      })
      .finally(() => this.loaderService.hide());
  }
}
