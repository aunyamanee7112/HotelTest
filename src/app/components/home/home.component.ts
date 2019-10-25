import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {

    
  }
   openForm() {
      document.getElementById("myForm").style.display = "block";
    }
    
     closeForm() {
      document.getElementById("myForm").style.display = "none";
    } 

    goshow(){
       this.router.navigate(['show-hotel']);
    }

    
}
