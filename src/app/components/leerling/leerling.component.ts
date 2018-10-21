import { Component, OnInit, Input } from '@angular/core';
import { Leerling, Geslacht } from 'src/app/models/leerling.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-leerling',
  templateUrl: './leerling.component.html',
  styleUrls: ['./leerling.component.css']
})
export class LeerlingComponent implements OnInit {
  @Input() public isOpen: boolean;
  @Input() public leerling: Leerling;
  constructor() {// leerling: Leerling
    // this.leerling = leerling;
  }

  ngOnInit() {
  }

  public toggle(): void {
      this.isOpen = !this.isOpen;
  }

  public get geslacht(): string {
    return this.leerling.geslacht === Geslacht.Man ? 'boy' : 'girl';
  }
}
