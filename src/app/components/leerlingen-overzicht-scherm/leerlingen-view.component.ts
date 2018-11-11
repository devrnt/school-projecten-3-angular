import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { LeerlingService } from 'src/app/services/leerling.service';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Leerling } from 'src/app/models/leerling.model';
import { LeerlingFilterPipe } from 'src/app/pipes/leerling/leerling-filter.pipe';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-leerlingen-view',
  templateUrl: './leerlingen-view.component.html',
  styleUrls: ['./leerlingen-view.component.css']
})
export class LeerlingenViewComponent implements OnInit {
  /**
  * Property om de filter van de naam bij te houden
  */
  private _naamFilterValue: string;
  /**
  * Property om de filter van de richting bij te houden
  */
  private _richtingFilterValue: string[] = [];
  /**
  * Subject om te luisteren naar de input van de naam zodat er opnieuw gefilterd kan worden op naam
  */
  public filterNaamLeerling$ = new Subject<string>();
  /**
  * Subject om te luisteren naar de input van de richting zodat er opnieuw gefilterd kan worden op richting
  */
  public filterRichtingLeerling$ = new Subject<string>();
  /**
  * Property om de orriginele lijst van leerlingen bij te houden
  */
  private _leerlingen:  Leerling[];
  /**
  * Property om de gefilterde leerlingen bij te houden
  */
  private _leerlingenFiltered: Leerling[];
  /**
  * Property om de innerWidth bij te houden
  */
  public innerWidth: any;
  /**
  * Property om het aantal kolommen dat getoond moet worden bij te houden afhankelijk van de grootte van het scherm
  */
  public numberOfColumns: number;
  /**
  * Property om de kolommen van de leerlingen bij te houden
  */
  public columns: Leerling[][];
  /**
  * Property om de namen van de richtingen bij te houden
  */
  public richtingen: string[];
  /**
  * Property om het formulier van de richting bij te houden
  */
  public richtingForm = new FormControl();

  /**
  * Een property die je doorgeeft naar de parentcomponent dat een edit event triggert
  * @event
  */
  @Output() edit = new EventEmitter<Leerling>();
  /**
  * Een property die je doorgeeft naar de parentcomponent dat een competentieToekent event triggert
  * @event
  */
  @Output() toekennenCompetenties = new EventEmitter<Leerling>();

  /**
  * Constructor van LeerlingenViewComponent
  * Hier wordt ook geluisterd naar het subject dat op beide filters staat
  * @param {LeerlingService} leerlingService
  * @param {LeerlingFilterPipe} leerlingFilter
  */
  constructor(
    private _leerlingService: LeerlingService,
    private _filter: LeerlingFilterPipe
  ) {
      this._leerlingen = this._leerlingService.leerlingen;
      this.richtingen = this._leerlingen.map(l => l.richting.naam).filter((elem, pos, arr) => {
        return arr.indexOf(elem) === pos;
      });
      // console.log(this._leerlingen);
      this._leerlingenFiltered = this._leerlingen;
      this.filterNaamLeerling$
        .pipe(
          distinctUntilChanged()
        )
        .subscribe(naam => {
          this._naamFilterValue = naam;
          this._leerlingenFiltered =
          this._filter.transform(this._leerlingen, this._naamFilterValue, this._richtingFilterValue);
          this.orderItems();
        });

      this.numberOfColumns = 1;
      this.columns = [[], [], [], []];
      this.orderItems();
      // console.log(this.columns);
  }

  /**
  * Getter leerlingen
  * @return {Leerling[]}
  */
  public get leerlingen() {
    return this._leerlingen;
  }

  /**
  * Setter naamFilterValue
  * @param {string} value
  */
  public set naamFilterValue(val: string) {
    this._naamFilterValue = val;
  }

  /**
  * Getter naamFilterValue
  * @return {string}
  */
  public get naamFilterValue(): string {
    return this._naamFilterValue;
  }

  /**
  * Getter richtingFilterValue
  * @return {string[]}
  */
  public get richtingFilterValue(): string[] {
    return this._richtingFilterValue;
  }

  /**
  * Setter richtingFilterValue
  * @param {string[]} value
  */
  public set richtingFilterValue(val: string[]) {
    this._richtingFilterValue = val;
    this._leerlingenFiltered =  this._filter.transform(this._leerlingen, this._naamFilterValue, this._richtingFilterValue);
    this.orderItems();
  }

  /**
  * Dit is een methode die opgeroepen wordt telkens de gebruiker het scherm van formaat wijzigt. De methode orderItems wordt aangeroepen.
  */
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
    for (let index = 0; index < this._leerlingenFiltered.length; index++) {
      this.columns[index % this.numberOfColumns].push(this._leerlingenFiltered[index]);
    }
  }

  /**
  * Dit is een methode die de eventemitter triggert om de leerling aan te passen
  * @param {Leerling} geselecteerdeLeerling
  */
  public editLeerling(leerling: Leerling) {
    this.edit.emit(leerling);
  }

  /**
  * Dit is een methode die de eventemitter triggert om de competenties die beoordeeld zijn aan de leerling
  * * @param {Leerling} geselecteerdeLeerling
  */
  public kenCompetentiesToe(leerling: Leerling) {
    this.toekennenCompetenties.emit(leerling);
  }

  /**
  * Methode om een leerling te verwijderen uit de gefilterde lijst van leerlingen
  * @param {Leerling} leerlingDieUitLijstMoetVerwijderdWorden
  */
  public verwijderLeerling(leerling: Leerling) {
    this._leerlingen = this._leerlingen.filter(r => r.id !== leerling.id);
    this._leerlingenFiltered = this._filter.transform(this._leerlingen, this._naamFilterValue, this._richtingFilterValue);
    this.orderItems();
  }

}
