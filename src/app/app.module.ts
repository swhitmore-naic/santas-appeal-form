import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';

import { AppComponent } from './app.component';
import { AppealComponent } from './appeal/appeal.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule
  ],
  declarations: [
    AppComponent,
    AppealComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
