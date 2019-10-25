import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-dashboard-hotel',
  templateUrl: './dashboard-hotel.component.html',
  styleUrls: ['./dashboard-hotel.component.css']
})
export class DashboardHotelComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
