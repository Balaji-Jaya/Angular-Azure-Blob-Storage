import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SasComponent } from './sas/sas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { ClrIconModule } from '@clr/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth/auth.guard';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FooterComponent } from './footer/footer.component';
//import { AppRoutingModule } from './app-routing/app-routing.module';
import {MatRadioModule} from '@angular/material/radio';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SasComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent
  ],
  entryComponents:[
    SasComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    BrowserAnimationsModule,
    ClarityModule,
    ClrIconModule,
    MatDialogModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    IvyCarouselModule,
    MatCarouselModule,
    MatRadioModule
  //  AppRoutingModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
