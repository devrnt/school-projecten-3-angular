import { Component, OnInit } from '@angular/core';
import { LeerlingService } from 'src/app/services/leerling.service';
import { RichtingService } from 'src/app/services/richting.service';

@Component({
  selector: 'app-richtingen-view',
  templateUrl: './richtingen-view.component.html',
  styleUrls: ['./richtingen-view.component.css']
})
export class RichtingenViewComponent implements OnInit {

  constructor(private _richtingService: RichtingService) {
  }

  public get richtingen() {
    return this._richtingService.richtingen;
  }

  ngOnInit() {
  }

}
