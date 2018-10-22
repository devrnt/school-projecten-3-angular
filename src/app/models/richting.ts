import { User } from './user';
import { Activiteit } from './activiteit.model';
import { Leerling } from './leerling.model';

export class Richting {
  private _id: string;
  private _naam: string;
  private _desc: string;
  private _icon: string;
  private _kleur: Kleur;
  private _leerlingenId: string[];
  private _leerkrachten: User[];
  private _competenties: Activiteit[];
  private _werkgevers: User[];
  private _diploma: Diploma;

  constructor(
    naam: string,
    leerkrachten: User[],
    competenties: Activiteit[],
    werkgevers: User[],
    diploma: Diploma
  ) {
    this._naam = naam;
    this._leerkrachten = leerkrachten || [];
    this._leerlingenId = [];
    this._competenties = competenties || [];
    this._werkgevers = werkgevers || [];
    this._diploma = diploma;
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
   * @return {Activiteit[]}
   */
  public get competenties(): Activiteit[] {
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


}

export enum Diploma {
  BSO = 'BSO', TSO = 'TSO', ASO = 'ASO', Duaal = 'Duaal Leren', Geen = 'Geen'
}

export enum Kleur {
  red = 'red', orange = 'orange', yellow = 'yellow', green = 'green', blue= 'blue', purple= 'purple',
   black = 'black', brown = 'brown',  white = 'white'
}


