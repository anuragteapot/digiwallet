(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-forgot-password-forgot-password-module"],{

/***/ "./src/app/auth/forgot-password/forgot-password.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.module.ts ***!
  \****************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/auth/forgot-password/forgot-password.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    },
    {
        path: 'reset',
        loadChildren: './reset/reset.module#ResetPageModule'
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.page.html":
/*!****************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>forgot-password</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"auth\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content padding >\n  <div id=\"div\" style=\"height:auto;\n    border:3px solid #000;\n    background-color: rgb(236, 196, 159);\n    padding: 8px;\n    border-radius: 16px;\n    margin: 8px;\">\n    <b style=\"margin-bottom: 4px\"> Enter your mnemonic code! </b>\n  </div>\n\n  \n  <textarea  style=\"height:150px;\n  border:3px solid #000;\n  background-color: rgb(226, 236, 169);\n  padding: 8px;\n  border-radius: 16px;\n  margin: 8px;\n  width: 95%\" name=\"hello word\" [(ngModel)]=\"enteredCode\"  rows=\"5\"></textarea>\n\n\n\n  <ion-button   style=\"position: relative;\n                      margin-left:75%;   \n                      bottom:8px\" \n                      (click)=\"onClick()\" >\n      Next\n  </ion-button>\n\n  <p style=\"color: red\" padding *ngIf=\"(hi===-1)\" > Invalid code. No user found</p>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.page.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ForgotPasswordPage.prototype.onClick = function () {
        if (this.auth.presentUser.mnemonic === this.enteredCode) {
            this.router.navigateByUrl('/forgot-password/reset');
        }
        else {
            this.hi = -1;
            console.log('forgot');
        }
        // this.hi = this.auth.users.findIndex(obj => obj.mnemonic === this.enteredCode);
        // if (this.hi !== -1) {
        //   this.auth.presentUser = this.auth.users[this.hi];
        //   this.router.navigateByUrl('/forgot-password/reset');
        // }
    };
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/auth/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/auth/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-forgot-password-forgot-password-module.js.map