import * as xlsx from 'xlsx';
import { Component, OnInit } from '@angular/core';
import { TaxCalculator, LedgerRow } from '../services/TaxCalculator';
import { MarketHistory } from '../data/MarketHistory';
import { MarketService } from '../services/MarketService';
import { FilterService } from '../services/FilterService';

@Component({
  selector: 'app-parse',
  templateUrl: './parse.component.html',
  styleUrls: ['./parse.component.css']
})
export class ParseComponent implements OnInit {

  constructor(private taxService: TaxCalculator, private filterService: FilterService) { }

  private header = 'timestamp	corporation	pilot	oreType	quantity	volume	price	typeId	systemId';

  public fieldData;

  public result; //= JSON.parse('[{"timestamp":"5/3/18","corporation":"Malleus Caelum","pilot":"Darkwave Malice","oreType":"Bountiful Xenotime","quantity":"959","volume":"9,590 m³","price":"15,490,506 ISK"},{"timestamp":"5/3/18","corporation":"Malleus Caelum","pilot":"Darkwave Malice","oreType":"Monazite","quantity":"2,304","volume":"23,040 m³","price":"35,103,651 ISK"},{"timestamp":"5/3/18","corporation":"Malleus Caelum","pilot":"Jason Varl","oreType":"Bountiful Xenotime","quantity":"3,889","volume":"38,890 m³","price":"62,818,122 ISK"},{"timestamp":"5/3/18","corporation":"Malleus Caelum","pilot":"Jason Varl","oreType":"Monazite","quantity":"1,937","volume":"19,370 m³","price":"29,512,054 ISK"},{"timestamp":"5/3/18","corporation":"Malleus Caelum","pilot":"Jason Varl","oreType":"Xenotime","quantity":"3,329","volume":"33,290 m³","price":"53,875,936 ISK"},{"timestamp":"5/3/18","corporation":"Malleus Caelum","pilot":"Morbid Malice","oreType":"Bountiful Xenotime","quantity":"7,699","volume":"76,990 m³","price":"124,360,176 ISK"},{"timestamp":"5/3/18","corporation":"Malleus Caelum","pilot":"Morbid Malice","oreType":"Monazite","quantity":"582","volume":"5,820 m³","price":"8,867,328 ISK"},{"timestamp":"5/3/18","corporation":"Malleus Caelum","pilot":"Morbid Malice","oreType":"Xenotime","quantity":"1,088","volume":"10,880 m³","price":"17,607,996 ISK"},{"timestamp":"5/3/18","corporation":"Malleus Caelum","pilot":"Newcastle Brownale","oreType":"Bountiful Monazite","quantity":"1,345","volume":"13,450 m³","price":"15,997,214 ISK"},{"timestamp":"5/3/18","corporation":"Malleus Caelum","pilot":"Newcastle Brownale","oreType":"Bountiful Xenotime","quantity":"7,136","volume":"71,360 m³","price":"115,266,166 ISK"},{"timestamp":"5/3/18","corporation":"Malleus Caelum","pilot":"Newcastle Brownale","oreType":"Monazite","quantity":"3,209","volume":"32,090 m³","price":"48,892,195 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Darkwave Malice","oreType":"Bountiful Xenotime","quantity":"1,353","volume":"13,530 m³","price":"21,854,697 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Darkwave Malice","oreType":"Xenotime","quantity":"2,379","volume":"23,790 m³","price":"38,501,307 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Jason Varl","oreType":"Bountiful Monazite","quantity":"2,734","volume":"27,340 m³","price":"32,517,758 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Jason Varl","oreType":"Bountiful Xenotime","quantity":"1,209","volume":"12,090 m³","price":"19,528,698 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Jason Varl","oreType":"Xenotime","quantity":"13,232","volume":"132,320 m³","price":"214,144,306 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Morbid Malice","oreType":"Bountiful Monazite","quantity":"2,040","volume":"20,400 m³","price":"24,263,433 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Morbid Malice","oreType":"Bountiful Xenotime","quantity":"3,121","volume":"31,210 m³","price":"50,412,795 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Morbid Malice","oreType":"Monazite","quantity":"952","volume":"9,520 m³","price":"14,504,633 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Morbid Malice","oreType":"Xenotime","quantity":"11,324","volume":"113,240 m³","price":"183,265,577 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Newcastle Brownale","oreType":"Bountiful Monazite","quantity":"5,751","volume":"57,510 m³","price":"68,401,473 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Newcastle Brownale","oreType":"Bountiful Xenotime","quantity":"3,140","volume":"31,400 m³","price":"50,719,697 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Newcastle Brownale","oreType":"Monazite","quantity":"1,176","volume":"11,760 m³","price":"17,917,488 ISK"},{"timestamp":"5/4/18","corporation":"Malleus Caelum","pilot":"Newcastle Brownale","oreType":"Xenotime","quantity":"8,401","volume":"84,010 m³","price":"135,960,271 ISK"}]');

  public refineRate = '0.85';
  public corpTax = '0.05';
  public allianceTax = '0.25';

  public pilotResult;
  public corpResult;
  public totals;

  ngOnInit() {
  }

  parse() {

    this.taxService.setRates(+this.refineRate, +this.allianceTax, +this.corpTax);

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
