import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Issue } from '../../model/issue';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { IssueService } from '../../services/issue.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Logger } from 'aws-amplify';



@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issueFormGroup: FormGroup;

  categoryFormControl: FormControl;
  messageFormControl: FormControl;

  submitted: boolean;

  constructor(
    private loaderService: LoaderService,
    private issueService: IssueService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder


  ) { }

  ngOnInit(): void {
    this.categoryFormControl = new FormControl('', Validators.required);
    this.messageFormControl = new FormControl('', Validators.required);

    this.issueFormGroup = this.formBuilder.group({
      categoryFormControl: this.categoryFormControl,
      messageFormControl: this.messageFormControl
    });
  }

  submit() {
    const logger = new Logger('foo');

    const issue = {
      category: this.categoryFormControl.value,
      message: this.messageFormControl.value,
      // item_id: ;
    } as Issue;
    this.loaderService.show();
    this.issueService
      .submitIssue(issue)
      .then((_) => {
        this.submitted = true;
        this.loaderService.hide();
      })
      .catch((e) => {
        logger.error('error happened', e);
        this.loaderService.hide();
        this.snackBar.open(
          'Deine Nachricht konnte nicht versendet werden. Versuch es später nochmal.',
          'Ok',
          {
            duration: 2000,
          }
        );
      });
  }

}
