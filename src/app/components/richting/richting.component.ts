import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Richting } from 'src/app/models/richting';
import { delay } from 'q';
import { MatDialog } from '@angular/material';
import { RichtingConfirmDeleteComponent } from './richting-confirm-delete/richting-confirm-delete.component';
 @Component({
  selector: 'app-richting',
  templateUrl: './richting.component.html',
  styleUrls: ['./richting.component.css']
})
export class RichtingComponent implements OnInit {
  /**
  * Dit is de geselecteerde richting die je meekrijgt van de parentcomponent
  */
  @Input() public richting: Richting;
  /**
  * Dit is een boolean dat je meerkijgt van de parent om te weten of de card uitgeklapt kan worden
  */
  @Input() public isOpen: boolean;
  /**
  * Een property die je doorgeeft naar de parentcomponent dat een verwijder event triggert
  * @event
  */
  @Output() public verwijder = new EventEmitter<Richting>();
  /**
  * Een property die je doorgeeft naar de parentcomponent dat een edit event triggert
  * @event
  */
  @Output() public edit = new EventEmitter<Richting>();
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

  /**
  * Een methode die de dialog opent, instelt op het juiste breedte en de leerling meegeeft
  */
  openDialog(): void {
    const dialogRef = this.dialog.open(RichtingConfirmDeleteComponent, {
      width: '400px',
      data: {richting: this.richting, component: this}
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
  * Dit is een methode die de eventemitter triggert om de richting te editten
  */
  public editRichting() {
    this.edit.emit(this.richting);
  }

  /**
  * Dit is een methode die de eventemitter triggert om een richting te verwijderen
  */
  public verwijderRichting(verwijder: string) {
    console.log('verwijder2');
    this.verwijder.emit(this.richting);
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
