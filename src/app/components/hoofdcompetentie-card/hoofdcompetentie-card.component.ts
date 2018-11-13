import { Component, OnInit, Input } from '@angular/core';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatDialog } from '@angular/material';
import { delay } from 'q';
import { RichtingService } from 'src/app/services/richting.service';
import { Kleur, Icon } from 'src/app/models/richting.model';

@Component({
  selector: 'app-hoofdcompetentie-card',
  templateUrl: './hoofdcompetentie-card.component.html',
  styleUrls: ['./hoofdcompetentie-card.component.css']
})
export class HoofdcompetentieCardComponent implements OnInit {
  /**
  * Dit is hoofdcompetentie dat je doorkrijgt van de parent component
  */
  @Input() public hoofdcompetentie: Hoofdcompetentie;
  /**
  * Dit is een boolean die je meerkijgt van de parent om te weten of de card uitgeklapt kan worden
  */
  @Input() public isOpen: boolean;
   /**
  * Dit is een boolean die je meerkijgt van de parent om
  * te weten of de card moet opgeslagen worden on change (reeds bestaande) of on save (nieuwe)
  */
 @Input() public new: boolean;
  /**
  * Dit is de boolean om te weten of de gebruiker mag veranderen
  */
  public edit: boolean;
  /**
  * Dit is de boolean om te weten of de gebruiker hovert over bepaalde elementen zodat andere data getoond kan worden
  */
  public hover: boolean;
  /**
  * Dit is de boolean om te weten of de gebruiker mag veranderen die je doorkrijgt van de parent component
  */
  @Input() public modify = true;

  /**
  * Dit is de constructor van HoofdcompetentieComponent
  * @param {MatDialog} dialog
  * @param {RichtingService} richtingService
  */
  constructor(
    public dialog: MatDialog,
    // private _fb: FormBuilder,
    private _richtingService: RichtingService
    ) { }


  ngOnInit() {
    // formstuff goes here

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
  * Een methode om de edit boolean te veranderen
  */
 public toggleEdit() {
   this.edit = !this.edit;
 }

 /**
  * Een methode om te kijken welke hoofdcompetentie geselecteerd is
  * @return {string}
  */
 public showSelected(): string {
   return this.edit ? this.hoofdcompetentie.color : '';
 }

 /**
  * Een methode om te kijken of er mag aangepast worden
  * @return {string}
  */
 public makeeditable(): string {
  return this.edit ? 'true' : '';
}

// REST

/**
* Een methode om een hoofdcompetentie te verwijderen
* @param {number} hoofdcompetentieId
*/
public verwijderHoofdCompetentie() {
  this._richtingService.verwijderHoofdCompetentie(this.hoofdcompetentie.id, this.new);
 }

/**
* Een methode om een deelcompetentie te verwijderen
* @param {number} hoofdcompetentieId
* @param {number} deelcompetentieId
*/
public verwijderDeelCompetentie(hId: number, dId: number) {
  this._richtingService.verwijderDeelCompetentie(hId, dId);
}

/**
* Een methode om een nieuwe deelcompetentie toe te voegen
* @param {number} hoofdcompetentieId
* @param {string} beschrijving
*/
public addNewDeelcompetentie(hId: number, description: string) {
  this._richtingService.addNewDeelComptentie(hId, description);
}

/**
* Een methode om de beschrijving van een deelcompetentie aan te passen
* @param {number} deelcompetentieId
* @param {string} nieuweBeschrijving
*/
public updateDeelcompetentie(dId: number, description: string) {
  this._richtingService.updateDeelComptentie(dId, description);
}

/**
* Een methode om de beschrijving van een hoofdcompetentie aan te passen
* @param {number} hoofdcompetentieId
* @param {string} nieuweBeschrijving
*/
public updateHoofdCompetentie(hId: number, description: string) {
  this._richtingService.updateHoofdCompetentie(hId, description);
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
