import { Beoordeling } from './beoordeling.model';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Hoofdcompetentie } from './hoofdcompetentie.model';

// competentie == deelcompetentie
export class LeerlingHoofdcompetentie {
  private _id: number;
  private _beoordelingen: Map<Date, Beoordeling>;
  private _behaald: boolean;
  private _beoordeling: Beoordeling;
  private _hoofdcompetentie: Hoofdcompetentie;

  constructor(id: number) {
    this._id = id;
    this._beoordeling = Beoordeling['N/A'];
    this._behaald = false;
  }


  /**
   * Getter behaald
   * @return {boolean}
   */
  public get behaald(): boolean {
    return this._behaald;
  }

  /**
   * Getter beoordeling
   * @return {Beoordeling}
   */
  public get beoordeling(): Beoordeling {
    return this._beoordeling;
  }

  /**
   * Setter beoordeling
   * @param {Beoordeling} value
   */
  public set beoordeling(value: Beoordeling) {
    this._beoordeling = value;
  }


  /**
   * Setter behaald
   * @param {boolean} value
   */
  public set behaald(value: boolean) {
    this._behaald = value;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter beoordelingen
   * @return {Map<Date, Beoordeling>}
   */
  public get beoordelingen(): Map<Date, Beoordeling> {
    return this._beoordelingen;
  }

  /**
   * Getter deelcompetentie
   * @return {Deelcompetentie}
   */
  public get hoofdcompetentie(): Hoofdcompetentie {
    return this._hoofdcompetentie;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter beoordelingen
   * @param {Map<Date, Beoordeling>} value
   */
  public set beoordelingen(value: Map<Date, Beoordeling>) {
    this._beoordelingen = value;
  }

  /**
   * Setter deelcompetentie
   * @param {Deelcompetentie} value
   */
  public set hoofdcompetentie(value: Hoofdcompetentie) {
    this._hoofdcompetentie = value;
  }


}
