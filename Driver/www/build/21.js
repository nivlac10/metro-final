webpackJsonp([21],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageModule", function() { return CardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardPageModule = (function () {
    function CardPageModule() {
    }
    return CardPageModule;
}());
CardPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__card__["a" /* CardPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__card__["a" /* CardPage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__card__["a" /* CardPage */]
        ]
    })
], CardPageModule);

//# sourceMappingURL=card.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_event__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_language_language__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Injectable } from '@angular/core';




var CardPage = (function () {
    function CardPage(prof, lp, settings, http, eProvider, platform, nav, navParams, loadingCtrl, alertCtrl, formBuilder) {
        this.prof = prof;
        this.lp = lp;
        this.settings = settings;
        this.http = http;
        this.eProvider = eProvider;
        this.platform = platform;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.cardpaymentForm = formBuilder.group({
            card: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(16), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(16), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            cvc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            mm: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            yy: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    CardPage.prototype.AddCard = function () {
        this.RegisterCard(this.cardpaymentForm.value.card, this.cardpaymentForm.value.mm, this.cardpaymentForm.value.yy, this.cardpaymentForm.value.cvc, 100, this.prof.user.email, 2);
    };
    CardPage.prototype.RegisterCard = function (card, month, year, cvc, amount, email, driverPay) {
        var _this = this;
        this.platform.ready().then(function () {
            // Now safe to use device APIs
            window.window.PaystackPlugin.chargeCard(function (resp) {
                console.log(resp);
                console.log(JSON.stringify(resp));
                _this.eProvider.UpdateCard(card, month, year, cvc, amount, email, driverPay).then(function (success) {
                    _this.prof.UpdatePaymentType(2).then(function (suc) {
                        _this.showPayMentAlert('card added', "", true);
                        _this.nav.push('WalletPage');
                    });
                }).catch(function (error) {
                });
                //  });
            }, function (resp) {
                _this.showPayMentAlert(JSON.stringify(resp), resp, false);
            }, {
                cardNumber: card,
                expiryMonth: month,
                expiryYear: year,
                cvc: cvc,
                email: email,
                amountInKobo: amount,
                transactionCharge: driverPay
            });
        });
    };
    CardPage.prototype.getInfo = function (ref) {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('https://api.paystack.co/transaction/verify/' + ref)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    CardPage.prototype.showPayMentAlert = function (title, subtitle, canLeave) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: [{
                    text: 'Accept',
                    role: 'cancel',
                    handler: function () {
                        if (canLeave) {
                            _this.nav.popToRoot();
                        }
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    return CardPage;
}());
CardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])()
    /**
     * Generated class for the CardPage page.
     *
     * See http://ionicframework.com/docs/components/#navigation for more info
     * on Ionic pages and navigation.
     */
    ,
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-card',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/card/card.html"*/'<!--\n  Generated template for the CardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="nav-color">\n    <ion-title>Card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center class="o-scroll" padding>\n  \n   <ion-grid>\n      <ion-row>\n        <ion-col>\n            <img src="data:image/png;base64,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">\n        </ion-col>\n        <ion-col>\n            <img src="data:image/png;base64,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">\n        </ion-col>\n        <ion-col>\n            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAoCAYAAABOzvzpAAALs0lEQVRoQ92ZeXxUVbLHv7e3dBayh0BiwpIAAzHy0MAAT0BEGRQHcJTRJ+OwqE9UwqCiYTFjAEERHg6CBgcIIJssgsMgkCg+eGEMCCMJCJKQhYR0OvvWe3du3/ncRtDQWTqQ+Xye1l/d91bVqfpV3XOq6ggAJpPpOafT+YYgCNHy/18qOZ1OJ1CmUCjSlUrlYm9v7xJBdl6SpL/+Up1uw69KpVI5WDAYDMW/9Mi3AcJGwWg0SrcT/dI6Oxd0Zkpq7dQYHVgd19T5aZV081fTu6uW+EhvumiVHVpGNBkxfZeDrSgfe3kZoqERkBC8vFEHh6CJ6oFv/3i8ont2SO9PmUVRvHpLABisIofO1XP0+wb0DY52DVAIAndGejMuPpD/jPVD/t8iSU4M33xNXcZBTOfOIoliu7rVYeEEjh5L0LgJqAKD2uX/KYPT6RQ7BICtycneM3V8drYWq0PeTzpOEYFqnrm3K0N6+zUTNmafoSItFVtpcceVAgqNhuDxjxI6+Q8otN4e6/AYgMIqG8sP6yirbz/inqw+qp8/s+7vhsZppyLtA+q+OOSJWLs8mq7diHz1Dbz7/KpdXpnBIwBOFhpZcUSPvenWot6aJf39HMw4/wHO4sseGespk6BSEzn7dfzvHd2uSLsAZBUYeedQGU7ptvZKN0N8HCZeOPseXc36do28JQZBIHJ2EgGjHmhTvE0ALuktLNh3FYfYuc7LFnU3lhFuLkOBEx8cTMjfi2S335KvrQkJKhU93nwXn7i7WtXbKgBmu5NZ269QZeicb741C5TCtZ3+obqTjMje0akAyMpUQSHE/GU9yi7+LepuFYCPjldwMKe+0w2SIz/t/IcouJ5VP2aXv62h09eTFQY9+DDdX3jFcwDKGxzM3FqE6Oz81P9d3if0rbnQsjECBFprOx8EQUHs+xvRREa56W4xA9Ydq+Dzc50f/ZY8u/4JXH+Xkr8WzdW8Tgch8P5xRMya2z4ATaLE0xvyMdo698iTV+5VX0CQraaZEQLN17m78SKxun92OgCCVku/tD1uRZJbBmRfNZO8/2qLBgzp7U+wn9r1rqjKQq7ejFopMCYu+AZ/TokRfb2tRfmkU28SbKn23DlBIHTMOFAoqD3+JU5by3o9VRg1bzFdhgxvHoCbm6FtJ6vZ9U3zKMkS5qJT7EuZREREd5eCfafLWfuFjmFSJksXzrmhdNbHuVzUmdxsUjpFEsq/dnuuENz3mYmVRxHqqvlK4UPS4aPYLRZyHn0ApNvLypAJjxM+bWbbACz7vIysAoOboc4Ln3Js21JEUUSpVHLw2wre2ZzBhhcH0ye2D0qV0lUsjV96gqTxkfSPDsHfz4c6o40DOQ3sPlWBAvh9vIIJQ3sR0MWHPL2JtV+WcqXawpAImDLiDqLCg1A5m1yl8ab0L1m47q802e1UnThOdloqCclLMeVeRKNSoY28g8JVb+M/9XmiEn6NRqvFWJRPeVoqjdln3HzwG5RAdPI7bQMwZ2cxBVVWN+Ge+v2kvb+Ec+cvcFd8HBnnqti9eR0bViVz9mwOgwYNpEhXzUsLV7L8lSnodKWoVWpG3jcKtVrNM+svcH+ojimPjqUgP5/Lly8z7qGHKKkyMWflJ+xZNs0F7InME9hsVqLPZpEhePPS3LkYjUbKjh5hf2YWSSv/50YQvv50N3FjxhIQGIhOp6Ncr+eehAScDgcXnp+CVdf8U5ZPgdg1m9oG4PmPC90bHkniQeX/Mj9pLlv2HGHq5HF8lV0KtXmMGDGSbdt3Mn3a06SfKWbR5mMEBAYxoFc4yoYipv0mngFxcby2ej/LEye6Tv/E1K+pLMhmZeIj9OzVkxdeeYPUVW9httqYlfoPYi4eYmhRJtY5yYx/5BGOvrsMzRcHyHtsGs/MnElFeTl/mT2LYZOfYMLkyVSU6Tgy/UmOV9Twpy07GThwIKUbP0S/e2szZ1XBIfTdsKvjAIimGl6+28ik3z3Ky+9u573Xp1BYUkbv6AgOZp5H0VDCw4+M58OMYhy1xbz42HDUahWSJCH80Pv/+e01LJ6f6JZZNruDUROfZeOK14i7807X+yvnczk2eyojNmwnJiaG7+c8R35ODgEpKxg5ahS5G1PJ2ryBYet30O9X/bi0YwuGLesosjromrKC+0aPpmznZnSbP2q2njokjD7rd7YNwCu7irlc0fwTsBT/ky0vj6Jvv748+ML7HFn7kitdZfrjkj0s/sNgVyQXrtnL0sTHqays5r8XbcRYlsuX+9NoMFpIWbSU91a8Rc6FXFal/hgZVfQQrpj8aPhmK6PjQpm/YD7BwcHsmfcqjy1b4QLw20ljyKqq44m/ZRAWFsbFxBkcOf0tE7ftJSY2lrJdW9GlfcglwYvffvIZgYGBFL67mJqjh5s56xXVk5jVG9oGYPnhMk5cbr4JWr/7G5kf/5mqOgMTk7aQsWoaAQEBnLlYzMvL0sjctsildOafFrBu9TKq602s/qKMh6INDP/13ZzJ1TPv9STSP92EJAjs/qaSqzU2AtR2GqxOuvh6Y7SK2KvyeXZcPN26d2NTSjLTU5a4skj/ycekbd/BGwfTER0Ozk66n5wGMz4vvsp/PfUUdqOBst3bEYeNJKb/ABpqaih49glEc/PTqMvgYUTNX9I2ALtP17A1q/lZ3a1kHztS3yLzXAmvp6bzafJ4IiIiWLDrEroTO9iyZjGlFXVMejqRLavm3UjlM6dPkzB4MPtOXmXFxgMM980nOeVNV4Su05KPPiNp+sNoNBrXI3ly/W36YTYsWcRbBw4RGhrqer505nMsXLeeqrxLXEmcjtxCLW8QSf4glbvvueeGvvy8PPQrF3NHv/6uk8BeWX7jXejjT9H1qRltAyC3wK/tKWnGZP3u73hhQRs/CVN9LULxMbRdY2nqnoDl/AG8sKKNHYnZqcV0bh9RYf5YfKJoqKtFK5nwHjgZa5OEreIS9isniQhQ4eXjR6MqDIOoQVV1gUA/NWovH0TJj3lFn6F3NHHEJhAe3YM4Sz0Xq+uwabSM8dMQYLe47DOKTtIbLJi7RhAUGoq/oZ7/MFTjrxBcIzLnTe11j5QV+N41qG0A5LnH9E0F1Bib3Das230wqOI0w3XHmhtwk9IAyYK/oeJ2l3KTV/oHuE4AeUbwU2qxGWqtGrxdq4Jstcw9tQil1Pq0V+jkydN1m1uqAuV3LQLQaBWZsakQ2y1OfjsC1E+7wSHGi0w6va4j4h7xCmo1fVK3IdcBN1OrA5GWNkOPVvOAKcpQjEa8Nv5S/DARkn8/o9uHUKnzQEPHWLpMehLN2N8S3i3ccwDktnjunhIKKt3L4o4t7849XHeciZd3364aj+TlmyPfuSlcuVrK0GFDPQdA5pQnQ3JhJN8EdTbJm6E8GZZHY30N+UTVdO5o3JVdPr70Xr62xUnQdX/aHYvnlltI3l+K5d+0H8SZC5ia/QGS/fZ6/ZsDpPDSEp38Nj4D4tuMXbsAyNLyZ7DogI46c+cejYN7+fHHwu2Yj2d0aoLJR55c8fn0G9CuXo8AkLXUm5tYlVHO2RL3YUe7q9zEoFIIPDkkhN8PDkHulWoO7KVqR5pb4dJRvTK/fAcQOWcB6pBrFWR75DEA1xX9X56BbVlVHt0Kt7R4Qk8/ZtwbRlTwtdL3Otn1Oiq3rqfx1D/gFmoB+ZY47MmpBN73IC5UPSShsbGxSaFQdOjyXp78nCw08dX3DWSXmJFvjduiYF8VQ3v7ua7He4V6tckr3w7XZXyOISsTR01V29+vWo1v/CCX012GjUT4oUP10He573DIGVAoD2w9FbqZT742y6+0UlJjo8YkYraLyPj7eSkJD1ATE6Z1i7ana9nLSrEWXMZeoUc0NiI5nSh9fF23PV5RPdDG9nPV/LdKgiAUyACsBmbfqpKfudx78icQqlQqsyRJiv2ZO9NR8/NEURzm2i1qa2sDvLy8EiVJGisIQoQois1bpo6q/n/Kr1QqmyRJ0gmCkG42m9eEhYUZ/gVQ8TL6UX2/IAAAAABJRU5ErkJggg==">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-label text-center>\n        \n       </ion-label>\n   \n    <form id=\'myFomr\' [formGroup]="cardpaymentForm" (submit)="AddCard()" novalidate>\n          \n        \n         \n              <ion-label color=\'primary\' stacked>Number on Card</ion-label>\n              <ion-input id=\'tezt\'  formControlName="card" type="number" placeholder="Card Number" \n                [class.invalid]="!cardpaymentForm.controls.card.valid && cardpaymentForm.controls.card.dirty"></ion-input>\n         \n\n            <ion-grid>\n                <ion-row>\n                  <ion-col>\n\n           \n              <ion-label color=\'primary\' stacked>cvc</ion-label>\n              <ion-input no-lines formControlName="cvc" type="number" placeholder="CVC" \n                [class.invalid]="!cardpaymentForm.controls.cvc.valid && cardpaymentForm.controls.cvc.dirty"></ion-input>\n           \n\n          </ion-col>\n\n                          <ion-col>\n              \n                       \n                            <ion-label color=\'primary\' stacked>month</ion-label>\n                            <ion-input no-lines formControlName="mm" type="number" placeholder="MM" \n                              [class.invalid]="!cardpaymentForm.controls.mm.valid && cardpaymentForm.controls.mm.dirty"></ion-input>\n                        \n              \n                        </ion-col>\n\n                        <ion-col>\n                            \n                                       \n                                          <ion-label color=\'primary\' stacked>year</ion-label>\n                                          <ion-input no-lines formControlName="yy" type="number" placeholder="YY" \n                                            [class.invalid]="!cardpaymentForm.controls.yy.valid && cardpaymentForm.controls.yy.dirty"></ion-input>\n                                        \n                            \n                                      </ion-col>\n        </ion-row>\n      </ion-grid>\n          \n            <button class=\'button\' ion-button block type="submit" [disabled]="!cardpaymentForm.valid">\n                Add This Card\n            </button>\n        \n          </form>\n\n          <!-- <button class=\'button\' color=\'mColor\' [disabled]=\'false\' ion-button block (click)=\'scanCard()\'>\n            <ion-icon color=\'nav-color\' name=\'camera\' padding></ion-icon>\n            {{lp.translate()[0].scan}}\n          </button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/card/card.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], CardPage);

//# sourceMappingURL=card.js.map

/***/ })

});
//# sourceMappingURL=21.js.map