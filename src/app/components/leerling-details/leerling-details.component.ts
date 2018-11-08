import { Component, OnInit, Input } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';
import { Richting } from 'src/app/models/richting';
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

}
