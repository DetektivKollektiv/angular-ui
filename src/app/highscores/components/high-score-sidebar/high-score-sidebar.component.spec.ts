import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoreSidebarComponent } from './high-score-sidebar.component';
import { MaterialModule } from '../../../shared/material/material.module'

describe('HighscoresSidebarComponent', () => {
  let component: HighScoreSidebarComponent;
  let fixture: ComponentFixture<HighScoreSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighScoreSidebarComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
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
