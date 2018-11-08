import { Component, OnInit, Input } from '@angular/core';
import { Leerling } from 'src/app/models/leerling.model';

@Component({
  selector: 'app-leerling-scherm',
  templateUrl: './leerling-scherm.component.html',
  styleUrls: ['./leerling-scherm.component.css']
})
export class LeerlingSchermComponent implements OnInit {
  @Input() public leerling: Leerling;

  constructor() { }

  ngOnInit() { }

}
