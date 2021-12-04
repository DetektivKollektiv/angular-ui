import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOnlyLayoutComponent } from './footer-only-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../core/core.module';
import { AuthService } from './../shared/auth/auth-service/auth.service';
import { MockAuthService } from './../../test/mocks/mock-auth.service';

describe('FooterOnlyLayoutComponent', () => {
  let component: FooterOnlyLayoutComponent;
  let fixture: ComponentFixture<FooterOnlyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterOnlyLayoutComponent],
      imports: [RouterTestingModule, CoreModule],
      providers: [{ provide: AuthService, useClass: MockAuthService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterOnlyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
