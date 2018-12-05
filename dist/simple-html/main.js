(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"image\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div id=\"modal-result\"></div>\n          <canvas id=\"canvas\"></canvas>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"btn_wrap\">\n          <span class=\"share\">Share</span>\n             <div class=\"share-container\">\n                <i onclick=\"shareFB()\" class=\"fab fa-facebook-f\"></i>\n                 <a\n       href=\"https://twitter.com/intent/tweet?text=I%20just%20wrote%20a%20Letter%20to%20Santa\"\n       data-size=\"large\">\n       <i  class=\"fab fa-twitter\"></i></a>\n       <a onclick=\"dlImage()\" ><i class=\"fas fa-file-download\"></i></a>\n             </div>\n         </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Xmas Wrapper -->\n<main class=\"xmas\">\n<div class=\"container\">\n<div class=\"d-flex flex-column p-4\">\n  <h1>Have you been a little bit more naughty than nice this year and need a kick-ass letter to get in Santa’s good graces?</h1>\n  <video src=\"https://media.giphy.com/media/l1L0iPBUx1tmHWwM0/source.mp4\" type=\"video/mp4\" autoplay loop></video>\n  <h2 class=\"pt-4\">No worries. We got this.</h2>\n  <h3 class=\"pt-2\">Let Obviouslee Marketing put that PR spin on your year of debauchery.</h3>\n  <p>Together, we’ll craft a letter that will definitely be one that Santa remembers and is sure to get you more than coal (here's hoping).\n  To get started, follow the prompts below and answer a couple of simple questions for us.</p>\n  <hr/>\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"ONE\" placeholder=\"Enter a name\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"TWO\" placeholder=\"Enter another name\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"THREE\" placeholder=\"THREE\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"FOUR\" placeholder=\"FOUR\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"FIVE\" placeholder=\"FIVE\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"SIX\" placeholder=\"SIX\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"SEVEN\" placeholder=\"SEVEN\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"EIGHT\" placeholder=\"EIGHT\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"NINE\" placeholder=\"NINE\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"TEN\" placeholder=\"TEN\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"ELEVEN\" placeholder=\"ELEVEN\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"TWELVE\" placeholder=\"TWELVE\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"THIRTEEN\" placeholder=\"THIRTEEN\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"FOURTEEN\" placeholder=\"FOURTEEN\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"FIFTEEN\" placeholder=\"FIFTEEN\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"SIXTEEN\" placeholder=\"SIXTEEN\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"SEVENTEEN\" placeholder=\"SEVENTEEN\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"EIGHTEEN\" placeholder=\"EIGHTEEN\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"NINETEEN\" placeholder=\"NINETEEN\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"TWENTY\" placeholder=\"TWENTY\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"TWENTYONE\" placeholder=\"TWENTYONE\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"TWENTYTWO\" placeholder=\"TWENTYTWO\">\n\n  <input type=\"text\" class=\"form-control  input-lg m-1\" id=\"TWENTYTHREE\" placeholder=\"TWENTYTHREE\">\n\n\n  <div class=\"d-flex\">\n\n  <button onclick=\"generateLetter()\" class=\"btn_wrap\" data-toggle=\"modal\" data-target=\"#exampleModal\">Generate My Letter To Santa</button>\n  </div>\n  <div class=\"outer\">\n  <div class=\"inner\">\n     <div id=\"result\"></div>\n  </div>\n</div>\n</div>\n</div>\n</main>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/obviouslee/Desktop/letter-to-santa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map