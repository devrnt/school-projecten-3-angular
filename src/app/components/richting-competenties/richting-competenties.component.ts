import { Component, OnInit, Input } from '@angular/core';
import { Richting } from 'src/app/models/richting.model';
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
  /**
  * De geslecteerde richting die van de parent component afkomstig is
  */
  @Input() public richting: Richting;
  /**
  * Een property die de modules van de richtingen bijhoudt
  */
  public modules = new Array<string>();
  /**
  * Een property die de filter op beschrijving bijhoudt
  */
  public beschrijving = '';
  /**
  * Een property die bijhoudt wat geselecteerd door de gebruiker is van de module
  */
  private _selected = '';
  /**
  * Een property die de dialog bijhoudt
  */
  private dialogRef: MatDialogRef<CompetentieDialogComponent>;
  /**
  * Een property die de gefilterde hoofdcompetenties bijhoudt
  */
  private _hoofdcompetentiesFiltered: Hoofdcompetentie[];
  /**
  * Subject om te luisteren naar de input van de beschrijving van een competentie zodat er opnieuw gefilterd kan worden op richting
  */
  public filterHoofdcompetentieBeschrijving$ = new Subject<string>();
  /**
  * Subject om te luisteren naar de input van de module van een competentie zodat er opnieuw gefilterd kan worden op richting
  */
  public filterHoofdcompetentieModule$ = new Subject<string>();
  /**
  * Een property die weergeeft of het over nieuwe of reeds gepersisteerde competenties gaat
  */
  @Input() public new: boolean;

  /**
  * Getter hoofdcompetentiesFiltered
  * @return {Hoofdcompetentie[]}
  */
  get hoofdcompetentiesFiltered(): Hoofdcompetentie[] {
    return this._hoofdcompetentiesFiltered;
  }

  /**
  * Setter hoofdcompetentiesFiltered
  * @param {Hoofdcompetentie[]} gefilterdeHoofdcompetenties
  */
  set hoofdcompetentiesFiltered(comp: Hoofdcompetentie[]) {
    this._hoofdcompetentiesFiltered = comp;
  }

  /**
  * Getter selected
  * @return {string}
  */
  get selected(): string {
    return this._selected;
  }

  /**
  * Getter icon
  * @return {string}
  */
  public get icon(): string {
    return this.richting ? this.richting.icon : '';
  }

  /**
  * getter kleur
  * @return {string}
  */
  public get kleur(): string {
    return this.richting ? this.richting.kleur : '';
  }

  /**
  * Setter selected
  * @param {string} selectedModule
  */
  set selected(value: string) {
    console.log(value);
    this._selected = value;
    this.hoofdcompetentiesFiltered = this._filter.transform(this.richting.competenties, this.beschrijving, this._selected);
  }

  /**
  * Constructor van RichtingCompetentiesComponent
  * @param {RichtingService} richtingService
  * @param {MatDialog} dialog
  * @param {CompetentieFilterPipe} filterOpCompetenties
  */
  constructor(
    public _richtingService: RichtingService,
    public dialog: MatDialog,
    private _filter: CompetentieFilterPipe,
  ) {
    this.hoofdcompetentiesFiltered = [];
    this.modules = Object.values(Modules);
  }

  /**
  * Hier wordt ook geluisterd naar het subject dat op beide filters staat
  */
  ngOnInit() {
    if (this.new) {
      this._richtingService.geselecteerdeNieuweRichting$.subscribe(r => {
        if (r) {
          this.richting = r;
        } else {
          this.richting = this._richtingService.getNieuweRichting();
          console.log(this.richting);
        }
          this.hoofdcompetentiesFiltered =  this.richting.competenties;
      });
    } else {
      this._richtingService.richting$.subscribe(r => {
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

  /**
  * Een methode die de dialog opent, instelt hoe groot deze moet zijn en de data meegeeft.
  * Hier wordt er ook bepaald wat er moet gebeuren als de dialog gesloten wordt
  */
  openDialog(): void {
    this.dialogRef = this.dialog.open(CompetentieDialogComponent, {
      width: '950px',
      autoFocus: true,
      data: {
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let teller = 6;
        this._richtingService.addNewHoofdCompetentie(new Hoofdcompetentie(
        ++teller,
        result.beschrijving,
        [],
        this.richting.icon,
        this.richting.kleur,
        Modules.module1), this.new);
      }
    });
  }

  /**
  * Hulpmethode om de wijzigingen die gemaakt zijn op te slaan of de nieuwe richting die aangemaakt is op te slaan
  */
  public saveChanges() {
    if (this.new) {
      this._richtingService.geselecteerdeNieuweRichting = this.richting;
    } else {
      this._richtingService.geselecteerdeRichting = this.richting;
    }
  }
}
