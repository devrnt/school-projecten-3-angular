import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoofdcompetentieComponent } from 'src/app/components/hoofdcompetentie/hoofdcompetentie.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  exports: [
    HoofdcompetentieComponent
  ],
  declarations: [
    HoofdcompetentieComponent
  ]
})
export class SharedModule { }
