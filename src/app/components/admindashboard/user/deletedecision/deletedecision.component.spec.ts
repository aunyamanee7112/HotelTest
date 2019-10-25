import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedecisionComponent } from './deletedecision.component';

describe('DeletedecisionComponent', () => {
  let component: DeletedecisionComponent;
  let fixture: ComponentFixture<DeletedecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
