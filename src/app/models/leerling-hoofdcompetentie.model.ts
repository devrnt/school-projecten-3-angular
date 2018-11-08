import { Beoordeling } from './beoordeling.model';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Hoofdcompetentie } from './hoofdcompetentie.model';

// competentie == deelcompetentie
export class LeerlingHoofdcompetentie {
  private _id: number;
  private _behaald: boolean;
  private _hoofdcompetentie: Hoofdcompetentie;

  constructor(id: number) {
    this._id = id;
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
   * Setter deelcompetentie

   * @param {Deelcompetentie} value
   */
  public set hoofdcompetentie(value: Hoofdcompetentie) {
    this._hoofdcompetentie = value;
  }

  static fromJSON(json: any): LeerlingHoofdcompetentie {

    return null;
  }


}
