import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { NgForm } from '@angular/forms';
import {AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseServiceService } from 'src/app/firebase-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-booking-form',
  templateUrl: './dialog-booking-form.component.html',
  styleUrls: ['./dialog-booking-form.component.css']
})
export class DialogBookingFormComponent implements OnInit {
  fileData: File = null;
  previewUrl:any = null; 
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  id;
  constructor(MatDatepickerModule:MatDatepickerModule, private route: ActivatedRoute,private db: AngularFireDatabase,private router: Router,
    private _snackBar: MatSnackBar ,  public firebaseService : FirebaseServiceService ,public dialogRef: MatDialogRef<DialogBookingFormComponent>) { }
  //  Booking(data: NgForm ) {
  //     console.log(data.value);
  //     this.id = this.route.snapshot.params['id'];
  //     this.db.list("/Booking").push(data.value);
  //     this.db.list("/Accommodation"+this.id).push(data.value);
  //     this._snackBar.open;
  // }
  Booking(data: NgForm ) {
    console.log(data.value);
    alert("complete your booking and wait for reply")
    this.db.list("/Booking").push(data.value); 
    this.dialogRef.close();
    
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
    
  ngOnInit() {
   
  }

}

