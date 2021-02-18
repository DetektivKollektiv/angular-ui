import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFileComponent } from './my-file.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { HelperModule } from '../../../shared/helper/helper.module';
import { UserService } from '../../../core/services/user/user.service';
import { MockUserService } from '../../../../test/mocks/mock-user.service';


describe('MyFileComponent', () => {
  let component: MyFileComponent;
  let fixture: ComponentFixture<MyFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFileComponent],
      imports: [MaterialModule, HelperModule],
      providers: [
        { provide: UserService, useClass: MockUserService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
