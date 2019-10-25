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
import { DigloguserComponent } from './digloguser/digloguser.component';
import {ActivatedRoute} from '@angular/router';
import { DialogEdituserComponent } from './dialog-edituser/dialog-edituser.component';
import { $ } from 'protractor';
import {MatPaginatorModule} from '@angular/material/paginator';

 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  wikiList: AngularFireList<any>;
  userlist:any[];
  editUser : any={} ;
  paginator : MatPaginatorModule;
  items: { id: number; name: string; }[];
 
  constructor( public Auth: AuthService , public db : AngularFireDatabase, private router: Router, private firebaseService: FirebaseServiceService , public dialog: MatDialog ,
     private ActivatedRoute:ActivatedRoute, matpaginator : MatPaginatorModule) {
  this.wikiList = db.list('user');
  
   }

  ngOnInit() {
    this.wikiList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      }).subscribe(items => {
        this.userlist = items;
        
      });  
      
      
     
  }
 
 

  deleteUser(data){ 
    alert("Do you want to delete");
    this.wikiList.remove(data.key);}

  
  editWiki(data){
    console.log('edit');
    console.log(data.key);
    console.log(data.value);
    this.dialog.open(DialogEdituserComponent);
    
  }
  openDialog(){
    console.log('okay');
    this.dialog.open(DigloguserComponent, {width: '550px',}); 
    
  }



  
}


