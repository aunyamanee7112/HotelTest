import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { FirebaseServiceService } from 'src/app/firebase-service.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-show-hotel',
  templateUrl: './show-hotel.component.html',
  styleUrls: ['./show-hotel.component.css']
})
export class ShowHotelComponent implements OnInit {

  wikiList: AngularFireList<any>;
  Accommodation : any[];
  wiki: any={};
  db: any;
  constructor(db:AngularFireDatabase ,private router: Router, private firebaseService: FirebaseServiceService) { 
    this.wikiList = db.list('Accommodation');
   }
  ngOnInit() {
    this.wikiList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      }).subscribe(items => {
      this.Accommodation = items;
      });
   
  }
  
  getWikibyKey(id){
    this.wiki = this.db.object('/hotelAccount_Accepted/'+id).snapshotChanges().map(res=>{
    return res.payload.val()
  });
}
  Go(data) {
    console.log(data.key);
    console.log(data.value);   
    this.router.navigate([`/information/${data.key}`]);
  }
}
