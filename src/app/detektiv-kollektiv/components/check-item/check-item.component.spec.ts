import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckItemComponent} from './check-item.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatDialogModule} from '@angular/material/dialog';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {ItemsService} from '../../services/items/items.service';
import {FormBuilder} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

describe('CheckItemComponent', () => {
  let component: CheckItemComponent;
  let fixture: ComponentFixture<CheckItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        LoaderModule,
        TranslateModule.forRoot()
      ],
      declarations: [CheckItemComponent],
      providers: [
        ItemsService,
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
