import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';


  import{MatTableModule} from '@angular/material/table';
  import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
  import{MatFormFieldModule} from '@angular/material/form-field';
  import{MatInputModule} from '@angular/material/input';
  import{MatButtonModule} from '@angular/material/button';
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import{MatToolbarModule} from '@angular/material/toolbar';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentListComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    MatNativeDateModule,
    FormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
