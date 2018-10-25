import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData{
  description: string;
}

@Component({
  selector: 'app-competentie-dialog',
  templateUrl: './competentie-dialog.component.html',
  styleUrls: ['./competentie-dialog.component.css']
})
export class CompetentieDialogComponent implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<CompetentieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  
  ngOnInit() {}
  
  onAnnulerenClick(): void {
    this.dialogRef.close();
  }


}
