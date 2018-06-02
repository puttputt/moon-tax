import { OreDetail, MoonOreNames, MoonMaterialNames, MoonMaterialLowercaseNames } from '../data/ore';
import { Injectable } from '@angular/core';
import { MarketService } from './MarketService';

export interface LedgerRow {
    pilot: string;
    corporation: string;
    oreType: string;
    quantity: string;
    result: any;
}

const normalYield = 1;
const mediumYield = 1.15;
const highYield = 2;

@Injectable()
export class TaxCalculator {

    public refineRate = 0.85;
    public allianceTax = 0.25;
    public corporationTax = 0.05;

    constructor(private market: MarketService) { }

    public calculateTax(row: LedgerRow) {
        //console.log(JSON.stringify(this.market.moonOrePrices));

        const oreId = this.getOreId(row);
        const details = this.getOreDetails(oreId);
        //console.log(details);
        //console.log(row.quantity);
        const materials = this.getRefinedQuantity(oreId, row.quantity, details);
        //console.log(materials);
        let materialPrices = this.getPrices(materials);
        materialPrices = this.addTaxes(materialPrices);

        row['result'] = materialPrices;

        return row;
    }

    private addTaxes(materialPrices: any) {
        materialPrices['allianceTax'] = materialPrices.totalIskValue * this.allianceTax;
        materialPrices['corporationTax'] = materialPrices.totalIskValue * this.corporationTax;
        return materialPrices;
    }

    private getPrices(materials: any) {
        const materialsWithPrices = {
            materials: [],
            totalIskValue: 0
        };

        for (const property in materials) {
            if (materials.hasOwnProperty(property)) {
                const id = this.getKeyByValue(MoonMaterialLowercaseNames, property);
                const value = materials[property] * this.market.moonOrePrices[id];

                materialsWithPrices.materials.push({
                    name: property,
                    quantity: materials[property],
                    price: this.market.moonOrePrices[id],
                    value: value,
                });

                materialsWithPrices.totalIskValue += value;
            }
        }
        return materialsWithPrices;
    }

    private getRefinedQuantity(oreId: number, quantity: string, oreDetail: any) {
        const index = oreDetail.types_raw.indexOf(oreId);

        const quantityInt = parseInt(quantity.split(',').join(''), 10);

        let baseRefine = Object.assign({}, oreDetail.materials);

        if (index === 0) {
            baseRefine = this.multiplyValues(baseRefine, quantityInt, normalYield);
        } else if (index === 1) {
            baseRefine = this.multiplyValues(baseRefine, quantityInt, mediumYield);
        } else if (index === 2) {
            baseRefine = this.multiplyValues(baseRefine, quantityInt, highYield);
        }

        return baseRefine;
    }

    private multiplyValues(materials: any, quantity: number, rate: number) {
        for (const property in materials) {
            if (materials.hasOwnProperty(property)) {
                materials[property] = Math.round(((materials[property] * quantity * rate * this.refineRate) / 100));
            }
        }
        return materials;
    }

    private getOreId(row: LedgerRow) {
        return +this.getKeyByValue(MoonOreNames, row.oreType);
    }

    private getOreDetails(oreId: number) {
        const result = OreDetail.filter((ore) => {
            return (ore.types_raw.indexOf(oreId) > -1);
        });
        return result[0];
    }

    private getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
}
