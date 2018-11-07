import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoofdcompetentieComponent } from 'src/app/components/hoofdcompetentie/hoofdcompetentie.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeelcompetentieComponent } from 'src/app/components/hoofdcompetentie/deelcompetentie/deelcompetentie.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HoofdcompetentieComponent,
    DeelcompetentieComponent
  ],
  declarations: [
    HoofdcompetentieComponent,
    DeelcompetentieComponent
  ]
})
export class SharedModule { }
