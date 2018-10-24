import { Beoordeling } from './beoordeling.model';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';

// competentie == deelcompetentie
export class Competentie {
  private _id: string;
  private _description: string;
  private _behaald: boolean;
  private _beoordeling: Beoordeling;
  private _deelcompetenties: Competentie[];

  constructor(id: string, description: string, deelcompetenties: Competentie[] = []) {
    this._id = id;
    this._description = description;
    this._beoordeling = Beoordeling['N/A'];
    this._behaald = false;
    this._deelcompetenties = deelcompetenties;
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
  
  /**
   * Getter deelcompetenties
   * @return {Competentie[]}
   */
  public get deelcompetenties(): Competentie[]{
    return this._deelcompetenties;
  }

  /**
   * Setter deelcompetenties
   * @param {Competentie[]} deelcompetenties
   */
  public set deelcompetenties(deelcompetenties: Competentie[]) {
    this._deelcompetenties = deelcompetenties;
  }

  /**
   * Add deelcompetentie
   * @param {Competentie} deelcompetentie
   */
  public addDeelcompetentie(deelcomp: Competentie){
    this._deelcompetenties.push(deelcomp);
  }

  /**
   * Remove deelcompetentie
   * @param {Competentie} deelcompetentie
   */
  public removeDeelcompetentie(deelcomp: Competentie){
    let index: number = this._deelcompetenties.findIndex(comp => comp._id === deelcomp._id);
    this._deelcompetenties = this._deelcompetenties.slice(index);
  }

}
