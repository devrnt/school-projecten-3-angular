import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LeerlingComponent } from './components/leerling/leerling.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatExpansionModule} from '@angular/material/expansion';
import { LeerlingService } from './services/leerling.service';
import { RichtingComponent } from './components/richting/richting.component';
<<<<<<< HEAD
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
=======
>>>>>>> 1635ea9080573b3b3cbf03c32320ae9af7de8d12

@NgModule({
  declarations: [
    AppComponent,
    LeerlingComponent,
    RichtingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [ LeerlingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
