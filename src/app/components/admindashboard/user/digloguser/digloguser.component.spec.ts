import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigloguserComponent } from './digloguser.component';

describe('DigloguserComponent', () => {
  let component: DigloguserComponent;
  let fixture: ComponentFixture<DigloguserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigloguserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigloguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
