
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
  selector: 'app-enterpernure-accountconfirm',
  templateUrl: './enterpernure-accountconfirm.component.html',
  styleUrls: ['./enterpernure-accountconfirm.component.css']
})
export class EnterpernureAccountconfirmComponent implements OnInit {
  wikiList: AngularFireList<any>;
  Hotellist:any[];
  wiki: any= {};
  getobject : any={};
  constructor(public Auth: AuthService , public db : AngularFireDatabase, private router: Router, private firebaseService: FirebaseServiceService , public dialog: MatDialog ,
     private ActivatedRoute:ActivatedRoute) { 
      this.wikiList = db.list('hotelAccount_Accepted');
      const id = this.ActivatedRoute.snapshot.paramMap.get("id")
      if(id){
          const title= ("Edit Hotel") ;
          this.getWikibyKey(id);
      }
      
  
  }
  

  ngOnInit() {
    
    this.wikiList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      }).subscribe(items => {
        this.Hotellist = items;
        
      });   
  }

    getWikibyKey(id){
        this.wiki = this.db.object('/hotelAccount_Accepted/'+id).snapshotChanges().map(res=>{
        return res.payload.val()
      });
    }
     
  deleteUser(data)
  { this.wikiList.remove(data.key);}

  
  editWiki(data){
    console.log('edit');
    console.log(data.key);
    console.log(data.value);
    this.router.navigate([`/hotelAccountEdit/${data.key}`]);
  }
  
}
