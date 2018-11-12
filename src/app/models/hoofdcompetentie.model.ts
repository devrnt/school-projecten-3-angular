import { Beoordeling } from './beoordeling.model';
import { Deelcompetentie } from './deelcompetentie.model';
import { Icon, Kleur } from './richting.model';

// activiteit == hoofdcompetentie
export class Hoofdcompetentie {
  private _id;
  private _description: string;
  private _deelcompetenties: Deelcompetentie[];
  private _icon: Icon;
  private _color: Kleur;
  private _dateMade: Date;
  private _behaald: boolean;
  private _module: Modules;

  /**
   * Constructor van Hoofdcompetentie
   * @param {string} id
   * @param {string} description
   * @param {Deelcompetentie[]} deelcompetenties
   * @param {Icon} icon
   * @param {Kleur} color
   * @param {Modules} module
   */
  constructor(id: number, description: string, deelcompetenties: Deelcompetentie[], icon: Icon, color: Kleur, module: Modules) {
    this._id = id;
    this._deelcompetenties = deelcompetenties;
    this._description = description;
    this._icon = icon;
    this._color = color;
    this._module = module;
    this._dateMade = new Date();
    this._behaald = false;
  }

  /**
   * Getter description
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }


  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter icon
   * @return {Icon}
   */
  public get icon(): Icon {
    return this._icon;
  }

  /**
   * Getter color
   * @return {Kleur}
   */
  public get color(): Kleur {
    return this._color;
  }

  /**
   * Getter dateMade
   * @return {Date}
   */
  public get dateMade(): Date {
    return this._dateMade;
  }

  /**
   * Getter competenties
   * @return {Competentie[]}
   */
  public get deelcompetenties(): Deelcompetentie[] {
    return this._deelcompetenties;
  }

  /**
   * Getter module
   * @return {string}
   */
  public get module(): Modules {
    return this._module;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter icon
   * @param {Icon} value
   */
  public set icon(value: Icon) {
    this._icon = value;
  }

  /**
   * Setter color
   * @param {Kleur} value
   */
  public set color(value: Kleur) {
    this._color = value;
  }

  /**
   * Setter dateMade
   * @param {Date} value
   */
  public set dateMade(value: Date) {
    this._dateMade = value;
  }

  /**
   * Setter competenties
   * @param {Competentie[]} value
   */
  public set competenties(value: Deelcompetentie[]) {
    this._deelcompetenties = value;
  }

  /**
   * Setter behaald
   * @param {boolean} value
   */
  public set behaald(value: boolean) {
    this._behaald = value;
  }

  /**
   * Setter module
   * @param {string} value
   */
  public set module(value: Modules) {
    this._module = value;
  }

}

export enum Modules {
  module1= 'Module 1', module2= 'Module 2', module3= 'Module 3'
}
