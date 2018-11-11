import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { RichtingService } from 'src/app/services/richting.service';
import { Richting, Kleur, Icon } from '../../models/richting';
import { User, UserType } from '../../models/user';
import { LeerkrachtService } from '../../services/leerkracht.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-richting-details',
  templateUrl: './richting-details.component.html',
  styleUrls: ['./richting-details.component.css']
})
export class RichtingDetailsComponent implements OnInit {
  /**
  * De boolean die je meekrijgt van de parent component om te weten of er een nieuwe richting gemaakt wordt, of deze moet aangepast worden
  */
  @Input() public new: boolean;
  /**
  * Property om de kleuren bij te houden waar de gebruiker uit kan kiezen
  */
  public kleuren: Kleur[];
  /**
  * Property om de icons bij te houden waar de gebruiker uit kan kiezen
  */
  public icons: Icon[];
  /**
  * De geselecteerde richting die je doorkrijgt van de parent component in het geval deze moet aangepast worden
  */
  @Input() public richting: Richting;

  /**
  * Constructor RichtingDetailsComponent
  * @param {RichtingService} RichtingService
  * @param {LeerkrachtService} leerkrachtService
  */
  constructor(
    private _richtingService: RichtingService,
    private _leerkrachtService: LeerkrachtService
  ) {
      this.kleuren = [
        Kleur.black, Kleur.blue, Kleur.brown, Kleur.green, Kleur.yellow, Kleur.orange, Kleur.red,
        Kleur.purple, Kleur.white
      ];
      this.icons = [
        Icon.bliksem, Icon.building, Icon.car, Icon.child, Icon.cogs, Icon.computer,
        Icon.doctor, Icon.flask, Icon.food, Icon.laptop, Icon.medkit, Icon.paint, Icon.scissors
      ];
  }

  /**
  * Getter icon
  * @return {Icon}
  */
  public get icon(): Icon {
    return this.richting ? this.richting.icon : Icon.plug;
  }

  /**
  * Getter kleur
  * @return {Kleur}
  */
  public get kleur(): Kleur {
    return this.richting ? this.richting.kleur : Kleur.white;
  }

  /**
  * Setter icon
  * @param {Icon} icon
  */
  public set icon(val: Icon) {
    this.richting.icon = val;
    this.saveChanges();
  }

  /**
  * Setter kleur
  * @param {Kleur} kleur
  */
  public set kleur(val: Kleur) {
    this.richting.kleur = val;
    this.saveChanges();
  }

  /**
  * Getter naam
  * @return {string}
  */
  public get naam(): string {
    return this.richting ? this.richting.naam : '';
  }

  /**
  * Getter leerkrachten
  * @return {User[]}
  */
  public get leerkrachten(): User[] {
    return this.richting ? this.richting.leerkrachten : [];
  }

  /**
  * Getter alleLeerkrachten
  * @return {USer[]}
  */
  public get alleLeerkrachten(): User[] {
    return this._leerkrachtService.leerkachten;
  }

  ngOnInit() {
    if (this.new) {
      this.richting = this._richtingService.getNieuweRichting();
    } else {
      this._richtingService.richting$.subscribe( r => {
        this.richting = r;
      });
    }
  }

  /**
  * Methode om een nieuwe leerkracht toe te voegen aan een richting
  * @param {User} leerkracht
  */
  addLeerkracht(leerkracht: User) {
    if (this.richting.leerkrachten.every(l => l.id !== leerkracht.id)) {
      this.richting.leerkrachten.push(leerkracht);
      this.saveChanges();
    }
  }

  /**
  * Methode om een leerkracht te verwijderen van een richting
  * @param {number} idLeerkracht
  */
  deleteLeerkracht(i: number) {
    this.richting.leerkrachten.splice(i, 1);
    this.saveChanges();
  }

  /**
  * Methode om de wijzigingen die gemaakt zijn op te slaan of de nieuwe richting die aangemaakt is op te slaan
  */
  public saveChanges() {
    if (this.new) {
      this._richtingService.geselecteerdeNieuweRichting = this.richting;
    } else {
      this._richtingService.geselecteerdeRichting = this.richting;
    }
  }

}
