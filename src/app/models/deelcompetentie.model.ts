import { Beoordeling } from './beoordeling.model';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';

// competentie == deelcompetentie
export class Deelcompetentie {
  private _id: string;
  private _description: string;
  private _behaald: boolean;
  private _beoordeling: Beoordeling;

  constructor(id: string, description: string) {
    this._id = id;
    this._description = description;
    this._beoordeling = Beoordeling['N/A'];
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

}
