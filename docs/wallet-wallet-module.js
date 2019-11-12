(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"],{

/***/ "./src/app/wallet/wallet.module.ts":
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.module.ts ***!
  \*****************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet.page */ "./src/app/wallet/wallet.page.ts");







var routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]
    },
    { path: 'new-wallet',
        loadChildren: './new-wallet/new-wallet.module#NewWalletPageModule'
    },
    {
        path: 'wallet-details/:Id',
        loadChildren: './wallet-details/wallet-details.module#WalletDetailsPageModule'
    },
];
var WalletPageModule = /** @class */ (function () {
    function WalletPageModule() {
    }
    WalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
        })
    ], WalletPageModule);
    return WalletPageModule;
}());



/***/ }),

/***/ "./src/app/wallet/wallet.page.html":
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\" >\n      <ion-buttons slot=\"start\">\n          <ion-menu-button ></ion-menu-button>\n        </ion-buttons>\n    <ion-title ><b>Your Wallets</b></ion-title>\n    <ion-buttons slot=\"end\">\n          <ion-button [routerLink]=\"['/wallet','new-wallet']\" >\n            <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n          </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid no-padding>\n        <ion-row >\n          <ion-col size=\"12\" size-sm=\"8\" offsetSm=\"2\" >\n            <ion-card >\n              <ion-card-header>\n                <ion-card-title><b>{{wallets[0].title}}</b></ion-card-title>\n                <ion-card-subtitle>{{wallets[0].balance}} eth</ion-card-subtitle>\n              </ion-card-header>\n              <ion-img [src]=\"wallets[0].imageUrl\"></ion-img>\n              <ion-card-content>\n                <p>{{wallets[0].description}}</p>\n              </ion-card-content>\n              <div text-right >\n                <ion-button fill=\"outline\" color=\"primary\" style=\"margin: 8px\" [routerLink]=\"['/','wallet','wallet-details',wallets[0].id]\"> Actions</ion-button>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row >\n            <ion-col  size=\"12\" size-sm=\"8\" offsetSm=\"2\" >\n              <ion-list >\n                <ion-item-sliding *ngFor=\"let wallet of wallets.slice(1)\" #sliding>\n                    <ion-item  detail button [routerLink]=\"['/','wallet','wallet-details',wallet.id]\">\n                      <ion-avatar slot=\"start\">\n                          <img [src]=\"wallet.imageUrl\" >\n                      </ion-avatar>\n                        <ion-label>\n                          <h2 ><b>{{wallet.Name}}</b></h2>\n                          <p>{{wallet.balance}}  units</p>\n                        </ion-label> \n                  </ion-item>\n                  <ion-item-options >\n                      <ion-item-option color=\"danger\" (click)=\"onSlide(wallet.id, sliding) \" >\n                        Remove\n                      </ion-item-option>\n                  </ion-item-options>\n                </ion-item-sliding>\n              </ion-list>           \n            </ion-col>\n          </ion-row>\n      </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/wallet/wallet.page.scss":
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhbGxldC93YWxsZXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/wallet/wallet.page.ts":
/*!***************************************!*\
  !*** ./src/app/wallet/wallet.page.ts ***!
  \***************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_ethereum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ethereum.service */ "./src/app/services/ethereum.service.ts");





var WalletPage = /** @class */ (function () {
    function WalletPage(eth, auth, route) {
        this.eth = eth;
        this.auth = auth;
        this.route = route;
    }
    WalletPage.prototype.getBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.eth.balance(this.auth.presentUser.wallets[0].address)];
                    case 1:
                        _a.balance = _b.sent();
                        console.log(this.balance);
                        this.auth.presentUser.wallets[0].balance =
                            this.balance / 1000000000000000000;
                        this.auth.updateUser();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletPage.prototype.getBalanceOf = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.wallet = this.auth.presentUser.wallets.find(function (data) { return data.id == id; });
                        _a = this;
                        return [4 /*yield*/, this.eth.balanceOf(this.auth.presentUser.wallets[0].address, this.wallet.address)];
                    case 1:
                        _a.balance = _b.sent();
                        console.log(this.balance);
                        this.auth.presentUser.wallets.find(function (data) { return data.id == id; }).balance =
                            this.balance / 1e18;
                        this.auth.updateUser();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletPage.prototype.ngOnInit = function () {
        this.wallets = this.auth.presentUser.wallets;
    };
    WalletPage.prototype.ionViewWillEnter = function () {
        this.wallets = this.auth.presentUser.wallets;
        this.getBalance();
        var i = 1;
        for (i = 1; i < this.wallets.length; i++) {
            this.getBalanceOf(i);
        }
    };
    WalletPage.prototype.onSlide = function (id, sliding) {
        var index = this.auth.presentUser.wallets.findIndex(function (data) { return data.id === id; });
        this.auth.presentUser.wallets.splice(index, 1);
        this.auth.updateUser();
        sliding.close();
    };
    WalletPage.prototype.onClick = function () { };
    WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.page.html */ "./src/app/wallet/wallet.page.html"),
            styles: [__webpack_require__(/*! ./wallet.page.scss */ "./src/app/wallet/wallet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ethereum_service__WEBPACK_IMPORTED_MODULE_4__["EthereumService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WalletPage);
    return WalletPage;
}());



/***/ })

}]);
//# sourceMappingURL=wallet-wallet-module.js.map