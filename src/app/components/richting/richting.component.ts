import { Component, OnInit, Input } from '@angular/core';
import { Richting } from 'src/app/models/richting';
import { delay } from 'q';
 @Component({
  selector: 'app-richting',
  templateUrl: './richting.component.html',
  styleUrls: ['./richting.component.css']
})
export class RichtingComponent implements OnInit {
  @Input() public  richting: Richting;
  @Input() public isOpen: boolean;
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

 }

 function waitfor1s() {
   delay(1000);
   return true;
 }
