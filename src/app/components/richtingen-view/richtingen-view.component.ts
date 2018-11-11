import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { LeerlingService } from 'src/app/services/leerling.service';
import { RichtingService } from 'src/app/services/richting.service';
import { Subject } from 'rxjs';
import { Richting } from 'src/app/models/richting';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { RichtingFilterPipe } from '../../pipes/richting/richting-filter.pipe';

@Component({
  selector: 'app-richtingen-view',
  templateUrl: './richtingen-view.component.html',
  styleUrls: ['./richtingen-view.component.css']
})
export class RichtingenViewComponent implements OnInit {
  /**
  * Property om de filter van de naam van de richting bij te houden
  */
  public filterRichtingenNaam: string;
  /**
  * Subject om te luisteren naar de input van de richting zodat er opnieuw gefilterd kan worden op richting
  */
  public filterRichting$ = new Subject<string>();
  /**
  * Property om de orriginele lijst van richtingen bij te houden
  */
  private _richtingen: Richting[];
  /**
  * Property om de gefilterde richtingen bij te houden
  */
  private _richtingenFiltered: Richting[];
  /**
  * Property om de innerWidth bij te houden
  */
  public innerWidth: any;
  /**
  * Property om het aantal kolommen dat getoond moet worden bij te houden afhankelijk van de grootte van het scherm
  */
  public numberOfColumns: number;
  /**
  * Property om de kolommen van de richtingen bij te houden
  */
  public columns: Richting[][];

  /**
  * Constructor van RichtingenViewComponent
  * Hier wordt ook geluisterd naar het subject dat op de filter van richting staat
  * @param {RichtingService} richtingService
  * @param {RichtingFilterPipe} richtingFilterPipe
  */
  constructor(private _richtingService: RichtingService, private _filter: RichtingFilterPipe) {
    this._richtingen = this._richtingService.richtingen;
    this._richtingenFiltered = this.richtingen;
    this.filterRichting$
      .pipe(
        distinctUntilChanged(),
        map(rich => rich.toLowerCase())
      )
      .subscribe(rich => {
        this.filterRichtingenNaam = rich;
        this._richtingenFiltered = this._filter.transform(this._richtingen, this.filterRichtingenNaam);
        this.orderItems();
      });
    this.numberOfColumns = 1;
    this.columns = [[], [], [], []];
  }

  /**
  * Getter richtingen
  * @return {Richting[]}
  */
  public get richtingen() {
    return this._richtingen;
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
    for (let index = 0; index < this._richtingenFiltered.length; index++) {
      this.columns[index % this.numberOfColumns].push(this._richtingenFiltered[index]);
    }
  }

  /**
  * Dit is een methode die de eventemitter triggert om de richting aan te passen
  * @param {Richting} geselecteerdeRichting
  */
  public editRichting(richting: Richting) {
    this._richtingService.geselecteerdeRichting = richting;
  }

  /**
  * Methode om een richting te verwijderen uit de gefilterde lijst van richtingen
  * @param {Richting} richtingDieUitLijstMoetVerwijderdWorden
  */
  public verwijderRichting(richting: Richting) {
    this._richtingen = this._richtingen.filter(r => r.naam !== richting.naam);
    this._richtingenFiltered = this.richtingen;
    this.orderItems();
  }

}
