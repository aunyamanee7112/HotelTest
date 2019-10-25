import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
