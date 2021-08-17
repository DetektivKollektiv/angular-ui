import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveListItemComponent } from './archive-list-item.component';

describe('CaseListItemComponent', () => {
  let component: ArchiveListItemComponent;
  let fixture: ComponentFixture<ArchiveListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
