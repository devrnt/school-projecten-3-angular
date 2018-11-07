import { Component, OnInit, Input } from '@angular/core';
import { Richting } from 'src/app/models/richting';
import { Modules, Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CompetentieDialogComponent } from '../competentie-dialog/competentie-dialog.component';
import { Subject } from 'rxjs';
import { CompetentieDescriptionFilterPipe } from 'src/app/pipes/richting/competentie-description-filter.pipe';
import { distinctUntilChanged, defaultIfEmpty, sampleTime, debounceTime } from 'rxjs/operators';
import { CompetentieModuleFilterPipe } from 'src/app/pipes/richting/competentie-module-filter.pipe';

@Component({
  selector: 'app-richting-competenties',
  templateUrl: './richting-competenties.component.html',
  styleUrls: ['./richting-competenties.component.css']
})
export class RichtingCompetentiesComponent implements OnInit {
  public modules = new Array<string>();
  public beschrijving: '';
  public competenties: Hoofdcompetentie[];
  public module: '';
  private dialogRef: MatDialogRef<CompetentieDialogComponent>;
  private _hoofdcompetenties: Hoofdcompetentie[];
  public hoofdcompetentiesFiltered: Hoofdcompetentie[];
  private _hoofdcompetentiesFilteredOpDescription: Hoofdcompetentie[];
  private _hoofdcompetentiesFilteredOpModule: Hoofdcompetentie[];
  public filterHoofdcompetentieBeschrijving$ = new Subject<string>();
  public filterHoofdcompetentieModule$ = new Subject<string>();
  private _richting: Richting;
  @Input()
    set richting(richtingFromParent: Richting) {
      this._richting = richtingFromParent;
      this._richting ? this._hoofdcompetenties = this._richting.competenties : this._hoofdcompetenties = [];
      this.hoofdcompetentiesFiltered = this._hoofdcompetenties;
      this._hoofdcompetentiesFilteredOpDescription = this.hoofdcompetentiesFiltered;
      this._hoofdcompetentiesFilteredOpModule = this.hoofdcompetentiesFiltered;
    }

    get richting(): Richting {
      this.filterHoofdcompetentieBeschrijving$
        .pipe(
          distinctUntilChanged()
        )
        .subscribe(besch => {
          this._hoofdcompetentiesFilteredOpDescription = this._filterDescription.transform(this._hoofdcompetenties, besch);
          this.hoofdcompetentiesFiltered =
            this.verwijderDubbels(this._hoofdcompetentiesFilteredOpDescription, this._hoofdcompetentiesFilteredOpModule);
        });

        this.filterHoofdcompetentieModule$
          .pipe(
            distinctUntilChanged()
          )
          .subscribe(mod => {
            console.log('Dit is hetgeen dat binnenkomt bij module', mod);
            this._hoofdcompetentiesFilteredOpModule = this._filterModule.transform(this._hoofdcompetenties, mod);
            this.hoofdcompetentiesFiltered =
              this.verwijderDubbels(this._hoofdcompetentiesFilteredOpDescription, this._hoofdcompetentiesFilteredOpModule);
          });
      return this._richting;
    }

  constructor(
    public dialog: MatDialog,
    private _filterDescription: CompetentieDescriptionFilterPipe,
    private _filterModule: CompetentieModuleFilterPipe) {  }

  ngOnInit() {
    this.modules = Object.values(Modules);
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

  private verwijderDubbels(oudeLijstCompetenties: Hoofdcompetentie[], nieuweLijstCompetenties: Hoofdcompetentie[]): Hoofdcompetentie[] {
    const newList = new Array<Hoofdcompetentie>();
    oudeLijstCompetenties.forEach(oud => {
      nieuweLijstCompetenties.forEach(nieuw => {
        if (oud === nieuw) {
          newList.push(oud);
        }
      });
    });
    return newList;
  }

}
