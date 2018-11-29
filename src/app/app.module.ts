// Core Libraries
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

// Third Party
import {NotifierModule} from 'angular-notifier';
import {TextMaskModule} from 'angular2-text-mask';

// Ours
import {AppComponent} from './app.component';
import {AppealComponent} from './appeal/appeal.component';
import { CongratsComponent } from './congrats/congrats.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule,
    TextMaskModule
  ],
  declarations: [
    AppComponent,
    AppealComponent,
    CongratsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
