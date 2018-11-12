import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Richting } from 'src/app/models/richting.model';

@Component({
  selector: 'app-richting-overzicht-scherm',
  templateUrl: './richting-overzicht-scherm.component.html',
  styleUrls: ['./richting-overzicht-scherm.component.css']
})
export class RichtingOverzichtSchermComponent implements OnInit {
  /**
  * Een property die je doorgeeft naar de parentcomponent dat een edit event triggert
  * @event
  */
  @Output() edit = new EventEmitter<Richting>();
  /**
  * Een property die je doorgeeft naar de parentcomponent dat een verwijder event triggert
  * @event
  */
  @Output() verwijder = new EventEmitter<Richting>();

  constructor() { }

  ngOnInit() {
  }
  /**
  * Dit is een methode die de eventemitter triggert om de richting aan te passen
  */
  public editRichting(richting: Richting) {
    this.edit.emit(richting);
  }

  /**
  * Dit is een methode die de eventemitter triggert om de richting te verwijderen
  * @param {Richting} geselecteerdeRichting
  */
  public verwijderRichting(richting: Richting) {
    this.verwijder.emit(richting);
  }

}
