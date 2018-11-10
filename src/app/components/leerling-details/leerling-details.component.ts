import { Component, OnInit, Input } from '@angular/core';
import { Leerling, Geslacht } from 'src/app/models/leerling.model';
import { Richting, Icon, Kleur } from 'src/app/models/richting';
import { RichtingService } from 'src/app/services/richting.service';

@Component({
  selector: 'app-leerling-details',
  templateUrl: './leerling-details.component.html',
  styleUrls: ['./leerling-details.component.css']
})
export class LeerlingDetailsComponent implements OnInit {
  /**
  * De geselecteerde leerling die je doorkrijgt van de parent component
  */
  @Input() public leerling: Leerling;
  /**
  * Property om alle richtingen van de leerling bij te houden
  */
  public alleRichtingen: Richting[];

  /**
  * Constructor van LeerlingDetailsComponent
  * @param {RichtingService} richtingService
  */
  constructor(
    private _richtingService: RichtingService
  ) { }

  ngOnInit() {
    this.alleRichtingen = this._richtingService.richtingen;
  }

  /**
  * Setter geslacht
  * @param {Geslacht} geslacht
  */
  public set geslacht(geslacht: Geslacht) {
    this.leerling.geslacht = geslacht;
  }

  /**
  * Setter richting
  * @param {Richting} richting
  */
  public set richting(richting: Richting) {
    this.leerling.richting = richting;
  }

  /**
  * Getter icon
  * @return {Icon}
  */
  public get icon(): Icon {
    return this.leerling ? this.leerling.richting ? this.leerling.richting.icon : Icon.cogs : Icon.cogs;
  }

  /**
  * Getter voornaam
  * @return {string}
  */
  public get voornaam(): string {
    return this.leerling ? this.leerling.voornaam : '';
  }

  /**
  * Getter achternaam
  * @return {string}
  */
  public get achternaam(): string {
    return this.leerling ? this.leerling.achternaam : '';
  }

  /**
  * Getter kleur
  * @return {Kleur}
  */
  public get kleur(): Kleur {
    return this.leerling ? this.leerling.richting ? this.leerling.richting.kleur : Kleur.white : Kleur.white;
  }

  /**
  * Getter geslacht
  * @return {Geslacht}
  */
  public get geslacht(): Geslacht {
    return this.leerling ? this.leerling.geslacht : Geslacht.Man;
  }

  /**
  * Getter email
  * @return {string}
  */
  public get email(): string {
    return this.leerling ? this.leerling.email : '';
  }

  /**
  * Getter geboorteDatum
  * @return {Date}
  */
  public get geboortedatum(): Date {
    return this.leerling ? this.leerling.geboorteDatum : new Date();
  }

}
