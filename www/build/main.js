webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_global_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BrandsService = /** @class */ (function () {
    function BrandsService(http, globalFunctions) {
        this.http = http;
        this.globalFunctions = globalFunctions;
        this.apiUrl = globalFunctions.getAPIUrl();
    }
    BrandsService.prototype.buildRouteParams = function (routePath, page) {
        var routeParams = "page=" + page;
        return routePath + "?" + routeParams;
    };
    BrandsService.prototype.loadEntities = function (page) {
        var routePath = "brands/list.php";
        var routeParams = this.buildRouteParams(routePath, page);
        return this.http.get(this.apiUrl + routeParams)
            .map(this.extractEntitiesData)
            .catch(this.handleError);
    };
    BrandsService.prototype.showEntity = function (id) {
        return this.http.get(this.apiUrl + "brands/show.php?id=" + id)
            .map(this.extractEntityData)
            .catch(this.handleError);
    };
    BrandsService.prototype.extractEntitiesData = function (res) {
        var entities = res.json();
        return entities || {};
    };
    BrandsService.prototype.extractEntityData = function (res) {
        var entity = res.json().data;
        return entity || {};
    };
    BrandsService.prototype.handleError = function (error) {
        var errMsg = this.globalFunctions.handleError(error, this.entities.error, this.entities);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    BrandsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__functions_global_service__["a" /* GlobalFunctions */]])
    ], BrandsService);
    return BrandsService;
}());

//# sourceMappingURL=brands.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_global_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CarsService = /** @class */ (function () {
    function CarsService(http, globalFunctions) {
        this.http = http;
        this.globalFunctions = globalFunctions;
        this.apiUrl = globalFunctions.getAPIUrl();
    }
    CarsService.prototype.buildRouteParams = function (routePath, page, id) {
        var routeParams = "id=" + id + "&page=" + page;
        return routePath + "?" + routeParams;
    };
    CarsService.prototype.loadEntities = function (page, id) {
        var routePath = "cars/list.php";
        var routeParams = this.buildRouteParams(routePath, page, id);
        return this.http.get(this.apiUrl + routeParams)
            .map(this.extractEntitiesData)
            .catch(this.handleError);
    };
    CarsService.prototype.showEntity = function (id) {
        return this.http.get(this.apiUrl + "cars/show.php?id=" + id)
            .map(this.extractEntityData)
            .catch(this.handleError);
    };
    CarsService.prototype.extractEntitiesData = function (res) {
        var entities = res.json();
        return entities || {};
    };
    CarsService.prototype.extractEntityData = function (res) {
        var entity = res.json().data;
        return entity || {};
    };
    CarsService.prototype.handleError = function (error) {
        var errMsg = this.globalFunctions.handleError(error, this.entities.error, this.entities);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    CarsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__functions_global_service__["a" /* GlobalFunctions */]])
    ], CarsService);
    return CarsService;
}());

//# sourceMappingURL=cars.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/brands/list.component.module": [
		157
	],
	"../pages/brands/show.component.module": [
		283,
		1
	],
	"../pages/cars/list.component.module": [
		163
	],
	"../pages/cars/show.component.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBrandsModule", function() { return ListBrandsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brands_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_select_searchable__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ListBrandsModule = /** @class */ (function () {
    function ListBrandsModule() {
    }
    ListBrandsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__list_component__["a" /* ListBrands */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__list_component__["a" /* ListBrands */]),
                __WEBPACK_IMPORTED_MODULE_5_ionic_select_searchable__["SelectSearchableModule"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__list_component__["a" /* ListBrands */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__brands_service__["a" /* BrandsService */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
            ]
        })
    ], ListBrandsModule);
    return ListBrandsModule;
}());

