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
import { RichtingenViewComponent } from './components/richtingen-view/richtingen-view.component';
=======
import { RichtingDetailsComponent } from './components/richting-details/richting-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
>>>>>>> 993597f8f382558c52b416cc0161b9dd8e79bc42

@NgModule({
  declarations: [
    AppComponent,
    LeerlingComponent,
    RichtingComponent,
<<<<<<< HEAD
    RichtingenViewComponent
=======
    RichtingDetailsComponent
>>>>>>> 993597f8f382558c52b416cc0161b9dd8e79bc42
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
