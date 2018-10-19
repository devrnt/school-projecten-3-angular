import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeerlingModule } from './modules/leerling/leerling.module';
import { RichtingModule } from './modules/richting/richting.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    LeerlingModule,
    RichtingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
