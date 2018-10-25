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
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeerkrachtService } from 'src/app/services/leerkracht.service';
import { RichtingDetailsComponent } from 'src/app/components/richting-details/richting-details.component';
import { RichtingCompetentiesComponent } from 'src/app/components/richting-competenties/richting-competenties.component';
import { RichtingService } from 'src/app/services/richting.service';
import { RichtingOverzichtSchermComponent } from 'src/app/components/richting-overzicht-scherm/richting-overzicht-scherm.component';
import { RichtingSchermComponent } from 'src/app/components/richting-scherm/richting-scherm.component';
import { RichtingFilterPipe } from 'src/app/components/richting-filter.pipe';
import { CompetentieFilterPipe } from 'src/app/components/competentie-filter.pipe';
import { HoofdcompetentieComponent } from 'src/app/components/hoofdcompetentie/hoofdcompetentie.component';
import { RichtingHoofdschermComponent } from 'src/app/components/richting-hoofdscherm/richting-hoofdscherm.component';


@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    AngularFontAwesomeModule,
    MatToolbarModule,
    MatTabsModule
  ],
  declarations: [
    RichtingComponent,
    RichtingenViewComponent,
    RichtingDetailsComponent,
    RichtingCompetentiesComponent,
    RichtingSchermComponent,
    RichtingFilterPipe,
    CompetentieFilterPipe,
    RichtingOverzichtSchermComponent,
    HoofdcompetentieComponent,
    RichtingHoofdschermComponent
  ],
  exports: [
    RichtingComponent,
    RichtingenViewComponent,
    RichtingDetailsComponent,
    RichtingCompetentiesComponent,
    RichtingOverzichtSchermComponent,
    RichtingSchermComponent,
    HoofdcompetentieComponent,
    RichtingHoofdschermComponent
  ],
  providers: [ LeerkrachtService, RichtingService, RichtingFilterPipe],
})
export class RichtingModule { }
