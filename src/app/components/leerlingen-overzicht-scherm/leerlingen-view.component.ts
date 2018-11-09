import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { LeerlingService } from 'src/app/services/leerling.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Richting } from 'src/app/models/richting';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Leerling } from 'src/app/models/leerling.model';
import { LeerlingFilterPipe } from 'src/app/pipes/leerling/leerling-filter.pipe';
import { FormControl } from '@angular/forms';
import { LeerlingRichtingFilterPipe } from 'src/app/pipes/leerling/leerling-richting-filter.pipe';

@Component({
  selector: 'app-leerlingen-view',
  templateUrl: './leerlingen-view.component.html',
  styleUrls: ['./leerlingen-view.component.css']
})
export class LeerlingenViewComponent implements OnInit {
  private _naamFilterValue: string;
  private _richtingFilterValue: string[] = [];
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
  @Output() edit = new EventEmitter<Leerling>();
  @Output() toekennenCompetenties = new EventEmitter<Leerling>();

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

  public get leerlingen() {
    return this._leerlingen;
  }

  public set naamFilterValue(val: string) {
    this._naamFilterValue = val;
  }

  public get naamFilterValue(): string {
    return this._naamFilterValue;
  }

  public get richtingFilterValue(): string[] {
    return this._richtingFilterValue;
  }

  public set richtingFilterValue(val: string[]) {
    this._richtingFilterValue = val;
    this._leerlingenFiltered =  this._filter.transform(this._leerlingen, this._naamFilterValue, this._richtingFilterValue);
    this.orderItems();
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
    for (let index = 0; index < this._leerlingenFiltered.length; index++) {
      this.columns[index % this.numberOfColumns].push(this._leerlingenFiltered[index]);
    }
  }

  public editLeerling(leerling: Leerling) {
    this.edit.emit(leerling);
  }

  public kenCompetentiesToe(leerling: Leerling) {
    this.toekennenCompetenties.emit(leerling);
  }

  public verwijderLeerling(leerling: Leerling) {
    this._leerlingen = this._leerlingen.filter(r => r.id !== leerling.id);
    this._leerlingenFiltered = this._filter.transform(this._leerlingen, this._naamFilterValue, this._richtingFilterValue);
    this.orderItems();
  }

}
