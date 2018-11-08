import { Injectable } from '@angular/core';
import { Leerling, Geslacht } from '../models/leerling.model';
import { Beoordeling } from '../models/beoordeling.model';
import { RichtingService } from './richting.service';
import { HttpClient } from '@angular/common/http';
import { CompetentieService } from './competentie.service';
import { map } from 'rxjs/operators';
import { LeerlingHoofdcompetentie } from '../models/leerling-hoofdcompetentie.model';
import { LeerlingDeelcompetentie } from '../models/leerling-deelcompetentie.model';

@Injectable()
export class LeerlingService {
  private _leerlingen: Leerling[];
  private _url = 'api/leerlingen';

  constructor(
    private _http: HttpClient,
    private _richtingService: RichtingService,
    private _competentieService: CompetentieService
  ) {

    const informatica = _richtingService.richtingen[0];
    const haarzorg = _richtingService.richtingen[1];
    const kantoor = _richtingService.richtingen[2];

    const leerling1 = new Leerling('abc123');
    leerling1.voornaam = 'Hu Ocean';
    leerling1.achternaam = 'Li';
    leerling1.geslacht = Geslacht.Man;
    leerling1.richting = informatica;
    leerling1.email = 'hu.ocean.li@gmail.com';
    leerling1.geboortedatum = new Date(1997, 1, 1);
    leerling1.competenties = _competentieService.behaaldeHoofdcompetenties;
    leerling1.projecten = [];

    const leerling2 = new Leerling('abc456');
    leerling2.voornaam = 'Jonathan';
    leerling2.achternaam = 'Delmeiren';
    leerling2.geslacht = Geslacht.Man;
    leerling2.richting = informatica;
    leerling2.email = 'jonathan.delmeiren@gmail.com';
    leerling2.geboortedatum = new Date(1997, 2, 2);
    leerling2.competenties = [];
    leerling2.projecten = [];
    // tslint:disable-next-line:max-line-length
    leerling2.behaaldeHoofdcompetenties.push(new LeerlingHoofdcompetentie(1, this._competentieService.hoofdcompetenties.find(hc => hc.description.includes('werkpost'))));
    // tslint:disable-next-line:max-line-length
    leerling2.behaaldeHoofdcompetenties.find(bh => bh.id === 1).leerlingDeelcompetenties = [new LeerlingDeelcompetentie(1, this._competentieService.hoofdcompetenties.find(hc => hc.description.includes('werkpost')).deelcompetenties.find(dc => dc.description.includes(' ')))];


    const leerling3 = new Leerling('abc789');
    leerling3.voornaam = 'Renata';
    leerling3.achternaam = 'Haleydt';
    leerling3.geslacht = Geslacht.Vrouw;
    leerling3.richting = informatica;
    leerling3.email = 'renata.haleydt@gmail.com';
    leerling3.geboortedatum = new Date(1997, 3, 3);
    leerling3.competenties = this._competentieService.hoofdcompetenties;
    leerling3.projecten = [];
    // tslint:disable-next-line:max-line-length
    leerling3.behaaldeHoofdcompetenties.push(new LeerlingHoofdcompetentie(2, this._competentieService.hoofdcompetenties.find(hc => hc.description.includes('werkpost'))));

    const leerling4 = new Leerling('def123');
    leerling4.voornaam = 'Oceana';
    leerling4.achternaam = 'Li';
    leerling4.geslacht = Geslacht.Vrouw;
    leerling4.richting = haarzorg;
    leerling4.email = 'oceana.li@gmail.com';
    leerling4.geboortedatum = new Date(1997, 4, 4);
    leerling4.competenties = this._competentieService.hoofdcompetenties;
    leerling4.projecten = [];

    const leerling5 = new Leerling('def456');
    leerling5.voornaam = 'Jonathania';
    leerling5.achternaam = 'Delmeiren';
    leerling5.geslacht = Geslacht.Vrouw;
    leerling5.richting = haarzorg;
    leerling5.email = 'jonathania.delmeiren.@gmail.com';
    leerling5.competenties = this._competentieService.hoofdcompetenties;
    leerling5.geboortedatum = new Date(1997, 5, 5);
    leerling5.projecten = [];

    const leerling6 = new Leerling('def789');
    leerling6.voornaam = 'Renato';
    leerling6.achternaam = 'Haleydt';
    leerling6.geslacht = Geslacht.Man;
    leerling6.richting = haarzorg;
    leerling6.email = 'renato.haleydt@gmail.com';
    leerling6.competenties = this._competentieService.hoofdcompetenties;
    leerling6.geboortedatum = new Date(1997, 6, 6);
    leerling6.projecten = [];

    const leerling7 = new Leerling('ghi123');
    leerling7.voornaam = 'Tom';
    leerling7.achternaam = 'De Schutter';
    leerling7.geslacht = Geslacht.Man;
    leerling7.richting = kantoor;
    leerling7.email = 'tom.de.schutter@gmail.com';
    leerling7.competenties = this._competentieService.hoofdcompetenties;
    leerling7.geboortedatum = new Date(1997, 7, 7);
    leerling7.projecten = [];

    const leerling8 = new Leerling('ghi456');
    leerling8.voornaam = 'Jan';
    leerling8.achternaam = 'Sneeuw';
    leerling8.geslacht = Geslacht.Man;
    leerling8.richting = kantoor;
    leerling8.email = 'jan.sneeuw.@gmail.com';
    leerling8.competenties = this._competentieService.hoofdcompetenties;
    leerling8.geboortedatum = new Date(1997, 8, 8);
    leerling8.projecten = [];

    const leerling9 = new Leerling('ghi789');
    leerling9.voornaam = 'Liana';
    leerling9.achternaam = 'Vande Kerkhove';
    leerling9.geslacht = Geslacht.Vrouw;
    leerling9.richting = kantoor;
    leerling9.email = 'liana.vandekerkhove@gmail.com';
    leerling9.competenties = this._competentieService.hoofdcompetenties;
    leerling9.geboortedatum = new Date(1997, 9, 9);
    leerling9.projecten = [];

    this._leerlingen =  [
      leerling1, leerling2, leerling3, leerling4, leerling5, leerling6, leerling7, leerling8, leerling9
    ];
  }

  public get leerlingen(): Leerling[] {
    this.fetchLeerlingen();
    return this._leerlingen;
  }

  public fetchLeerlingen() {
    // console.log(this.leerlingen.map(l => l.toJSON()));
    this._http.get(this._url)
    .pipe(map((list: any[]): Leerling[] => list.map(Leerling.fromJSON)))
    .subscribe(res => {
      this._leerlingen = res;
    });
  }

}
