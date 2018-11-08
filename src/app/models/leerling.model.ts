import { Hoofdcompetentie } from './hoofdcompetentie.model';
import { User } from './user';
import { Richting } from './richting';
import { LeerlingHoofdcompetentie } from './leerling-hoofdcompetentie.model';

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
  private _intresses: string;
  private _behaaldeHoofdcompetenties: LeerlingHoofdcompetentie[];

  constructor(id: string) {
    this._id = id;
    this.behaaldeHoofdcompetenties = [];
  }

  /**
   * Getter intresses
   * @return {string}
   */
  public get intresses(): string {
    return this._intresses;
  }

  /**
   * Getter geboorteDatum
   * @return {Date}
   */
  public get geboorteDatum(): Date {
    return this._geboorteDatum;
  }
  private _geboorteDatum: Date;

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
   * @return {Hoofdcompetentie[]}
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
   * Getter behaaldeHoofdcompetenties
   * @return {LeerlingHoofdcompetentie[]}
   */
  public get behaaldeHoofdcompetenties(): LeerlingHoofdcompetentie[] {
    return this._behaaldeHoofdcompetenties;
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

  /**
   * Setter behaaldeHoofdcompetenties
   * @param {LeerlingHoofdcompetentie[]} value
   */
  public set behaaldeHoofdcompetenties(value: LeerlingHoofdcompetentie[]) {
    this._behaaldeHoofdcompetenties = value;
  }

  public static fromJSON(json: any): Leerling {
    const leerling = new Leerling(
      json.id
    );
    leerling._voornaam = json.voornaam;
    leerling._achternaam = json.naam;
    leerling._email = json.email;
    leerling._geslacht = json.geslacht === 0 ? Geslacht.Man : Geslacht.Vrouw;
    leerling._geboorteDatum = json.geboorteDatum;
    leerling._intresses = json.intresses;
    leerling._richting = new Richting(json.richting.id).naam = json.richting.naam;
    leerling._competenties = json.competenties.map(c => LeerlingHoofdcompetentie.fromJSON(c)) || [];
    return leerling;
  }

  public toJSON() {
    return {
      voornaam: this._voornaam,
      achternaam: this._achternaam,
      email: this._email,
      geslacht: this._geslacht ? 1 : 0,
      richting: this._richting.id,
      competenties: this._competenties.map(c => c.id),
      werkgever: this._werkgever.id,
      intresses: this._intresses,
      // projecten: this._projecten.map(p => p.id);
    };
  }
}

export enum Geslacht {
  Man = 'boy',
  Vrouw = 'girl'
}
