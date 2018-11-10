import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Richting } from 'src/app/models/richting';
import { delay } from 'q';
import { MatDialog } from '@angular/material';
import { LeerlingConfirmDeleteComponent } from './leerling-confirm-delete/leerling-confirm-delete.component';
import { Leerling } from 'src/app/models/leerling.model';
import { FormControl } from '@angular/forms';
 @Component({
  selector: 'app-leerling',
  templateUrl: './leerling.component.html',
  styleUrls: ['./leerling.component.css']
})
export class LeerlingComponent implements OnInit {
  /**
  * Dit is de geselecteerde leerling die je meekrijgt van de parentcomponent
  */
  @Input() public leerling: Leerling;
  /**
  * Dit is een boolean dat je meerkijgt van de parent om te weten of de card uitgeklapt kan worden
  */
  @Input() public isOpen: boolean;
  /**
  * Een property die je doorgeeft naar de parentcomponent dat een verwijder event triggert
  * @event
  */
  @Output() public verwijder = new EventEmitter<Leerling>();
  /**
  * Een property die je doorgeeft naar de parentcomponent dat een competentieToekent event triggert
  * @event
  */
  @Output() public toekennenCompetenties = new EventEmitter<Leerling>();
  /**
  * Dit is de boolean om te weten of de gebruiker hovert over bepaalde elementen zodat andere data getoond kan worden
  */
  public hover: boolean;

  /**
  * Constructor van LeerlingComponent
  * @param {MatDialog} dialog
  */
  constructor(public dialog: MatDialog) { }
   ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LeerlingConfirmDeleteComponent, {
      width: '400px',
      data: {leerling: this.leerling, component: this}
    });
  }

  /**
  * Een methode om de isOpen boolean te veranderen
  */
  public toggle(): void {
     this.isOpen = !this.isOpen;
  }

  /**
  * Dit is een methode om de methode om 1 seconde te wachten voor animatie te activeren
  * @return {boolean}
  */
  public animationdone(): boolean {
    return waitfor1s();
  }

  /**
  * Dit is een methode die de eventemitter triggert om de competenties die beoordeeld zijn aan de leerling
  */
  public kenCompetentiesToe() {
    this.toekennenCompetenties.emit(this.leerling);
  }

  /**
  * Dit is een methode die de eventemitter triggert om een richting te verwijderen
  */
  public verwijderRichting(verwijder: string) {
    this.verwijder.emit(this.leerling);
  }

 }

/**
* Een functie om 1 seconde te wachten
* @return {boolean} true
*/
 function waitfor1s() {
   delay(1000);
   return true;
 }
