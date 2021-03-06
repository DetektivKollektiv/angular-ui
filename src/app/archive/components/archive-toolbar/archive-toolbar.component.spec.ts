import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveToolbarComponent } from './archive-toolbar.component';

describe('ArchiveToolbarComponent', () => {
  let component: ArchiveToolbarComponent;
  let fixture: ComponentFixture<ArchiveToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