//# sourceMappingURL=list.component.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListBrands; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brands_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_global_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListBrands = /** @class */ (function () {
    function ListBrands(navCtrl, navParams, loadingCtrl, brandsService, globalFunctions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.brandsService = brandsService;
        this.globalFunctions = globalFunctions;
        this.icons = "brands";
        this.page = this.getCurrentPage();
        // this.nextPage = this.findNextPage(); 
    }
    ListBrands.prototype.loadEntities = function () {
        var _this = this;
        this.page = this.getCurrentPage();
        this.nextPage = this.page;
        var loader = this.globalFunctions.presentLoading(this.loadingCtrl, 1000);
        loader.present();
        this.brandsService.loadEntities(this.nextPage)
            .subscribe(function (data) {
            _this.obj = data;
            _this.entities = _this.obj.data;
            _this.totalItems = _this.obj.totalItems;
            _this.pagination = _this.obj.pagination;
            if (_this.totalItems == 0) {
            }
            _this.nextPage = _this.getCurrentPage() + 1;
            loader.dismiss();
        }, function (err) {
            console.log("Error in Brands list!");
        });
    };
    ;
    ListBrands.prototype.goToNextPage = function (event, nextPage) {
        this.page = this.getCurrentPage();
        // this.loadEntities(nextPage, this.searchModel);
        this.nextPage = this.page + 1;
        this.navCtrl.push('list-members', {
            'page': this.nextPage
        });
    };
    ListBrands.prototype.showEntity = function (event, id) {
        this.navCtrl.push('list-cars', {
            'id': id
        });
    };
    ListBrands.prototype.getCurrentPage = function () {
        this.page = parseInt(this.navParams.get("page"));
        if (!this.page || this.page < 1)
            this.page = 1;
        return this.page;
    };
    ListBrands.prototype.findNextPage = function () {
    };
    ListBrands.prototype.ngAfterViewInit = function () {
        this.loadEntities();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"])
    ], ListBrands.prototype, "navBar", void 0);
    ListBrands = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'brands-list',template:/*ion-inline-start:"/Users/macos/Documents/ionic/testApp/src/pages/brands/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle  >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Brands List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="inner-pages-bg">\n  <div *ngIf="totalItems">\n    <ion-list>\n      <button ion-item *ngFor="let entity of entities" (click)="showEntity($event,entity.id)">\n        <ion-icon color="primary" name="nuclear"></ion-icon>\n\n        {{entity.name}}\n      </button>\n    </ion-list>\n    \n    <p *ngIf="page< pagination" text-center>\n      <button ion-button color="primary" (click)="goToNextPage($event,nextPage)">\n          \n        <ion-icon name="md-add-circle"></ion-icon>\n      </button>\n    </p>\n  </div>\n  <div *ngIf="!totalItems">\n    <p style="color: #FF0000">\n      There are no results that match your search.\n    </p>\n  </div>\n\n\n</ion-content>\n<div class="sticky-deco-top"></div>\n'/*ion-inline-end:"/Users/macos/Documents/ionic/testApp/src/pages/brands/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__brands_service__["a" /* BrandsService */],
            __WEBPACK_IMPORTED_MODULE_3__functions_global_service__["a" /* GlobalFunctions */]])
    ], ListBrands);
    return ListBrands;
}());

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCarsModule", function() { return ListCarsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cars_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_select_searchable__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ListCarsModule = /** @class */ (function () {
    function ListCarsModule() {
    }
    ListCarsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__list_component__["a" /* ListCars */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__list_component__["a" /* ListCars */]),
                __WEBPACK_IMPORTED_MODULE_5_ionic_select_searchable__["SelectSearchableModule"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__list_component__["a" /* ListCars */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__cars_service__["a" /* CarsService */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
            ]
        })
    ], ListCarsModule);
    return ListCarsModule;
}());

//# sourceMappingURL=list.component.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cars_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_global_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListCars = /** @class */ (function () {
    function ListCars(navCtrl, navParams, loadingCtrl, carsService, globalFunctions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.carsService = carsService;
        this.globalFunctions = globalFunctions;
        this.navPar = navParams;
        this.icons = "cars";
        this.page = this.getCurrentPage();
        // this.nextPage = this.findNextPage(); 
    }
    ListCars.prototype.loadEntities = function (id) {
        var _this = this;
        this.page = this.getCurrentPage();
        this.nextPage = this.page;
        var loader = this.globalFunctions.presentLoading(this.loadingCtrl, 1000);
        loader.present();
        this.carsService.loadEntities(this.nextPage, id)
            .subscribe(function (data) {
            _this.obj = data;
            _this.entities = _this.obj.data;
            _this.totalItems = _this.obj.totalItems;
            _this.pagination = _this.obj.pagination;
            _this.brand = _this.obj.brand;
            if (_this.totalItems == 0) {
            }
            _this.nextPage = _this.getCurrentPage() + 1;
            loader.dismiss();
        }, function (err) {
            console.log("Error in Cars list!");
        });
    };
    ;
    ListCars.prototype.goToNextPage = function (event, nextPage) {
        this.page = this.getCurrentPage();
        // this.loadEntities(nextPage, this.searchModel);
        this.nextPage = this.page + 1;
        this.navCtrl.push('list-members', {
            'page': this.nextPage
        });
    };
    ListCars.prototype.showEntity = function (event, id) {
        this.navCtrl.push('show-cars', {
            'id': id
        });
    };
    ListCars.prototype.getCurrentPage = function () {
        this.page = parseInt(this.navParams.get("page"));
        if (!this.page || this.page < 1)
            this.page = 1;
        return this.page;
    };
    ListCars.prototype.findNextPage = function () {
    };
    ListCars.prototype.ngAfterViewInit = function () {
        this.loadEntities(this.navParams.get("id"));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"])
    ], ListCars.prototype, "navBar", void 0);
    ListCars = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cars-list',template:/*ion-inline-start:"/Users/macos/Documents/ionic/testApp/src/pages/cars/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle  >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{brand}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="inner-pages-bg">\n  <div *ngIf="totalItems">\n    <ion-list>\n      <button ion-item *ngFor="let entity of entities" (click)="showEntity($event,entity.id)">\n        <ion-icon color="primary" name="car"></ion-icon>\n\n        {{entity.name}}\n      </button>\n    </ion-list>\n    \n    <p *ngIf="page< pagination" text-center>\n      <button ion-button color="primary" (click)="goToNextPage($event,nextPage)">\n          \n        <ion-icon name="md-add-circle"></ion-icon>\n      </button>\n    </p>\n  </div>\n  <div *ngIf="!totalItems">\n    <p style="color: #FF0000">\n      There are no results that match your search.\n    </p>\n  </div>\n\n\n</ion-content>\n<div class="sticky-deco-top"></div>\n'/*ion-inline-end:"/Users/macos/Documents/ionic/testApp/src/pages/cars/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__cars_service__["a" /* CarsService */],
            __WEBPACK_IMPORTED_MODULE_3__functions_global_service__["a" /* GlobalFunctions */]])
    ], ListCars);
    return ListCars;
}());

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sim__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_select_searchable__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__functions_global_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_brands_list_component_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cars_list_component_module__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//
//

