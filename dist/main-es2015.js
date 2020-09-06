(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/book-event/book-event.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/book-event/book-event.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-t-35\">\n  <h2 class=\"center-text\">{{eventDetails.eventName}}</h2>\n  <h4 class=\"center-text\">Number of available seats: {{eventDetails.availableSeats}}</h4>\n\n</div>\n<div class=\"card m-r-20 m-l-20 m-t-35\">\n  <div class=\"card-body m-r-20 m-l-20\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <img src=\"{{eventDetails.eventImage}}\" width=\"100%\">\n      </div>\n      <div class=\"col-sm-9\" [formGroup]=\"bookEventForm\">\n\n        <div>\n          <label>Name:</label>\n          <input class=\"form-control\" formControlName=\"userName\" placeholder=\"Enter your name\">\n          <small class=\"form-text text-muted invalid-data\"\n            *ngIf=\"f['userName'].required && (f['userName'].dirty || f['userName'].touched)\"\n            class=\"invalid-data\">\n            Please enter your name</small> \n            <small class=\"form-text text-muted invalid-data\"\n            *ngIf=\"f['userName'].invalid  && (f['userName'].dirty || f['userName'].touched)\">\n            Only letters and spaces are allowed</small>\n        </div>\n\n        <div>\n          <label>Email:</label>\n          <input class=\"form-control\" formControlName=\"email\" placeholder=\"Enter email\">\n            <small class=\"form-text text-muted invalid-data\"\n            *ngIf=\"f['email'].required && (f['email'].dirty || f['email'].touched)\"\n            class=\"invalid-data\">\n            Please enter your email</small> \n            <small class=\"form-text text-muted invalid-data\"\n            *ngIf=\"f['email'].invalid && (f['email'].dirty || f['email'].touched)\">\n            Invalid email</small>\n\n        </div>\n\n        <div>\n          <label>Phone No.:</label>\n          <input class=\"form-control\" formControlName=\"phoneNumber\" placeholder=\"Enter phone number\">\n          <small class=\"form-text text-muted invalid-data\"\n            *ngIf=\"f['phoneNumber'].required && (f['phoneNumber'].dirty || f['phoneNumber'].touched)\"\n            class=\"invalid-data\">\n            Please enter your phone number</small> \n            <small class=\"form-text text-muted invalid-data\"\n            *ngIf=\"f['phoneNumber'].invalid && (f['phoneNumber'].dirty || f['phoneNumber'].touched)\">\n            Invalid phone number</small>\n        </div>\n\n        <div>\n          <label>No. of seats:</label>\n          <select class=\"form-control\" formControlName=\"noOfSeats\" placeholder=\"Select No. of seats\"\n            (change)=\"noOfSeats(bookEventForm.value.noOfSeats)\">\n            <option value=''>Select seats</option>\n            <option value='1'>1</option>\n            <option value='2'>2</option>\n            <option value='3'>3</option>\n            <option value='4'>4</option>\n            <option value='5'>5</option>\n            <option value='6'>6</option>\n          </select>\n          <small class=\"form-text text-muted invalid-data\"\n          *ngIf=\"f['noOfSeats'].invalid && (f['noOfSeats'].dirty || f['noOfSeats'].touched)\"\n          class=\"invalid-data\">\n          Please select the number of seats</small>\n          <small class=\"invalid-data\" *ngIf=\"bookEventForm.value.noOfSeats > eventDetails.availableSeats\">Number of seats selected is\n            more than available seats </small>\n        </div>\n        <div *ngIf=\"bookEventForm.value.noOfSeats <= eventDetails.availableSeats\">\n          <div *ngFor=\"let otherAttendee of t.controls; let i = index\">\n            <div [formGroup]=\"otherAttendee\">\n              <label>Name of Attendees #{{i+2}}</label>\n              <input class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Attendee Name\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"buttons\">\n          <button class=\"btn btn-primary m-t-35\" [routerLink]=\"['/list-event']\">Cancel</button>\n          <button class=\"btn btn-success m-t-35 m-l-5\"\n            (click)=\"submit(successTemplate,errorTemplate)\">Submit</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #successTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Success!</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    Booking Success for {{eventDetails.eventName}}.\n  </div>\n</ng-template>\n\n<ng-template #errorTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Failed!</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    Invalid details or Something went wrong.\n  </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/list-events/list-events.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/list-events/list-events.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center-text m-t-35\">\n  <input class=\"search-bar\" [(ngModel)]=\"searchEvent\" placeholder=\"SEARCH EVENTS\">\n</div>\n<div class=\"center-text\" *ngIf=\"(events | listFilter:searchEvent).length === 0\">\n  \"No results found!\"\n</div>\n\n<div class=\"row m-t-35\" >\n    <div class=\"col-md-3 col-sm-6 col-xs-12\" *ngFor=\"let items of events | listFilter:searchEvent\">\n      <div class=\"card m-t-20 m-r-20 m-l-20 m-b-35\">\n        <div class=\"card-header center-text\" >{{items.eventName}}</div>\n        <div class=\"card-block\">\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <img [src]= \"items.eventImage\" class=\"card-image\">\n            </div>\n            <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <p>{{items.eventDate}}</p>\n            <label>Seats Available:</label>\n            <p>{{eventBookings[items['_id']]?(items.totalSeats - eventBookings[items['_id']]): items.totalSeats }}</p>\n\n            <button  *ngIf=\"(eventBookings[items['_id']]?(items.totalSeats - eventBookings[items['_id']]): items.totalSeats)\" class=\"btn btn-primary btn-m-b\" (click)=\"book(items,(eventBookings[items['_id']]?(items.totalSeats - eventBookings[items['_id']]): items.totalSeats))\">Book Now</button>\n            <button  *ngIf=\"!(eventBookings[items['_id']]?(items.totalSeats - eventBookings[items['_id']]): items.totalSeats)\" class=\"btn btn-warning btn-m-b\" [disabled]=true>Sold Out</button>\n            </div>\n          </div>            \n            \n        </div>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_event_list_events_list_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/event/list-events/list-events.component */ "./src/app/pages/event/list-events/list-events.component.ts");
/* harmony import */ var _pages_event_book_event_book_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/event/book-event/book-event.component */ "./src/app/pages/event/book-event/book-event.component.ts");





