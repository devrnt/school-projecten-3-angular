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
  @Input() public richting: Richting;
  @Input() public isOpen: boolean;
  @Output() public verwijder = new EventEmitter<Richting>();
  @Output() public edit = new EventEmitter<Richting>();

  public hover: boolean;
  constructor(public dialog: MatDialog) { }
   ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RichtingConfirmDeleteComponent, {
      width: '400px',
      data: {richting: this.richting, component: this}
    });

  }

  public toggle(): void {
     this.isOpen = !this.isOpen;
  }

  public animationdone(): boolean {
    return waitfor1s();
  }

  public editRichting() {
    this.edit.emit(this.richting);
  }

  public verwijderRichting(verwijder: string) {
    console.log('verwijder2');
    this.verwijder.emit(this.richting);
  }

 }

 function waitfor1s() {
   delay(1000);
   return true;
 }
