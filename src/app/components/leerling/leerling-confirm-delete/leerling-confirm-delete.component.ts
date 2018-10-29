import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogContent,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
@Component({
  selector: 'app-leerling-confirm-delete',
  templateUrl: './leerling-confirm-delete.component.html',
  styleUrls: ['./leerling-confirm-delete.component.css']
})

export class LeerlingConfirmDeleteComponent implements OnInit {

  @Output() public verwijder = new EventEmitter<string>();

  constructor(
    public dialogRef: MatDialogRef<LeerlingConfirmDeleteComponent>,
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
