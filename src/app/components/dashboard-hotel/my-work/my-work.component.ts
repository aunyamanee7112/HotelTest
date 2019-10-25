import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
