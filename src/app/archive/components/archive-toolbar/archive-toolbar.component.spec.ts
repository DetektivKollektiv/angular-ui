import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MockArchiveService } from 'src/test/mocks/mock-archive.service';
import { ArchiveService } from '../../services/archive.service';
import { ArchiveState } from '../../state/archive.state';

import { ArchiveToolbarComponent } from './archive-toolbar.component';

describe('ArchiveToolbarComponent', () => {
  let component: ArchiveToolbarComponent;
  let fixture: ComponentFixture<ArchiveToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveToolbarComponent],
      imports: [
        MaterialModule,
        RouterTestingModule,
        NgxsModule.forRoot([ArchiveState]),
      ],
      providers: [{ provide: ArchiveService, useClass: MockArchiveService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
