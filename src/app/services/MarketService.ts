import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoonMaterialNames } from '../models/ore';
import { MarketHistory } from '../models/MarketHistory';

@Injectable()
export class MarketService {

    private url = 'https://esi.evetech.net/latest/markets/10000002/history/?datasource=tranquility&type_id=';

    public moonOrePrices = {};
    // JSON.parse('{"16633":471.18,"16634":555.1,"16635":1662.73,"16636":1540,"16637":3617.1,"16638":3477.21,"16639":2667.22,"16640":2204.83,"16641":14817.09,"16642":12004,"16643":14770,"16644":25100,"16646":8592.89,"16647":21445.91,"16648":29989,"16649":13748.96,"16650":97634.54,"16651":84449.13,"16652":80450.14,"16653":45397.96}');

    constructor(private http: HttpClient) {
    }

    public getPrices(): Promise<MarketHistory[][]> {

        const promises = [];

        Object.keys(MoonMaterialNames).forEach((key) => {

            const promise = new Promise((resolve, reject) => {
                this.getHistoricalData(+key).subscribe((result) => {
                    this.moonOrePrices[key] = result;
                    // console.log(`${MoonMaterialNames[key]}: ${this.moonOrePrices[key]}`);
                    resolve(result);
                }, (error) => {
                    reject(error);
                });
            });

            promises.push(promise);
        });

        return Promise.all(promises);
    }

    private getHistoricalData(typeId: number) {
        return this.http.get<MarketHistory[]>(`${this.url}${typeId}`);
    }
}
