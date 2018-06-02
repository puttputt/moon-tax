(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-primary\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"/\">Moon Tax Calculator</a>\n    </div>\n</div>\n\n<div class=\"container\">\n    <app-parse></app-parse>\n</div>\n\n<div class=\"container-fluid text-center\">\n    <p>by puttputt</p>\n    <p>source on <a href=\"https://github.com/puttputt/moon-tax\">github</a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _parse_parse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parse/parse.component */ "./src/app/parse/parse.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_TaxCalculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/TaxCalculator */ "./src/app/services/TaxCalculator.ts");
/* harmony import */ var _services_MarketService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/MarketService */ "./src/app/services/MarketService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_FilterService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/FilterService */ "./src/app/services/FilterService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _parse_parse_component__WEBPACK_IMPORTED_MODULE_3__["ParseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [_services_TaxCalculator__WEBPACK_IMPORTED_MODULE_6__["TaxCalculator"], _services_MarketService__WEBPACK_IMPORTED_MODULE_7__["MarketService"], _services_FilterService__WEBPACK_IMPORTED_MODULE_9__["FilterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/ore.ts":
/*!*******************************!*\
  !*** ./src/app/models/ore.ts ***!
  \*******************************/
/*! exports provided: MineralNames, MoonMaterialNames, MoonMaterialLowercaseNames, MoonOreNames, OreDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MineralNames", function() { return MineralNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoonMaterialNames", function() { return MoonMaterialNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoonMaterialLowercaseNames", function() { return MoonMaterialLowercaseNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoonOreNames", function() { return MoonOreNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OreDetail", function() { return OreDetail; });
var MineralNames = {
    34: 'Tritanium',
    35: 'Pyerite',
    36: 'Mexallon',
    37: 'Isogen',
    38: 'Nocxium',
    39: 'Zydrine',
    40: 'Megacyte',
    11399: 'Morphite',
};
var MoonMaterialNames = {
    16633: 'Hydrocarbons',
    16634: 'Atmospheric Gases',
    16635: 'Evaporite Deposits',
    16636: 'Silicates',
    16637: 'Tungsten',
    16638: 'Titanium',
    16639: 'Scandium',
    16640: 'Cobalt',
    16641: 'Chromium',
    16642: 'Vanadium',
    16643: 'Cadmium',
    16644: 'Platinum',
    16646: 'Mercury',
    16647: 'Caesium',
    16648: 'Hafnium',
    16649: 'Technetium',
    16650: 'Dysprosium',
    16651: 'Neodymium',
    16652: 'Promethium',
    16653: 'Thulium',
};
var MoonMaterialLowercaseNames = {
    16633: 'hydrocarbons',
    16634: 'atmosphericgases',
    16635: 'evaporitedeposits',
    16636: 'silicates',
    16637: 'tungsten',
    16638: 'titanium',
    16639: 'scandium',
    16640: 'cobalt',
    16641: 'chromium',
    16642: 'vanadium',
    16643: 'cadmium',
    16644: 'platinum',
    16646: 'mercury',
    16647: 'caesium',
    16648: 'hafnium',
    16649: 'technetium',
    16650: 'dysprosium',
    16651: 'neodymium',
    16652: 'promethium',
    16653: 'thulium',
};
var MoonOreNames = {
    45492: 'Bitumens',
    46284: 'Brimful Bitumens',
    46285: 'Glistening Bitumens',
    45493: 'Coesite',
    46286: 'Brimful Coesite',
    46287: 'Glistening Coesite',
    45491: 'Sylvite',
    46282: 'Brimful Sylvite',
    46283: 'Glistening Sylvite',
    45490: 'Zeolites',
    46280: 'Brimful Zeolites',
    46281: 'Glistening Zeolites',
    45494: 'Cobaltite',
    46288: 'Copious Cobaltite',
    46289: 'Twinkling Cobaltite',
    45495: 'Euxenite',
    46290: 'Copious Euxenite',
    46291: 'Twinkling Euxenite',
    45497: 'Scheelite',
    46294: 'Copious Scheelite',
    46295: 'Twinkling Scheelite',
    45496: 'Titanite',
    46292: 'Copious Titanite',
    46293: 'Twinkling Titanite',
    45501: 'Chromite',
    46302: 'Lavish Chromite',
    46303: 'Shimmering Chromite',
    45498: 'Otavite',
    46296: 'Lavish Otavite',
    46297: 'Shimmering Otavite',
    45499: 'Sperrylite',
    46298: 'Lavish Sperrylite',
    46299: 'Shimmering Sperrylite',
    45500: 'Vanadinite',
    46300: 'Lavish Vanadinite',
    46301: 'Shimmering Vanadinite',
    45502: 'Carnotite',
    46304: 'Replete Carnotite',
    46305: 'Glowing Carnotite',
    45506: 'Cinnabar',
    46310: 'Replete Cinnabar',
    46311: 'Glowing Cinnabar',
    45504: 'Pollucite',
    46308: 'Replete Pollucite',
    46309: 'Glowing Pollucite',
    45503: 'Zircon',
    46306: 'Replete Zircon',
    46307: 'Glowing Zircon',
    45512: 'Loparite',
    46316: 'Bountiful Loparite',
    46317: 'Shining Loparite',
    45511: 'Monazite',
    46314: 'Bountiful Monazite',
    46315: 'Shining Monazite',
    45510: 'Xenotime',
    46312: 'Bountiful Xenotime',
    46313: 'Shining Xenotime',
    45513: 'Ytterbite',
    46318: 'Bountiful Ytterbite',
    46319: 'Shining Ytterbite',
};
var OreDetail = [{
        id: 'bitumens',
        names: [MoonOreNames[45492], 'Brimful', 'Glistening'],
        types_raw: [45492, 46284, 46285],
        batch: 100,
        volume: 10,
        materials: {
            hydrocarbons: 65
        },
        minerals: {
            tritanium: 6e3,
            pyerite: 6e3,
            mexallon: 400
        }
    }, {
        id: 'coesite',
        names: [MoonOreNames[45493], 'Brimful', 'Glistening'],
        types_raw: [45493, 46286, 46287],
        batch: 100,
        volume: 10,
        materials: {
            silicates: 65
        },
        minerals: {
            tritanium: 1e4,
            pyerite: 2e3,
            mexallon: 400
        }
    }, {
        id: 'sylvite',
        names: [MoonOreNames[45491], 'Brimful', 'Glistening'],
        types_raw: [45491, 46282, 46283],
        batch: 100,
        volume: 10,
        materials: {
            evaporitedeposits: 65
        },
        minerals: {
            tritanium: 8e3,
            pyerite: 4e3,
            mexallon: 400
        }
    }, {
        id: 'zeolites',
        names: [MoonOreNames[45490], 'Brimful', 'Glistening'],
        types_raw: [45490, 46280, 46281],
        batch: 100,
        volume: 10,
        materials: {
            atmosphericgases: 65
        },
        minerals: {
            tritanium: 4e3,
            pyerite: 8e3,
            mexallon: 400
        }
    }, {
        id: 'cobaltite',
        names: [MoonOreNames[45494], 'Copious', 'Twinkling'],
        types_raw: [45494, 46288, 46289],
        batch: 100,
        volume: 10,
        materials: {
            cobalt: 40
        },
        minerals: {
            tritanium: 7500,
            pyerite: 1e4,
            mexallon: 500
        }
    }, {
        id: 'euxenite',
        names: [MoonOreNames[45495], 'Copious', 'Twinkling'],
        types_raw: [45495, 46290, 46291],
        batch: 100,
        volume: 10,
        materials: {
            scandium: 40
        },
        minerals: {
            tritanium: 1e4,
            pyerite: 7500,
            mexallon: 500
        }
    }, {
        id: 'scheelite',
        names: [MoonOreNames[45497], 'Copious', 'Twinkling'],
        types_raw: [45497, 46294, 46295],
        batch: 100,
        volume: 10,
        materials: {
            tungsten: 40
        },
        minerals: {
            tritanium: 12500,
            pyerite: 5e3,
            mexallon: 500
        }
    }, {
        id: 'titanite',
        names: [MoonOreNames[45496], 'Copious', 'Twinkling'],
        types_raw: [45496, 46292, 46293],
        batch: 100,
        volume: 10,
        materials: {
            titanium: 40
        },
        minerals: {
            tritanium: 15e3,
            pyerite: 2500,
            mexallon: 500
        }
    }, {
        id: 'chromite',
        names: [MoonOreNames[45501], 'Lavish', 'Shimmering'],
        types_raw: [45501, 46302, 46303],
        batch: 100,
        volume: 10,
        materials: {
            chromium: 40,
            hydrocarbons: 10
        },
        minerals: {
            pyerite: 5e3,
            mexallon: 1250,
            isogen: 750,
            nocxium: 50
        }
    }, {
        id: 'otavite',
        names: [MoonOreNames[45498], 'Lavish', 'Shimmering'],
        types_raw: [45498, 46296, 46297],
        batch: 100,
        volume: 10,
        materials: {
            cadmium: 40,
            atmosphericgases: 10
        },
        minerals: {
            tritanium: 5e3,
            mexallon: 1500,
            isogen: 500,
            nocxium: 50
        }
    }, {
        id: 'sperrylite',
        names: [MoonOreNames[45499], 'Lavish', 'Shimmering'],
        types_raw: [45499, 46298, 46299],
        batch: 100,
        volume: 10,
        materials: {
            platinum: 40,
            evaporitedeposits: 10
        },
        minerals: {
            tritanium: 5e3,
            mexallon: 1e3,
            isogen: 1e3,
            zydrine: 50
        }
    }, {
        id: 'vanadinite',
        names: [MoonOreNames[45500], 'Lavish', 'Shimmering'],
        types_raw: [45500, 46300, 46301],
        batch: 100,
        volume: 10,
        materials: {
            vanadium: 40,
            silicates: 10
        },
        minerals: {
            pyerite: 5e3,
            mexallon: 750,
            isogen: 1250,
            zydrine: 50
        }
    }, {
        id: 'carnotite',
        names: [MoonOreNames[45502], 'Replete', 'Glowing'],
        types_raw: [45502, 46304, 46305],
        batch: 100,
        volume: 10,
        materials: {
            technetium: 50,
            cobalt: 10,
            atmosphericgases: 15
        },
        minerals: {
            mexallon: 1e3,
            isogen: 1250,
            zydrine: 50
        }
    }, {
        id: 'cinnabar',
        names: [MoonOreNames[45506], 'Replete', 'Glowing'],
        types_raw: [45506, 46310, 46311],
        batch: 100,
        volume: 10,
        materials: {
            mercury: 50,
            tungsten: 10,
            evaporitedeposits: 15
        },
        minerals: {
            mexallon: 1500,
            isogen: 750,
            megacyte: 50
        }
    }, {
        id: 'pollucite',
        names: [MoonOreNames[45504], 'Replete', 'Glowing'],
        types_raw: [45504, 46308, 46309],
        batch: 100,
        volume: 10,
        materials: {
            caesium: 50,
            scandium: 10,
            hydrocarbons: 15
        },
        minerals: {
            mexallon: 1250,
            isogen: 1e3,
            zydrine: 50
        }
    }, {
        id: 'zircon',
        names: [MoonOreNames[45503], 'Replete', 'Glowing'],
        types_raw: [45503, 46306, 46307],
        batch: 100,
        volume: 10,
        materials: {
            hafnium: 50,
            titanium: 10,
            silicates: 15
        },
        minerals: {
            mexallon: 1750,
            isogen: 500,
            megacyte: 50
        }
    }, {
        id: 'loparite',
        names: [MoonOreNames[45512], 'Bountiful', 'Shining'],
        types_raw: [45512, 46316, 46317],
        batch: 100,
        volume: 10,
        materials: {
            promethium: 22,
            platinum: 10,
            scandium: 20,
            hydrocarbons: 20
        },
        minerals: {
            nocxium: 100,
            zydrine: 200,
            megacyte: 50
        }
    }, {
        id: 'monazite',
        names: [MoonOreNames[45511], 'Bountiful', 'Shining'],
        types_raw: [45511, 46314, 46315],
        batch: 100,
        volume: 10,
        materials: {
            neodymium: 22,
            chromium: 10,
            tungsten: 20,
            evaporitedeposits: 20
        },
        minerals: {
            nocxium: 50,
            zydrine: 150,
            megacyte: 150
        }
    }, {
        id: 'xenotime',
        names: [MoonOreNames[45510], 'Bountiful', 'Shining'],
        types_raw: [45510, 46312, 46313],
        batch: 100,
        volume: 10,
        materials: {
            dysprosium: 22,
            vanadium: 10,
            cobalt: 20,
            atmosphericgases: 20
        },
        minerals: {
            nocxium: 200,
            zydrine: 100,
            megacyte: 50
        }
    }, {
        id: 'ytterbite',
        names: [MoonOreNames[45513], 'Bountiful', 'Shining'],
        types_raw: [45513, 46318, 46319],
        batch: 100,
        volume: 10,
        materials: {
            thulium: 22,
            cadmium: 10,
            titanium: 20,
            silicates: 20
        },
        minerals: {
            nocxium: 50,
            zydrine: 100,
            megacyte: 200
        }
    }];


/***/ }),

