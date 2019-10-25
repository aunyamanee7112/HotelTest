import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from 'src/app/firebase-service.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-dialog-edituser',
  templateUrl: './dialog-edituser.component.html',
  styleUrls: ['./dialog-edituser.component.css']
})
export class DialogEdituserComponent implements OnInit {
  edit: any={} ;
  wiki: any= {};
  id;
  constructor( public Auth: AuthService , public db : AngularFireDatabase, private router: Router, private firebaseService: FirebaseServiceService ,
     public dialog: MatDialog , private ActivatedRoute:ActivatedRoute ,public dialogRef: MatDialogRef<DialogEdituserComponent>) { }

  
  ngOnInit() {
    this.id = this.ActivatedRoute.snapshot.paramMap.get("id")
    
    if(this.id){
        const title= ("Edit Hotel") ;
        this.getWikibyKey(this.id);
        console.log("id:",this.id);
        

    }
  }
  getWikibyKey(id){
   
    this.wiki = this.db.object('user' + this.id).snapshotChanges().map(res =>
       {   return res.payload.val();}).subscribe(items => {
        this.edit = items;
        
      });  
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  // getWikiByKey(id){this.edit = this.db.object('user/' + id).snapshotChanges().map(res => {   return res.payload.val();});}
  
  }
  