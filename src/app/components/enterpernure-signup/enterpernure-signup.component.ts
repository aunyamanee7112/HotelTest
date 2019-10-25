import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFireDatabase,AngularFireObject, AngularFireList } from 'angularfire2/database';
import { FirebaseServiceService } from 'src/app/firebase-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { $ } from 'protractor';
@Component({
  selector: 'app-enterpernure-signup',
  templateUrl: './enterpernure-signup.component.html',
  styleUrls: ['./enterpernure-signup.component.css']
})
export class EnterpernureSignupComponent implements OnInit {
  fileData: File = null;
  previewUrl:any = null; 
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  wiki: any= {};
  userlist: any={};
  id;
   
  customersRef: AngularFireList<any> = null;
  wikiList: AngularFireList<any>;
  // id;
  constructor(Auth : AuthService,  private db: AngularFireDatabase , private Router:Router, public firebaseService : FirebaseServiceService, private route: ActivatedRoute  ) { 
      this.id = this.route.snapshot.paramMap.get("id")
      this.wikiList =  this.db.list('hotelAccount_Accepted/');
  }

  ngOnInit() {
  
    
    if(this.id){
        const title= ("Edit Hotel") ;
        this.getWikibyKey(this.id);
        console.log("id:",this.id);
        

    }
  }
  getWikibyKey(id){
   
    this.wiki = this.db.object('hotelAccount_Accepted/' + id).snapshotChanges().map(res =>
       {   return res.payload.val();}).subscribe(items => {
        this.userlist = items;
        
      });  
    }
  
  HotelAcccouct( data: NgForm ) {
   
    if(this.id){
      // this.db.list("hotelAccount_Accepted").update(this.id,data.value);
      console.log(data.value);
      this.firebaseService.editWiki(this.id,data.value);
      }
    else{ 
      this.firebaseService.addWiki(data.value);}
     }
    


  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
}
goToHome() {
  this.Router.navigate(['/home']);
}
}





