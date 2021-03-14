import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { Item } from 'src/app/model/item';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { ArchiveDetailsComponent } from './archive-details.component';

describe('ArchiveDetailsComponent', () => {
  let component: ArchiveDetailsComponent;
  let fixture: ComponentFixture<ArchiveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveDetailsComponent],
      imports: [MaterialModule, ShareButtonsModule, ShareIconsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveDetailsComponent);
    component = fixture.componentInstance;
    component.item = { id: 'test' } as Item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct link', () => {
    expect(component.link.endsWith('/archive?id=test')).toBeTruthy();
  });
});
