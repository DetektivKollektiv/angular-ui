import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@shared/material/material.module';

import { FactcheckComponent } from './factcheck.component';

describe('FactcheckComponent', () => {
  let component: FactcheckComponent;
  let fixture: ComponentFixture<FactcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactcheckComponent],
      imports: [MaterialModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
