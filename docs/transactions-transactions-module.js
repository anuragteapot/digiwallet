(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transactions-transactions-module"],{

/***/ "./src/app/transactions/transactions.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/transactions/transactions.module.ts ***!
  \*****************************************************/
/*! exports provided: TransactionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions.page */ "./src/app/transactions/transactions.page.ts");







var routes = [
    {
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_6__["TransactionsPage"]
    },
    {
        path: 'transaction-details/:Id',
        loadChildren: './transaction-details/transaction-details.module#TransactionDetailsPageModule'
    }
];
var TransactionsPageModule = /** @class */ (function () {
    function TransactionsPageModule() {
    }
    TransactionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_6__["TransactionsPage"]]
        })
    ], TransactionsPageModule);
    return TransactionsPageModule;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.page.html":
/*!*****************************************************!*\
  !*** ./src/app/transactions/transactions.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button ></ion-menu-button>\n        </ion-buttons>\n    <ion-title>transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card  *ngFor=\"let trans of transactions.slice().reverse()\" [routerLink]=\"['/transactions','transaction-details',trans.id]\" routerLinkActive=\"router-link-active\" >\n    <ion-card-content>\n      <ion-grid fixed>\n        <ion-row>\n            <ion-col text-right >\n                <h5><b>{{trans.status}}</b></h5>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col >\n              <ion-thumbnail>\n                  <img [src]=\"trans.imageUrl\" />\n              </ion-thumbnail>\n          </ion-col>\n          \n          <ion-col text-center >\n              <h1><b> From:</b></h1>\n              <p>{{trans.from}}</p>\n          </ion-col>\n          <ion-col text-center>\n              <h1><b>To :</b></h1>\n              <p>{{trans.to}}</p>\n          </ion-col>\n        \n          \n          <ion-col text-right >\n              <h1 style=\"color: green\"><b>{{trans.amount}}</b></h1>\n              <p color=\"success\">units</p>\n          </ion-col>\n          \n        </ion-row>\n        \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    \n    <ion-card-content class=\"ion-text-center\">\n      <b>No more transactions</b>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/transactions/transactions.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/transactions/transactions.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/transactions/transactions.page.ts":
/*!***************************************************!*\
  !*** ./src/app/transactions/transactions.page.ts ***!
  \***************************************************/
/*! exports provided: TransactionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPage", function() { return TransactionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TransactionsPage = /** @class */ (function () {
    function TransactionsPage(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    TransactionsPage.prototype.ngOnInit = function () {
        this.transactions = this.auth.presentUser.Transactions;
    };
    TransactionsPage.prototype.ionViewWillEnter = function () {
        this.transactions = this.auth.presentUser.Transactions;
        for (var _i = 0, _a = this.transactions; _i < _a.length; _i++) {
            var trans = _a[_i];
            this.updateStatus(trans.id);
        }
    };
    TransactionsPage.prototype.updateStatus = function (id) {
        var _this = this;
        if (this.transactions[id].status == 'Success' || this.transactions[id].status == 'Fail') {
            return;
        }
        this.http.get('https://api-ropsten.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash='
            + this.transactions[id].hash +
            // + '0x0c94fafb6e98d74a445fb35fb52e7393102d47bfe2f1ab96196bd8afb3f66e8c' +
            '&apikey=2QVHR492AKS9PD313RFHADJ497CVT8NQMQ').subscribe(function (res) {
            if (res['result']['status'] === '1') {
                _this.transactions[id].status = 'Success';
                console.log('success');
            }
            else if (res['result']['status'] === '0') {
                _this.transactions[id].status = 'Fail';
                console.log('Fail');
            }
            else if (res['result']['status'] === '') {
                _this.transactions[id].status = 'Pending';
                console.log('pending');
            }
            else {
                _this.transactions[id].status = res['result']['status'];
                console.log('Fail');
            }
        });
    };
    TransactionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./transactions.page.html */ "./src/app/transactions/transactions.page.html"),
            styles: [__webpack_require__(/*! ./transactions.page.scss */ "./src/app/transactions/transactions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TransactionsPage);
    return TransactionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=transactions-transactions-module.js.map