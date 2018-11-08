import { Beoordeling } from './beoordeling.model';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Hoofdcompetentie } from './hoofdcompetentie.model';
import { LeerlingDeelcompetentie } from './leerling-deelcompetentie.model';

// competentie == deelcompetentie
export class LeerlingHoofdcompetentie {
  private _id: number;
  private _behaald: boolean;
  private _hoofdcompetentie: Hoofdcompetentie;
  private _leerlingDeelcompetenties: LeerlingDeelcompetentie[];

  constructor(id: number, hoofdcomp: Hoofdcompetentie) {
    this._id = id;
    this._hoofdcompetentie = hoofdcomp;
    this._behaald = false;
    this._leerlingDeelcompetenties = [];
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
   * Getter leerlingDeelcompetenties
   * @return {LeerlingDeelcompetentie[]}
   */
  public get leerlingDeelcompetenties(): LeerlingDeelcompetentie[] {
    return this._leerlingDeelcompetenties;
  }

  /**
   * Setter leerlingDeelcompetenties
   * @param {LeerlingDeelcompetentie[]} leerlingDeelcompetenties
   */
  public set leerlingDeelcompetenties(competenties: LeerlingDeelcompetentie[]) {
    this._leerlingDeelcompetenties = competenties;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter hoofdcompetentie
   * @return {Hoofdcompetentie}
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
   * Setter hoofdcompetentie

   * @param {Hoofdcompetentie} value
   */

   public set hoofdcompetentie(value: Hoofdcompetentie) {
    this._hoofdcompetentie = value;
  }

  static fromJSON(json: any): LeerlingHoofdcompetentie {

    return null;
  }


}
