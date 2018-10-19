import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichtingenViewComponent } from 'src/app/components/richtingen-view/richtingen-view.component';
import { RichtingComponent } from 'src/app/components/richting/richting.component';
import {
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatSelectModule
} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeerkrachtService } from 'src/app/services/leerkracht.service';
import { RichtingDetailsComponent } from 'src/app/components/richting-details/richting-details.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    RichtingComponent,
    RichtingenViewComponent,
    RichtingDetailsComponent
  ],
  exports: [
    RichtingComponent,
    RichtingenViewComponent,
    RichtingDetailsComponent
  ],
  providers: [ LeerkrachtService],
})
export class RichtingModule { }
