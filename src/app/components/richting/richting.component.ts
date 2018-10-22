import { Component, OnInit, Input } from '@angular/core';
import { Richting } from 'src/app/models/richting';
 @Component({
  selector: 'app-richting',
  templateUrl: './richting.component.html',
  styleUrls: ['./richting.component.css']
})
export class RichtingComponent implements OnInit {
  @Input() public  richting: Richting;
  @Input() public isOpen: boolean;
  constructor() { }
   ngOnInit() {
  }

   public toggle(): void {
     this.isOpen = !this.isOpen;
   }

 }
