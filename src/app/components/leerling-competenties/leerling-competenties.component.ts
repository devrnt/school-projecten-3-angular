import { Component, OnInit, Input } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';
import { Modules, Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';

@Component({
  selector: 'app-leerling-competenties',
  templateUrl: './leerling-competenties.component.html',
  styleUrls: ['./leerling-competenties.component.css']
})
export class LeerlingCompetentiesComponent implements OnInit {
  /**
  * Een property die de modules van de richtingen bijhoudt
  */
  public modules = new Array<string>();
  /**
  * Een property die de filter op beschrijving bijhoudt
  */
  public beschrijving: '';
  /**
  * Een property die de filter van module bijhoudt
  */
  public module: '';
  /**
  * De geslecteerde leerling die van de parent component afkomstig is
  */
  @Input() public leerling: Leerling;

  constructor() { }

  ngOnInit() {
    this.modules = Object.values(Modules);
  }

  /**
  * Getter van de hoofdcompetenties
  * @return {Hoofdcompetentie[]}
  */
  public get hoofdCompetenties(): Hoofdcompetentie[] {
    if (this.leerling) {
      return this.leerling.competenties;
    }
    return [];
  }

}