const routes = [
    {
        path: '',
        component: _pages_event_list_events_list_events_component__WEBPACK_IMPORTED_MODULE_3__["ListEventsComponent"]
    },
    {
        path: 'book-event',
        component: _pages_event_book_event_book_event_component__WEBPACK_IMPORTED_MODULE_4__["BookEventComponent"]
    },
    {
        path: 'list-event',
        component: _pages_event_list_events_list_events_component__WEBPACK_IMPORTED_MODULE_3__["ListEventsComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'event-management';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_event_list_events_list_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/event/list-events/list-events.component */ "./src/app/pages/event/list-events/list-events.component.ts");
/* harmony import */ var _pages_event_book_event_book_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/event/book-event/book-event.component */ "./src/app/pages/event/book-event/book-event.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-filter-pipe */ "./node_modules/ng2-filter-pipe/dist/index.js");
/* harmony import */ var ng2_filter_pipe__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_filter_pipe__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _list_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-filter.pipe */ "./src/app/list-filter.pipe.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_event_list_events_list_events_component__WEBPACK_IMPORTED_MODULE_5__["ListEventsComponent"],
            _pages_event_book_event_book_event_component__WEBPACK_IMPORTED_MODULE_6__["BookEventComponent"],
            _list_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["ListFilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            ng2_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["Ng2FilterPipeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/events.service.ts":
/*!***********************************!*\
  !*** ./src/app/events.service.ts ***!
  \***********************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EventsService = class EventsService {
    constructor(http) {
        this.http = http;
        this.serverUrl = "/";
        this.getEventsList().subscribe(data => {
            console.log(data);
        });
    }
    getEventsList() {
        return this.http.get("./assets/eventList.json");
    }
    postApi(url, data) {
        return this.http.post(this.serverUrl + url, data);
    }
    getApi(url) {
        return this.http.get(this.serverUrl + url);
    }
};
EventsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventsService);



/***/ }),

/***/ "./src/app/list-filter.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/list-filter.pipe.ts ***!
  \*************************************/
/*! exports provided: ListFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterPipe", function() { return ListFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListFilterPipe = class ListFilterPipe {
    transform(list, filterText) {
        return list ? list.filter(item => item.eventName.search(new RegExp(filterText, 'i')) > -1) : [];
    }
};
ListFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'listFilter'
    })
], ListFilterPipe);



/***/ }),

