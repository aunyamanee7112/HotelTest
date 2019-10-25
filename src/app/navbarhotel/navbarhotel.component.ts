import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-navbarhotel',
  templateUrl: './navbarhotel.component.html',
  styleUrls: ['./navbarhotel.component.css']
})
export class NavbarhotelComponent implements OnInit {

  constructor( public authService: AuthService) { }

  ngOnInit() {
  }

}
