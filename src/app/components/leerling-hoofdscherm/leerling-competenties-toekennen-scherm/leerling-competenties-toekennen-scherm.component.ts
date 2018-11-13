import { Component, OnInit, Input } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';

@Component({
  selector: 'app-leerling-competenties-toekennen-scherm',
  templateUrl: './leerling-competenties-toekennen-scherm.component.html',
  styleUrls: ['./leerling-competenties-toekennen-scherm.component.css']
})
export class LeerlingCompetentiesToekennenSchermComponent implements OnInit {
  /**
  * De geselecteerde leerling die je meekrijgt van de parent component
  */
  @Input() leerling: Leerling;
  constructor() { }

  ngOnInit() {
  }

}
