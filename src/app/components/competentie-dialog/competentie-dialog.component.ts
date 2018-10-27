import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Richting, Icon, Kleur } from 'src/app/models/richting';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

export interface DialogData{
  icons: Array<string>,
  kleuren: Array<string>
}

@Component({
  selector: 'app-competentie-dialog',
  templateUrl: './competentie-dialog.component.html',
  styleUrls: ['./competentie-dialog.component.css']
})
export class CompetentieDialogComponent implements OnInit {
  hoofdcompetentie: FormGroup;
  icons: Array<string>;
  kleuren: Array<string>;
  
  constructor(
    // private fb: FormBuilder,
    public dialogRef: MatDialogRef<CompetentieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.icons = data.icons;
      this.kleuren = data.kleuren;

    }

  
  ngOnInit() {
    // this.hoofdcompetentie = this.fb.group({
    //   description: this.fb.control('description'),
    //   icon: this.fb.contol('icon'),
    //   kleur: this.fb.control('kleur')
    // })
  }
  
  onAnnulerenClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    console.log(this.hoofdcompetentie.value);
    this.dialogRef.close(this.hoofdcompetentie.value);
  }
}
