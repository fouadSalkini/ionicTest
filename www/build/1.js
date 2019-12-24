webpackJsonp([1],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowBrandsModule", function() { return ShowBrandsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brands_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_component__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ShowBrandsModule = /** @class */ (function () {
    function ShowBrandsModule() {
    }
    ShowBrandsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__show_component__["a" /* ShowBrands */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__show_component__["a" /* ShowBrands */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__show_component__["a" /* ShowBrands */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__brands_service__["a" /* BrandsService */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            ]
        })
    ], ShowBrandsModule);
    return ShowBrandsModule;
}());

//# sourceMappingURL=show.component.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Call Number
 * @description
 * Call a number directly from your Cordova/Ionic application.
 * **NOTE**: The iOS Simulator (and maybe Android Simulators) do not provide access to the phone subsystem.
 *
 * @usage
 * ```typescript
 * import { CallNumber } from '@ionic-native/call-number';
 *
 * constructor(private callNumber: CallNumber) { }
 *
 * ...
 *
 *
 * this.callNumber.callNumber("18001010101", true)
 *   .then(res => console.log('Launched dialer!', res))
 *   .catch(err => console.log('Error launching dialer', err));
 *
 * ```
 */
var CallNumber = (function (_super) {
    __extends(CallNumber, _super);
    function CallNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Calls a phone number
     * @param {string} numberToCall The phone number to call as a string
     * @param {boolean} bypassAppChooser Set to true to bypass the app chooser and go directly to dialer
     * @return {Promise<any>}
     */
    /**
       * Calls a phone number
       * @param {string} numberToCall The phone number to call as a string
       * @param {boolean} bypassAppChooser Set to true to bypass the app chooser and go directly to dialer
       * @return {Promise<any>}
       */
    CallNumber.prototype.callNumber = /**
       * Calls a phone number
       * @param {string} numberToCall The phone number to call as a string
       * @param {boolean} bypassAppChooser Set to true to bypass the app chooser and go directly to dialer
       * @return {Promise<any>}
       */
    function (numberToCall, bypassAppChooser) {
        return;
    };
    /**
     * Check if call feature is available
     * @return {Promise<any>}
     */
    /**
       * Check if call feature is available
       * @return {Promise<any>}
       */
    CallNumber.prototype.isCallSupported = /**
       * Check if call feature is available
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    CallNumber.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Boolean]),
        __metadata("design:returntype", Promise)
    ], CallNumber.prototype, "callNumber", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CallNumber.prototype, "isCallSupported", null);
    /**
     * @name Call Number
     * @description
     * Call a number directly from your Cordova/Ionic application.
     * **NOTE**: The iOS Simulator (and maybe Android Simulators) do not provide access to the phone subsystem.
     *
     * @usage
     * ```typescript
     * import { CallNumber } from '@ionic-native/call-number';
     *
     * constructor(private callNumber: CallNumber) { }
     *
     * ...
     *
     *
     * this.callNumber.callNumber("18001010101", true)
     *   .then(res => console.log('Launched dialer!', res))
     *   .catch(err => console.log('Error launching dialer', err));
     *
     * ```
     */
    CallNumber = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'CallNumber',
            plugin: 'call-number',
            pluginRef: 'plugins.CallNumber',
            repo: 'https://github.com/Rohfosho/CordovaCallNumberPlugin',
            platforms: ['Android', 'iOS']
        })
    ], CallNumber);
    return CallNumber;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowBrands; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brands_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__functions_global_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowBrands = /** @class */ (function () {
    function ShowBrands(navCtrl, navParams, callNumber, loadingCtrl, globalFunctions, brandsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.loadingCtrl = loadingCtrl;
        this.globalFunctions = globalFunctions;
        this.brandsService = brandsService;
        this.showEntity(navParams.get("id"));
    }
    ShowBrands.prototype.showEntity = function (id) {
        var _this = this;
        var loader = this.globalFunctions.presentLoading(this.loadingCtrl, 1000);
        loader.present();
        this.brandsService.showEntity(id)
            .subscribe(function (data) {
            _this.entity = data;
            loader.dismiss();
        }, function (err) {
            console.log("Error in Members Show!");
        });
    };
    ;
    ShowBrands.prototype.executeCallNumber = function (event, phoneNumber) {
        this.callNumber.callNumber(phoneNumber, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ShowBrands = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'brands-show',template:/*ion-inline-start:"/Users/macos/Documents/ionic/testApp/src/pages/brands/show.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!entity">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title *ngIf="entity">{{entity.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="inner-pages-bg">\n\n  <div *ngIf="entity">\n    <ion-list>\n      <ion-item >\n        <ion-icon color="primary" name="md-person" class="showmemberspadding"> </ion-icon>\n        <b>\n          {{entity.name}}\n        </b>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n<ion-footer no-border>\n  <ion-toolbar>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/Users/macos/Documents/ionic/testApp/src/pages/brands/show.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__functions_global_service__["a" /* GlobalFunctions */],
            __WEBPACK_IMPORTED_MODULE_3__brands_service__["a" /* BrandsService */]])
    ], ShowBrands);
    return ShowBrands;
}());

//# sourceMappingURL=show.component.js.map

/***/ })

});
//# sourceMappingURL=1.js.map