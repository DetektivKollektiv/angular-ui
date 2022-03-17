import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newsletter-section',
  templateUrl: './newsletter-section.component.html',
  styleUrls: ['./newsletter-section.component.scss']
})
export class NewsletterSectionComponent implements OnInit {
  public form: FormGroup;

  private mailChimpEndpoint = 'https://codetekt.us2.list-manage.com/subscribe/post-json?u=63fad79ffa8a7a65fc183df63&id=256db79ce8';

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      firstname: [''],
      lastname: ['']
    });
  }

  public subscribe(formDirective: FormGroupDirective): void {
    const params = new HttpParams()
      .set('FNAME', this.form.controls.firstname.value)
      .set('LNAME', this.form.controls.lastname.value)
      .set('EMAIL', this.form.controls.email.value)
      .set('b_63fad79ffa8a7a65fc183df63_256db79ce8', '');

    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;

    this.http.jsonp(mailChimpUrl, 'c').subscribe((resp: { result: string; msg: string }) => {
      if (resp.result === 'success') {
        this.snackBar.open(resp.msg);
        formDirective.resetForm();
        this.form.reset();
      } else {
        this.snackBar.open('Fehler beim abonnieren.');
      }
    });
  }
}
