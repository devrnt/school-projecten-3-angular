import { Injectable } from '@angular/core';
import { Leerling, Geslacht } from '../models/leerling.model';
import { Beoordeling } from '../models/beoordeling.model';
import { RichtingService } from './richting.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeerlingService {
  private _leerlingen: Leerling[];
  constructor(private _http: HttpClient, private _richtingService: RichtingService) {
    const informatica = _richtingService.richtingen[0];
    const haarzorg = _richtingService.richtingen[1];
    const kantoor = _richtingService.richtingen[2];

    const leerling1 = new Leerling('abc123');
    leerling1.voornaam = 'Hu Ocean';
    leerling1.achternaam = 'Li';
    leerling1.geslacht = Geslacht.Man;
    leerling1.richting = informatica;
    leerling1.email = 'hu.ocean.li@gmail.com';
    leerling1.competenties = [];
    leerling1.projecten = [];

    const leerling2 = new Leerling('abc456');
    leerling2.voornaam = 'Jonathan';
    leerling2.achternaam = 'Delmeiren';
    leerling2.geslacht = Geslacht.Man;
    leerling2.richting = informatica;
    leerling2.email = 'jonathan.delmeiren.@gmail.com';
    leerling2.competenties = [];
    leerling2.projecten = [];

    const leerling3 = new Leerling('abc789');
    leerling3.voornaam = 'Renata';
    leerling3.achternaam = 'Haleydt';
    leerling3.geslacht = Geslacht.Vrouw;
    leerling3.richting = informatica;
    leerling3.email = 'renata.haleydt@gmail.com';
    leerling3.competenties = [];
    leerling3.projecten = [];

    const leerling4 = new Leerling('def123');
    leerling4.voornaam = 'Oceana';
    leerling4.achternaam = 'Li';
    leerling4.geslacht = Geslacht.Vrouw;
    leerling4.richting = haarzorg;
    leerling4.email = 'oceana.li@gmail.com';
    leerling4.competenties = [];
    leerling4.projecten = [];

    const leerling5 = new Leerling('def456');
    leerling5.voornaam = 'Jonathania';
    leerling5.achternaam = 'Delmeiren';
    leerling5.geslacht = Geslacht.Vrouw;
    leerling5.richting = haarzorg;
    leerling5.email = 'jonathania.delmeiren.@gmail.com';
    leerling5.competenties = [];
    leerling5.projecten = [];

    const leerling6 = new Leerling('def789');
    leerling6.voornaam = 'Renato';
    leerling6.achternaam = 'Haleydt';
    leerling6.geslacht = Geslacht.Man;
    leerling6.richting = haarzorg;
    leerling6.email = 'renato.haleydt@gmail.com';
    leerling6.competenties = [];
    leerling6.projecten = [];

    const leerling7 = new Leerling('ghi123');
    leerling7.voornaam = 'Tom';
    leerling7.achternaam = 'De Schutter';
    leerling7.geslacht = Geslacht.Man;
    leerling7.richting = kantoor;
    leerling7.email = 'tom.de.schutter@gmail.com';
    leerling7.competenties = [];
    leerling7.projecten = [];

    const leerling8 = new Leerling('ghi456');
    leerling8.voornaam = 'Jan';
    leerling8.achternaam = 'Sneeuw';
    leerling8.geslacht = Geslacht.Man;
    leerling8.richting = kantoor;
    leerling8.email = 'jan.sneeuw.@gmail.com';
    leerling8.competenties = [];
    leerling8.projecten = [];

    const leerling9 = new Leerling('ghi789');
    leerling9.voornaam = 'Liana';
    leerling9.achternaam = 'Vande Kerkhove';
    leerling9.geslacht = Geslacht.Vrouw;
    leerling9.richting = kantoor;
    leerling9.email = 'liana.vandekerkhove@gmail.com';
    leerling9.competenties = [];
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
    this._http.get('api/leerlingen').subscribe(res => console.log(res));
  }

}
