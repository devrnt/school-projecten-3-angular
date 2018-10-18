import { Component } from '@angular/core';
import { LeerlingService } from './services/leerling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _leerlingService: LeerlingService) {

  }

  public get leerlingen() {
    return this._leerlingService.leerlingen;
  }
}
