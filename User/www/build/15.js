webpackJsonp([15],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEntrancePageModule", function() { return LoginEntrancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_entrance__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginEntrancePageModule = (function () {
    function LoginEntrancePageModule() {
    }
    return LoginEntrancePageModule;
}());
LoginEntrancePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_entrance__["a" /* LoginEntrancePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_entrance__["a" /* LoginEntrancePage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__login_entrance__["a" /* LoginEntrancePage */]
        ]
    })
], LoginEntrancePageModule);

//# sourceMappingURL=login-entrance.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginEntrancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(57);
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
 * Generated class for the LoginEntrancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginEntrancePage = (function () {
    function LoginEntrancePage(navCtrl, settings, load, navParams) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.load = load;
        this.navParams = navParams;
    }
    LoginEntrancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartupPage');
        this.presentRouteLoader();
    };
    LoginEntrancePage.prototype.presentRouteLoader = function () {
        var _this = this;
        var myTimeout = setTimeout(function () {
            _this.navCtrl.setRoot('LoginPage');
            clearTimeout(myTimeout);
        }, 2500);
    };
    return LoginEntrancePage;
}());
LoginEntrancePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login-entrance',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/login-entrance/login-entrance.html"*/'<ion-content>\n  \n  <div id="custom-overlay"></div>\n  <h2 id=\'taxi-logo\'>\n          <strong>{{settings.appName}}&#8482;</strong>\n  </h2>\n </ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/User/src/pages/login-entrance/login-entrance.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], LoginEntrancePage);

//# sourceMappingURL=login-entrance.js.map

/***/ })

});
//# sourceMappingURL=15.js.map