import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileComponent } from './my-profile.component';
import { MaterialModule } from '@shared/material/material.module';
import { UserService } from '../../../core/services/user/user.service';
import { MockUserService } from '../../../../test/mocks/mock-user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MockAuthService } from '../../../../test/mocks/mock-auth.service';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { FormsModule } from '@angular/forms';
import { ScoreListComponent } from '../score-list/score-list.component';
import { SolveScoreListComponent } from '../solve-score-list/solve-score-list.component';
import { ScoreListItemComponent } from '../score-list-item/score-list-item.component';
import { OpenCaseListSliderModule } from '@shared/open-case-list-slider/open-case-list-slider.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxsModule } from '@ngxs/store';
import { ArchiveState } from '../../../archive/state/archive.state';
import { ArchiveService } from '../../../archive/services/archive.service';
import { MockArchiveService } from '@mocks/mock-archive.service';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyProfileComponent, ScoreListComponent, SolveScoreListComponent, ScoreListItemComponent],
      imports: [
        MaterialModule,
        RouterTestingModule,
        FormsModule,
        OpenCaseListSliderModule,
        NgxPaginationModule,
        NgxsModule.forRoot([ArchiveState])
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: UserService, useClass: MockUserService },
        { provide: ArchiveService, useClass: MockArchiveService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
