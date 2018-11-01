import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Richting, Icon } from 'src/app/models/richting';

export class DialogData {
}

@Component({
  selector: 'app-competentie-dialog',
  templateUrl: './competentie-dialog.component.html',
  styleUrls: ['./competentie-dialog.component.css']
})

export class CompetentieDialogComponent implements OnInit {
  hoofdcompetentie: FormGroup;
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

  onAnnulerenClick(): void {
    this.dialogRef.close();
  }

  submit(hoofdcompetentie) {
    this.dialogRef.close(hoofdcompetentie.value);
  }

}
