import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListItemsComponent} from './list-items.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatDialogModule} from '@angular/material/dialog';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {TranslateModule} from '@ngx-translate/core';
import {ItemsService} from '../../services/items/items.service';
import {FormBuilder} from '@angular/forms';
import {MockItemsService} from '../../../../test/mocks/mock-items.service';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

describe('ListItemsComponent', () => {
  let component: ListItemsComponent;
  let fixture: ComponentFixture<ListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        MatIconModule,
        RouterTestingModule,
        MatDialogModule,
        LoaderModule,
        TranslateModule.forRoot()
      ],
      declarations: [ListItemsComponent],
      providers: [
        {provide: ItemsService, useClass: MockItemsService},
        FormBuilder
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
