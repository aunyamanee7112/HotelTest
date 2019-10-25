import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarhotelComponent } from './navbarhotel.component';

describe('NavbarhotelComponent', () => {
  let component: NavbarhotelComponent;
  let fixture: ComponentFixture<NavbarhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
