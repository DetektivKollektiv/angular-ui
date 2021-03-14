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

describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ArchiveComponent, ArchiveToolbarComponent],
        imports: [
          RouterTestingModule,
          LoaderModule,
          MaterialModule,
          CommonModule,
          NgxsModule.forRoot([ArchiveState]),
        ],
        providers: [{ provide: ArchiveService, useClass: MockArchiveService }],
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
