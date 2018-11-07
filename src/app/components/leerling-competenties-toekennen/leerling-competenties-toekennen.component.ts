import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-leerling-competenties-toekennen',
  templateUrl: './leerling-competenties-toekennen.component.html',
  styleUrls: ['./leerling-competenties-toekennen.component.css']
})
export class LeerlingCompetentiesToekennenComponent implements OnInit, OnChanges {
  public dataSource: MatTableDataSource<Hoofdcompetentie>;
  private _leerling: Leerling;
  @Input()
  public set leerling(llnFromParent: Leerling) {
    this._leerling = llnFromParent;
  }
  public get leerling(): Leerling {
    return this._leerling;
  }
  displayedColumns: string[] = ['Hoofdcompetentie'];
  constructor() { }

  ngOnInit() {
    console.log('Dit krijgt de tabel binnen', this.dataSource);
  }

  ngOnChanges() {
    this._leerling ? this.dataSource = new MatTableDataSource(this._leerling.competenties) : this.dataSource = new MatTableDataSource();
  }

}
