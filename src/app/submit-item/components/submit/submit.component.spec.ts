import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitComponent } from './submit.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {SubmitItemService} from '../../services/submit-item.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {MaterialModule} from '../../../shared/material/material.module';
import {HelperModule} from '../../../shared/helper/helper.module';
import {RecaptchaModule} from 'ng-recaptcha';

describe('SubmitComponent', () => {
  let component: SubmitComponent;
  let fixture: ComponentFixture<SubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        LoaderModule,
        HelperModule,
        RecaptchaModule
      ],
      declarations: [ SubmitComponent ],
      providers: [
        FormBuilder,
        SubmitItemService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
