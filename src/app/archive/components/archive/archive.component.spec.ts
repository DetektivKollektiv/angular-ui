import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchiveComponent } from './archive.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoaderModule } from '../../../shared/loader/loader.module';
import { MaterialModule } from '../../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { HelperModule } from 'src/app/shared/helper/helper.module';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';

describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveComponent],
      imports: [
        RouterTestingModule,
        LoaderModule,
        MaterialModule,
        CommonModule,
        MaterialModule,
        RecaptchaModule,
        RecaptchaFormsModule,
        HelperModule,
        RouterModule,
        MatChipsModule,
        MatInputModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
