(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-reset-module"],{

/***/ "./src/app/auth/forgot-password/reset/reset.module.ts":
/*!************************************************************!*\
  !*** ./src/app/auth/forgot-password/reset/reset.module.ts ***!
  \************************************************************/
/*! exports provided: ResetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageModule", function() { return ResetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset.page */ "./src/app/auth/forgot-password/reset/reset.page.ts");







var routes = [
    {
        path: '',
        component: _reset_page__WEBPACK_IMPORTED_MODULE_6__["ResetPage"]
    }
];
var ResetPageModule = /** @class */ (function () {
    function ResetPageModule() {
    }
    ResetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_6__["ResetPage"]]
        })
    ], ResetPageModule);
    return ResetPageModule;
}());



/***/ }),

/***/ "./src/app/auth/forgot-password/reset/reset.page.html":
/*!************************************************************!*\
  !*** ./src/app/auth/forgot-password/reset/reset.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>reset</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">Set Password</ion-label>\n    <ion-input [(ngModel)]=\"setpass\" type=\"password\"  ></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label position=\"floating\">Re Enter Password</ion-label>\n      <ion-input [(ngModel)]=\"repass\" type=\"password\" ></ion-input>\n    </ion-item>\n\n    <p *ngIf=\"!isMatch\" >Inputs didn't match</p>\n\n  <ion-button padding (click)=\"onClick()\">\n    update password\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/forgot-password/reset/reset.page.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/forgot-password/reset/reset.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290LXBhc3N3b3JkL3Jlc2V0L3Jlc2V0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/forgot-password/reset/reset.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/forgot-password/reset/reset.page.ts ***!
  \**********************************************************/
/*! exports provided: ResetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPage", function() { return ResetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ethereum.service */ "./src/app/services/ethereum.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/transaction.service */ "./src/app/services/transaction.service.ts");
/* harmony import */ var src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/wallet.service */ "./src/app/services/wallet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var ResetPage = /** @class */ (function () {
    function ResetPage(router, eth, auth, trans, wal, storage) {
        this.router = router;
        this.eth = eth;
        this.auth = auth;
        this.trans = trans;
        this.wal = wal;
        this.storage = storage;
        this.isMatch = true;
    }
    ResetPage.prototype.ngOnInit = function () {
    };
    ResetPage.prototype.onClick = function () {
        if (this.setpass === this.repass) {
            this.auth.presentUser.password = this.setpass;
            this.trans.update();
            this.wal.update();
            this.storage.set('presentUser', this.auth.presentUser);
            this.isMatch = true;
            this.router.navigateByUrl('/auth');
        }
        else {
            this.isMatch = false;
        }
    };
    ResetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.page.html */ "./src/app/auth/forgot-password/reset/reset.page.html"),
            styles: [__webpack_require__(/*! ./reset.page.scss */ "./src/app/auth/forgot-password/reset/reset.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_2__["EthereumService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"],
            src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_5__["WalletService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
    ], ResetPage);
    return ResetPage;
}());



/***/ })

}]);
//# sourceMappingURL=reset-reset-module.js.map