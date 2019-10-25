import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home-hotel',
  templateUrl: './home-hotel.component.html',
  styleUrls: ['./home-hotel.component.css']
})
export class HomeHotelComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
