import { Component } from '@angular/core';
import { LeerlingService } from './services/leerling.service';
import { RichtingService } from './services/richting.service';
import { Richting } from './models/richting';
import { Router, RouterEvent } from '@angular/router';

export enum Route {
  LEERLINGEN,
  RICHTINGEN
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  private _toolbarIcon: Route;

  constructor(
    private _leerlingService: LeerlingService,
    private _richtingService: RichtingService,
    private _router: Router
  ) {
    console.log(this._leerlingService.leerlingen);
    console.log(this._richtingService.richtingen);

    this._router.events.subscribe((event) => {
      const re = event as RouterEvent;
      console.log(re.url);
      switch (re.url) {
        case '/leerlingen': {
          this._toolbarIcon = Route.LEERLINGEN;
          break;
        }
        case '/richtingen': {
          this._toolbarIcon = Route.RICHTINGEN;
          break;
        }
      }
    });
  }

  get toolbarIcon(): Route {
    return this._toolbarIcon;
  }

  public get leerlingen() {
    return this._leerlingService.leerlingen;
  }

  public get richtingen(): Richting[] {
    console.log(this._richtingService.richtingen);
    return this._richtingService.richtingen;
  }
}
