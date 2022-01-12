import { ComponentFixture, TestBed } from '@angular/core/testing';

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
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { LeadingZerosPipe } from '../../pipes/leading-zeros.pipe';
import { SolvedCasesModule } from '@shared/solved-cases/solved-cases.module';
import { CaseListItemModule } from '@shared/case-list-item/case-list-item.module';
import { UserXpModule } from '@shared/user-xp/user-xp.module';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyProfileComponent, ScoreListComponent, SolveScoreListComponent, ScoreListItemComponent, LeadingZerosPipe],
      imports: [
        MaterialModule,
        RouterTestingModule,
        FormsModule,
        OpenCaseListSliderModule,
        NgxPaginationModule,
        BreadcrumbModule,
        SolvedCasesModule,
        CaseListItemModule,
        UserXpModule,
        NgxsModule.forRoot([ArchiveState])
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: UserService, useClass: MockUserService },
        { provide: ArchiveService, useClass: MockArchiveService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
