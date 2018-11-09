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
  @Input() public leerling: Leerling;
  @Input() public isOpen: boolean;
  @Output() public verwijder = new EventEmitter<Leerling>();
  @Output() public toekennenCompetenties = new EventEmitter<Leerling>();

  public hover: boolean;
  constructor(public dialog: MatDialog) { }
   ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LeerlingConfirmDeleteComponent, {
      width: '400px',
      data: {leerling: this.leerling, component: this}
    });
  }

  public toggle(): void {
     this.isOpen = !this.isOpen;
  }

  public animationdone(): boolean {
    return waitfor1s();
  }

  public kenCompetentiesToe() {
    this.toekennenCompetenties.emit(this.leerling);
  }

  public verwijderRichting(verwijder: string) {
    this.verwijder.emit(this.leerling);
  }

 }

 function waitfor1s() {
   delay(1000);
   return true;
 }
