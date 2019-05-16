webpackJsonp([23],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addphoto3PageModule", function() { return Addphoto3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addphoto3__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Addphoto3PageModule = (function () {
    function Addphoto3PageModule() {
    }
    return Addphoto3PageModule;
}());
Addphoto3PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__addphoto3__["a" /* Addphoto3Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addphoto3__["a" /* Addphoto3Page */]),
        ],
    })
], Addphoto3PageModule);

//# sourceMappingURL=addphoto3.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Addphoto3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__ = __webpack_require__(155);
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










/**
 * Generated class for the Addphoto3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Addphoto3Page = (function () {
    function Addphoto3Page(navCtrl, http, lp, settings, actionSheetCtrl, pop, ph, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.actionSheetCtrl = actionSheetCtrl;
        this.pop = pop;
        this.ph = ph;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.completed = false;
        this.profileUploaded = false;
        this.licenceUploaded = false;
        this.NidUploaded = false;
        this.http = http;
    }
    Addphoto3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Addphoto3Page');
    };
    Addphoto3Page.prototype.Next = function () {
        if (this.NidUploaded) {
            this.navCtrl.setRoot('WaitingPage');
            //this.send(this.lp.translate()[0].b3, this.lp.translate()[0].b4 + this.settings.appDashboard, 'chndth@gmail.com')
        }
        else {
            this.pop.showAlertNormal(this.lp.translate()[0].b5, "", false);
        }
    };
    Addphoto3Page.prototype.choosePic_1 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: this.lp.translate()[0].b6,
            buttons: [
                {
                    text: this.lp.translate()[0].b7,
                    icon: 'ios-camera',
                    handler: function () {
                        _this.capture();
                    }
                }, {
                    text: this.lp.translate()[0].b8,
                    icon: 'ios-folder',
                    handler: function () {
                        _this.captureFromFile();
                    }
                }, {
                    text: this.lp.translate()[0].b9,
                    icon: 'close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Addphoto3Page.prototype.capture = function () {
        var _this = this;
        var cameraOptions = {
            quality: 4,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            _this.processProfilePicture(_this.captureDataUrl);
        }, function (err) {
            // Handle error
        });
    };
    Addphoto3Page.prototype.captureFromFile = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 20,
            encodingType: this.camera.EncodingType.PNG,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            _this.processProfilePicture(_this.captureDataUrl);
        });
    };
    Addphoto3Page.prototype.choosePic_2 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: this.lp.translate()[0].b6,
            buttons: [
                {
                    text: this.lp.translate()[0].b7,
                    icon: 'ios-camera',
                    handler: function () {
                        _this.capture2();
                    }
                }, {
                    text: this.lp.translate()[0].b8,
                    icon: 'ios-folder',
                    handler: function () {
                        _this.capture2FromFile();
                    }
                }, {
                    text: this.lp.translate()[0].b9,
                    icon: 'close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Addphoto3Page.prototype.choosePic_3 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: this.lp.translate()[0].b6,
            buttons: [
                {
                    text: this.lp.translate()[0].b7,
                    icon: 'ios-camera',
                    handler: function () {
                        _this.capture3();
                    }
                }, {
                    text: this.lp.translate()[0].b8,
                    icon: 'ios-folder',
                    handler: function () {
                        _this.capture3FromFile();
                    }
                }, {
                    text: this.lp.translate()[0].b9,
                    icon: 'close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Addphoto3Page.prototype.capture2 = function () {
        var _this = this;
        var cameraOptions = {
            quality: 12,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl2 = 'data:image/jpeg;base64,' + imageData;
            _this.processLicensePicture(_this.captureDataUrl2);
        }, function (err) {
            // Handle error
        });
    };
    Addphoto3Page.prototype.capture2FromFile = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 20,
            encodingType: this.camera.EncodingType.PNG,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl2 = 'data:image/jpeg;base64,' + imageData;
            _this.processLicensePicture(_this.captureDataUrl2);
        });
    };
    Addphoto3Page.prototype.capture3 = function () {
        var _this = this;
        var cameraOptions = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl3 = 'data:image/jpeg;base64,' + imageData;
            _this.processNidPicture(_this.captureDataUrl3);
        }, function (err) {
            // Handle error
        });
    };
    Addphoto3Page.prototype.capture3FromFile = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 20,
            encodingType: this.camera.EncodingType.PNG,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl3 = 'data:image/jpeg;base64,' + imageData;
            _this.processNidPicture(_this.captureDataUrl3);
        });
    };
    Addphoto3Page.prototype.processProfilePicture = function (captureData) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]().ref();
        // Create a timestamp as filename
        var filename = Math.floor(Date.now() / 1000);
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("driverPictures/" + filename + ".jpg");
        imageRef.putString(captureData, __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
            imageRef.getDownloadURL().then(function (url) {
                console.log(url);
                _this.ph.UpdatePPhotoInfo(url).then(function (success) {
                    console.log(url);
                    _this.loading.dismiss();
                    console.log("done");
                    _this.profileUploaded = true;
                }).catch(function (error) { alert('error couldnt do what you asked'); });
            }).catch(function (error) { alert('error couldnt do what you asked'); });
        }).catch(function (error) { alert('error couldnt do what you asked'); });
    };
    Addphoto3Page.prototype.processLicensePicture = function (captureData) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]().ref();
        // Create a timestamp as filename
        var filename = Math.floor(Date.now() / 1000);
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("driverPictures/" + filename + ".jpg");
        imageRef.putString(captureData, __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
            imageRef.getDownloadURL().then(function (url) {
                _this.ph.UpdateLPhotoInfo(url).then(function (success) {
                    _this.loading.dismiss();
                    _this.licenceUploaded = true;
                }).catch(function (error) { alert('error couldnt do what you asked'); });
            }).catch(function (error) { alert('error couldnt do what you asked'); });
        }).catch(function (error) { alert('error couldnt do what you asked'); });
    };
    Addphoto3Page.prototype.processNidPicture = function (captureData) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]().ref();
        // Create a timestamp as filename
        var filename = Math.floor(Date.now() / 1000);
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("driverPictures/" + filename + ".jpg");
        imageRef.putString(captureData, __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
            imageRef.getDownloadURL().then(function (url) {
                _this.ph.UpdateNPhotoInfo(url).then(function (success) {
                    _this.loading.dismiss();
                    _this.NidUploaded = true;
                }).catch(function (error) { alert('error couldnt do what you asked'); });
            }).catch(function (error) { alert('error couldnt do what you asked'); });
        }).catch(function (error) { alert('error couldnt do what you asked'); });
    };
    return Addphoto3Page;
}());
Addphoto3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addphoto3',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/addphoto3/addphoto3.html"*/'<!--\n  Generated template for the AddphotoinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n        <div style="display:flex; flex-direction:column;justify-content:center" >\n           \n              <div (click)="choosePic_3()">\n              <img id="my-pic" [src]="captureDataUrl3" *ngIf="captureDataUrl3"/>\n              <img id="my-pic" *ngIf="!captureDataUrl3" src="data:image/png;base64,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" >\n            </div>\n            <button padding block ion-button icon-start (click)="choosePic_3()">\n                <ion-icon name="ios-camera-outline"></ion-icon>\n                {{lp.translate()[0].b1}}</button>\n        </div>\n\n<button [ngStyle]="{\'margin-top\': 80 + \'px\'}" [disabled]=\'!this.NidUploaded\' padding ion-button block (click)="Next()">\n{{lp.translate()[0].b1}}</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Metro/Driver/src/pages/addphoto3/addphoto3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_8__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], Addphoto3Page);

//# sourceMappingURL=addphoto3.js.map

/***/ })

});
//# sourceMappingURL=23.js.map