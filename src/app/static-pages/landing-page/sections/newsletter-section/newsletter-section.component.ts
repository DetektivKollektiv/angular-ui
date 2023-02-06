import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-newsletter-section',
  templateUrl: './newsletter-section.component.html',
  styleUrls: ['./newsletter-section.component.scss']
})
export class NewsletterSectionComponent implements OnInit, OnDestroy {
  private destroy$: Subject<any> = new Subject<any>();
  public form: FormGroup;

  private mailChimpEndpoint = 'https://codetekt.us2.list-manage.com/subscribe/post-json?u=63fad79ffa8a7a65fc183df63&id=256db79ce8';

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar) {}

  @HostListener('unloaded')
  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

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

    this.http.jsonp(mailChimpUrl, 'c').pipe(takeUntil(this.destroy$)).subscribe((resp: { result: string; msg: string }) => {
      if (resp.result === 'success') {
        this.snackBar.open(resp.msg, '', { duration: 5000 });
        formDirective.resetForm();
        this.form.reset();
      } else {
        this.snackBar.open('Fehler beim abonnieren.', '', { duration: 5000 });
      }
    });
  }
}
