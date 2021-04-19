import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDialogComponent } from './mobile-dialog.component';

describe('MobileDialogComponent', () => {
  let component: MobileDialogComponent;
  let fixture: ComponentFixture<MobileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
