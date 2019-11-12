(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-rearrange-rearrange-module"],{

/***/ "./src/app/auth/rearrange/rearrange.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/rearrange/rearrange.module.ts ***!
  \****************************************************/
/*! exports provided: RearrangePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RearrangePageModule", function() { return RearrangePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rearrange_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rearrange.page */ "./src/app/auth/rearrange/rearrange.page.ts");







var routes = [
    {
        path: '',
        component: _rearrange_page__WEBPACK_IMPORTED_MODULE_6__["RearrangePage"]
    }
];
var RearrangePageModule = /** @class */ (function () {
    function RearrangePageModule() {
    }
    RearrangePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rearrange_page__WEBPACK_IMPORTED_MODULE_6__["RearrangePage"]]
        })
    ], RearrangePageModule);
    return RearrangePageModule;
}());



/***/ }),

/***/ "./src/app/auth/rearrange/rearrange.page.html":
/*!****************************************************!*\
  !*** ./src/app/auth/rearrange/rearrange.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>rearrange</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"auth\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div id=\"div\" style=\"height:auto;\n    border:3px solid #000;\n    background-color: rgb(236, 196, 159);\n    padding: 8px;\n    border-radius: 16px;\n    margin: 8px;\">\n    <b style=\"margin-bottom: 4px\"> Arrange the code! </b>\n    \n        <ion-button class=\"ion-no-margin\" no-padding color=\"danger\" Fill=\"clear\" style=\"position: fixed; right:60px; height: 16px;\" (click)=\"onBack()\">\n            <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n          </ion-button>\n        <ion-button class=\"ion-no-margin\" no-padding color=\"danger\" Fill=\"clear\" style=\"position:fixed; right: 20px; height: 16px;\"  (click)=\"onRefesh()\">\n          <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n        </ion-button>\n    \n      \n    </div>\n\n    <div style=\"height:150px;\n    border:3px solid #000;\n    background-color: rgb(226, 236, 169);\n    padding: 8px;\n    border-radius: 16px;\n    margin: 8px;\">\n    <p id=\"par\"></p>\n    \n    </div>\n\n    <div class=\"ion-padding\">\n        <ion-button shape=\"round\" *ngFor=\"let word of words\" Fill=\"outline\" (click)=\"onClick(word)\">\n            {{word}}\n        </ion-button>\n    </div>\n    \n    <ion-button disabled=\"true\" id=\"but\" style=\"position: absolute;\n                      margin-left:75%;   \n                      bottom:8px\" \n                      [routerLink]=\"['/set-password']\" routerLinkActive=\"router-link-active\" >\n      Next\n    </ion-button>\n    \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/rearrange/rearrange.page.scss":
/*!****************************************************!*\
  !*** ./src/app/auth/rearrange/rearrange.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVhcnJhbmdlL3JlYXJyYW5nZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/rearrange/rearrange.page.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/rearrange/rearrange.page.ts ***!
  \**************************************************/
/*! exports provided: RearrangePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RearrangePage", function() { return RearrangePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ethereum.service */ "./src/app/services/ethereum.service.ts");



var RearrangePage = /** @class */ (function () {
    function RearrangePage(eth) {
        this.eth = eth;
        this.arrWords = new Array();
    }
    RearrangePage.prototype.shuffle = function (a) {
        var _a;
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
    };
    RearrangePage.prototype.ngOnInit = function () {
        this.words = this.eth.mnemonicWords;
        this.words = this.shuffle(this.words);
    };
    RearrangePage.prototype.onClick = function (word) {
        this.arrWords.push(word);
        document.getElementById('par').innerHTML = this.arrWords.join(' ');
        if (this.eth.mnemonic === this.arrWords.join(' ')) {
            document.getElementById('but').setAttribute('disabled', 'false');
            document.getElementById('div').style.backgroundColor = '#88e998';
        }
    };
    RearrangePage.prototype.onRefesh = function () {
        this.arrWords = new Array();
        document.getElementById('par').innerHTML = this.arrWords.join(' ');
        if (this.eth.mnemonic === this.arrWords.join(' ')) {
            document.getElementById('but').setAttribute('disabled', 'false');
            document.getElementById('div').style.backgroundColor = '#88e998';
        }
        else {
            document.getElementById('but').setAttribute('disabled', 'true');
            document.getElementById('div').style.backgroundColor = 'rgb(236, 196, 159)';
        }
    };
    RearrangePage.prototype.onBack = function () {
        this.arrWords.pop();
        document.getElementById('par').innerHTML = this.arrWords.join(' ');
        if (this.eth.mnemonic === this.arrWords.join(' ')) {
            document.getElementById('but').setAttribute('disabled', 'false');
            document.getElementById('div').style.backgroundColor = '#88e998';
        }
        else {
            document.getElementById('but').setAttribute('disabled', 'true');
            document.getElementById('div').style.backgroundColor = 'rgb(236, 196, 159)';
        }
    };
    RearrangePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rearrange',
            template: __webpack_require__(/*! ./rearrange.page.html */ "./src/app/auth/rearrange/rearrange.page.html"),
            styles: [__webpack_require__(/*! ./rearrange.page.scss */ "./src/app/auth/rearrange/rearrange.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ethereum_service__WEBPACK_IMPORTED_MODULE_2__["EthereumService"]])
    ], RearrangePage);
    return RearrangePage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-rearrange-rearrange-module.js.map