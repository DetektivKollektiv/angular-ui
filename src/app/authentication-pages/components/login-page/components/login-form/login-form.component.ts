import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '@shared/loader/service/loader.service';
import { OperationResult } from '@shared/helper/model/operation-result';
import { LoginResult } from '@shared/auth/model/login-result';
import { LoginResultReason } from '@shared/auth/model/LoginResultReason';

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
    reason: LoginResultReason.Cancelled
  } as LoginResult;

  constructor(
    // private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private loaderService: LoaderService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    let userName = '';

    this.route.queryParams.subscribe((params) => {
      userName = params.username;
    });

    this.loginForm = this.formBuilder.group({
      username: [userName, Validators.required],
      password: ['', Validators.required]
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
      .signIn(this.formControls.username.value, this.formControls.password.value)
      .then(() => {
        this.router.navigate(['/my-profile']);
      })
      .catch((reason: OperationResult<any>) => {
        if (reason.payload?.code === 'UserNotConfirmedException') {
          this.router.navigate(['/confirm-email'], { queryParams: { username: this.formControls.username.value } });
        }

        this.loginInvalid = true;
      })
      .finally(() => this.loaderService.hide());
  }
}
