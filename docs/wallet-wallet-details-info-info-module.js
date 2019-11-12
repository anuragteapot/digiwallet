(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-details-info-info-module"],{

/***/ "./src/app/wallet/wallet-details/info/info.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/wallet/wallet-details/info/info.module.ts ***!
  \***********************************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "./src/app/wallet/wallet-details/info/info.page.ts");







var routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]
    }
];
var InfoPageModule = /** @class */ (function () {
    function InfoPageModule() {
    }
    InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
        })
    ], InfoPageModule);
    return InfoPageModule;
}());



/***/ }),

/***/ "./src/app/wallet/wallet-details/info/info.page.html":
/*!***********************************************************!*\
  !*** ./src/app/wallet/wallet-details/info/info.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"auth\"></ion-back-button>\n  </ion-buttons>\n    <ion-title>Info</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"ion-text-center\" style=\"height:auto;\n  border:3px solid #000;\n  background-color: rgb(236, 196, 159);\n  padding: 8px;\n  border-radius: 16px; \n  margin: 8px;\">\n  \n\n  <div *ngIf=\"this.id == 0\">\n      <h1>Wallet</h1>\n      <p style=\"user-select: all;\">\n        {{wallet.Name}}\n      </p>\n    <h1>Address</h1>\n    <p style=\"user-select: all;\">\n      {{wallet.address}}\n    </p>\n    <h1>Private Key</h1>\n    <p style=\"user-select: all;\">\n      {{wallet.privateKey}}\n    </p>\n    <h1>Mnemonic code</h1>\n    <p style=\"user-select: all;\">\n      {{auth.presentUser.mnemonic}}\n    </p>\n    <h1>Balance</h1>\n    <p style=\"user-select: all;\" id=\"bal\">\n    </p>\n  </div>\n\n  <div *ngIf=\"this.id != 0\">\n      <h1>Token</h1>\n      <p style=\"user-select: all;\">\n        {{wallet.Name}}\n      </p>\n    <h1>Token Address</h1>\n    <p style=\"user-select: all;\">\n      {{wallet.address}}\n    </p>\n    <h1> Your Address</h1>\n    <p style=\"user-select: all;\">\n      {{auth.presentUser.wallets[0].address }}\n    </p>\n\n    <h1>Private Key</h1>\n    <p style=\"user-select: all;\">\n      {{wallet.privateKey}}\n    </p>\n    \n    <h1>Balance</h1>\n    <p style=\"user-select: all;\" id=\"bal\">\n    </p>\n  </div>\n      \n  </div>\n  \n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/wallet/wallet-details/info/info.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/wallet/wallet-details/info/info.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhbGxldC93YWxsZXQtZGV0YWlscy9pbmZvL2luZm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/wallet/wallet-details/info/info.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/wallet/wallet-details/info/info.page.ts ***!
  \*********************************************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ethereum.service */ "./src/app/services/ethereum.service.ts");





var InfoPage = /** @class */ (function () {
    function InfoPage(router, act, auth, eth) {
        this.router = router;
        this.act = act;
        this.auth = auth;
        this.eth = eth;
        this.id = act.snapshot.params.Id;
    }
    InfoPage.prototype.getBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.eth.balance(this.wallet.address)];
                    case 1:
                        _a.balance = _b.sent();
                        console.log(this.balance);
                        document.getElementById('bal').innerHTML =
                            (this.balance / 1000000000000000000).toString() + ' eth';
                        this.auth.presentUser.wallets[0].balance =
                            this.balance / 1000000000000000000;
                        this.auth.updateUser();
                        return [2 /*return*/];
                }
            });
        });
    };
    InfoPage.prototype.getBalanceOf = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.eth.balanceOf(this.auth.presentUser.wallets[0].address, this.wallet.address)];
                    case 1:
                        _a.balance = _b.sent();
                        console.log(this.balance);
                        document.getElementById('bal').innerHTML =
                            (this.balance / 1e18).toString() + ' Tokens';
                        this.auth.presentUser.wallets.find(function (data) { return data.id == _this.id; }).balance =
                            this.balance / 1e18;
                        this.auth.updateUser();
                        return [2 /*return*/];
                }
            });
        });
    };
    InfoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.wallet = this.auth.presentUser.wallets.find(function (data) { return data.id == _this.id; });
        if (this.id == 0) {
            this.getBalance();
        }
        else {
            this.getBalanceOf();
        }
    };
    InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.page.html */ "./src/app/wallet/wallet-details/info/info.page.html"),
            styles: [__webpack_require__(/*! ./info.page.scss */ "./src/app/wallet/wallet-details/info/info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_4__["EthereumService"]])
    ], InfoPage);
    return InfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=wallet-wallet-details-info-info-module.js.map