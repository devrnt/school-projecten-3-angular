import { Component, OnInit, Input } from '@angular/core';
import { Richting } from 'src/app/models/richting';
import { Modules, Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CompetentieDialogComponent } from '../competentie-dialog/competentie-dialog.component';
import { Subject } from 'rxjs';
import { CompetentieFilterPipe } from 'src/app/pipes/richting/competentie-description-filter.pipe';
import { distinctUntilChanged, defaultIfEmpty, sampleTime, debounceTime } from 'rxjs/operators';
import { RichtingService } from 'src/app/services/richting.service';

@Component({
  selector: 'app-richting-competenties',
  templateUrl: './richting-competenties.component.html',
  styleUrls: ['./richting-competenties.component.css']
})
export class RichtingCompetentiesComponent implements OnInit {
  @Input() public richting: Richting;
  public modules = new Array<string>();
  public beschrijving = '';
  public module = '';
  private _selected = '';
  private dialogRef: MatDialogRef<CompetentieDialogComponent>;
  private _hoofdcompetenties: Hoofdcompetentie[];
  private _hoofdcompetentiesFiltered: Hoofdcompetentie[];
  public filterHoofdcompetentieBeschrijving$ = new Subject<string>();
  public filterHoofdcompetentieModule$ = new Subject<string>();
  @Input() public new: boolean;

  get hoofdcompetentiesFiltered(): Hoofdcompetentie[] {
    return this._hoofdcompetentiesFiltered;
  }

  set hoofdcompetentiesFiltered(comp: Hoofdcompetentie[]) {
    this._hoofdcompetentiesFiltered = comp;
  }

  get selected(): string {
    return this._selected;
  }

  public get icon(): string {
    return this.richting ? this.richting.icon : '';
  }

  public get kleur(): string {
    return this.richting ? this.richting.kleur : '';
  }

  set selected(value: string) {
    console.log(value);
    this._selected = value;
    this.hoofdcompetentiesFiltered = this._filter.transform(this.richting.competenties, this.beschrijving, this._selected);
  }

  constructor(
    public _richtingService: RichtingService,
    public dialog: MatDialog,
    private _filter: CompetentieFilterPipe,
  ) {
    this.hoofdcompetentiesFiltered = [];
    this.modules = Object.values(Modules);
  }

  ngOnInit() {
    if (this.new) {
      this._richtingService.geselecteerdeNieuweRichting$.subscribe(r => {
        this.richting = r;
        this.hoofdcompetentiesFiltered = this.richting ? this.richting.competenties : [];
      });
    } else {
      this._richtingService.richting$.subscribe( r => {
        this.richting = r;
        console.log(r);
        this.hoofdcompetentiesFiltered = this.richting ? this.richting.competenties : [];
      });
    }
    this.filterHoofdcompetentieBeschrijving$
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(besch => {
        console.log(this.selected);
        this.hoofdcompetentiesFiltered = this._filter.transform(this.richting.competenties, besch, this.selected);
        console.log(this.hoofdcompetentiesFiltered);
      });
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
