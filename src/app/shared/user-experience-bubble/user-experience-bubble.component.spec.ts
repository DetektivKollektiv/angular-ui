import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExperienceBubbleComponent } from './user-experience-bubble.component';

describe('UserExperienceBubbleComponent', () => {
  let component: UserExperienceBubbleComponent;
  let fixture: ComponentFixture<UserExperienceBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserExperienceBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
