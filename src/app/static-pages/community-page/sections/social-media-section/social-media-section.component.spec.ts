import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaSectionComponent } from './social-media-section.component';

describe('SocialMediaSectionComponent', () => {
  let component: SocialMediaSectionComponent;
  let fixture: ComponentFixture<SocialMediaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
