(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-signup-module"],{

/***/ "./src/app/auth/signup/signup.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/signup/signup.module.ts ***!
  \**********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/auth/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.page.html":
/*!**********************************************!*\
  !*** ./src/app/auth/signup/signup.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Sign Up</ion-title>\n  \n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"auth\"></ion-back-button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<div style=\"height:auto;\n            border:3px solid #000;\n            border-bottom: none;\n            background-color: rgb(226, 236, 169);\n            padding: 8px;\n            border-radius: 16px 16px 0px 0px;\n            margin: 8px 8px 0px 8px;\">\n  <b style=\"margin-bottom: 4px\"> This is your mnemonic code!</b>\n</div>\n<div style=\"height:auto;\n            border:3px solid #000;\n            background-color:rgb(199, 232, 233);\n            padding: 0px 8px;\n            border-radius: 0px 0px 16px 16px;\n            margin: 0px 8px;\">\n    <h1 style=\"font-style: italic; font-size: 20px; margin: 8px\"><b>\" {{code}} \"</b></h1>\n\n</div>\n\n<div style=\"height:auto;\n            border:3px solid #000;\n            background-color: rgb(236, 175, 175);\n            padding: 8px;\n            border-radius: 16px;\n            margin: 8px;\">\n  <b>1. Please remember this code. We recommand you to write it on a piece of paper.</b>\n  <P><b>2. You can only recover your account with this code.</b></P>\n</div>\n\n<ion-button style=\" position: absolute;\n                    margin-left:75%;   \n                  \tbottom:16px;\" [routerLink]=\"['/rearrange']\" routerLinkActive=\"router-link-active\"  >\nNext</ion-button>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/signup/signup.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/signup/signup.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/signup/signup.page.ts ***!
  \********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ethereum.service */ "./src/app/services/ethereum.service.ts");



var SignupPage = /** @class */ (function () {
    function SignupPage(eth) {
        this.eth = eth;
    }
    SignupPage.prototype.ionViewWillEnter = function () {
        this.code = this.eth.mnemonic;
        // console.log('from ' + this.code);
        // document.getElementById('par').innerHTML = this.code;
    };
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/auth/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/auth/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_2__["EthereumService"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-signup-signup-module.js.map