/***/ "./src/app/pages/event/book-event/book-event.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/event/book-event/book-event.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center-text {\n  text-align: center;\n}\n\n.m-t-35 {\n  margin-top: 35px;\n}\n\n.m-t-15 {\n  margin-left: 15px;\n}\n\n.m-r-20 {\n  margin-right: 20px;\n}\n\n.m-l-20 {\n  margin-left: 20px;\n}\n\n.m-l-5 {\n  margin-left: 5px;\n}\n\n.buttons {\n  text-align: right;\n}\n\n.invalid-data {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnQvYm9vay1ldmVudC9DOlxcVXNlcnNcXGFudXNoXFxEb3dubG9hZHNcXEludGVydmlldy1GdWxsLXN0YWNrXFxJbnRlcnZpZXctRnVsbC1zdGFja1xcZmluYWwtY29kZS9zcmNcXGFwcFxccGFnZXNcXGV2ZW50XFxib29rLWV2ZW50XFxib29rLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ldmVudC9ib29rLWV2ZW50L2Jvb2stZXZlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKOztBREFBO0VBQ0ksVUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnQvYm9vay1ldmVudC9ib29rLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubS10LTM1e1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG4ubS10LTE1e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tLXItMjB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tLWwtMjB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4ubS1sLTV7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uaW52YWxpZC1kYXRhe1xyXG4gICAgY29sb3I6cmVkXHJcbn0iLCIuY2VudGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tLXQtMzUge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4ubS10LTE1IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5tLXItMjAge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5tLWwtMjAge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLm0tbC01IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmludmFsaWQtZGF0YSB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/event/book-event/book-event.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/event/book-event/book-event.component.ts ***!
  \****************************************************************/
/*! exports provided: BookEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEventComponent", function() { return BookEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/events.service */ "./src/app/events.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");






let BookEventComponent = class BookEventComponent {
    constructor(formBuilder, route, router, eventService, modalService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.eventService = eventService;
        this.modalService = modalService;
        this.events = [];
        this.eventDetails = {};
        this.bookingsCount = 0;
    }
    ngOnInit() {
        this.eventDetails = JSON.parse(sessionStorage.getItem('eventData'));
        this.bookEventForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z\ \s]+$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[6-9]\d{9}$/)]],
            noOfSeats: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            otherAttendees: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
    }
    get f() { return this.bookEventForm.controls; }
    get t() { return this.f.otherAttendees; }
    //To know the selected seats
    noOfSeats(data) {
        console.log(data);
        this.t.controls = [];
        for (let i = 1; i < data; i++) {
            this.t.push(this.formBuilder.group({
                name: [''],
            }));
        }
    }
    //form validation
    enableFromValidation(form) {
        Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    }
    //calling post API for submitting the values
    submit(success, error) {
        this.bookEventForm.value['eventId'] = this.eventDetails['_id'];
        console.log(this.bookEventForm.value);
        if (!this.bookEventForm.valid) {
            this.enableFromValidation(this.bookEventForm);
            this.openModal(error);
            return;
        }
        this.eventService.postApi('book-event', this.bookEventForm.value).subscribe(res => {
            if (res.success) {
                this.openModal(success);
                this.router.navigate(['/list-event']);
            }
            else {
                this.openModal(error);
            }
        });
    }
    //Template to display success or error messages
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
};
BookEventComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }
];
BookEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-event',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-event.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/book-event/book-event.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-event.component.scss */ "./src/app/pages/event/book-event/book-event.component.scss")).default]
    })
], BookEventComponent);



