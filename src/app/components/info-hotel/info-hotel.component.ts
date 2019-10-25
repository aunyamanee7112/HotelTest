import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireDatabaseModule } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { FirebaseServiceService } from 'src/app/firebase-service.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogBookingFormComponent } from './dialog-booking-form/dialog-booking-form.component';
import { AgmCoreModule } from '@agm/core';
import { $ } from 'protractor';
@Component({
  selector: 'app-info-hotel',
  templateUrl: './info-hotel.component.html',
  styleUrls: ['./info-hotel.component.css'],
})


export class InfoHotelComponent implements OnInit {
  [x: string]: any;
  
  wiki: any= {};
  hotellist: any={};  
  hotel: any={};
  wikiList: AngularFireList<any>;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  @ViewChild('map', {static: false}) mapElement: ElementRef;
  checkuser: any;
  userlist: any;

  constructor( public db: AngularFireDatabase, private route: ActivatedRoute, public firebaseService : FirebaseServiceService,
     public authService: AuthService, public dialog: MatDialog) {
      this.wikiList = db.list('user');
  }
  
  
  ngOnInit() {
    const username = this.authService.afAuth.user ;
    const id = this.route.snapshot.params['id'];
    if(id){
      this.getWikibyKey(id);
      console.log("yes",id);
      console.log(username);
    }
 
  }
  booking(){
    this.dialog.open(DialogBookingFormComponent ,{width: '1500px', height:'700px'});
  }  
      
  getWikibyKey(id){
    this.wiki = this.db.object('Accommodation/' + id).snapshotChanges().map(res =>
       {   return res.payload.val();}).subscribe(items => {
        this.hotellist = items;
      });  
    }

  id(id){
     this.id = this.route.snapshot.params['id'];
     this.wiki = this.db.object('Accommodation/' + id).snapshotChanges().map(res =>
      {   return res.payload.val();}).subscribe(items => {
       this.hotellist = items;
     });  
   }
   fav(hotellist) {
        console.log(hotellist);
        this.db.list('favorite').push(hotellist).child("fav"); 
     };            
   }

  
  



