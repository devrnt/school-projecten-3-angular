import { Component, OnInit } from '@angular/core';
import { Beoordeling } from 'src/app/models/beoordeling.model';
import { Competentie } from 'src/app/models/competentie.model';
import { MatDialog } from '@angular/material';
import { CompetentieDialogComponent } from '../competentie-dialog/competentie-dialog.component';

@Component({
  selector: 'app-richting-scherm',
  templateUrl: './richting-scherm.component.html',
  styleUrls: ['./richting-scherm.component.css']
})
export class RichtingSchermComponent implements OnInit {
  nieuweCompetentie: Competentie;
  description: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CompetentieDialogComponent, {
      width: '950px',
      data: {
        description: this.description
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      let teller: number = 6;
      console.log(result);
      // this._newCompetentie = result;
      this.description = result;
      this.nieuweCompetentie = new Competentie(`hoofdcompetentie${++teller}`, this.description);
    });
  }

}
