import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from 'src/app/model/item';
import { HelperModule } from 'src/app/shared/helper/helper.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { ArchiveItemComponent } from './archive-item.component';

describe('ArchiveItemComponent', () => {
  let component: ArchiveItemComponent;
  let fixture: ComponentFixture<ArchiveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveItemComponent],
      imports: [MaterialModule, HelperModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveItemComponent);
    component = fixture.componentInstance;
    component.item = { id: 'test', tags: [], result_score: 1 } as Item;
    component.index = 0;
    component.length = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
