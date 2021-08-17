import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatsonComponent } from './watson.component';

describe('WatsonComponent', () => {
  let component: WatsonComponent;
  let fixture: ComponentFixture<WatsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
