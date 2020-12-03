(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-imagedetail-imagedetail-module"],{

/***/ "+eGp":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/imagedetail/imagedetail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Image Detail</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <img [src]=\"imgurl\" />\n    <ion-card-content>\n      {{time}}\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "JXRp":
/*!*********************************************************!*\
  !*** ./src/app/pages/imagedetail/imagedetail.module.ts ***!
  \*********************************************************/
/*! exports provided: ImagedetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagedetailPageModule", function() { return ImagedetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _imagedetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imagedetail-routing.module */ "krIv");
/* harmony import */ var _imagedetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imagedetail.page */ "hLth");







let ImagedetailPageModule = class ImagedetailPageModule {
};
ImagedetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _imagedetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImagedetailPageRoutingModule"]
        ],
        declarations: [_imagedetail_page__WEBPACK_IMPORTED_MODULE_6__["ImagedetailPage"]]
    })
], ImagedetailPageModule);



/***/ }),

/***/ "hLth":
/*!*******************************************************!*\
  !*** ./src/app/pages/imagedetail/imagedetail.page.ts ***!
  \*******************************************************/
/*! exports provided: ImagedetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagedetailPage", function() { return ImagedetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_imagedetail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./imagedetail.page.html */ "+eGp");
/* harmony import */ var _imagedetail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagedetail.page.scss */ "oaZY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");



/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-empty-function */


let ImagedetailPage = class ImagedetailPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.imgurl = this.router.getCurrentNavigation().extras.state.imgURL;
                this.time = this.router.getCurrentNavigation().extras.state.timestamp;
            }
        });
    }
    ngOnInit() { }
};
ImagedetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ImagedetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-imagedetail',
        template: _raw_loader_imagedetail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_imagedetail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ImagedetailPage);



/***/ }),

/***/ "krIv":
/*!*****************************************************************!*\
  !*** ./src/app/pages/imagedetail/imagedetail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ImagedetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagedetailPageRoutingModule", function() { return ImagedetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _imagedetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagedetail.page */ "hLth");




const routes = [
    {
        path: '',
        component: _imagedetail_page__WEBPACK_IMPORTED_MODULE_3__["ImagedetailPage"]
    }
];
let ImagedetailPageRoutingModule = class ImagedetailPageRoutingModule {
};
ImagedetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImagedetailPageRoutingModule);



/***/ }),

/***/ "oaZY":
/*!*********************************************************!*\
  !*** ./src/app/pages/imagedetail/imagedetail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-imagedetail-imagedetail-module-es2015.js.map