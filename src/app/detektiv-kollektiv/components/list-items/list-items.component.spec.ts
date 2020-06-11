import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListItemsComponent} from './list-items.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatDialogModule} from '@angular/material/dialog';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {TranslateModule} from '@ngx-translate/core';
import {ItemsService} from '../../services/items/items.service';
import {FormBuilder} from '@angular/forms';

describe('ListItemsComponent', () => {
  let component: ListItemsComponent;
  let fixture: ComponentFixture<ListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        LoaderModule,
        TranslateModule.forRoot()
      ],
      declarations: [ListItemsComponent],
      providers: [
        ItemsService,
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
