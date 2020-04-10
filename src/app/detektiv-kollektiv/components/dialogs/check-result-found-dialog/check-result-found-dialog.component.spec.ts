import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckResultFoundDialogComponent } from './check-result-found-dialog.component';

describe('CheckResultFoundDialogComponent', () => {
  let component: CheckResultFoundDialogComponent;
  let fixture: ComponentFixture<CheckResultFoundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckResultFoundDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckResultFoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
