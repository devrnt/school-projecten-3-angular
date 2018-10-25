import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { LeerlingService } from 'src/app/services/leerling.service';
import { RichtingService } from 'src/app/services/richting.service';
import { Subject } from 'rxjs';
import { Richting } from 'src/app/models/richting';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { RichtingFilterPipe } from '../richting-filter.pipe';

@Component({
  selector: 'app-richtingen-view',
  templateUrl: './richtingen-view.component.html',
  styleUrls: ['./richtingen-view.component.css']
})
export class RichtingenViewComponent implements OnInit {
  public filterRichtingenNaam: string;
  public filterRichting$ = new Subject<string>();
  private _richtingen: Richting[];
  private _richtingenFiltered: Richting[];
  public innerWidth: any;
  public numberOfColumns: number;
  public columns: Richting[][];

  @Output() edit = new EventEmitter<Richting>();

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

  public get richtingen() {
    return this._richtingen;
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
    for (let index = 0; index < this._richtingenFiltered.length; index++) {
      this.columns[index % this.numberOfColumns].push(this._richtingenFiltered[index]);
    }
  }

  public editRichting(richting: Richting) {
    this.edit.emit(richting);
  }

  public verwijderRichting(richting: Richting) {
    this._richtingen = this._richtingen.filter(r => r.naam !== richting.naam);
    this._richtingenFiltered = this.richtingen;
    this.orderItems();
  }

}