/***/ "./src/app/parse/parse.component.css":
/*!*******************************************!*\
  !*** ./src/app/parse/parse.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parse/parse.component.html":
/*!********************************************!*\
  !*** ./src/app/parse/parse.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"bs-component\">\n      <div class=\"card text-white bg-primary mb-3\">\n        <div class=\"card-header\">Mining Ledger</div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <div class=\"form-row\">\n              <div class=\"input-group input-group-sm mb-3\">\n                <textarea ref-textarea [(ngModel)]=\"fieldData\" class=\"form-control\" id=\"input\" rows=\"10\" placeholder=\"Copy Ledger To Clipboard and Paste here...\"></textarea>\n              </div>\n            </div>\n\n            <div class=\"form-row\">\n              <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Refine Rate</span>\n                </div>\n                <input [(ngModel)]=\"refineRate\" type=\"text\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\">\n              </div>\n\n              <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Alliance Tax</span>\n                </div>\n                <input [(ngModel)]=\"allianceTax\" type=\"text\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\">\n              </div>\n\n              <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Corp Tax</span>\n                </div>\n                <input [(ngModel)]=\"corpTax\" type=\"text\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\">\n              </div>\n\n              <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Market Date</span>\n                </div>\n                <select [(ngModel)]=\"selectedDate\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                  <option *ngFor=\"let marketHistory of marketResponse\" [value]=\"marketHistory?.date\">{{marketHistory?.date}}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" (click)=\"parse()\" [disabled]=\"!hasMarketData\" class=\"btn btn-success mb-2 pull-right\">TAX</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-md-8\">\n    <div *ngIf=\"!result\" class=\"jumbotron\">\n      <h2>What is this?</h2>\n      <p>The Moon Tax tool is a way for corporation or alliance directors to easily determine who owes what for mining ledger\n        taxes.\n      </p>\n\n      <h2>How do I use it?</h2>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <p>Step 1: Open up the Moon Ledger in game, select the appropriate moon, range and filters. Click \"Copy to Clipboard\"</p>\n        </li>\n        <li class=\"list-group-item\">\n          <p>\n            Step 2:\n            <kbd>CTRL + V</kbd> into the empty box on the left.</p>\n        </li>\n        <li class=\"list-group-item\">\n          <p>Step 3: Enter in the refine rate, alliance or corporation tax and hit \"Tax\"</p>\n        </li>\n      </ul>\n\n\n    </div>\n\n    <div *ngIf=\"result\" class=\"card text-white bg-secondary mb-3\">\n      <div class=\"card-header\">Result</div>\n      <div class=\"card-body\">\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Total Mined</th>\n              <th scope=\"col\">Alliance Tax</th>\n              <th scope=\"col\">Corp Tax</th>\n              <th scope=\"col\">Total Tax</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"table-dark\">\n              <td>{{totals?.totalMined | number : '1.2-2'}}</td>\n              <td>{{totals?.allianceTax | number : '1.2-2'}}</td>\n              <td>{{totals?.corpTax | number : '1.2-2'}}</td>\n              <td>{{totals?.totalTax | number : '1.2-2'}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"card-body\">\n        <h3>By Pilot</h3>\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th scope=\"col\" class=\"text-left\">Pilot Name</th>\n              <th scope=\"col\" class=\"text-right\">Corporation</th>\n              <th scope=\"col\" class=\"text-right\">Total Mined</th>\n              <th scope=\"col\" class=\"text-right\">Alliance Tax</th>\n              <th scope=\"col\" class=\"text-right\">Corp Tax</th>\n              <th scope=\"col\" class=\"text-right\">Total Tax</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let pilot of pilotResult\" class=\"table-dark text-right\">\n              <td class=\"text-left\">{{pilot?.pilot}}</td>\n              <td class=\"text-left\">{{pilot?.corporation}}</td>\n              <td class=\"text-right\">{{pilot?.totalIskValue | number : '1.2-2'}}</td>\n              <td class=\"text-right\">{{pilot?.allianceTax | number : '1.2-2'}}</td>\n              <td class=\"text-right\">{{pilot?.corporationTax | number : '1.2-2'}}</td>\n              <td class=\"text-right\">{{ pilot?.allianceTax + pilot?.corporationTax | number : '1.2-2'}}</td>\n            </tr>\n\n          </tbody>\n        </table>\n\n        <h3>By Corporation</h3>\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th scope=\"col\" class=\"text-left\">Corporation</th>\n              <th scope=\"col\" class=\"text-right\">Total Mined</th>\n              <th scope=\"col\" class=\"text-right\">Alliance Tax</th>\n              <th scope=\"col\" class=\"text-right\">Corp Tax</th>\n              <th scope=\"col\" class=\"text-right\">Total Tax</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let corp of corpResult\" class=\"table-dark text-right\">\n              <td class=\"text-left\">{{corp?.corporation}}</td>\n              <td class=\"text-right\">{{corp?.totalIskValue | number : '1.2-2'}}</td>\n              <td class=\"text-right\">{{corp?.allianceTax | number : '1.2-2'}}</td>\n              <td class=\"text-right\">{{corp?.corporationTax | number : '1.2-2'}}</td>\n              <td class=\"text-right\">{{ corp?.allianceTax + corp?.corporationTax | number : '1.2-2'}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/parse/parse.component.ts":
/*!******************************************!*\
  !*** ./src/app/parse/parse.component.ts ***!
  \******************************************/
