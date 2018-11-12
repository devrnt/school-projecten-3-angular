import { User } from './user.model';
import { Leerling } from './leerling.model';
import { MatChipTrailingIcon } from '@angular/material';
import { Hoofdcompetentie } from './hoofdcompetentie.model';

export class Richting {
  private _id: number;
  private _naam: string;
  private _desc: string;
  private _icon: Icon;
  private _kleur: Kleur;
  private _leerlingenId: string[];
  private _leerkrachten: User[];
  private _competenties: Hoofdcompetentie[];
  private _werkgevers: User[];
  private _diploma: Diploma;

  /**
   * Constructor van Richting
   * @param {number} id
   * @param {string} naam
   * @param {User[]} leerkrachten
   * @param {Hoofdcompetentie[]} competenties
   * @param {User[]} werkgevers
   * @param {Diploma} diploma
   * @param {Kleur} kleur
   * @param {Icon} icon
   */
  constructor(
    id: number,
    naam?: string,
    leerkrachten?: User[],
    competenties?: Hoofdcompetentie[],
    werkgevers?: User[],
    diploma?: Diploma,
    kleur?: Kleur,
    icon?: Icon
  ) {
    this._id = id;
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
   * @return {number}
   */
  public get id(): number {
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
   * @return {Icon}
   */
  public get icon(): Icon {
    return this._icon || Icon.laptop;
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
   * @param {Icon} value
   */
  public set icon(value: Icon) {
    this._icon = value;
    for (let index = 0; index < this.competenties.length; index++) {
      this._competenties[index].icon = value;
    }
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
    for (let index = 0; index < this.competenties.length; index++) {
      this._competenties[index].color = value;
    }
  }

  /**
     * Setter diploma
     * @param {Diploma} diploma
     */
    public set diploma(value: Diploma) {
      this._diploma = value;
    }

  /**
   * Methode om een nieuwe hoofdcompetentie toe te voegen
   * @param {Hoofdcompetentie} hoofdcomp
   */
  public addNieuweHoofdcompetentie(hoofdcomp: Hoofdcompetentie) {
    this._competenties.push(hoofdcomp);
  }

  /**
   * Setter competenties
   * @param {Hoofdcompetentie[]} value
   */
  public set competenties(value: Hoofdcompetentie[]) {
    this._competenties = value;
  }



}

export enum Diploma {
  BSO = 'BSO', TSO = 'TSO', Duaal = 'Leren en werken', ASO = 'ASO', Geen = 'Geen'
}

export enum Kleur {
  red = 'rood', orange = 'oranje', yellow = 'geel', green = 'groen', blue= 'blauw', purple= 'paars',
  black = 'zwart', brown = 'bruin',  white = 'wit'
}

export enum Icon {
  computer = 'desktop', laptop = 'laptop', scissors = 'scissors', sales = 'shopping-cart', wrench= 'wrench', purple= 'purple',
   tree = 'tree', weegschaal = 'balance-scale',  bliksem = 'bolt', cogs = 'cogs', car = 'car', flask = 'flask', medkit = 'medkit',
   child = 'child', doctor = 'user-md', sport= 'table-tennis', plant = 'leaf', food = 'utensils', building = 'building'
   , paint = 'paint-roller', plug = 'plug', retail= 'shopping-bag'
}


