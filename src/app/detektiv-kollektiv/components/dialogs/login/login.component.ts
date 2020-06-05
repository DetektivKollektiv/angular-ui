import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../shared/auth/auth-service/auth.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signInForm: FormGroup = new FormGroup({});
  public registerForm: FormGroup = new FormGroup({});
  private return: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private dialogRef: MatDialogRef<LoginComponent>) {
    this.signInForm = formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.registerForm = formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        email: ['', [Validators.required]]
      },
      {
        validators: this.checkPassword.bind(this)
      });
  }

  ngOnInit(): void {
    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close(false);
    });
  }

  signIn() {
    this.authService.signIn().then(() => this.dialogRef.close(true));
  }

  register() {
    this.authService.register(
      this.registerForm.value.username,
      this.registerForm.value.password,
      this.registerForm.value.email
    ).then(() => this.dialogRef.close(true));
  }

  private checkPassword(formGroup: FormGroup) {
    const {value: password} = formGroup.get('password');
    const {value: confirmPassword} = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : {passwordNotMatch: true};
  }
}
