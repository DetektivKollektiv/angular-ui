import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveListComponent } from './archive-list.component';

describe('CaseListComponent', () => {
  let component: ArchiveListComponent;
  let fixture: ComponentFixture<ArchiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
