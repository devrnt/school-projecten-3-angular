import { User } from './user';

export class Richting {
  private _naam: string;
  private _desc: string;
  private _icon: string;
  private _leerkrachten: User[];

  /**
   * Getter naam
   * @return {string}
   */
  public get naam(): string {
    return this._naam;
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
}
