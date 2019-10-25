import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpernureAccountconfirmComponent } from './enterpernure-accountconfirm.component';

describe('EnterpernureAccountconfirmComponent', () => {
  let component: EnterpernureAccountconfirmComponent;
  let fixture: ComponentFixture<EnterpernureAccountconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpernureAccountconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpernureAccountconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
