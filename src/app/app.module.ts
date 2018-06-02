import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParseComponent } from './parse/parse.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Browser } from 'protractor';
import { FormsModule } from '@angular/forms';
import { TaxCalculator } from './services/TaxCalculator';
import { MarketService } from './services/MarketService';
import { HttpClientModule } from '@angular/common/http';
import { FilterService } from './services/FilterService';

@NgModule({
  declarations: [
    AppComponent,
    ParseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [TaxCalculator, MarketService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
