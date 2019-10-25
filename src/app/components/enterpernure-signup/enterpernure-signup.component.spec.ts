import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpernureSignupComponent } from './enterpernure-signup.component';

describe('EnterpernureSignupComponent', () => {
  let component: EnterpernureSignupComponent;
  let fixture: ComponentFixture<EnterpernureSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpernureSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpernureSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
