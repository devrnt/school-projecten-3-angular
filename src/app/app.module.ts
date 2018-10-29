import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeerlingModule } from './modules/leerling/leerling.module';
import { RichtingModule } from './modules/richting/richting.module';
import {NgsRevealModule} from 'ng-scrollreveal';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    LeerlingModule,
    RichtingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    NgsRevealModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
