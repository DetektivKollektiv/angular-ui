import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ChangeDetectorRef} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {AuthService} from '../../../shared/auth/auth-service/auth.service';
import {MockAuthService} from '../../../../test/mocks/mock-auth.service';
import {MatIconModule} from '@angular/material/icon';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [DashboardComponent],
      providers: [
        ChangeDetectorRef,
        {provide: AuthService, useClass: MockAuthService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
