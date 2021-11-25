import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../../core/services/user/user.service';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { HelperModule } from '@shared/helper/helper.module';
import { LoaderModule } from '@shared/loader/loader.module';
import { MaterialModule } from '@shared/material/material.module';
import { UnsavedChangesModule } from '@shared/unsaved-changes/unsaved-changes.module';
import { MockAuthService } from '@mocks/mock-auth.service';
import { MockUserService } from '@mocks/mock-user.service';

import { TagsQuestionComponent } from './tags-question.component';

describe('TagsQuestionComponent', () => {
  let component: TagsQuestionComponent;
  let fixture: ComponentFixture<TagsQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagsQuestionComponent],
      imports: [RouterTestingModule, MaterialModule, LoaderModule, CommonModule, HelperModule, UnsavedChangesModule],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: UserService, useClass: MockUserService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
