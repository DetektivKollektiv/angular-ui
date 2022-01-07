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
          Validators.compose([
            Validators.minLength(8),
            Validators.required,
            CustomValidators.patternValidator(/\d/, { digit: true }),
            CustomValidators.patternValidator(/[A-Z]/, {
              upperCase: true,
            }),
            CustomValidators.patternValidator(/[a-z]/, { lowerCase: true }),
            CustomValidators.patternValidator(/\W/, { specialChar: true }),
          ]),
        ],
        confirmPassword: ['', Validators.required],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
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
              'Eine Nutzer*in mit diesem Namen existiert bereits. Verwende bitte einen anderen Namen.';
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

  getErrorMessage() {
    if (this.formControls.password.hasError('required')) {
      return 'Bitte gib hier dein gewünschtes Passwort ein.';
    }

    if (this.formControls.password.hasError('minlength')) {
      return 'Dein Passwort muss mindestens 8 Zeichen enthalten';
    }

    if (this.formControls.password.hasError('digit')) {
      return 'Dein Passwort muss mindestens eine Ziffer enthalten';
    }

    if (this.formControls.password.hasError('upperCase')) {
      return 'Dein Passwort muss mindestens einen Großbuchstaben enthalten';
    }

    if (this.formControls.password.hasError('lowerCase')) {
      return 'Dein Passwort muss mindestens einen Kleinbuchstaben enthalten';
    }

    return this.formControls.password.hasError('specialChar')
      ? 'Dein Passwort muss mindestens ein Sonderzeichen enthalten'
      : '';
  }
}
