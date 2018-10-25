import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Richting } from 'src/app/models/richting';
import { delay } from 'q';
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
  constructor() { }
   ngOnInit() {
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

  public verwijderRichting() {
    this.verwijder.emit(this.richting);
  }

 }

 function waitfor1s() {
   delay(1000);
   return true;
 }
