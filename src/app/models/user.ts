export class User {
  private _id: number;
  private _voornaam: string;
  private _achternaam: string;
  private _email: string;
  private _passwoord: string;
  private _type: UserTypeBehaviour; // strategy pattern waarschijnlijk gebruiken hier

  /**
   * Constructor van User
   * @param {number} id
   * @param {string} voornaam
   * @param {string} achternaam
   * @param {string} email
   * @param {string} passwoord
   * @param {UserType} type
   */
  constructor(
    id: number,
    voornaam: string,
    achternaam: string,
    email: string,
    passwoord: string,
    type: UserType
  ) {
    this._id = id;
    this._voornaam = voornaam;
    this._achternaam = achternaam;
    this._email = email;
    this._passwoord = passwoord;
    UserType.Leerkracht
      ? (this._type = new UserTypeBehaviour())
      : (this._type = new UserTypeBehaviour());
  }

  /**
   * Getter voornaam
   * @return {string}
   */
  public get voornaam(): string {
    return this._voornaam;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter achternaam
   * @return {string}
   */
  public get achternaam(): string {
    return this._achternaam;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter passwoord
   * @return {string}
   */
  public get passwoord(): string {
    return this._passwoord;
  }

  /**
   * Getter type
   * @return {UserTypeBehaviour}
   */
  public get type(): UserTypeBehaviour {
    return this._type;
  }
}

export class UserTypeBehaviour {
  // to do voor een latere sprint
}

export enum UserType {
  Werkgever,
  Leerkracht
}
