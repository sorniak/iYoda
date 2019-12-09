import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './app/pages/history/history.component';
import { BattlesComponent } from './app/pages/battles/battles.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SwapiService } from './app/services/swapi.service';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    BattlesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, SwapiService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
