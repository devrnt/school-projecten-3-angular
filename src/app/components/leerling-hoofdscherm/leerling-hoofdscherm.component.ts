import { Component, OnInit } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';
import { LeerlingService } from 'src/app/services/leerling.service';

@Component({
  selector: 'app-leerling-hoofdscherm',
  templateUrl: './leerling-hoofdscherm.component.html',
  styleUrls: ['./leerling-hoofdscherm.component.css']
})
export class LeerlingHoofdschermComponent implements OnInit {
  /**
  * Property om de geselecteerde tab bij te houden
  */
  public selectedTab: number;
  /**
  * Property om de geselecteerde leerling bij te houden
  */
  public selectedLeerling: Leerling;
  /**
  * Property om de nieuwe leering bij te houden
  */
  public nieuweLeerling: Leerling;

  /**
  * Constructor van LeerlingHoofdschermComponent
  * @param {LeerlingService} leerlingService
  */
  constructor(private _leerlingService: LeerlingService) {
  }

  ngOnInit() {
    this.nieuweLeerling  = this._leerlingService.nieuweLeerling();
  }

  /**
  * Methode om de geselecteerde leerling mee te geven aan de tab om de leerling te editen
  * @param {Leerling} geselecteerdeLeerling
  */
  public editLeerling(leerling: Leerling) {
    this.selectedTab = 2;
    this.selectedLeerling = leerling;
  }

  /**
  * Methode om de geselecteerde leerling mee te geven aan de tab om de competenties van een leerling toe te kennen
  * @param {Leerling} geselecteerdeLeerling
  */
  public kenCompetentiesToe(leerling: Leerling) {
    this.selectedTab = 1;
    this.selectedLeerling = leerling;
  }

  /**
  * Methode om de juiste tab in te stellen
  * @param {number} index
  */
  public changeTab(index: number) {
    this.selectedTab = index;
  }

}
