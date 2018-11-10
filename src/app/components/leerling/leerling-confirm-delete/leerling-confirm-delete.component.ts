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

  /**
  * Een property die je doorgeeft naar de parentcomponent dat een event triggert
  * @event
  */
  @Output() public verwijder = new EventEmitter<string>();

  /**
  * Dit is de constructor van LeerlingConfirmDeleteComponent
  * @param {FormBuilder} formbuilder
  * @param {MatDialogRef<LeerlingConfirmDeleteComponent>} dialogRef
  * @param {DialogData} data That's an input of MAT_DIALOG_DATA
  */
  constructor(
    public dialogRef: MatDialogRef<LeerlingConfirmDeleteComponent>,
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
  * Dit is een methode die de eventemitter triggert om een leerling te verwijderen en sluit ook de dialog
  */
  @Output() verwijderen(): void {
    console.log('verwijder');
     this.verwijder.emit('delete');
    this.dialogRef.close();
  }

}
