import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogContent,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
@Component({
  selector: 'app-richting-confirm-delete',
  templateUrl: './richting-confirm-delete.component.html',
  styleUrls: ['./richting-confirm-delete.component.css']
})

export class RichtingConfirmDeleteComponent implements OnInit {

  @Output() public delete = new EventEmitter<Boolean>();

  constructor(
    public dialogRef: MatDialogRef<RichtingConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialogContent,
  ) {
  }
  ngOnInit() {
  }

  annuleren(): void {
    this.dialogRef.close();
  }

  verwijderen(): void {
    this.dialogRef.close();
    console.log('verwijder');
     this.delete.emit(true);
  }

}
