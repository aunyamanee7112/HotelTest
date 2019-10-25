import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperFromComponent } from './stepper-from.component';

describe('StepperFromComponent', () => {
  let component: StepperFromComponent;
  let fixture: ComponentFixture<StepperFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
