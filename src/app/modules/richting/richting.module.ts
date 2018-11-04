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
  MatTabsModule,
  MatDialog,
  MatDialogModule,
  MatCardModule,
} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeerkrachtService } from 'src/app/services/leerkracht.service';
import { RichtingDetailsComponent } from 'src/app/components/richting-details/richting-details.component';
import { RichtingCompetentiesComponent } from 'src/app/components/richting-competenties/richting-competenties.component';
import { RichtingService } from 'src/app/services/richting.service';
import { RichtingOverzichtSchermComponent } from 'src/app/components/richting-overzicht-scherm/richting-overzicht-scherm.component';
import { RichtingSchermComponent } from 'src/app/components/richting-scherm/richting-scherm.component';
import { RichtingFilterPipe } from 'src/app/pipes/richting/richting-filter.pipe';
import { CompetentieFilterPipe } from 'src/app/pipes/richting/competentie-filter.pipe';
import { HoofdcompetentieComponent } from 'src/app/components/hoofdcompetentie/hoofdcompetentie.component';
import { RichtingHoofdschermComponent } from 'src/app/components/richting-hoofdscherm/richting-hoofdscherm.component';
import { RichtingConfirmDeleteComponent } from 'src/app/components/richting/richting-confirm-delete/richting-confirm-delete.component';
import { CompetentieDialogComponent } from 'src/app/components/competentie-dialog/competentie-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    AngularFontAwesomeModule,
    MatToolbarModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
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
    RichtingHoofdschermComponent,
    RichtingConfirmDeleteComponent,
    CompetentieDialogComponent
  ],
  exports: [
    RichtingComponent,
    RichtingenViewComponent,
    RichtingDetailsComponent,
    RichtingCompetentiesComponent,
    RichtingOverzichtSchermComponent,
    RichtingSchermComponent,
    HoofdcompetentieComponent,
    RichtingHoofdschermComponent,
    RichtingConfirmDeleteComponent,
    CompetentieDialogComponent,
  ],
  providers: [ LeerkrachtService, RichtingService, RichtingFilterPipe, MatDialog],
  entryComponents: [RichtingConfirmDeleteComponent, CompetentieDialogComponent]
})
export class RichtingModule { }
