import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckResultCreatedDialogComponent } from './check-result-dialog.component';

describe('CheckResultDialogComponent', () => {
  let component: CheckResultCreatedDialogComponent;
  let fixture: ComponentFixture<CheckResultCreatedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckResultCreatedDialogComponent ]
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
