import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Issue } from '../../model/issue';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { IssueService } from '../../services/issue.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Logger } from 'aws-amplify';
import { Router } from '@angular/router';



@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issueFormGroup: FormGroup;

  categoryFormControl: FormControl;
  messageFormControl: FormControl;
  checkboxFormControl: FormControl;

  submitted: boolean;

  constructor(
    private loaderService: LoaderService,
    private issueService: IssueService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.categoryFormControl = new FormControl(null, Validators.required);
    this.messageFormControl = new FormControl(null, Validators.required);
    this.checkboxFormControl = new FormControl();
    this.issueFormGroup = this.formBuilder.group({
      categoryFormControl: this.categoryFormControl,
      messageFormControl: this.messageFormControl,
      checkboxFormControl: this.checkboxFormControl
    });
  }

  submit() {
    if (this.checkboxFormControl.value === true) {
      this.navigate('/');
      this.snackBar.open(
        'Deine Nachricht wurde versendet. Wir kümmern uns schnellstmöglich um dein Anliegen!',
        'Ok',
        {
          duration: 3000,
        }
      );
      return;
    }
    const issue = {
      category: this.categoryFormControl.value,
      message: this.messageFormControl.value,
      // TODO: Load item_id dynamically when component is loaded from archive
      // item_id: ;
    } as Issue;
    this.loaderService.show();
    this.issueService
      .submitIssue(issue)
      .then((_) => {
        this.submitted = true;
        this.loaderService.hide();
        this.navigate('/');
        this.snackBar.open(
          'Deine Nachricht wurde versendet. Wir kümmern uns schnellstmöglich um dein Anliegen!',
          'Ok',
          {
            duration: 2000,
          }
        );
      })
      .catch((_) => {
        this.loaderService.hide();
        this.snackBar.open(
          'Deine Nachricht konnte nicht versendet werden. Versuch es später nochmal.',
          'Ok',
          {
            duration: 3000,
          }
        );
      });
  }
  navigate(url: string) {
    this.router.navigateByUrl(url).then().catch();
  }

}
