import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatTableDataSource, MatRadioChange } from '@angular/material';
import { Beoordeling } from 'src/app/models/beoordeling.model';
import { LeerlingHoofdcompetentie } from 'src/app/models/leerling-hoofdcompetentie.model';

@Component({
  selector: 'app-leerling-competenties-toekennen',
  templateUrl: './leerling-competenties-toekennen.component.html',
  styleUrls: ['./leerling-competenties-toekennen.component.css']
})
export class LeerlingCompetentiesToekennenComponent implements OnInit, OnChanges {
  public dataSource: MatTableDataSource<Hoofdcompetentie>;
  public aantalKeerGeprobeerd: number;
  public keuzesBeoordeling: string[] = Object.values(Beoordeling).splice(0, 5);
  public behaald = false;
  private _leerling: Leerling;
  @Input()
  public set leerling(llnFromParent: Leerling) {
    this._leerling = llnFromParent;
  }
  public get leerling(): Leerling {
    return this._leerling;
  }
  displayedColumns: string[] = ['Hoofdcompetentie', `Beoordeling`, 'Behaald'];
  columnsToDisplay: string[] = this.displayedColumns;
  constructor() { }

  ngOnInit() {
    this.aantalKeerGeprobeerd = 0;
  }

  ngOnChanges() {
    this._leerling ? this.dataSource = new MatTableDataSource(this._leerling.competenties) : this.dataSource = new MatTableDataSource();
  }

  public hoofdcompetentieBeoordelen(beoordeling: MatRadioChange, hoofdcompetentie: Hoofdcompetentie) {
    this.leerling.behaaldeHoofdcompetenties.push(new LeerlingHoofdcompetentie(hoofdcompetentie.id));
    const behaaldeHoofdcompetentie = this.leerling.behaaldeHoofdcompetenties.find(bhc => bhc.id === hoofdcompetentie.id);
    behaaldeHoofdcompetentie.behaald = true;
    behaaldeHoofdcompetentie.hoofdcompetentie = hoofdcompetentie;
    console.log('De behaalde hoofdcompetenties = ', this.leerling.behaaldeHoofdcompetenties);
  }

  public behaalHoofdcompetentie(selection: any, hoofdcompetentie: Hoofdcompetentie) {
    console.log('behaald = ', this.behaald);
    console.log('parameter = ', selection);

  }

}
