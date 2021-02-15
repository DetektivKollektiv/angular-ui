import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesComponent } from './issues.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { HelperModule } from '../../../shared/helper/helper.module';


describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesComponent],
      imports: [MaterialModule, HelperModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
