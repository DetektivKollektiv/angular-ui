import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseListItemComponent } from './case-list-item.component';

describe('CaseListItemComponent', () => {
  let component: CaseListItemComponent;
  let fixture: ComponentFixture<CaseListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
