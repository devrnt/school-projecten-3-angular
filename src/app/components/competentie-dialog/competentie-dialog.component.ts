import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Richting, Icon } from 'src/app/models/richting.model';

export class DialogData {
}

@Component({
  selector: 'app-competentie-dialog',
  templateUrl: './competentie-dialog.component.html',
  styleUrls: ['./competentie-dialog.component.css']
})


export class CompetentieDialogComponent implements OnInit {
  hoofdcompetentie: FormGroup;
  /**
  * Dit is de constructor van CompetentieDialogComponent
  * @param {FormBuilder} formbuilder
  * @param {MatDialogRef<CompetentieDialogComponent>} dialogRef
  * @param {DialogData} data That is an input of MAT_DIALOG_DATA
  */
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CompetentieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

  ngOnInit() {
    this.hoofdcompetentie = this.fb.group({
      beschrijving: ['', Validators.required]
    });
  }
  /**
  * Deze functie wordt aangesproken wanneer er op de annuleren button wordt geklikt
  * @event
  */
  onAnnulerenClick(): void {
    this.dialogRef.close();
  }

  /**
  * Deze methode wordt aangesproken wanneer het formulier juist is opgebouwd. De dialog wordt gesloten
  * @param {Hoofdcompetentie} hoofdcompetentie
  */
  submit(hoofdcompetentie) {
    this.dialogRef.close(hoofdcompetentie.value);
  }

}
