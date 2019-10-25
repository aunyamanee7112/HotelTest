import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  constructor(  public authService: AuthService) { }

  ngOnInit() {
  }

}
