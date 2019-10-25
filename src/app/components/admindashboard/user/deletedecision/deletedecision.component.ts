import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-deletedecision',
  templateUrl: './deletedecision.component.html',
  styleUrls: ['./deletedecision.component.css']
})
export class DeletedecisionComponent implements OnInit {

  wikiList: AngularFireList<any>;
  userlist:any[];
  constructor(public dialogRef: MatDialogRef<DeletedecisionComponent>,public authService: AuthService) { }

  ngOnInit() {
    this.wikiList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      }).subscribe(items => {
        this.userlist = items;
        
      });  
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
 
}
