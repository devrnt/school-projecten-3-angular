import { Component, OnInit, Input } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';

@Component({
  selector: 'app-leerling-details',
  templateUrl: './leerling-details.component.html',
  styleUrls: ['./leerling-details.component.css']
})
export class LeerlingDetailsComponent implements OnInit {

  @Input() public leerling: Leerling;

  constructor() { }

  ngOnInit() {
  }

}
