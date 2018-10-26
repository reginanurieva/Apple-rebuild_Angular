import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IphoneComponent } from './iphone/iphone.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IphoneComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
