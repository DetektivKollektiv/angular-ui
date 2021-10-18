import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ArchiveComponent } from './archive.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoaderModule } from '../../../shared/loader/loader.module';
import { MaterialModule } from '../../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { ArchiveState } from '../../state/archive.state';
import { ArchiveToolbarComponent } from '../archive-toolbar/archive-toolbar.component';
import { RatingLegendComponent } from '../rating-legend/rating-legend.component';
import { ArchiveService } from '../../services/archive.service';
import { MockArchiveService } from 'src/test/mocks/mock-archive.service';
import { ArchiveDetailsComponent } from '../archive-details/archive-details.component';
import { ArchiveListComponent } from '../archive-list/archive-list.component';
import { ArchiveListItemComponent } from '../archive-list-item/archive-list-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HelperModule } from 'src/app/shared/helper/helper.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';


import { AuthService } from 'src/app/shared/auth/auth-service/auth.service';
import { QuestionCarouselModule } from 'src/app/shared/question-carousel/question-carousel.module';

import { MockAuthService } from 'src/test/mocks/mock-auth.service';
import { TagIconComponent } from '../tag-icon/tag-icon.component';

describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          ArchiveComponent,
          ArchiveToolbarComponent,
          ArchiveDetailsComponent,
          ArchiveListComponent,
          ArchiveListItemComponent,
          RatingLegendComponent,
          TagIconComponent,
        ],
        imports: [
          RouterTestingModule,
          LoaderModule,
          MaterialModule,
          CommonModule,
          HelperModule,
          NgxPaginationModule,
          ShareButtonsModule,
          QuestionCarouselModule,
          NgxsModule.forRoot([ArchiveState]),
        ],
        providers: [
          { provide: ArchiveService, useClass: MockArchiveService },
          { provide: AuthService, useClass: MockAuthService },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
