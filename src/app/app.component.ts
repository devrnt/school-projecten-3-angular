import { Component } from '@angular/core';
import { LeerlingService } from './services/leerling.service';
import { RichtingService } from './services/richting.service';
import { Richting } from './models/richting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _leerlingService: LeerlingService, private _richtingService: RichtingService) {
    console.log(this._leerlingService.leerlingen);
    console.log(this._richtingService.richtingen);
  }

  public get leerlingen() {
    return this._leerlingService.leerlingen;
  }

  public get richtingen(): Richting[] {
    console.log(this._richtingService.richtingen);
    return this._richtingService.richtingen;
  }
}
