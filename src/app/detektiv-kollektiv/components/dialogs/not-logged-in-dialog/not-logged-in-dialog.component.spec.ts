import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedInDialogComponent } from './not-logged-in-dialog.component';

describe('NotLoggedInDialogComponent', () => {
  let component: NotLoggedInDialogComponent;
  let fixture: ComponentFixture<NotLoggedInDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotLoggedInDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLoggedInDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
