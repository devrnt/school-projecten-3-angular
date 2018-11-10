import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatTableDataSource, MatRadioChange } from '@angular/material';
import { Beoordeling } from 'src/app/models/beoordeling.model';
import { LeerlingHoofdcompetentie } from 'src/app/models/leerling-hoofdcompetentie.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LeerlingDeelcompetentie } from 'src/app/models/leerling-deelcompetentie.model';
import { Deelcompetentie } from 'src/app/models/deelcompetentie.model';

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
  /**
  * Property die de data in de tabel bijhoudt
  */
  public dataSource: MatTableDataSource<Hoofdcompetentie>;
  /**
  * Property om bij te houden hoeveel keer een hoofdcompetetentie beoordeeld is geweest. Dit is omdat we nog met hardcoded data zitten.
  */
  private aantalKeerHoofdcompetentieBeoordeeld: number;
  /**
  * Property om bij te houden hoeveel keer een deelcompetentie al beoordeeld is geweest. Dit is omdat we nog met hardcoded data zitten.
  */
  private aantalKeerDeelcompetentieBeoordeeld: number;
  /**
  * Property om bij te houden wat de keuzes van beoordelingen zijn
  */
  public keuzesBeoordeling: string[] = Object.values(Beoordeling).splice(0, 5);
  /**
  * Property om bij te houden of de gebruiker de competentie als behaald heeft aangeduid
  */
  public behaald = false;
  /**
  * Property om bij te houden of de gebruiker een hoofdcompetentie heeft opengeklikt
  */
  public expandedElement: Hoofdcompetentie;
  /**
  * Property om bij te houden wat de te behalen deelcompetenties zijn
  */
  public teBehalenLeerlingDeelcompetenties: Deelcompetentie[];
  /**
  * Property om bij te houden wat de leerling is die geselcteerd is
  */
  private _leerling: Leerling;
  @Input()
  /**
  * Setter geselecteerdeLeerling
  * @param {Leerling} leerlingFromParent
  */
  public set leerling(llnFromParent: Leerling) {
    this._leerling = llnFromParent;
  }
  /**
  * Getter geselecteerdeLeerling
  * @return {Leerling}
  */
  public get leerling(): Leerling {
    return this._leerling;
  }
  /**
  * Property om bij te houden welke kolommen er getoond kunnen worden in de tabel
  */
  displayedColumns: string[] = ['Hoofdcompetentie', `Beoordeling`, 'Behaald'];
  /**
  * Property om bij te houden welke kolommen er getoond moeten worden in de tabel
  */
  columnsToDisplay: string[] = this.displayedColumns;
  constructor() { }

  ngOnInit() {
    this.aantalKeerHoofdcompetentieBeoordeeld = 0;
    this.aantalKeerDeelcompetentieBeoordeeld = 0;
    this.teBehalenLeerlingDeelcompetenties = [];
  }

  /**
  * Om de tabel te vullen met de hoofdcompetenties van de geselecteerde leerling
  */
  ngOnChanges() {
    this._leerling ?
      this.dataSource = new MatTableDataSource(this._leerling.competenties) :
      this.dataSource = new MatTableDataSource();
  }
  /**
  * Methode om een hoofdcompetentie en zijn deelcompetenties te beoordelen met de score die een gebruiker ingeeft
  * @param {MatRadioChange} beoordeling
  * @param {Hoofdcompetentie} teBeoordelenHoofdcompetentie
  */
  public hoofdcompetentieBeoordelen(beoordeling: MatRadioChange, hoofdcomp: Hoofdcompetentie) {
    // TO DO: beoordelingen nog bijvoegen
    this.leerling.behaaldeHoofdcompetenties.push(new LeerlingHoofdcompetentie(++this.aantalKeerHoofdcompetentieBeoordeeld, hoofdcomp));
    const behaaldeLeerlingHoofdcompetentie = this.leerling.behaaldeHoofdcompetenties.find(bhc => bhc.hoofdcompetentie === hoofdcomp);
    hoofdcomp.deelcompetenties.forEach(deelcomp => {
      behaaldeLeerlingHoofdcompetentie.leerlingDeelcompetenties
        .push(new LeerlingDeelcompetentie(++this.aantalKeerDeelcompetentieBeoordeeld, deelcomp).beoordeling = beoordeling.value);
    });
  }
  /**
  * Methode om een hoofdcompetentie en zijn deelcompetenties als geslaagd in te geven
  * @param {any} resultVanCheckbox
  * @param {Hoofdcompetentie} teBehalenHoofdcompetentie
  */
  public behaalHoofdcompetentie(selection: any, hoofdcomp: Hoofdcompetentie) {
    const behaaldeLeerlingHoofdcompetentie = this.leerling.behaaldeHoofdcompetenties.find(bhc => bhc.hoofdcompetentie === hoofdcomp);
    if (behaaldeLeerlingHoofdcompetentie !== null) {
      behaaldeLeerlingHoofdcompetentie.behaald = selection;
      behaaldeLeerlingHoofdcompetentie.leerlingDeelcompetenties.forEach(bdc => bdc.behaald = selection);
    }
  }
  /**
  * Methode om een hoofdcompetentie uit te klappen zodat zijn deelcompetenties kunnen bekeken en beoordeeld worden
  * @param {Hoofdcompetentie} openTeKlappenHoofdcompetentie
  */
  public klapHoofdcompetentieOpen(hoofdcomp: Hoofdcompetentie) {
    this.expandedElement = hoofdcomp;
    this.teBehalenLeerlingDeelcompetenties = hoofdcomp.deelcompetenties;
  }
}
