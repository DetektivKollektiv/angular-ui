import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberInfoComponent } from './member-info.component';
import {Member} from '../model/member';

describe('MemberInfoComponent', () => {
  let component: MemberInfoComponent;
  let fixture: ComponentFixture<MemberInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
