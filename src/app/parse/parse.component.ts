import * as xlsx from 'xlsx';
import { Component, OnInit } from '@angular/core';
import { TaxCalculator, LedgerRow } from '../services/TaxCalculator';
import { MarketHistory } from '../models/MarketHistory';
import { MarketService } from '../services/MarketService';
import { FilterService } from '../services/FilterService';

@Component({
  selector: 'app-parse',
  templateUrl: './parse.component.html',
  styleUrls: ['./parse.component.css']
})
export class ParseComponent implements OnInit {

  constructor(private taxService: TaxCalculator, private filterService: FilterService, private marketService: MarketService) { }

  private header = 'timestamp	corporation	pilot	oreType	quantity	volume	price	typeId	systemId';

  public fieldData;

  public result;

  public refineRate = '0.85';
  public corpTax = '0.05';
  public allianceTax = '0.25';
  public selectedDate;

  public pilotResult;
  public corpResult;
  public totals;

  public hasMarketData = false;

  public marketResponse = [];

  ngOnInit() {
    this.marketService.getPrices().then((result) => {
      console.log(result);

      this.marketResponse = result[0].reverse();

      this.selectedDate = this.marketResponse[0].date;

      this.hasMarketData = true;
      console.log(this.marketResponse);
    }, (error) => {
      // show error;
    });
  }

  parse() {

    this.taxService.setRates(+this.refineRate, +this.allianceTax, +this.corpTax, this.selectedDate);

    console.log(this.fieldData);

    this.removeHeaderIfItExists();

    const full = `${this.header}\n${this.fieldData}`;
    const data = xlsx.read(full, {
      type: 'string',
    });

    this.result = xlsx.utils.sheet_to_json(data.Sheets[data.SheetNames[0]]);

    console.log(JSON.stringify(this.result));

    this.analyze();
  }

  removeHeaderIfItExists() {
    if (this.fieldData.includes('SolarSystemID')) {
      console.log('exists');
      this.fieldData = this.fieldData.split('\n').splice(1).join('\n');
    }
  }

  analyze() {
    const result = this.result.map((row: LedgerRow) => {
      return this.taxService.calculateTax(row);
    });

    console.log(result);

    // console.log('PILOTS');
    const pilots = this.filterService.pilot(result);

    this.pilotResult = pilots;

    console.log(pilots);

    const corps = this.filterService.corporation(result);
    this.corpResult = corps;

    this.totals = this.filterService.totals(result);

    console.log(corps);
  }

}
