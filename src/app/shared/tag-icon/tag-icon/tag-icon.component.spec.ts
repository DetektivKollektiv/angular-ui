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

  test.each([['Hatespeech', 'far fa-frown'],['kein impressum', 'fas fa-question'],['keine quellen', 'fas fa-unlink']])(
    'should have correct icon class',
    (tag, expectedIconClass) => {
      component.tag = tag;

      component.ngOnInit();

      expect(component.iconClass).toBe(expectedIconClass);
    }
  );

  test.each([
    ['Hatespeech', 'far fa-frown'],
    ['kein impressum', 'fas fa-question'],
    ['keine quellen', 'fas fa-unlink'],
    ['sdgdfhdfhg', undefined],
    [undefined, undefined],
  ])(
    '%s should have correct icon class %s',
    (tag, expectedIconClass) => {
      component.tag = tag;

      component.ngOnInit();

      expect(component.iconClass).toBe(expectedIconClass);
    }
  );

  test.each([['Hatespeech', 'empty'],['asdhfsuhdf', undefined]])(
    '%s should have correct styleClass %s',
    (tag, expectedStyleClass) => {
      component.tag = tag;

      component.ngOnInit();

      expect(component.styleClass).toBe(expectedStyleClass);
    }
  );
});
