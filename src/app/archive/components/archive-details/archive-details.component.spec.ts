import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDetailsComponent } from './archive-details.component';

describe('ArchiveDetailsComponent', () => {
  let component: ArchiveDetailsComponent;
  let fixture: ComponentFixture<ArchiveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
