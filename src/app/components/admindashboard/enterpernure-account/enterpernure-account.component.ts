import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { FirebaseServiceService } from 'src/app/firebase-service.service';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-enterpernure-account',
  templateUrl: './enterpernure-account.component.html',
  styleUrls: ['./enterpernure-account.component.css']
})
export class EnterpernureAccountComponent implements OnInit {

  constructor( public Auth: AuthService , public db : AngularFireDatabase, private router: Router, private firebaseService: FirebaseServiceService , public dialog: MatDialog , private ActivatedRoute:ActivatedRoute,
    public afAuth: AngularFireAuth ,public afs: AngularFirestore,) { 
    this.wikiList = db.list('HotelAccount');
  }
  wikiList: AngularFireList<any>;
  userlist:any[];
  editUser : any={} ;
  
  ngOnInit() {
    this.wikiList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      }).subscribe(items => {
        this.userlist = items;
        
      });  
  }

  accept(data){
   console.log(data);
   console.log("Accept this Account");
   alert("Accept this Account")
   try {
      const result =  this.afAuth.auth.createUserWithEmailAndPassword(data.value.email, data.value.password);
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      // this.SetUserData(result.user);
      this.db.list('/hotelAccount_Accepted').push(data.value);
      this.wikiList.remove(data.key); 
    }
    catch (error) {
      window.alert(error.message);
    }
    
  }
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  unaccept(data)
  { this.wikiList.remove(data.key);}
}
