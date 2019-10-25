import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList,AngularFireAction, AngularFireObject } from 'angularfire2/database';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { DialogBookingFormComponent } from './components/info-hotel/dialog-booking-form/dialog-booking-form.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
  
})
export class FirebaseServiceService {
  wikiList: AngularFireList<any>;
  info : AngularFireObject<any>
  id: any;
  accountlist: AngularFireList<unknown>;
  
  constructor( public db:AngularFireDatabase,private route: ActivatedRoute, public dialog: MatDialog, public _snackBar: MatSnackBar) {
    this.wikiList = db.list('hotelAccount_Accepted');
    this.accountlist = db.list('Accommodation');
    this.id = this.route.snapshot.paramMap.get("id")
 
  }

   booking(){
    this.dialog.open(DialogBookingFormComponent ,{width: '1500px', height:'700px'});
  }  
  
  Booking(data: NgForm ) {
    console.log(data.value);
    alert("complete your booking and wait for reply")
    this.db.list("/Booking").push(data.value); 
    
    
  }
 


  editWiki(id, data) {
    return this.wikiList.update(id, data);}
  addWiki(data) {
    return this.accountlist.push(data);}
 
}
