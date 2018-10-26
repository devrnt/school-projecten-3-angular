import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatDialog } from '@angular/material';
import { delay } from 'q';

@Component({
  selector: 'app-hoofdcompetentie',
  templateUrl: './hoofdcompetentie.component.html',
  styleUrls: ['./hoofdcompetentie.component.css']
})
export class HoofdcompetentieComponent implements OnInit {

  @Input() public hoofdcompetentie: Hoofdcompetentie;
  @Input() public isOpen: boolean;
  @Output() public verwijder = new EventEmitter<Hoofdcompetentie>();
  @Output() public edit = new EventEmitter<Hoofdcompetentie>();

  public hover: boolean;
  constructor(public dialog: MatDialog) { }
   ngOnInit() {
  }
  public toggle(): void {
    this.isOpen = !this.isOpen;
 }

 public animationdone(): boolean {
   return waitfor1s();
 }

 public editHoofdCompetentie() {
   this.edit.emit(this.hoofdcompetentie);
 }

 public verwijderHoofdCompetentie(verwijder: string) {
   console.log('verwijder2');
   this.verwijder.emit(this.hoofdcompetentie);
 }
}

function waitfor1s() {
  delay(1000);
  return true;
}
