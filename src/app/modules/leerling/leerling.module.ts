import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeerlingService } from 'src/app/services/leerling.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeerlingenViewComponent } from 'src/app/components/leerlingen-overzicht-scherm/leerlingen-view.component';
import { LeerlingComponent } from 'src/app/components/leerling/leerling.component';
import {
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';
import { LeerlingFilterPipe } from 'src/app/pipes/leerling/leerling-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeerlingConfirmDeleteComponent } from 'src/app/components/leerling/leerling-confirm-delete/leerling-confirm-delete.component';

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
    MatTabsModule
  ],
  exports: [ LeerlingenViewComponent, LeerlingComponent, LeerlingConfirmDeleteComponent],
  declarations: [ LeerlingenViewComponent, LeerlingComponent, LeerlingConfirmDeleteComponent],
  providers: [LeerlingService, LeerlingFilterPipe],
  entryComponents: [LeerlingConfirmDeleteComponent]
})
export class LeerlingModule {}
