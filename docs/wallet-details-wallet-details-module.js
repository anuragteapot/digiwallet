(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-details-wallet-details-module"],{

/***/ "./src/app/wallet/wallet-details/wallet-details.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/wallet/wallet-details/wallet-details.module.ts ***!
  \****************************************************************/
/*! exports provided: WalletDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDetailsPageModule", function() { return WalletDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wallet_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-details.page */ "./src/app/wallet/wallet-details/wallet-details.page.ts");







var routes = [
    {
        path: '',
        component: _wallet_details_page__WEBPACK_IMPORTED_MODULE_6__["WalletDetailsPage"]
    },
];
var WalletDetailsPageModule = /** @class */ (function () {
    function WalletDetailsPageModule() {
    }
    WalletDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_wallet_details_page__WEBPACK_IMPORTED_MODULE_6__["WalletDetailsPage"]]
        })
    ], WalletDetailsPageModule);
    return WalletDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/wallet/wallet-details/wallet-details.page.html":
/*!****************************************************************!*\
  !*** ./src/app/wallet/wallet-details/wallet-details.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>wallet-details</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"wallet\"></ion-back-button>\n      \n    </ion-buttons>\n    \n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"onInfo()\">\n        <ion-icon slot=\"start\" name=\"information-circle\"></ion-icon>\n        info\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n \n</ion-header>\n\n<ion-content padding  id=\"cam\">\n  <ion-item>\n    <ion-label position=\"floating\">To address</ion-label>\n    <ion-button Fill=\"clear\" (click)=\"onScan()\" slot=\"end\">\n      <ion-icon slot=\"icon-only\" name=\"qr-scanner\"></ion-icon>\n    </ion-button>\n    <ion-input [(ngModel)]=\"toAddress\" type=\"text\">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label position=\"floating\">Amount</ion-label>\n      <ion-input [(ngModel)]=\"amount\" type=\"text\"></ion-input>\n    </ion-item>\n\n    \n  <ion-button padding (click)=\"onSend()\">\n    send\n  </ion-button>\n\n \n  <p padding id=\"result\"></p>\n  <ion-grid fixed class=\"ion-padding\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\" >\n          <h1>To receive show the QR code</h1>\n      </ion-col>\n      <ion-col size=\"6\" offset=\"3\">\n        <ion-img [src]=\"'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+this.fromAddress\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/wallet/wallet-details/wallet-details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/wallet/wallet-details/wallet-details.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhbGxldC93YWxsZXQtZGV0YWlscy93YWxsZXQtZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/wallet/wallet-details/wallet-details.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/wallet/wallet-details/wallet-details.page.ts ***!
  \**************************************************************/
/*! exports provided: WalletDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDetailsPage", function() { return WalletDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ethereum.service */ "./src/app/services/ethereum.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var WalletDetailsPage = /** @class */ (function () {
    function WalletDetailsPage(eth, auth, route, act, qrScanner, platform, toastController, androidPermissions) {
        var _this = this;
        this.eth = eth;
        this.auth = auth;
        this.route = route;
        this.act = act;
        this.qrScanner = qrScanner;
        this.platform = platform;
        this.toastController = toastController;
        this.androidPermissions = androidPermissions;
        this.id = act.snapshot.params.Id;
        this.platform.backButton.subscribeWithPriority(0, function () {
            document.getElementById('cam').style.opacity = '1';
            _this.qrScanner.destroy();
        });
    }
    WalletDetailsPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Text Detected',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fromAddress = this.auth.presentUser.wallets[0].address;
        this.wallet = this.auth.presentUser.wallets.find(function (data) { return data.id == _this.id; });
    };
    WalletDetailsPage.prototype.onScan = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                _this.qrScanner.show();
                document.getElementById('cam').style.opacity = '0';
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    _this.toAddress = text;
                    document.getElementById('cam').style.opacity = '1';
                    _this.presentToast();
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
                _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.CAMERA).then(function (result) { return console.log('Has permission?', result.hasPermission); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.CAMERA); });
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    WalletDetailsPage.prototype.onSend = function () {
        document.getElementById('result').innerHTML = '';
        console.log('send');
        if (this.id == 0) {
            console.log('hello');
            this.eth.send(this.amount, this.toAddress);
        }
        else {
            this.eth.sendToken(this.amount, this.toAddress, this.wallet.address, this.wallet.name);
        }
    };
    WalletDetailsPage.prototype.onInfo = function () {
        console.log('hello');
        this.route.navigateByUrl('/info/' + this.id);
    };
    WalletDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wallet-details',
            template: __webpack_require__(/*! ./wallet-details.page.html */ "./src/app/wallet/wallet-details/wallet-details.page.html"),
            styles: [__webpack_require__(/*! ./wallet-details.page.scss */ "./src/app/wallet/wallet-details/wallet-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_2__["EthereumService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"]])
    ], WalletDetailsPage);
    return WalletDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=wallet-details-wallet-details-module.js.map