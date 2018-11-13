import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { RichtingService } from 'src/app/services/richting.service';
import { RichtingFilterPipe } from 'src/app/pipes/richting/richting-filter.pipe';
import { CompetentieFilterPipe } from 'src/app/pipes/richting/competentie-description-filter.pipe';
import { RichtingHoofdschermComponent } from 'src/app/components/richting-hoofdscherm/richting-hoofdscherm.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RichtingCardComponent } from 'src/app/components/richting-hoofdscherm/richtingen-overzicht/richting-card/richting-card.component';
import { RichtingenOverzichtComponent } from 'src/app/components/richting-hoofdscherm/richtingen-overzicht/richtingen-overzicht.component';
// tslint:disable-next-line:max-line-length
import { RichtingDetailsComponent } from 'src/app/components/richting-hoofdscherm/richting-aanpassen/richting-details/richting-details.component';
// tslint:disable-next-line:max-line-length
import { RichtingCompetentiesComponent } from 'src/app/components/richting-hoofdscherm/richting-aanpassen/richting-competenties/richting-competenties.component';
import { RichtingAanpassenComponent } from 'src/app/components/richting-hoofdscherm/richting-aanpassen/richting-aanpassen.component';
// tslint:disable-next-line:max-line-length
import { RichtingConfirmDeleteComponent } from 'src/app/components/richting-hoofdscherm/richtingen-overzicht/richting-card/richting-confirm-delete/richting-confirm-delete.component';
// tslint:disable-next-line:max-line-length
import { CompetentieDialogComponent } from 'src/app/components/richting-hoofdscherm/richting-aanpassen/richting-competenties/competentie-dialog/competentie-dialog.component';



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
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    RichtingCardComponent,
    RichtingenOverzichtComponent,
    RichtingDetailsComponent,
    RichtingCompetentiesComponent,
    RichtingAanpassenComponent,
    RichtingFilterPipe,
    CompetentieFilterPipe,
    RichtingHoofdschermComponent,
    RichtingConfirmDeleteComponent,
    CompetentieDialogComponent
  ],
  exports: [
    RichtingCardComponent,
    RichtingenOverzichtComponent,
    RichtingDetailsComponent,
    RichtingCompetentiesComponent,
    RichtingAanpassenComponent,
    RichtingHoofdschermComponent,
    RichtingConfirmDeleteComponent,
    CompetentieDialogComponent
  ],
  providers: [
    LeerkrachtService,
    RichtingService,
    RichtingFilterPipe,
    CompetentieFilterPipe,
    MatDialog
  ],
  entryComponents: [RichtingConfirmDeleteComponent, CompetentieDialogComponent]
})
export class RichtingModule { }
