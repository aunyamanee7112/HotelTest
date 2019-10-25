
import { Component, OnInit, ViewChild, Input, Inject} from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable, from } from 'rxjs';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/services/user';
import { map, count } from "rxjs/operators";
import { FirebaseServiceService } from 'src/app/firebase-service.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { $ } from 'protractor';
import { DialogEdituserComponent } from '../user/dialog-edituser/dialog-edituser.component';
@Component({
  selector: 'app-allbooking',
  templateUrl: './allbooking.component.html',
  styleUrls: ['./allbooking.component.css']
})
export class AllbookingComponent implements OnInit {
  wikiList: AngularFireList<any>;
  Bookinglist:any[];
  editUser : any={} ;
  constructor(public Auth: AuthService , public db : AngularFireDatabase, private router: Router, private firebaseService: FirebaseServiceService , public dialog: MatDialog , private ActivatedRoute:ActivatedRoute) { 
    this.wikiList = db.list('Booking');
}

  ngOnInit() {
    this.wikiList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      }).subscribe(items => {
        this.Bookinglist = items;
        
      });   
  }

}
