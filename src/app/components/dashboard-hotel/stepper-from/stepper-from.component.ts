import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase } from 'angularfire2/database';

// tslint:disable-next-line:import-spacing
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { format } from 'util';
import { map } from 'rxjs/internal/operators/map';



@Component({
  selector: 'app-stepper-from',
  templateUrl: './stepper-from.component.html',
  styleUrls: ['./stepper-from.component.css']
})
export class StepperFromComponent  implements OnInit {
  uploadProgress: any;
  task: any;
  ref: any;
  downloadURL: any;
  ngOnInit() {}
  constructor( private db: AngularFireDatabase , ) { }
  addWiki(data: NgForm ) {
    console.log(data.value);
    this.db.list("/Accommodation").push(data.value);
    
  }
  

}

