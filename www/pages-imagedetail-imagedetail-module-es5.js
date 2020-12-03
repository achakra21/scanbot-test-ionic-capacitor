(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-imagedetail-imagedetail-module"], {
    /***/
    "+eGp":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/imagedetail/imagedetail.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function eGp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Image Detail</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <img [src]=\"imgurl\" />\n    <ion-card-content>\n      {{time}}\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "JXRp":
    /*!*********************************************************!*\
      !*** ./src/app/pages/imagedetail/imagedetail.module.ts ***!
      \*********************************************************/

    /*! exports provided: ImagedetailPageModule */

    /***/
    function JXRp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagedetailPageModule", function () {
        return ImagedetailPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _imagedetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./imagedetail-routing.module */
      "krIv");
      /* harmony import */


      var _imagedetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./imagedetail.page */
      "hLth");

      var ImagedetailPageModule = function ImagedetailPageModule() {
        _classCallCheck(this, ImagedetailPageModule);
      };

      ImagedetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _imagedetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImagedetailPageRoutingModule"]],
        declarations: [_imagedetail_page__WEBPACK_IMPORTED_MODULE_6__["ImagedetailPage"]]
      })], ImagedetailPageModule);
      /***/
    },

    /***/
    "hLth":
    /*!*******************************************************!*\
      !*** ./src/app/pages/imagedetail/imagedetail.page.ts ***!
      \*******************************************************/

    /*! exports provided: ImagedetailPage */

    /***/
    function hLth(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagedetailPage", function () {
        return ImagedetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_imagedetail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./imagedetail.page.html */
      "+eGp");
      /* harmony import */


      var _imagedetail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./imagedetail.page.scss */
      "oaZY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* eslint-disable @typescript-eslint/explicit-module-boundary-types */

      /* eslint-disable @typescript-eslint/no-unused-vars */

      /* eslint-disable no-mixed-spaces-and-tabs */

      /* eslint-disable @typescript-eslint/no-empty-function */


      var ImagedetailPage = /*#__PURE__*/function () {
        function ImagedetailPage(route, router) {
          var _this = this;

          _classCallCheck(this, ImagedetailPage);

          this.route = route;
          this.router = router;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.imgurl = _this.router.getCurrentNavigation().extras.state.imgURL;
              _this.time = _this.router.getCurrentNavigation().extras.state.timestamp;
            }
          });
        }

        _createClass(ImagedetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ImagedetailPage;
      }();

      ImagedetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ImagedetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-imagedetail',
        template: _raw_loader_imagedetail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_imagedetail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ImagedetailPage);
      /***/
    },

    /***/
    "krIv":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/imagedetail/imagedetail-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ImagedetailPageRoutingModule */

    /***/
    function krIv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagedetailPageRoutingModule", function () {
        return ImagedetailPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _imagedetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./imagedetail.page */
      "hLth");

      var routes = [{
        path: '',
        component: _imagedetail_page__WEBPACK_IMPORTED_MODULE_3__["ImagedetailPage"]
      }];

      var ImagedetailPageRoutingModule = function ImagedetailPageRoutingModule() {
        _classCallCheck(this, ImagedetailPageRoutingModule);
      };

      ImagedetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ImagedetailPageRoutingModule);
      /***/
    },

    /***/
    "oaZY":
    /*!*********************************************************!*\
      !*** ./src/app/pages/imagedetail/imagedetail.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function oaZY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZWRldGFpbC5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-imagedetail-imagedetail-module-es5.js.map