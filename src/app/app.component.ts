import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelTest';
  constructor( private db : AngularFireDatabase){ }
  addWiki(data: NgForm) {
    console.log(data.value);
    this.db.list('/hotel').push(data.value);
  }

  
}
