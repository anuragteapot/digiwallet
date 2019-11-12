(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-details-transaction-details-module"],{

/***/ "./src/app/transactions/transaction-details/transaction-details.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/transactions/transaction-details/transaction-details.module.ts ***!
  \********************************************************************************/
/*! exports provided: TransactionDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsPageModule", function() { return TransactionDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transaction_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-details.page */ "./src/app/transactions/transaction-details/transaction-details.page.ts");







var routes = [
    {
        path: '',
        component: _transaction_details_page__WEBPACK_IMPORTED_MODULE_6__["TransactionDetailsPage"]
    }
];
var TransactionDetailsPageModule = /** @class */ (function () {
    function TransactionDetailsPageModule() {
    }
    TransactionDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_transaction_details_page__WEBPACK_IMPORTED_MODULE_6__["TransactionDetailsPage"]]
        })
    ], TransactionDetailsPageModule);
    return TransactionDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/transactions/transaction-details/transaction-details.page.html":
/*!********************************************************************************!*\
  !*** ./src/app/transactions/transaction-details/transaction-details.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"auth\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Transaction Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card >\n    <ion-card-header>\n      <ion-card-subtitle><b>{{transactions[id].name}}</b></ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n        \n      <ion-item>\n        <ion-label text-wrap><b>From  :</b> \n            <p style=\"user-select: all;\">{{transactions[id].from}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-label text-wrap><b>To    :</b> \n              <p style=\"user-select: all;\">{{transactions[id].from}}</p>\n          </ion-label>\n      </ion-item>\n      <ion-item>\n            <ion-label text-wrap><b>Amount  :</b> \n                <p style=\"user-select: all;\">{{transactions[id].amount}} units</p>\n      </ion-label>\n      </ion-item>\n          <ion-item>\n              <ion-label text-wrap><b>Hash  :</b> \n                  <p style=\"user-select: all;\">{{transactions[id].hash}}</p>\n            </ion-label>\n      </ion-item>\n            \n      <ion-item lines='none'>\n                <ion-label text-wrap><b>Status  :</b> \n                    <p id=\"stat\"></p>\n                </ion-label>\n      </ion-item>\n              <ion-button shape=\"round\"  Fill=\"outline\" (click)=\"onClick('https://ropsten.etherscan.io/tx/'+transactions[id].hash)\" >\n                More Info\n              </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/transactions/transaction-details/transaction-details.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/transactions/transaction-details/transaction-details.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1kZXRhaWxzL3RyYW5zYWN0aW9uLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/transactions/transaction-details/transaction-details.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/transactions/transaction-details/transaction-details.page.ts ***!
  \******************************************************************************/
/*! exports provided: TransactionDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsPage", function() { return TransactionDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var TransactionDetailsPage = /** @class */ (function () {
    function TransactionDetailsPage(act, auth, http) {
        this.act = act;
        this.auth = auth;
        this.http = http;
        this.id = act.snapshot.params.Id;
        this.transactions = this.auth.presentUser.Transactions;
    }
    TransactionDetailsPage.prototype.ionViewWillEnter = function () {
        this.transactions = this.auth.presentUser.Transactions;
        this.getStatus();
    };
    TransactionDetailsPage.prototype.ionViewWillLeave = function () {
        this.auth.updateUser();
    };
    TransactionDetailsPage.prototype.getStatus = function () {
        var _this = this;
        if (this.transactions[this.id].status == 'Success' || this.transactions[this.id].status == 'Fail') {
            document.getElementById('stat').innerHTML = this.transactions[this.id].status;
            return;
        }
        this.http.get('https://api-ropsten.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash='
            + this.transactions[this.id].hash +
            // + '0x0c94fafb6e98d74a445fb35fb52e7393102d47bfe2f1ab96196bd8afb3f66e8c' +
            '&apikey=2QVHR492AKS9PD313RFHADJ497CVT8NQMQ').subscribe(function (res) {
            if (res['result']['status'] === '1') {
                _this.transactions[_this.id].status = 'Success';
                console.log('success');
            }
            else if (res['result']['status'] === '0') {
                _this.transactions[_this.id].status = 'Fail';
                console.log('Fail');
            }
            else if (res['result']['status'] === '') {
                _this.transactions[_this.id].status = 'Pending';
                console.log('pending');
            }
            else {
                _this.transactions[_this.id].status = res['result']['status'];
                console.log('Fail');
            }
            document.getElementById('stat').innerHTML = _this.transactions[_this.id].status;
        });
    };
    TransactionDetailsPage.prototype.onClick = function (x) {
        window.open(x, '_blank');
    };
    TransactionDetailsPage.prototype.ngOnInit = function () {
    };
    TransactionDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transaction-details',
            template: __webpack_require__(/*! ./transaction-details.page.html */ "./src/app/transactions/transaction-details/transaction-details.page.html"),
            styles: [__webpack_require__(/*! ./transaction-details.page.scss */ "./src/app/transactions/transaction-details/transaction-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], TransactionDetailsPage);
    return TransactionDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=transaction-details-transaction-details-module.js.map