import { Component, OnInit, Input } from '@angular/core';
import { Beoordeling } from 'src/app/models/beoordeling.model';
import { Hoofdcompetentie, Modules } from 'src/app/models/hoofdcompetentie.model';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CompetentieDialogComponent } from '../competentie-dialog/competentie-dialog.component';
import { Richting } from 'src/app/models/richting';

@Component({
  selector: 'app-richting-scherm',
  templateUrl: './richting-scherm.component.html',
  styleUrls: ['./richting-scherm.component.css']
})
export class RichtingSchermComponent implements OnInit {
  @Input() public richting: Richting;
  public nieuweCompetentie: Hoofdcompetentie;
  private dialogRef: MatDialogRef<CompetentieDialogComponent>;

  constructor(
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(CompetentieDialogComponent, {
      width: '950px',
      autoFocus: true,
      data: {
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      let teller = 6;
      this.richting.addNieuweHoofdcompetentie(new Hoofdcompetentie(
            `hoofdcompetentie${++teller}`,
            result.beschrijving,
            [],
            this.richting.icon,
            this.richting.kleur,
            Modules.module1));
    });
  }

}
