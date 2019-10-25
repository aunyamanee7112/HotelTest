import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpernureAccountComponent } from './enterpernure-account.component';

describe('EnterpernureAccountComponent', () => {
  let component: EnterpernureAccountComponent;
  let fixture: ComponentFixture<EnterpernureAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpernureAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpernureAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
