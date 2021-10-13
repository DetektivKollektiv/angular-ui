import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitNoAuthComponent } from './submit-no-auth.component';

describe('SubmitNoAuthComponent', () => {
  let component: SubmitNoAuthComponent;
  let fixture: ComponentFixture<SubmitNoAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitNoAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitNoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
