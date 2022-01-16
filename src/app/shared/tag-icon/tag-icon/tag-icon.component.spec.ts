import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagIconComponent } from './tag-icon.component';


describe('TagIconComponent', () => {
  let component: TagIconComponent;
  let fixture: ComponentFixture<TagIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagIconComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
