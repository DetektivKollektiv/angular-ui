import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExperienceBubbleListComponent } from './user-experience-bubble-list.component';
import { UserExperienceBubbleComponent } from '../../user-experience-bubble/user-experience-bubble.component';

describe('UserExperienceBubbleListComponent', () => {
  let component: UserExperienceBubbleListComponent;
  let fixture: ComponentFixture<UserExperienceBubbleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserExperienceBubbleListComponent,
        UserExperienceBubbleComponent,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceBubbleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