/*! exports provided: ParseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseComponent", function() { return ParseComponent; });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_TaxCalculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TaxCalculator */ "./src/app/services/TaxCalculator.ts");
/* harmony import */ var _services_MarketService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/MarketService */ "./src/app/services/MarketService.ts");
/* harmony import */ var _services_FilterService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/FilterService */ "./src/app/services/FilterService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParseComponent = /** @class */ (function () {
    function ParseComponent(taxService, filterService, marketService) {
        this.taxService = taxService;
        this.filterService = filterService;
        this.marketService = marketService;
        this.header = 'timestamp	corporation	pilot	oreType	quantity	volume	price	typeId	systemId';
        this.refineRate = '0.85';
        this.corpTax = '0.05';
        this.allianceTax = '0.25';
        this.hasMarketData = false;
        this.marketResponse = [];
    }
    ParseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marketService.getPrices().then(function (result) {
            console.log(result);
            _this.marketResponse = result[0].reverse();
            _this.selectedDate = _this.marketResponse[0].date;
            _this.hasMarketData = true;
            console.log(_this.marketResponse);
        }, function (error) {
            // show error;
        });
    };
    ParseComponent.prototype.parse = function () {
        this.taxService.setRates(+this.refineRate, +this.allianceTax, +this.corpTax, this.selectedDate);
        console.log(this.fieldData);
        this.removeHeaderIfItExists();
        var full = this.header + "\n" + this.fieldData;
        var data = xlsx__WEBPACK_IMPORTED_MODULE_0__["read"](full, {
            type: 'string',
        });
        this.result = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].sheet_to_json(data.Sheets[data.SheetNames[0]]);
        console.log(JSON.stringify(this.result));
        this.analyze();
    };
    ParseComponent.prototype.removeHeaderIfItExists = function () {
        if (this.fieldData.includes('SolarSystemID')) {
            console.log('exists');
            this.fieldData = this.fieldData.split('\n').splice(1).join('\n');
        }
    };
    ParseComponent.prototype.analyze = function () {
        var _this = this;
        var result = this.result.map(function (row) {
            return _this.taxService.calculateTax(row);
        });
        console.log(result);
        // console.log('PILOTS');
        var pilots = this.filterService.pilot(result);
        this.pilotResult = pilots;
        console.log(pilots);
        var corps = this.filterService.corporation(result);
        this.corpResult = corps;
        this.totals = this.filterService.totals(result);
        console.log(corps);
    };
    ParseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parse',
            template: __webpack_require__(/*! ./parse.component.html */ "./src/app/parse/parse.component.html"),
            styles: [__webpack_require__(/*! ./parse.component.css */ "./src/app/parse/parse.component.css")]
        }),
        __metadata("design:paramtypes", [_services_TaxCalculator__WEBPACK_IMPORTED_MODULE_2__["TaxCalculator"], _services_FilterService__WEBPACK_IMPORTED_MODULE_4__["FilterService"], _services_MarketService__WEBPACK_IMPORTED_MODULE_3__["MarketService"]])
    ], ParseComponent);
    return ParseComponent;
}());



