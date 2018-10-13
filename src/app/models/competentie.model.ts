import { Beoordeling } from './beoordeling.model';

// competentie == deelcompetentie
export class Competentie {
  private _description: string;
  private _behaald: boolean;
  private _beoordeling: Beoordeling;

  constructor(description: string) {
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
   * Method kenBeoordelingToe
   * @return {void}
   * voegt beoordeling toe en zet indien nodig behaald op true
   */
  public kenBeoordelingToe(beoordeling: Beoordeling): void {
    if (!this._behaald) {
        this._beoordeling = beoordeling;
        if (beoordeling !== Beoordeling.O && beoordeling !== Beoordeling['N/A']) {
            this._behaald = true;
        }
    }
  }
}
