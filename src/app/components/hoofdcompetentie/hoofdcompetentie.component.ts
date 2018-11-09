import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatDialog } from '@angular/material';
import { delay } from 'q';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Deelcompetentie } from 'src/app/models/deelcompetentie.model';
import { RichtingService } from 'src/app/services/richting.service';

@Component({
  selector: 'app-hoofdcompetentie',
  templateUrl: './hoofdcompetentie.component.html',
  styleUrls: ['./hoofdcompetentie.component.css']
})
export class HoofdcompetentieComponent implements OnInit {

  @Input() public hoofdcompetentie: Hoofdcompetentie;
  @Input() public isOpen: boolean;
  public edit: boolean;
  public hover: boolean;
  @Input() public modify = true;
  // public hoofdcompetentieform: FormGroup;

  constructor(
    public dialog: MatDialog,
    // private _fb: FormBuilder,
    private _richtingService: RichtingService
    ) { }


  ngOnInit() {
    // formstuff goes here

  }

  public toggle(): void {
    this.isOpen = !this.isOpen;
 }

 public animationdone(): boolean {
   return waitfor1s();
 }

 public toggleEdit() {
   this.edit = !this.edit;
 }

 public showSelected(): string {
   return this.edit ? this.hoofdcompetentie.color : '';
 }

 public makeeditable(): string {
  return this.edit ? 'true' : '';
}

// REST

public verwijderHoofdCompetentie(hId: number) {
  this._richtingService.verwijderHoofdCompetentie(hId);
 }

public verwijderDeelCompetentie(hId: number, dId: number) {
  this._richtingService.verwijderDeelCompetentie(hId, dId);
}

public addNewDeelcompetentie(hId: number, description: string) {
  this._richtingService.addNewDeelComptentie(hId, description);
}

public addNewHoofdCompetentie(description: string) {
  this._richtingService.addNewHoofdCompetentie(description);
}

public updateDeelcompetentie(dId: number, description: string) {
  this._richtingService.updateDeelComptentie(dId, description);
}

public updateHoofdCompetentie(hId: number, description: string) {
  this._richtingService.updateHoofdCompetentie(hId, description);
}



}

function waitfor1s() {
  delay(1000);
  return true;
}
