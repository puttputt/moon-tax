import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarketHistory } from '../data/MarketHistory';
import { MoonMaterialNames } from '../data/ore';

@Injectable()
export class MarketService {

    private url = 'https://esi.evetech.net/latest/markets/10000002/history/?datasource=tranquility&type_id=';

    public moonOrePrices = {};
    // JSON.parse('{"16633":471.18,"16634":555.1,"16635":1662.73,"16636":1540,"16637":3617.1,"16638":3477.21,"16639":2667.22,"16640":2204.83,"16641":14817.09,"16642":12004,"16643":14770,"16644":25100,"16646":8592.89,"16647":21445.91,"16648":29989,"16649":13748.96,"16650":97634.54,"16651":84449.13,"16652":80450.14,"16653":45397.96}');

    constructor(private http: HttpClient) {
        Object.keys(MoonMaterialNames).forEach((key) => {
            this.getHistoricalData(+key).subscribe((result) => {
                this.moonOrePrices[key] = result[result.length - 1].highest;
                console.log(`${MoonMaterialNames[key]}: ${this.moonOrePrices[key]}`);
            }, (error) => console.error(error));
        });

    }

    public getHistoricalData(typeId: number) {
        return this.http.get<MarketHistory[]>(`${this.url}${typeId}`);
    }
}
