(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-wallet-new-wallet-module"],{

/***/ "./src/app/wallet/new-wallet/new-wallet.module.ts":
/*!********************************************************!*\
  !*** ./src/app/wallet/new-wallet/new-wallet.module.ts ***!
  \********************************************************/
/*! exports provided: NewWalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWalletPageModule", function() { return NewWalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-wallet.page */ "./src/app/wallet/new-wallet/new-wallet.page.ts");







var routes = [
    {
        path: '',
        component: _new_wallet_page__WEBPACK_IMPORTED_MODULE_6__["NewWalletPage"]
    }
];
var NewWalletPageModule = /** @class */ (function () {
    function NewWalletPageModule() {
    }
    NewWalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_wallet_page__WEBPACK_IMPORTED_MODULE_6__["NewWalletPage"]]
        })
    ], NewWalletPageModule);
    return NewWalletPageModule;
}());



/***/ }),

/***/ "./src/app/wallet/new-wallet/new-wallet.page.html":
/*!********************************************************!*\
  !*** ./src/app/wallet/new-wallet/new-wallet.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>new-wallet</ion-title>\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"wallet\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-label position=\"floating\">Token Name</ion-label>\n        <ion-input [(ngModel)]=\"tokenName\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Token address</ion-label>\n        <ion-input [(ngModel)]=\"tokenAdd\" type=\"text\"></ion-input>\n      </ion-item>\n     \n      <ion-item>\n        <ion-label position=\"floating\">Add Description</ion-label>\n        <ion-input [(ngModel)]=\"tokenDes\" type=\"text\"></ion-input>\n      </ion-item>\n    <ion-button padding (click)=\"onClick()\">\n      <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n      Add \n    </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/wallet/new-wallet/new-wallet.page.scss":
/*!********************************************************!*\
  !*** ./src/app/wallet/new-wallet/new-wallet.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhbGxldC9uZXctd2FsbGV0L25ldy13YWxsZXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/wallet/new-wallet/new-wallet.page.ts":
/*!******************************************************!*\
  !*** ./src/app/wallet/new-wallet/new-wallet.page.ts ***!
  \******************************************************/
/*! exports provided: NewWalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWalletPage", function() { return NewWalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_models_wallet_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/wallet.model */ "./src/app/models/wallet.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var NewWalletPage = /** @class */ (function () {
    function NewWalletPage(auth, toastController, navCtrl) {
        this.auth = auth;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
    }
    NewWalletPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Token Addded',
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewWalletPage.prototype.ngOnInit = function () {
    };
    NewWalletPage.prototype.onClick = function () {
        var length = this.auth.presentUser.wallets.length;
        var id = this.auth.presentUser.wallets[length - 1].id + 1;
        this.auth.presentUser.wallets.push(new src_app_models_wallet_model__WEBPACK_IMPORTED_MODULE_3__["Wallet"](id, this.tokenName, this.tokenAdd, this.auth.presentUser.wallets[0].privateKey, this.tokenDes, 'https://www.tokenfactory.com/Tokens.png', 0));
        this.presentToast();
        this.auth.updateUser();
        this.navCtrl.pop();
    };
    NewWalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-wallet',
            template: __webpack_require__(/*! ./new-wallet.page.html */ "./src/app/wallet/new-wallet/new-wallet.page.html"),
            styles: [__webpack_require__(/*! ./new-wallet.page.scss */ "./src/app/wallet/new-wallet/new-wallet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], NewWalletPage);
    return NewWalletPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-wallet-new-wallet-module.js.map