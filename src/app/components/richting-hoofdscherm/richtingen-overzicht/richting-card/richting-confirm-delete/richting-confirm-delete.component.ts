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

  /**
  * Een property die je doorgeeft naar de parentcomponent dat een event triggert
  * @event
  */
  @Output() public verwijder = new EventEmitter<string>();

  /**
  * Dit is de constructor van RichtingConfirmDeleteComponent
  * @param {MatDialogRef<RichtingConfirmDeleteComponent>} dialogRef
  * @param {DialogData} data That's an input of MAT_DIALOG_DATA
  */
  constructor(
    public dialogRef: MatDialogRef<RichtingConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialogContent,
  ) {
  }
  ngOnInit() {
  }

  /**
  * Dit is een methode die de dialog sluit
  */
  annuleren(): void {
    this.dialogRef.close();
  }

  /**
  * Dit is een methode die de eventemitter triggert om een richting te verwijderen en sluit ook de dialog
  */
  @Output() verwijderen(): void {
    console.log('verwijder');
     this.verwijder.emit('delete');
    this.dialogRef.close();
  }

}
