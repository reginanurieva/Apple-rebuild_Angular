import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IphoneComponent } from './iphone/iphone.component';
import { CardsComponent } from './cards/cards.component';
import { OptionsComponent } from './options/options.component';
import { IpadComponent } from './ipad/ipad.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TvComponent } from './tv/tv.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IphoneComponent,
    CardsComponent,
    OptionsComponent,
    IpadComponent,
    HomepageComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
