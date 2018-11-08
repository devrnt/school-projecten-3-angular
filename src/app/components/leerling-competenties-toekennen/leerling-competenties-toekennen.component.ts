import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatTableDataSource, MatRadioChange } from '@angular/material';
import { Beoordeling } from 'src/app/models/beoordeling.model';
import { LeerlingHoofdcompetentie } from 'src/app/models/leerling-hoofdcompetentie.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LeerlingDeelcompetentie } from 'src/app/models/leerling-deelcompetentie.model';

@Component({
  selector: 'app-leerling-competenties-toekennen',
  templateUrl: './leerling-competenties-toekennen.component.html',
  styleUrls: ['./leerling-competenties-toekennen.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LeerlingCompetentiesToekennenComponent implements OnInit, OnChanges {
  public dataSource: MatTableDataSource<LeerlingHoofdcompetentie>;
  public aantalKeerGeprobeerd: number;
  public keuzesBeoordeling: string[] = Object.values(Beoordeling).splice(0, 5);
  public behaald = false;
  public expandedElement: LeerlingHoofdcompetentie;
  public behaaldeLeerlingDeelcompetenties: LeerlingDeelcompetentie[];
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
    this.behaaldeLeerlingDeelcompetenties = [];
  }

  ngOnChanges() {
    this._leerling ?
      this.dataSource = new MatTableDataSource(this._leerling.behaaldeHoofdcompetenties) :
      this.dataSource = new MatTableDataSource();
  }

  public hoofdcompetentieBeoordelen(beoordeling: MatRadioChange, hoofdcompetentie: LeerlingHoofdcompetentie) {
    // TO DO: beoordelingen nog bijvoegen
    hoofdcompetentie.leerlingDeelcompetenties.forEach(dc => { dc.beoordeling = beoordeling.value; });
  }

  public behaalHoofdcompetentie(selection: any, hoofdcompetentie: LeerlingHoofdcompetentie) {
    hoofdcompetentie.behaald = selection;
    hoofdcompetentie.leerlingDeelcompetenties.forEach(dc => dc.behaald = selection);
  }

  public klapHoofdcompetentieOpen(hoofdcomp: LeerlingHoofdcompetentie) {
    this.expandedElement = hoofdcomp;
    this.behaaldeLeerlingDeelcompetenties = hoofdcomp.leerlingDeelcompetenties;
  }
}
