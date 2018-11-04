import { Component, OnInit, Input } from '@angular/core';
import { Richting } from 'src/app/models/richting';
import { Modules, Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CompetentieDialogComponent } from '../competentie-dialog/competentie-dialog.component';

@Component({
  selector: 'app-richting-competenties',
  templateUrl: './richting-competenties.component.html',
  styleUrls: ['./richting-competenties.component.css']
})
export class RichtingCompetentiesComponent implements OnInit {
  public modules = new Array<string>();
  public beschrijving: '';
  public module: '';
  @Input() public richting: Richting;
  private dialogRef: MatDialogRef<CompetentieDialogComponent>;


  constructor(
    public dialog: MatDialog
  ) {
    // this.filterCompetentie$
    //   .pipe(
    //     distinctUntilChanged()
    //     map(comp => comp.toLowerCase())
    //   )
    //   .subscribe((value: any) => {
    //     console.log('Dit is de value waar ik op subscribe', value);
    //     this.filterCompetentieDescription = value;
    //   });
  }

  ngOnInit() {
    this.modules = Object.values(Modules);
  }

  public get hoofdCompetenties() {
    // console.log(this.richting);
    if (this.richting) {
      return this.richting.competenties;
    }
    return [];
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
