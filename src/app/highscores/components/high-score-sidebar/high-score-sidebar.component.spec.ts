import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoreSidebarComponent } from './high-score-sidebar.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { UserService } from 'src/app/core/services/user/user.service';
import { MockUserService } from 'src/test/mocks/mock-user.service';

describe('HighscoresSidebarComponent', () => {
  let component: HighScoreSidebarComponent;
  let fixture: ComponentFixture<HighScoreSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighScoreSidebarComponent],
      imports: [MaterialModule],
      providers: [{ provide: UserService, useClass: MockUserService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighScoreSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
