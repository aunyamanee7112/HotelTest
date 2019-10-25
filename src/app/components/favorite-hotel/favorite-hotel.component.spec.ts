import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteHotelComponent } from './favorite-hotel.component';

describe('FavoriteHotelComponent', () => {
  let component: FavoriteHotelComponent;
  let fixture: ComponentFixture<FavoriteHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
