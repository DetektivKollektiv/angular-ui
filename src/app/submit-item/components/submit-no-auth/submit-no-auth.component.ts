import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { OperationResult } from '../../../shared/helper/model/operation-result';
import { LoaderService } from '../../../shared/loader/service/loader.service';

@Component({
  selector: 'app-submit-no-auth',
  templateUrl: './submit-no-auth.component.html',
  styleUrls: ['./submit-no-auth.component.scss'],
})
export class SubmitNoAuthComponent {
  loginFormData = {
    email: null,
    password: null,
  };

  constructor(private loaderService: LoaderService, private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.loaderService.show();

    // this.loginInvalid = false;

    this.authService
      .signIn(this.loginFormData.email, this.loginFormData.password)
      .catch((reason: OperationResult<any>) => {
        if (reason.payload?.code === 'UserNotConfirmedException') {
          this.router.navigate(['/confirm-email'], { queryParams: { username: this.loginFormData.email } });
        }
        // this.loginInvalid = true;
      })
      .finally(() => this.loaderService.hide());
  }
}
