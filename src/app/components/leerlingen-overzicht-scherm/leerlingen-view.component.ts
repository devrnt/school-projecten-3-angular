import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { LeerlingService } from 'src/app/services/leerling.service';
import { Subject } from 'rxjs';
import { Richting } from 'src/app/models/richting';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Leerling } from 'src/app/models/leerling.model';
import { LeerlingNaamFilterPipe } from 'src/app/pipes/leerling/leerling-filter.pipe';
import { FormControl } from '@angular/forms';
import { LeerlingRichtingFilterPipe } from 'src/app/pipes/leerling/leerling-richting-filter.pipe';

@Component({
  selector: 'app-leerlingen-view',
  templateUrl: './leerlingen-view.component.html',
  styleUrls: ['./leerlingen-view.component.css']
})
export class LeerlingenViewComponent implements OnInit {
  public filterLeerlingenNaam: string;
  public filterLeerlingenRichting: string;
  public filterNaamLeerling$ = new Subject<string>();
  public filterRichtingLeerling$ = new Subject<string>();
  private _leerlingen:  Leerling[];
  private _leerlingenOpNaamGefilterd: Leerling[];
  private _leerlingenOpRichtingGefilterd: Leerling[];
  private _leerlingenFiltered: Leerling[];
  public innerWidth: any;
  public numberOfColumns: number;
  public columns: Leerling[][];
  public richtingen: string[];
  public richtingForm = new FormControl();
  @Output() edit = new EventEmitter<Richting>();

  constructor(
    private _leerlingService: LeerlingService,
    private _filterNaam: LeerlingNaamFilterPipe,
    private _filterRichting: LeerlingRichtingFilterPipe) {
      this._leerlingen = this._leerlingService.leerlingen;
      console.log(this._leerlingen);
      this.richtingen = this._leerlingen.map(l => l.richting.naam).filter((elem, pos, arr) => {
        return arr.indexOf(elem) === pos;
      });
      // console.log(this._leerlingen);
      this._leerlingenFiltered = this._leerlingen;
      this._leerlingenOpNaamGefilterd = this._leerlingen;
      this._leerlingenOpRichtingGefilterd = this._leerlingen;
      this.filterNaamLeerling$
        .pipe(
          distinctUntilChanged()
        )
        .subscribe(naam => {
          console.log('Hier werkt da wel zeker?', naam);
          this.filterLeerlingenNaam = naam;
          this._leerlingenOpNaamGefilterd = this._filterNaam.transform(this._leerlingen, this.filterLeerlingenNaam);
          this.orderItems();
        });

      this.filterRichtingLeerling$
        .pipe(
          distinctUntilChanged()
        )
        .subscribe(richting => {
          console.log('het zou hier moeten komen dan: ', richting);
          this.filterLeerlingenRichting = richting;
          this._leerlingenOpRichtingGefilterd = this._filterRichting.transform(this._leerlingen, this.filterLeerlingenRichting);
          console.log(this._leerlingenOpRichtingGefilterd);
          this.orderItems();
        });
      this.numberOfColumns = 1;
      this.columns = [[], [], [], []];
      this.orderItems();
      // console.log(this.columns);
  }

  public get leerlingen() {
    return this._leerlingen;
  }

  private verwijderDubbels(oudeLijstLeerlingen: Leerling[], nieuweLijstLeerlingen: Leerling[]): Leerling[] {
    const newList = new Array<Leerling>();
    oudeLijstLeerlingen.forEach(oud => {
      nieuweLijstLeerlingen.forEach(nieuw => {
        if (oud === nieuw) {
          newList.push(oud);
        }
      });
    });

    return newList;

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.orderItems();
  }

  ngOnInit() {
      this.innerWidth = window.innerWidth;
      this.orderItems();
  }

  /*
   * Method orderItems
   * layouting
   * checks the screensize and decides number of columns, devides richtingen over this number of columns
  */
  public orderItems() {
    // how many columns?
    if (this.innerWidth < 768) {
      this.numberOfColumns = 1;
    } else if (this.innerWidth < 992) {
      this.numberOfColumns = 2;
    } else if (this.innerWidth < 1200) {
      this.numberOfColumns = 3;
    } else {
      this.numberOfColumns = 4;
    }

    // divides richtingen between the columns
    this.columns = [[], [], [], []];
    this._leerlingenFiltered = this.verwijderDubbels(this._leerlingenOpNaamGefilterd, this._leerlingenOpRichtingGefilterd);
    for (let index = 0; index < this._leerlingenFiltered.length; index++) {
      this.columns[index % this.numberOfColumns].push(this._leerlingenFiltered[index]);
    }
  }

  public editLeerling(richting: Richting) {
    this.edit.emit(richting);
  }

  public verwijderLeerling(leerling: Leerling) {
    this._leerlingenFiltered = this._leerlingen.filter(r => r.id !== leerling.id);
    this.orderItems();
  }

}
