import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichtingenViewComponent } from 'src/app/components/richtingen-view/richtingen-view.component';
import { RichtingComponent } from 'src/app/components/richting/richting.component';
import {
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatSelectModule,
<<<<<<< HEAD
  MatToolbarModule,
=======
  MatToolbarModule
>>>>>>> 75d4a067331a6b607c0b3b7ba5345dae8298c595
} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeerkrachtService } from 'src/app/services/leerkracht.service';
import { RichtingDetailsComponent } from 'src/app/components/richting-details/richting-details.component';
import { RichtingCompetentiesComponent } from 'src/app/components/richting-competenties/richting-competenties.component';
import { RichtingService } from 'src/app/services/richting.service';
<<<<<<< HEAD
import { RichtingOverzichtSchermComponent } from 'src/app/components/richting-overzicht-scherm/richting-overzicht-scherm.component';
import { RichtingSchermComponent } from 'src/app/components/richting-scherm/richting-scherm.component';
=======
import { RichtingSchermComponent } from 'src/app/components/richting-scherm/richting-scherm.component';
import { RichtingFilterPipe } from 'src/app/components/richting-filter.pipe';
>>>>>>> 75d4a067331a6b607c0b3b7ba5345dae8298c595

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
<<<<<<< HEAD
    MatToolbarModule,
    AngularFontAwesomeModule
=======
    AngularFontAwesomeModule,
    MatToolbarModule
>>>>>>> 75d4a067331a6b607c0b3b7ba5345dae8298c595
  ],
  declarations: [
    RichtingComponent,
    RichtingenViewComponent,
    RichtingDetailsComponent,
    RichtingCompetentiesComponent,
<<<<<<< HEAD
    RichtingOverzichtSchermComponent,
    RichtingSchermComponent
=======
    RichtingSchermComponent,
    RichtingFilterPipe
>>>>>>> 75d4a067331a6b607c0b3b7ba5345dae8298c595
  ],
  exports: [
    RichtingComponent,
    RichtingenViewComponent,
    RichtingDetailsComponent,
    RichtingCompetentiesComponent,
<<<<<<< HEAD
    RichtingOverzichtSchermComponent,
=======
>>>>>>> 75d4a067331a6b607c0b3b7ba5345dae8298c595
    RichtingSchermComponent
  ],
  providers: [ LeerkrachtService, RichtingService],
})
export class RichtingModule { }
