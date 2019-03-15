import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSectionComponent } from './change-section.component';

describe('ChangeSectionComponent', () => {
  let component: ChangeSectionComponent;
  let fixture: ComponentFixture<ChangeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
