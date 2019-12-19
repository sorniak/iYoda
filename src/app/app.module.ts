import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './app/pages/history/history.component';
import { BattlesComponent } from './app/pages/battles/battles.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SwapiService } from './app/services/swapi.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule, MatCardModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    BattlesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [HttpClientModule, SwapiService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
