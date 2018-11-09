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

  @Input() public leerling: Leerling;
  public alleRichtingen: Richting[];

  constructor(
    private _richtingService: RichtingService
  ) { }

  ngOnInit() {
    this.alleRichtingen = this._richtingService.richtingen;
  }

  public set geslacht(geslacht: Geslacht) {
    this.leerling.geslacht = geslacht;
  }

  public set richting(richting: Richting) {
    this.leerling.richting = richting;
  }

  public get icon(): Icon {
    return this.leerling ? this.leerling.richting ? this.leerling.richting.icon : Icon.cogs : Icon.cogs;
  }

  public get voornaam(): string {
    return this.leerling ? this.leerling.voornaam : '';
  }

  public get achternaam(): string {
    return this.leerling ? this.leerling.achternaam : '';
  }

  public get kleur(): Kleur {
    return this.leerling ? this.leerling.richting ? this.leerling.richting.kleur : Kleur.white : Kleur.white;
  }

  public get geslacht(): Geslacht {
    return this.leerling ? this.leerling.geslacht : Geslacht.Man;
  }

  public get email(): string {
    return this.leerling ? this.leerling.email : '';
  }

  public get geboortedatum(): Date {
    return this.leerling ? this.leerling.geboorteDatum : new Date();
  }

  public get competenties(): Icon {
    return this.leerling ? this.leerling.richting.icon : Icon.cogs;
  }

}
