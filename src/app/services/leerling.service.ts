import { Injectable } from '@angular/core';
import { Leerling, Geslacht } from '../models/leerling.model';
import { Competentie } from '../models/competentie.model';
import { Beoordeling } from '../models/beoordeling.model';
import { Activiteit } from '../models/activiteit.model';

@Injectable({
  providedIn: 'root'
})
export class LeerlingService {

  constructor() {
  }

  public get leerlingen(): Leerling[] {
    const leerling1 = new Leerling('abc123');
    leerling1.voornaam = 'Hu Ocean';
    leerling1.achternaam = 'Li';
    leerling1.geslacht = Geslacht.Man;
    leerling1.email = 'hu.ocean.li@gmail.com';
    leerling1.competenties = [];
    leerling1.projecten = [];

    const leerling2 = new Leerling('abc456');
    leerling2.voornaam = 'Jonathan';
    leerling2.achternaam = 'Delmeiren';
    leerling2.geslacht = Geslacht.Man;
    leerling2.email = 'jonathan.delmeiren.@gmail.com';
    leerling2.competenties = [];
    leerling2.projecten = [];

    const leerling3 = new Leerling('abc789');
    leerling3.voornaam = 'Renata';
    leerling3.achternaam = 'Haleydt';
    leerling3.geslacht = Geslacht.Man;
    leerling3.email = 'renata.haleydt@gmail.com';
    leerling3.competenties = [];
    leerling3.projecten = [];

    return [
      leerling1, leerling2, leerling3
    ];
  }

    /**
   * Method kenAlleCompetentiesToe
   * @return {void}
   * voegt eenzelfde beoordeling toe aan alle deelcompetenties, zet indien nodig behaald op true
   */
  public kenAlleCompetentiesToe(leerling: Leerling, activiteit: Activiteit, beoordeling: Beoordeling): void {
  }

    /**
   * Method controlleerBehaald
   * @return {void}
   * persisteert
   * zet behaald op true als alle deelcompetenties behaald zijn
   */
  private controlleerBehaald(leerling: Leerling, activiteit: Activiteit): void {
  }

  /**
   * Method kenCompetentiesToe
   * @return {void}
   * persisteert
   * voegt een competentie met beoordeling toe aan een leerlig zet indien nodig behaald op true
   */
  public kenCompetentiesToe(leerling: Leerling, activiteit: Activiteit, competentie: Competentie, beoordeling: Beoordeling): void {
  }
}
