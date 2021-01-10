import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsQuestionComponent } from './tags-question.component';

describe('TagsQuestionComponent', () => {
  let component: TagsQuestionComponent;
  let fixture: ComponentFixture<TagsQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsQuestionComponent ]
    })
    .compileComponents();
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
