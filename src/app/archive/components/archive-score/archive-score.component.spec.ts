import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveScoreComponent } from './archive-score.component';

describe('ArchiveScoreComponent', () => {
  let component: ArchiveScoreComponent;
  let fixture: ComponentFixture<ArchiveScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
