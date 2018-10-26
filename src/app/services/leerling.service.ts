import { Injectable } from '@angular/core';
import { Leerling, Geslacht } from '../models/leerling.model';
import { Beoordeling } from '../models/beoordeling.model';
import { RichtingService } from './richting.service';

@Injectable()
export class LeerlingService {
  private _leerlingen: Leerling[];
  constructor(private _richtingService: RichtingService) {
    const informatica = _richtingService.richtingen[0];

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

    this._leerlingen =  [
      leerling1, leerling2, leerling3
    ];
  }

  public get leerlingen(): Leerling[] {
    return this._leerlingen;
  }

}
