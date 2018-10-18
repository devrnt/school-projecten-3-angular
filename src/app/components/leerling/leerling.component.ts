import { Component, OnInit } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';

@Component({
  selector: 'app-leerling',
  templateUrl: './leerling.component.html',
  styleUrls: ['./leerling.component.css']
})
export class LeerlingComponent implements OnInit {
  private isOpen: boolean;
  private leerling: Leerling;
  constructor(
    // leerling: Leerling
    ) {
    // this.leerling = leerling;
   }

  ngOnInit() {
    this.isOpen = false;
  }

  public toggle(): void {
    if (this.isOpen) {
      this.isOpen = !this.isOpen;
    } else {
      this.isOpen = !this.isOpen;
    }
  }

  public get id(): string {
    return this.leerling.id;
  }



}