/***/ }),

/***/ "./src/app/pages/event/list-events/list-events.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/event/list-events/list-events.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".m-t-35 {\n  margin-top: 35px;\n}\n\n.center-text {\n  text-align: center;\n}\n\n.search-bar {\n  text-align: center;\n  width: 50%;\n  padding: 10px;\n}\n\n.m-t-20 {\n  margin-top: 20px;\n}\n\n.m-r-20 {\n  margin-right: 20px;\n}\n\n.m-l-20 {\n  margin-left: 20px;\n}\n\n.m-b-35 {\n  margin-bottom: 35px;\n}\n\n.btn-m-b {\n  margin-bottom: 15px;\n}\n\n.card-image {\n  width: 100%;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card-header {\n  background: #063e73;\n  color: #fff;\n}\n\n.btn-primary {\n  background: #2edabc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnQvbGlzdC1ldmVudHMvQzpcXFVzZXJzXFxhbnVzaFxcRG93bmxvYWRzXFxJbnRlcnZpZXctRnVsbC1zdGFja1xcSW50ZXJ2aWV3LUZ1bGwtc3RhY2tcXGZpbmFsLWNvZGUvc3JjXFxhcHBcXHBhZ2VzXFxldmVudFxcbGlzdC1ldmVudHNcXGxpc3QtZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ldmVudC9saXN0LWV2ZW50cy9saXN0LWV2ZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNFQTs7QURFQTtFQUNBLG1CQUFBO0FDQ0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ldmVudC9saXN0LWV2ZW50cy9saXN0LWV2ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tLXQtMzV7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG59XHJcblxyXG4uY2VudGVyLXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgcGFkZGluZzoxMHB4XHJcbn1cclxuXHJcbi5tLXQtMjB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubS1yLTIwe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubS1sLTIwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tLWItMzV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcbi5idG4tbS1ie1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2V7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufVxyXG5cclxuLmNhcmQtaGVhZGVye1xyXG5iYWNrZ3JvdW5kOiAjMDYzZTczO1xyXG5jb2xvcjojZmZmO1xyXG5cclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5e1xyXG5iYWNrZ3JvdW5kOiAjMmVkYWJjO1xyXG59XHJcblxyXG4iLCIubS10LTM1IHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLmNlbnRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm0tdC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tLXItMjAge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5tLWwtMjAge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLm0tYi0zNSB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5idG4tbS1iIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNhcmQtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzA2M2U3MztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMyZWRhYmM7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/event/list-events/list-events.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/event/list-events/list-events.component.ts ***!
  \******************************************************************/
/*! exports provided: ListEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventsComponent", function() { return ListEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/events.service */ "./src/app/events.service.ts");




let ListEventsComponent = class ListEventsComponent {
    constructor(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.events = [];
        this.bookings = [];
        this.eventBookings = {};
        this.eventService.getEventsList().subscribe(res => {
            this.events = res;
        });
    }
    ngOnInit() {
        this.eventService.getApi('getAllBookings').subscribe(res => {
            if (res.success) {
                this.bookings = res.data;
                this.bookings.forEach(element => {
                    console.log(element);
                    if (this.eventBookings[element.eventId]) {
                        this.eventBookings[element.eventId] = this.eventBookings[element.eventId] + element.noOfSeats;
                    }
                    else {
                        this.eventBookings[element.eventId] = element.noOfSeats;
                    }
                });
                console.log(this.eventBookings);
            }
        });
    }
    book(data, availableSeats) {
        data['availableSeats'] = availableSeats;
        sessionStorage.setItem('eventData', JSON.stringify(data));
        this.router.navigate(['/book-event']);
    }
};
ListEventsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] }
];
ListEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-events.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/list-events/list-events.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-events.component.scss */ "./src/app/pages/event/list-events/list-events.component.scss")).default]
    })
], ListEventsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\anush\Downloads\Interview-Full-stack\Interview-Full-stack\final-code\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map