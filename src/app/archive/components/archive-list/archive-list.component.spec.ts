import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveListComponent } from './archive-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArchiveListItemComponent } from '../archive-list-item/archive-list-item.component';
import { TagIconComponent } from '../tag-icon/tag-icon.component';
import { RouterModule } from '@angular/router';


describe('ArchiveListComponent', () => {
  let component: ArchiveListComponent;
  let fixture: ComponentFixture<ArchiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ArchiveListComponent,
        ArchiveListItemComponent,
        TagIconComponent,
      ],
      imports: [
        NgxPaginationModule,
        RouterModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
