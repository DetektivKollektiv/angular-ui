import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatDialogModule} from '@angular/material/dialog';
import {TranslateModule} from '@ngx-translate/core';
import {ChangeDetectorRef} from '@angular/core';
import {AuthService} from '../../shared/auth/auth-service/auth.service';
import {MockAuthService} from '../../../test/mocks/mock-auth.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        TranslateModule.forRoot()
      ],
      declarations: [ HeaderComponent ],
      providers: [
        ChangeDetectorRef,
        { provide: AuthService, useClass: MockAuthService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
