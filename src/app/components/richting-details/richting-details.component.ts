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

  @Input() public new: boolean;
  public kleuren: Kleur[];
  public icons: Icon[];
  @Input() public richting: Richting;

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

  public get icon(): Icon {
    return this.richting ? this.richting.icon : Icon.plug;
  }

  public get kleur(): Kleur {
    return this.richting ? this.richting.kleur : Kleur.white;
  }

  public set icon(val: Icon) {
    this.richting.icon = val;
    this.saveChanges();
  }

  public set kleur(val: Kleur) {
    this.richting.kleur = val;
    this.saveChanges();
  }

  public get naam(): string {
    return this.richting ? this.richting.naam : '';
  }

  public get leerkrachten(): User[] {
    return this.richting ? this.richting.leerkrachten : [];
  }

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

  addLeerkracht(leerkracht: User) {
    if (this.richting.leerkrachten.every(l => l.id !== leerkracht.id)) {
      this.richting.leerkrachten.push(leerkracht);
      this.saveChanges();
    }
  }

  deleteLeerkracht(i: number) {
    this.richting.leerkrachten.splice(i, 1);
    this.saveChanges();
  }

  public saveChanges() {
    if (this.new) {
      this._richtingService.geselecteerdeNieuweRichting = this.richting;
    } else {
      this._richtingService.geselecteerdeRichting = this.richting;
    }
  }

}
