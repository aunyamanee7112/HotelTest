import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-digloguser',
  templateUrl: './digloguser.component.html',
  styleUrls: ['./digloguser.component.css']
})
export class DigloguserComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DigloguserComponent>,public authService: AuthService) { }

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
