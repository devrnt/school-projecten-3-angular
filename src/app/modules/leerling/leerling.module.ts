import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeerlingService } from 'src/app/services/leerling.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeerlingenOverzichtComponent } from 'src/app/components/leerlingen-overzicht/leerlingen-overzicht.component';
import { LeerlingCardComponent } from 'src/app/components/leerling-card/leerling-card.component';
import {
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatCheckboxModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeerlingConfirmDeleteComponent } from 'src/app/components/leerling-card/leerling-confirm-delete/leerling-confirm-delete.component';
import { LeerlingHoofdschermComponent } from 'src/app/components/leerling-hoofdscherm/leerling-hoofdscherm.component';
import { LeerlingRichtingFilterPipe } from 'src/app/pipes/leerling/leerling-richting-filter.pipe';
import { LeerlingDetailsComponent } from 'src/app/components/leerling-details/leerling-details.component';
import { SharedModule } from '../shared/shared.module';
// tslint:disable-next-line:max-line-length
import { LeerlingCompetentiesToekennenComponent } from 'src/app/components/leerling-competenties-toekennen/leerling-competenties-toekennen.component';
// tslint:disable-next-line:max-line-length
import { LeerlingCompetentiesToekennenSchermComponent } from 'src/app/components/leerling-competenties-toekennen-scherm/leerling-competenties-toekennen-scherm.component';
import { LeerlingFilterPipe } from 'src/app/pipes/leerling/leerling-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    AngularFontAwesomeModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    SharedModule
  ],
  exports: [
    LeerlingenOverzichtComponent,
    LeerlingCardComponent,
    LeerlingConfirmDeleteComponent,
    LeerlingHoofdschermComponent,
    LeerlingDetailsComponent,
    LeerlingCompetentiesToekennenComponent,
    LeerlingCompetentiesToekennenSchermComponent
  ],
  declarations: [
    LeerlingenOverzichtComponent,
    LeerlingCardComponent,
    LeerlingConfirmDeleteComponent,
    LeerlingHoofdschermComponent,
    LeerlingDetailsComponent,
    LeerlingCompetentiesToekennenComponent,
    LeerlingCompetentiesToekennenSchermComponent
  ],
  providers: [LeerlingService, LeerlingFilterPipe],
  entryComponents: [LeerlingConfirmDeleteComponent]
})
export class LeerlingModule {}
