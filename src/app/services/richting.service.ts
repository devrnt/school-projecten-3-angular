import { Injectable } from '@angular/core';
import { Richting, Diploma, Kleur, Icon } from '../models/richting';
import { User, UserType } from '../models/user';
import { LeerlingService } from './leerling.service';
import { LeerkrachtService } from './leerkracht.service';
import { CompetentieService } from './competentie.service';

@Injectable()
export class RichtingService {
  private _richtingen: Richting[];
  constructor(private _leerkrachtService: LeerkrachtService, private _competentieSevice: CompetentieService) {
    this._richtingen = [];
    const leerkrachten = _leerkrachtService.leerkachten;
    this._richtingen = [
      new Richting(
        'Informatica',
        [
          leerkrachten[3],
          leerkrachten[4]
        ],
        []
        ,
        [
        ],
        Diploma.TSO,
        Kleur.blue,
        Icon.laptop
      ),
      new Richting(
        'Haarzorg',
        [
          leerkrachten[0],
          leerkrachten[1]
        ],
          this._competentieSevice.hoofdcompetenties
        ,
        [
        ],
        Diploma.BSO,
        Kleur.red,
        Icon.scissors
      ),
      new Richting(
        'Kantoor',
        [
          leerkrachten[1],
          leerkrachten[2]
        ],
        []
        ,
        [
        ],
        Diploma.BSO,
        Kleur.purple,
        Icon.computer
      ),
      new Richting(
        'Verkoop',
        [
          leerkrachten[1],
          leerkrachten[2]
        ],
        []
        ,
        [
        ],
        Diploma.BSO,
        Kleur.green,
        Icon.sales
      ),
      new Richting(
        'Basismechanica carrosserie',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.BSO,
        Kleur.orange,
        Icon.wrench
      ),
      new Richting(
        'Handel',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.TSO,
        Kleur.yellow,
        Icon.weegschaal
      ),
      new Richting(
        'Houtbewerking',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.BSO,
        Kleur.brown,
        Icon.tree
      ),
      new Richting(
        'Elektrische installaties Elektrotechnicus duaal (7de jaar)',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.BSO,
        Kleur.black,
        Icon.bliksem
      ),
      new Richting(
        'Auto technieken',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.TSO,
        Kleur.blue,
        Icon.car
      ),
      new Richting(
        'Mechanische technieken',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.TSO,
        Kleur.green,
        Icon.cogs
      ),
      new Richting(
        'Techniek-wetenschappen',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.TSO,
        Kleur.yellow,
        Icon.flask
      ),
      new Richting(
        'Voeding-verzorging',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.BSO,
        Kleur.orange,
        Icon.medkit
      ),
      new Richting(
        'Verzorging',
        [
          leerkrachten[1],
          leerkrachten[4]
        ],
        []
        ,
        [
        ],
        Diploma.BSO,
        Kleur.orange,
        Icon.doctor
      ),
      new Richting(
        '	Sociaal-technische Wetenschappen',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.TSO,
        Kleur.red,
        Icon.child
      ),
      new Richting(
        'Buurtsport medewerker',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.Duaal,
        Kleur.purple,
        Icon.sport
      ),
      new Richting(
        'Medewerker snackbar | Keukenmedewerker',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.Duaal,
        Kleur.blue,
        Icon.food
      ),
      new Richting(
        'Medewerker groen- en tuinbeheer',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.Duaal,
        Kleur.green,
        Icon.plant
      ),
      new Richting(
        'Polyvalent onderhoudswerker gebouwen | Tegelzetter',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.Duaal,
        Kleur.yellow,
        Icon.building
      ),
      new Richting(
        'Schilder-decorateur',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.Duaal,
        Kleur.orange,
        Icon.paint
      ),
      new Richting(
        'Winkelbediende',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.Duaal,
        Kleur.red,
        Icon.retail
      ),
      new Richting(
        'PC-technicus',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.Duaal,
        Kleur.purple,
        Icon.plug
      ),
      new Richting(
        'Verzorgende Verzorgende / zorgkundige',
        [
          leerkrachten[2],
          leerkrachten[3]
        ],
        []
        ,
        [
        ],
        Diploma.Duaal,
        Kleur.blue,
        Icon.doctor
      )

    ];
  }

  public removeRichting(naam: string) {
    this._richtingen.slice(this._richtingen.findIndex(r => r.naam === naam));
  }

  public getRichting(): Richting {
    return new Richting(
      'Nieuwe richting',
    [],
    [],
    [],
    Diploma.Geen,
    Kleur.white,
    Icon.plant);
  }

  public  get richtingen(): Richting[] {
    return this._richtingen;
  }
}
