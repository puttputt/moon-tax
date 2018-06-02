import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

    constructor() { }

    public pilot(dataSource: any[]) {
        const reduce = this.pilotReducer(dataSource, 'pilot');
        return reduce;
    }

    public corporation(dataSource: any[]) {
        return this.corporationReducer(dataSource);
    }

    public totals(dataSource: any[]) {
        let totalMined = 0;
        let allianceTax = 0;
        let corpTax = 0;

        dataSource.forEach((row) => {
            totalMined += row.result.totalIskValue;
            allianceTax += row.result.allianceTax;
            corpTax += row.result.corporationTax;
        });

        return {
            totalMined: totalMined,
            allianceTax: allianceTax,
            corpTax: corpTax,
            totalTax: corpTax + allianceTax,
        };
    }

    pilotReducer(dataSource: any[], property: string) {
        const newSource = {};

        dataSource.forEach((row) => {
            if (newSource[row[property]]) {
                newSource[row[property]].totalIskValue += row.result.totalIskValue;
                newSource[row[property]].corporationTax += row.result.corporationTax;
                newSource[row[property]].allianceTax += row.result.allianceTax;
                newSource[row[property]].materials.concat(row.result.materials);
            } else {
                newSource[row[property]] = {
                    pilot: row.pilot,
                    corporation: row.corporation,
                    totalIskValue: row.result.totalIskValue,
                    corporationTax: row.result.corporationTax,
                    allianceTax: row.result.allianceTax,
                    materials: row.result.materials
                };
            }
        });

        const newArray = [];
        for (const key in newSource) {
            if (newSource.hasOwnProperty(key)) {
                newArray.push(newSource[key]);
            }
        }
        return newArray;
    }

    corporationReducer(dataSource: any[]) {
        const property = 'corporation';
        const newSource = {};

        dataSource.forEach((row) => {
            if (newSource[row[property]]) {
                newSource[row[property]].totalIskValue += row.result.totalIskValue;
                newSource[row[property]].corporationTax += row.result.corporationTax;
                newSource[row[property]].allianceTax += row.result.allianceTax;
                newSource[row[property]].materials.concat(row.result.materials);
            } else {
                newSource[row[property]] = {
                    corporation: row.corporation,
                    totalIskValue: row.result.totalIskValue,
                    corporationTax: row.result.corporationTax,
                    allianceTax: row.result.allianceTax,
                    materials: row.result.materials
                };
            }
        });

        const newArray = [];
        for (const key in newSource) {
            if (newSource.hasOwnProperty(key)) {
                newArray.push(newSource[key]);
            }
        }
        return newArray;

    }
}
