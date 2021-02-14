import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/core/services/user/user.service';
import { AuthService } from 'src/app/shared/auth/auth-service/auth.service';
import { HelperModule } from 'src/app/shared/helper/helper.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UnsavedChangesModule } from 'src/app/shared/unsaved-changes/unsaved-changes.module';
import { MockAuthService } from 'src/test/mocks/mock-auth.service';
import { MockUserService } from 'src/test/mocks/mock-user.service';

import { TagsQuestionComponent } from './tags-question.component';

describe('TagsQuestionComponent', () => {
  let component: TagsQuestionComponent;
  let fixture: ComponentFixture<TagsQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagsQuestionComponent],
      imports: [
        RouterTestingModule,
        MaterialModule,
        LoaderModule,
        CommonModule,
        HelperModule,
        UnsavedChangesModule,
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: UserService, useClass: MockUserService },
      ],
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
