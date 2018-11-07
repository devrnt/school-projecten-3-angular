import { Component, OnInit, Input } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';

@Component({
  selector: 'app-leerling-competenties-toekennen',
  templateUrl: './leerling-competenties-toekennen.component.html',
  styleUrls: ['./leerling-competenties-toekennen.component.css']
})
export class LeerlingCompetentiesToekennenComponent implements OnInit {
  @Input() leerling: Leerling;
  constructor() { }

  ngOnInit() {
  }

}
