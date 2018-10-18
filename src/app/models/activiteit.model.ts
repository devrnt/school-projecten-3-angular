import { Competentie } from './competentie.model';
import { Beoordeling } from './beoordeling.model';

// activiteit == hoofdcompetentie
export class Activiteit {
  private _id;
  private _description: string;
  private _competenties: Competentie[];
  private _icon: string;
  private _color: string;
  private _dateMade: Date;
  private _behaald: boolean;

  constructor(id: string, description: string, icon: string, color: string) {
    this._id = id;
    this._competenties = [];
    this._dateMade = new Date();
    this._behaald = false;
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
   * @return {string}
   */
  public get icon(): string {
    return this._icon;
  }

  /**
   * Getter color
   * @return {string}
   */
  public get color(): string {
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
  public get competenties(): Competentie[] {
    return this._competenties;
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
   * @param {string} value
   */
  public set icon(value: string) {
    this._icon = value;
  }

  /**
   * Setter color
   * @param {string} value
   */
  public set color(value: string) {
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
  public set competenties(value: Competentie[]) {
    this._competenties = value;
  }

  /**
   * Setter behaald
   * @param {boolean} value
   */
  public set behaald(value: boolean) {
    this._behaald = value;
  }

}
