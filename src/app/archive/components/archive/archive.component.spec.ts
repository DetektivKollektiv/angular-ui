import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ArchiveComponent } from './archive.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoaderModule } from '../../../shared/loader/loader.module';
import { MaterialModule } from '../../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { ArchiveState } from '../../state/archive.state';
import { ArchiveToolbarComponent } from '../archive-toolbar/archive-toolbar.component';
import { ArchiveService } from '../../services/archive.service';
import { MockArchiveService } from 'src/test/mocks/mock-archive.service';
import { ArchiveDetailsComponent } from '../archive-details/archive-details.component';
import { HelperModule } from 'src/app/shared/helper/helper.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { AuthService } from 'src/app/shared/auth/auth-service/auth.service';
import { MockAuthService } from 'src/test/mocks/mock-auth.service';

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
        ],
        imports: [
          RouterTestingModule,
          LoaderModule,
          MaterialModule,
          CommonModule,
          HelperModule,
          ShareButtonsModule,
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
