(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-set-password-set-password-module"],{

/***/ "./src/app/auth/set-password/set-password.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/set-password/set-password.module.ts ***!
  \**********************************************************/
/*! exports provided: SetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordPageModule", function() { return SetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _set_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./set-password.page */ "./src/app/auth/set-password/set-password.page.ts");







var routes = [
    {
        path: '',
        component: _set_password_page__WEBPACK_IMPORTED_MODULE_6__["SetPasswordPage"]
    }
];
var SetPasswordPageModule = /** @class */ (function () {
    function SetPasswordPageModule() {
    }
    SetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_set_password_page__WEBPACK_IMPORTED_MODULE_6__["SetPasswordPage"]]
        })
    ], SetPasswordPageModule);
    return SetPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/auth/set-password/set-password.page.html":
/*!**********************************************************!*\
  !*** ./src/app/auth/set-password/set-password.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Set Password</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"auth\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-item>\n        <ion-label position=\"floating\">Set Password</ion-label>\n        <ion-input [(ngModel)]=\"setpass\" type=\"password\"  ></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"floating\">Re Enter Password</ion-label>\n          <ion-input [(ngModel)]=\"repass\" type=\"password\" ></ion-input>\n        </ion-item>\n\n        <p *ngIf=\"!isMatch\" >Inputs didn't match</p>\n\n      <ion-button padding (click)=\"onClick()\">\n        create Account\n      </ion-button>\n              \n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/set-password/set-password.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/auth/set-password/set-password.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2V0LXBhc3N3b3JkL3NldC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/set-password/set-password.page.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/set-password/set-password.page.ts ***!
  \********************************************************/
/*! exports provided: SetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordPage", function() { return SetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ethereum.service */ "./src/app/services/ethereum.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/wallet.model */ "./src/app/models/wallet.model.ts");
/* harmony import */ var src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/transaction.service */ "./src/app/services/transaction.service.ts");
/* harmony import */ var src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/wallet.service */ "./src/app/services/wallet.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");










var SetPasswordPage = /** @class */ (function () {
    function SetPasswordPage(router, eth, auth, trans, wal, storage) {
        this.router = router;
        this.eth = eth;
        this.auth = auth;
        this.trans = trans;
        this.wal = wal;
        this.storage = storage;
        this.isMatch = true;
    }
    SetPasswordPage.prototype.ngOnInit = function () {
    };
    SetPasswordPage.prototype.onClick = function () {
        if (this.setpass === this.repass) {
            var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](this.auth.users.length, this.eth.mnemonic, this.setpass, [new src_app_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](0, 'ethereum', this.eth.address, this.eth.privateKey, 'your most used wallet', 'https://s.yimg.com/ny/api/res/1.2/79GZvpsBiB0w.4UMxQEijw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/coin_rivet_596/45607ac1ecdfb82f720db97b79887702', 0)
            ], []);
            this.auth.users.push(user);
            this.auth.presentUser = user;
            this.storage.set('presentUser', user).then(function (data) { return console.log(data); });
            this.trans.update();
            this.wal.update();
            this.isMatch = true;
            this.router.navigateByUrl('/auth');
        }
        else {
            this.isMatch = false;
        }
    };
    SetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-set-password',
            template: __webpack_require__(/*! ./set-password.page.html */ "./src/app/auth/set-password/set-password.page.html"),
            styles: [__webpack_require__(/*! ./set-password.page.scss */ "./src/app/auth/set-password/set-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_4__["EthereumService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_7__["TransactionService"],
            src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_8__["WalletService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]])
    ], SetPasswordPage);
    return SetPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-set-password-set-password-module.js.map