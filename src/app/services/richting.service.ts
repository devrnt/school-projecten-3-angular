import { Injectable } from '@angular/core';
import { Richting, Diploma, Kleur, Icon } from '../models/richting';
import { User, UserType } from '../models/user';
import { LeerlingService } from './leerling.service';
import { LeerkrachtService } from './leerkracht.service';
import { CompetentieService } from './competentie.service';

@Injectable()
export class RichtingService {

  private _richtingen: Richting[];
  private _geselecteerdeRichting: Richting;
  constructor(private _leerkrachtService: LeerkrachtService, private _competentieSevice: CompetentieService) {
    this._richtingen = [];
    const leerkrachten = _leerkrachtService.leerkachten;
    this._richtingen = [
      new Richting(
        1,
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
        2,
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
        3,
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
        4,
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
        5,
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
        5,
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
        6,
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
        6,
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
        7,
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
        8,
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
        9,
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
        10,
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
        11,
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
        12,
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
        13,
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
        14,
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
        15,
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
        16,
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
        17,
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
        18,
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
        19,
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
        20,
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
      -1,
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

// REST
addNewHoofdCompetentie(description: string): any {
}
addNewDeelComptentie(hId: number, description: string): any {
}
verwijderDeelCompetentie(hId: number, dId: number): any {
}
verwijderHoofdCompetentie(hId: number): any {
}
updateDeelComptentie(dId: number, description: string): any {
}
updateHoofdCompetentie(hId: number, description: string): any {
}
}
