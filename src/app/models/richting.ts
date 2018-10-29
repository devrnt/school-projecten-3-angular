import { User } from './user';
import { Leerling } from './leerling.model';
import { MatChipTrailingIcon } from '@angular/material';
import { Hoofdcompetentie } from './hoofdcompetentie.model';

export class Richting {
  private _id: string;
  private _naam: string;
  private _desc: string;
  private _icon: string;
  private _kleur: Kleur;
  private _leerlingenId: string[];
  private _leerkrachten: User[];
  private _competenties: Hoofdcompetentie[];
  private _werkgevers: User[];
  private _diploma: Diploma;

  constructor(
    naam: string,
    leerkrachten: User[],
    competenties: Hoofdcompetentie[],
    werkgevers: User[],
    diploma: Diploma,
    kleur?: Kleur,
    icon?: string
  ) {
    this._naam = naam;
    this._leerkrachten = leerkrachten || [];
    this._leerlingenId = [];
    this._competenties = competenties || [];
    this._werkgevers = werkgevers || [];
    this._diploma = diploma;
    this._kleur = kleur;
    this._icon = icon;
  }

  /**
   * leerkrachtnamen
   * retourneerd alle leerkrachtnamen in stringvorm
   * @return {string}
   */
  public leerkrachtennamen(): string {
    let lstring = '';
    this._leerkrachten.forEach(l => {
      lstring += `, ${l.voornaam} ${l.achternaam}`;
    });
    return lstring.substring(2);
  }
  /**
   * Getter naam
   * @return {string}
   */
  public get naam(): string {
    return this._naam;
  }

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter desc
   * @return {string}
   */
  public get desc(): string {
    return this._desc;
  }

  /**
   * Getter icon
   * @return {string}
   */
  public get icon(): string {
    return this._icon;
  }

  /**
   * Getter leerkrachten
   * @return {User[]}
   */
  public get leerkrachten(): User[] {
    return this._leerkrachten;
  }

  /**
   * Getter competenties
   * @return {Hoofdcompetentie[]}
   */
  public get competenties(): Hoofdcompetentie[] {
    return this._competenties;
  }

  /**
   * Getter leerlingenId
   * @return {string[]}
   */
  public get leerlingenId(): string[] {
    return this._leerlingenId;
  }


  /**
   * Getter kleur
   * @return {string}
   */
  public get kleur(): Kleur {
    return this._kleur || Kleur.white;
  }


  /**
   * Getter werkgevers
   * @return {User[]}
   */
  public get werkgevers(): User[] {
    return this._werkgevers;
  }

  /**
   * Getter diploma
   * @return {Diploma}
   */
  public get diploma(): Diploma {
    return this._diploma;
  }

  /**
   * Setter naam
   * @param {string} value
   */
  public set naam(value: string) {
    this._naam = value;
  }

  /**
   * Setter desc
   * @param {string} value
   */
  public set desc(value: string) {
    this._desc = value;
  }

  /**
   * Setter icon
   * @param {string} value
   */
  public set icon(value: string) {
    this._icon = value;
  }

  /**
   * Setter leerkrachten
   * @param {User[]} value
   */
  public set leerkrachten(value: User[]) {
    this._leerkrachten = value;
  }


    /**
     * Setter kleur
     * @param {Kleur} value
     */
  public set kleur(value: Kleur) {
    this._kleur = value;
  }

  public addNieuweHoofdcompetentie(hoofdcomp: Hoofdcompetentie) {
    this._competenties.push(hoofdcomp);
  }


}

export enum Diploma {
  BSO = 'BSO', TSO = 'TSO', ASO = 'ASO', Duaal = 'Leren en werken', Geen = 'Geen'
}

export enum Kleur {
  red = 'red', orange = 'orange', yellow = 'yellow', green = 'green', blue= 'blue', purple= 'purple',
  black = 'black', brown = 'brown',  white = 'white'
}

export enum Icon {
  computer = 'desktop', laptop = 'laptop', scissors = 'scissors', sales = 'shopping-cart', wrench= 'wrench', purple= 'purple',
   tree = 'tree', weegschaal = 'balance-scale',  bliksem = 'bolt', cogs = 'cogs', car = 'car', flask = 'flask', medkit = 'medkit',
   child = 'child', doctor = 'user-md', sport= 'table-tennis', plant = 'leaf', food = 'utensils', building = 'building'
   , paint = 'paint-roller', plug = 'plug', retail= 'shopping-bag'
}


