import { Hoofdcompetentie } from './hoofdcompetentie.model';
import { User } from './user';
import { Richting } from './richting';

export class Leerling {
  private _id: string;
  private _voornaam: string;
  private _achternaam: string;
  private _competenties: Hoofdcompetentie[];
  private _email: string;
  private _geboortedatum: Date;
  private _richting: Richting;
  private _projecten: Hoofdcompetentie[];
  private _geslacht: Geslacht;
  private _stage: User;
  private _werkgever: User;

  constructor(id: string) {
    this._id = id;
  }
  /**
   * Getter voornaam
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter voornaam
   * @return {string}
   */
  public get voornaam(): string {
    return this._voornaam;
  }

  /**
   * Getter achternaam
   * @return {string}
   */
  public get achternaam(): string {
    return this._achternaam;
  }

  /**
   * Getter competenties
   * @return {Activiteit[]}
   */
  public get competenties(): Hoofdcompetentie[] {
    return this._competenties;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter geboortedatum
   * @return {Date}
   */
  public get geboortedatum(): Date {
    return this._geboortedatum;
  }

  /**
   * Getter richting
   * @return {Richting}
   */
  public get richting(): Richting {
    return this._richting;
  }

  /**
   * Getter projecten
   * @return {Activiteit[]}
   */
  public get projecten(): Hoofdcompetentie[] {
    return this._projecten;
  }

  /**
   * Getter geslacht
   * @return {Geslacht}
   */
  public get geslacht(): Geslacht {
    return this._geslacht;
  }

  /**
   * Getter stage
   * @return {User}
   */
  public get stage(): User {
    return this._stage;
  }

  /**
   * Getter werkgever
   * @return {User}
   */
  public get werkgever(): User {
    return this._werkgever;
  }

  /**
   * Setter voornaam
   * @param {string} value
   */
  public set voornaam(value: string) {
    this._voornaam = value;
  }

  /**
   * Setter achternaam
   * @param {string} value
   */
  public set achternaam(value: string) {
    this._achternaam = value;
  }

  /**
   * Setter competenties
   * @param {Activiteit[]} value
   */
  public set competenties(value: Hoofdcompetentie[]) {
    this._competenties = value;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Setter email
   * @param {Date} value
   */
  public set geboortedatum(value: Date) {
    this._geboortedatum = value;
  }

  /**
   * Setter richting
   * @param {Richting} value
   */
  public set richting(value: Richting) {
    this._richting = value;
  }

  /**
   * Setter projecten
   * @param {Activiteit[]} value
   */
  public set projecten(value: Hoofdcompetentie[]) {
    this._projecten = value;
  }

  /**
   * Setter geslacht
   * @param {Geslacht} value
   */
  public set geslacht(value: Geslacht) {
    this._geslacht = value;
  }

  /**
   * Setter stage
   * @param {User} value
   */
  public set stage(value: User) {
    this._stage = value;
  }

  /**
   * Setter werkgever
   * @param {User} value
   */
  public set werkgever(value: User) {
    this._werkgever = value;
  }
}

export enum Geslacht {
  Man = 'boy',
  Vrouw = 'girl'
}
