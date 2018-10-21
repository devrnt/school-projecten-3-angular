import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeerlingService } from 'src/app/services/leerling.service';
import { LeerlingComponent } from 'src/app/components/leerling/leerling.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  exports: [
    LeerlingComponent,
  ],
  declarations: [
    LeerlingComponent
  ],
  providers: [ LeerlingService],
})
export class LeerlingModule { }
