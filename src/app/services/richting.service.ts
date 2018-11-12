import { Injectable, OnInit } from '@angular/core';
import { Richting, Diploma, Kleur, Icon } from '../models/richting.model';
import { User, UserType } from '../models/user.model';
import { LeerlingService } from './leerling.service';
import { LeerkrachtService } from './leerkracht.service';
import { CompetentieService } from './competentie.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hoofdcompetentie } from '../models/hoofdcompetentie.model';

@Injectable()
export class RichtingService implements OnInit {
  public richting$: BehaviorSubject<Richting>;
  public nieuweRichting$: BehaviorSubject<Richting>;
  private _richtingen: Richting[];
  private _geselecteerdeRichting: Richting;
  private _geselecteerdeNieuweRichting: Richting;
  private _url = 'api/richtingen';
  constructor(
    private _leerkrachtService: LeerkrachtService,
    private _competentieSevice: CompetentieService,
    private _http: HttpClient
    ) {
    this._geselecteerdeRichting = this.getNieuweRichting();
    this.richting$ = new BehaviorSubject(this.geselecteerdeRichting);
    this.nieuweRichting$ = new BehaviorSubject(this.geselecteerdeRichting);
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

  /**
   * methode die een nieuwe 'empty' richting object terug geeft met defaultwaarden
   * Gebruik deze wanneer je een nieuwe richting wilt aanmaken.
   * @return {Richting}
   */
  public getNieuweRichting(): Richting {
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

  ngOnInit(): void {
  }

   /**
   * Getter richtingen, geeft alle richtingen
   * @return {Richting[]}
   */
  public  get richtingen(): Richting[] {
    return this._richtingen;
  }

   /**
   * Getter geselecteerdeRichting$, geeft een subject terug waarop men kan subscriben
   * om veranderingen van/in de geselecteerde richting te observeren
   * @return {BehaviorSubject<Richting>}
   */
  public  get geselecteerdeRichting$(): BehaviorSubject<Richting> {
    return this.richting$;
  }

   /**
   * Setter geselecteerdeRichting$, roep deze aan wanneer je een wijzing van geselecteerderichting wilt
   * persisteren en doorspelen aan alle observers
   * @return {BehaviorSubject<Richting>}
   */
    public set geselecteerdeRichting(richting: Richting) {
    this.richting$.next(richting);
    this._geselecteerdeRichting = richting;
  }

   /**
   * Getter geselecteerdeNieuweRichting$, geeft een subject terug waarop men kan subscriben
   * om veranderingen van/in de geselecteerdeNieuweRichting te observeren
   * @return {BehaviorSubject<Richting>}
   */
  public  get geselecteerdeNieuweRichting$(): BehaviorSubject<Richting> {
    return this.nieuweRichting$;
  }

  /**
   * Setter geselecteerdeRichting$, roep deze aan wanneer je een wijzing van geselecteerderichting wilt
   *  doorspelen aan alle observers, deze methode persisteert niet (zie maakNieuweRichting()
   * @return {BehaviorSubject<Richting>}
   */
  public set geselecteerdeNieuweRichting(richting: Richting) {
    this.nieuweRichting$.next(richting);
    this._geselecteerdeNieuweRichting = richting;
  }

// REST


maakNieuweRichting(): void {
 this._http.post(this._url, this._geselecteerdeNieuweRichting).pipe().subscribe(r => {
    this._richtingen.push();
 });
}
verwijderRichting(richtig: Richting) {

}
updateRichting(richting: Richting) {

}

addNewHoofdCompetentie(hoofdCompetentie: Hoofdcompetentie, newRichting: boolean): any {
  console.log(this._geselecteerdeNieuweRichting);
  if (newRichting) {
    this._geselecteerdeNieuweRichting.competenties.push(hoofdCompetentie);
    this.geselecteerdeNieuweRichting$.next(this._geselecteerdeNieuweRichting);
  } else {
    this._geselecteerdeRichting.competenties.push(hoofdCompetentie);
    this.geselecteerdeRichting$.next(this._geselecteerdeRichting);
  }
}
addNewDeelComptentie(hId: number, description: string): any {
}
verwijderDeelCompetentie(hId: number, dId: number): any {
}
verwijderHoofdCompetentie(hId: number, newcomp: boolean): any {
  console.log(this._geselecteerdeRichting);
  if (!newcomp) {
    this._geselecteerdeRichting.competenties
    = this._geselecteerdeRichting.competenties.filter(c => c.id !== hId);
    this.geselecteerdeRichting$.next(this._geselecteerdeRichting);
  } else {
    this._geselecteerdeNieuweRichting.competenties =
    this._geselecteerdeNieuweRichting.competenties.filter(c => c.id !== hId);
    this.geselecteerdeNieuweRichting$.next(this._geselecteerdeNieuweRichting);
  }
}
updateDeelComptentie(dId: number, description: string): any {
}
updateHoofdCompetentie(hId: number, description: string): any {
}
}
