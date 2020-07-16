import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityGuidelinesComponent } from './community-guidelines.component';

describe('CommunityGuidelinesComponent', () => {
  let component: CommunityGuidelinesComponent;
  let fixture: ComponentFixture<CommunityGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
