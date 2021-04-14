import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth-service/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { LoaderService } from '../../../loader/service/loader.service';
import { CustomValidators } from '../../../helper/validators/custom-validators';
import { SignupResult } from '../../model/signup-result';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public signupInvalid: boolean;
  public signUpError: string;
  public closeResult = {
    success: false,
  } as SignupResult;

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private authService: AuthService,
    private loaderService: LoaderService,
    private formBuilder: FormBuilder
  ) {
    this.dialogRef.disableClose = true;
  }

  get formControls() {
    return this.signupForm.controls;
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: [
          '',
          Validators.compose([Validators.minLength(8), Validators.required]),
        ],
        confirmPassword: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
      },
      {
        validators: CustomValidators.mustMatch('password', 'confirmPassword'),
      }
    );
  }

  public signUp(): void {
    if (this.signupForm.invalid) {
      return;
    }

    this.loaderService.show();

    this.signupInvalid = false;

    this.authService
      .signUp(
        this.formControls.username.value,
        this.formControls.password.value,
        this.formControls.email.value
      )
      .then(() => {
        this.dialogRef.close({
          success: true,
        } as SignupResult);
      })
      .catch((result) => {
        switch (result.payload.code) {
          case 'UsernameExistsException':
            this.signUpError =
              'Ein Nutzer mit diesem Namen existiert bereits. Verwende bitte einen anderen Namen.';
            break;
          default:
            this.signUpError =
              'Leider ist bei der Registrierung etwas schief gelaufen. Versuche es später erneut.';
            break;
        }

        this.signupInvalid = true;
      })
      .finally(() => this.loaderService.hide());
  }
}
