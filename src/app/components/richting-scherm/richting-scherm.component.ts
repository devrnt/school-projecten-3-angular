import { Component, OnInit, Input } from '@angular/core';
import { Beoordeling } from 'src/app/models/beoordeling.model';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatDialog } from '@angular/material';
import { CompetentieDialogComponent } from '../competentie-dialog/competentie-dialog.component';
import { Icon, Kleur, Richting } from 'src/app/models/richting';

@Component({
  selector: 'app-richting-scherm',
  templateUrl: './richting-scherm.component.html',
  styleUrls: ['./richting-scherm.component.css']
})
export class RichtingSchermComponent implements OnInit {
  @Input() public richting: Richting;
  public icons: Array<string>;
  public kleuren: Array<string>;
  public nieuweCompetentie: Hoofdcompetentie;
  public description: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CompetentieDialogComponent, {
      width: '950px',
      autoFocus: true,
      data: {
        icons: Object.keys(Icon),
        kleuren: Object.values(Kleur)
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   let teller = 6;
    //   console.log(result);
    //   // this._newCompetentie = result;
    //   this.description = result;
    //   this.nieuweCompetentie = new Hoofdcompetentie(`hoofdcompetentie${++teller}`, this.description, [], Icon.scissors, Kleur.red);
    // });

    dialogRef.afterClosed().subscribe(result => {
      let teller = 6;
      console.log(result);
    })
  }

}
