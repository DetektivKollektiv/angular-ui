import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckResultCreatedDialogComponent} from './check-result-created-dialog.component';
import {MatDialogRef} from '@angular/material/dialog';
import {TranslateModule} from '@ngx-translate/core';

describe('CheckResultDialogComponent', () => {
  let component: CheckResultCreatedDialogComponent;
  let fixture: ComponentFixture<CheckResultCreatedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [CheckResultCreatedDialogComponent],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckResultCreatedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
