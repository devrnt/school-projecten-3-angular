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

  @Output() public verwijder = new EventEmitter<string>();

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

  @Output() verwijderen(): void {
    console.log('verwijder');
     this.verwijder.emit('delete');
    this.dialogRef.close();
  }

}
