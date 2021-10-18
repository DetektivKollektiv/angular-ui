import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveListItemComponent } from './archive-list-item.component';
import { TagIconComponent } from '../tag-icon/tag-icon.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

describe('ArchiveListItemComponent', () => {
  let component: ArchiveListItemComponent;
  let fixture: ComponentFixture<ArchiveListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ArchiveListItemComponent, TagIconComponent,
      ],
      imports: [
        NgxPaginationModule,
        RouterModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
