import { Component, OnInit, Input } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';
import { Modules } from 'src/app/models/hoofdcompetentie.model';

@Component({
  selector: 'app-leerling-competenties',
  templateUrl: './leerling-competenties.component.html',
  styleUrls: ['./leerling-competenties.component.css']
})
export class LeerlingCompetentiesComponent implements OnInit {
  public modules = new Array<string>();
  public beschrijving: '';
  public module: '';
  @Input() public leerling: Leerling;

  constructor() { }

  ngOnInit() {
    this.modules = Object.values(Modules);
  }

  public get hoofdCompetenties() {
    if (this.leerling) {
      return this.leerling.competenties;
    }
    return [];
  }

}