/***/ }),

/***/ "./src/app/services/FilterService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/FilterService.ts ***!
  \*******************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterService = /** @class */ (function () {
    function FilterService() {
    }
    FilterService.prototype.pilot = function (dataSource) {
        var reduce = this.pilotReducer(dataSource, 'pilot');
        return reduce;
    };
    FilterService.prototype.corporation = function (dataSource) {
        return this.corporationReducer(dataSource);
    };
    FilterService.prototype.totals = function (dataSource) {
        var totalMined = 0;
        var allianceTax = 0;
        var corpTax = 0;
        dataSource.forEach(function (row) {
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
    };
    FilterService.prototype.pilotReducer = function (dataSource, property) {
        var newSource = {};
        dataSource.forEach(function (row) {
            if (newSource[row[property]]) {
                newSource[row[property]].totalIskValue += row.result.totalIskValue;
                newSource[row[property]].corporationTax += row.result.corporationTax;
                newSource[row[property]].allianceTax += row.result.allianceTax;
                newSource[row[property]].materials.concat(row.result.materials);
            }
            else {
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
        var newArray = [];
        for (var key in newSource) {
            if (newSource.hasOwnProperty(key)) {
                newArray.push(newSource[key]);
            }
        }
        return newArray;
    };
    FilterService.prototype.corporationReducer = function (dataSource) {
        var property = 'corporation';
        var newSource = {};
        dataSource.forEach(function (row) {
            if (newSource[row[property]]) {
                newSource[row[property]].totalIskValue += row.result.totalIskValue;
                newSource[row[property]].corporationTax += row.result.corporationTax;
                newSource[row[property]].allianceTax += row.result.allianceTax;
                newSource[row[property]].materials.concat(row.result.materials);
            }
            else {
                newSource[row[property]] = {
                    corporation: row.corporation,
                    totalIskValue: row.result.totalIskValue,
                    corporationTax: row.result.corporationTax,
                    allianceTax: row.result.allianceTax,
                    materials: row.result.materials
                };
            }
        });
        var newArray = [];
        for (var key in newSource) {
            if (newSource.hasOwnProperty(key)) {
                newArray.push(newSource[key]);
            }
        }
        return newArray;
    };
    FilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/services/MarketService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/MarketService.ts ***!
  \*******************************************/
/*! exports provided: MarketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketService", function() { return MarketService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ore */ "./src/app/models/ore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketService = /** @class */ (function () {
    // JSON.parse('{"16633":471.18,"16634":555.1,"16635":1662.73,"16636":1540,"16637":3617.1,"16638":3477.21,"16639":2667.22,"16640":2204.83,"16641":14817.09,"16642":12004,"16643":14770,"16644":25100,"16646":8592.89,"16647":21445.91,"16648":29989,"16649":13748.96,"16650":97634.54,"16651":84449.13,"16652":80450.14,"16653":45397.96}');
    function MarketService(http) {
        this.http = http;
        this.url = 'https://esi.evetech.net/latest/markets/10000002/history/?datasource=tranquility&type_id=';
        this.moonOrePrices = {};
    }
    MarketService.prototype.getPrices = function () {
        var _this = this;
        var promises = [];
        Object.keys(_models_ore__WEBPACK_IMPORTED_MODULE_2__["MoonMaterialNames"]).forEach(function (key) {
            var promise = new Promise(function (resolve, reject) {
                _this.getHistoricalData(+key).subscribe(function (result) {
                    _this.moonOrePrices[key] = result;
                    // console.log(`${MoonMaterialNames[key]}: ${this.moonOrePrices[key]}`);
                    resolve(result);
                }, function (error) {
                    reject(error);
                });
            });
            promises.push(promise);
        });
        return Promise.all(promises);
    };
    MarketService.prototype.getHistoricalData = function (typeId) {
        return this.http.get("" + this.url + typeId);
    };
    MarketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MarketService);
    return MarketService;
}());



/***/ }),

/***/ "./src/app/services/TaxCalculator.ts":
/*!*******************************************!*\
  !*** ./src/app/services/TaxCalculator.ts ***!
  \*******************************************/
/*! exports provided: TaxCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxCalculator", function() { return TaxCalculator; });
/* harmony import */ var _models_ore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ore */ "./src/app/models/ore.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _MarketService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarketService */ "./src/app/services/MarketService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var normalYield = 1;
var mediumYield = 1.15;
var highYield = 2;
var TaxCalculator = /** @class */ (function () {
    function TaxCalculator(market) {
        this.market = market;
    }
    TaxCalculator.prototype.setRates = function (refineRate, allianceTax, corporationTax, selectedDate) {
        this.refineRate = refineRate;
        this.allianceTax = allianceTax;
        this.corporationTax = corporationTax;
        this.selectedDate = selectedDate;
    };
    TaxCalculator.prototype.calculateTax = function (row) {
        // console.log(JSON.stringify(this.market.moonOrePrices));
        if (!this.refineRate || !this.allianceTax || !this.corporationTax) {
            throw Error('Rates not set!');
        }
        if (!this.selectedDate) {
            throw Error('Market Date not set!');
        }
        var oreId = +row.typeId;
        var details = this.getOreDetails(oreId);
        // console.log(details);
        // console.log(row.quantity);
        var materials = this.getRefinedQuantity(oreId, row.quantity, details);
        // console.log(materials);
        var materialPrices = this.getPrices(materials);
        materialPrices = this.addTaxes(materialPrices);
        row['result'] = materialPrices;
        return row;
    };
    TaxCalculator.prototype.addTaxes = function (materialPrices) {
        materialPrices['allianceTax'] = materialPrices.totalIskValue * this.allianceTax;
        materialPrices['corporationTax'] = materialPrices.totalIskValue * this.corporationTax;
        return materialPrices;
    };
    TaxCalculator.prototype.getPrices = function (materials) {
        var _this = this;
        var materialsWithPrices = {
            materials: [],
            totalIskValue: 0
        };
        for (var property in materials) {
            if (materials.hasOwnProperty(property)) {
                var id = this.getKeyByValue(_models_ore__WEBPACK_IMPORTED_MODULE_0__["MoonMaterialLowercaseNames"], property);
                var price = this.market.moonOrePrices[id].filter(function (priceData) {
                    return priceData.date === _this.selectedDate;
                });
                var value = materials[property] * price[0].highest;
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
    };
    TaxCalculator.prototype.getRefinedQuantity = function (oreId, quantity, oreDetail) {
        var index = oreDetail.types_raw.indexOf(oreId);
        var quantityInt = parseInt(quantity.split(',').join(''), 10);
        var baseRefine = Object.assign({}, oreDetail.materials);
        if (index === 0) {
            baseRefine = this.multiplyValues(baseRefine, quantityInt, normalYield);
        }
        else if (index === 1) {
            baseRefine = this.multiplyValues(baseRefine, quantityInt, mediumYield);
        }
        else if (index === 2) {
            baseRefine = this.multiplyValues(baseRefine, quantityInt, highYield);
        }
        return baseRefine;
    };
    TaxCalculator.prototype.multiplyValues = function (materials, quantity, rate) {
        for (var property in materials) {
            if (materials.hasOwnProperty(property)) {
                materials[property] = Math.round(((materials[property] * quantity * rate * this.refineRate) / 100));
            }
        }
        return materials;
    };
    TaxCalculator.prototype.getOreDetails = function (oreId) {
        var result = _models_ore__WEBPACK_IMPORTED_MODULE_0__["OreDetail"].filter(function (ore) {
            return (ore.types_raw.indexOf(oreId) > -1);
        });
        return result[0];
    };
    TaxCalculator.prototype.getKeyByValue = function (object, value) {
        return Object.keys(object).find(function (key) { return object[key] === value; });
    };
    TaxCalculator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_MarketService__WEBPACK_IMPORTED_MODULE_2__["MarketService"]])
    ], TaxCalculator);
    return TaxCalculator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kylesmyth/Documents/Projects/eve-projects/ore-tax/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map