//


//
//
//
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/brands/list.component.module#ListBrandsModule', name: 'list-brands', segment: 'brands/list/:page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cars/list.component.module#ListCarsModule', name: 'list-cars', segment: 'cars/list/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/brands/show.component.module#ShowBrandsModule', name: 'show-brands', segment: 'brands/show/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cars/show.component.module#ShowCarsModule', name: 'show-cars', segment: 'cars/show/:id', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_select_searchable__["SelectSearchableModule"],
                //
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_brands_list_component_module__["ListBrandsModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_cars_list_component_module__["ListCarsModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_sim__["a" /* Sim */],
                __WEBPACK_IMPORTED_MODULE_11__functions_global_service__["a" /* GlobalFunctions */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_brands_list_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_cars_list_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, alertCtrl, statusBar, splashScreen, 
        //When the app's open, we'll show them as Toasts, but feel free to use an Alert instead
        toastCtrl) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toastCtrl = toastCtrl;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_brands_list_component__["a" /* ListBrands */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Home', icon: "ios-people", component: __WEBPACK_IMPORTED_MODULE_2__pages_brands_list_component__["a" /* ListBrands */] },
            { title: 'cars', icon: "ios-car", component: __WEBPACK_IMPORTED_MODULE_3__pages_cars_list_component__["a" /* ListCars */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        //this.pushService.initPush(this.platformName);
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.platform.is("ios") || _this.platform.is("android")) {
                if (_this.platform.is("ios")) {
                    _this.platformName = "ios";
                }
                if (_this.platform.is("android")) {
                    _this.platformName = "android";
                }
            }
            _this.statusBar.styleDefault();
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 1000);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // navigate to the new page if it is not the current page
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/macos/Documents/ionic/testApp/src/app/app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n'/*ion-inline-end:"/Users/macos/Documents/ionic/testApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalFunctions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalFunctions = /** @class */ (function () {
    function GlobalFunctions(platform) {
        this.platform = platform;
    }
    GlobalFunctions.prototype.checkPlatform = function () {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.isApp = false;
        }
        else {
            if (this.platform.versions().android) {
                this.isApp = "android";
            }
            else {
                this.isApp = "ios";
            }
        }
        console.log(this.isApp);
        //return "android";
        return this.isApp;
    };
    GlobalFunctions.prototype.getApiKey = function () {
        //return "123";
        return localStorage.getItem("apiKey");
    };
    GlobalFunctions.prototype.setApiKey = function (apiKey) {
        localStorage.setItem("apiKey", apiKey);
    };
    GlobalFunctions.prototype.getDeviceUUID = function () {
        return localStorage.getItem("uuid");
    };
    GlobalFunctions.prototype.setDeviceUUID = function (uuid) {
        localStorage.setItem("uuid", uuid);
    };
    GlobalFunctions.prototype.getAPIUrl = function () {
        //this.apiURL = "http://192.168.0.15:8000/api/";
        this.apiURL = "https://fouadsalkini.com/ionic/testApp/api/";
        return this.apiURL;
    };
    GlobalFunctions.prototype.presentLoading = function (loadingCtrl, duration) {
        var loader = loadingCtrl.create({
            content: "Please wait...",
            enableBackdropDismiss: true,
        });
        return loader;
    };
    GlobalFunctions.prototype.handleError = function (error, body_error, body) {
        var errMsg;
        if (error instanceof Response) {
            var body_1 = error.json() || '';
            var err = body_error || JSON.stringify(body_1);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return errMsg;
    };
    GlobalFunctions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
    ], GlobalFunctions);
    return GlobalFunctions;
}());

//# sourceMappingURL=global.service.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map