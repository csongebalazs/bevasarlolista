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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _lista_valaszto_lista_valaszto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-valaszto/lista-valaszto.component */ "./src/app/lista-valaszto/lista-valaszto.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _regisztracio_regisztracio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./regisztracio/regisztracio.component */ "./src/app/regisztracio/regisztracio.component.ts");







var routes = [
    { path: 'listaLista', component: _lista_valaszto_lista_valaszto_component__WEBPACK_IMPORTED_MODULE_3__["ListaValasztoComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]] },
    { path: 'reg', component: _regisztracio_regisztracio_component__WEBPACK_IMPORTED_MODULE_6__["RegisztracioComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', redirectTo: 'listaLista', pathMatch: 'full' },
    { path: '**', redirectTo: 'listaLista' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-window\">\n    <div class=\"app-fejlec\">\n        Bevásárló lista kezelő\n    </div>\n    <div class=\"app-router-outlet\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-window {\n  overflow: hidden;\n  width: 100%;\n  height: 97vh;\n  display: flex;\n  flex-direction: column;\n  background-color: ghostwhite; }\n\n.app-fejlec {\n  flex-basis: 60px;\n  height: 60px;\n  line-height: 60px;\n  width: 100%;\n  font-size: 30px;\n  font-weight: 800;\n  text-align: center;\n  flex-shrink: 0;\n  flex-grow: 0; }\n\n.app-router-outlet {\n  flex-shrink: 1;\n  flex-grow: 1;\n  width: 100%;\n  max-height: calc(100% - 60px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFRhbnVsYXNcXGFuZ3VsYXIyXFxCRVZBU0FSTE9MSVNUQVxcYmV2YXNhcmxvLWxpc3RhL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYWluLXdpbmRvdyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDk3dmg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcclxufVxyXG5cclxuLmFwcC1mZWpsZWMge1xyXG4gICAgZmxleC1iYXNpczogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbn1cclxuLmFwcC1yb3V0ZXItb3V0bGV0IHtcclxuICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcclxufVxyXG5cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bevasarlo-lista';
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyBi6CPNouDxhvUeP0MsUOJna5pCRN6HUV8",
            authDomain: "bevasarlolista-8247e.firebaseapp.com"
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _db_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lista_valaszto_lista_valaszto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lista-valaszto/lista-valaszto.component */ "./src/app/lista-valaszto/lista-valaszto.component.ts");
/* harmony import */ var _regisztracio_regisztracio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regisztracio/regisztracio.component */ "./src/app/regisztracio/regisztracio.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _lista_valaszto_lista_valaszto_component__WEBPACK_IMPORTED_MODULE_11__["ListaValasztoComponent"],
                _regisztracio_regisztracio_component__WEBPACK_IMPORTED_MODULE_12__["RegisztracioComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"]
            ],
            providers: [_db_service_service__WEBPACK_IMPORTED_MODULE_3__["DbServiceService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var result = this.authService.isAuthenticated();
        if (!result) {
            this.router.navigate(['/login']);
        }
        return result;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.regisztracio = function (email, password) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.belepes = function (email, password) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
        this.token = null;
        this.email = null;
        this.router.navigate(['/login']);
    };
    AuthService.prototype.setToken = function (token, email) {
        if (token) {
            console.log('A beállított token: ', token);
            this.token = token;
            console.log('A beállított email: ', email);
            this.email = email;
        }
    };
    AuthService.prototype.getEmail = function () {
        return this.email;
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.getTokenPromise = function () {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken();
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/db-service.service.ts":
/*!***************************************!*\
  !*** ./src/app/db-service.service.ts ***!
  \***************************************/
/*! exports provided: DbServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbServiceService", function() { return DbServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DbServiceService = /** @class */ (function () {
    function DbServiceService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
    }
    DbServiceService.prototype.listakMentese = function (listak) {
        var token = this.authService.getToken();
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('PUT', 'https://bevasarlolista-8247e.firebaseio.com/listak.json?auth=' + token, listak);
        return this.httpClient.request(req);
    };
    DbServiceService.prototype.listakLekerese = function () {
        var token = this.authService.getToken();
        return this.httpClient.get('https://bevasarlolista-8247e.firebaseio.com/listak.json?auth=' + token, {
            observe: 'body',
            responseType: 'json'
        });
    };
    DbServiceService.prototype.elemekMentese = function (elemek) {
        var token = this.authService.getToken();
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('PUT', 'https://bevasarlolista-8247e.firebaseio.com/elemek.json?auth=' + token, elemek);
        return this.httpClient.request(req);
    };
    DbServiceService.prototype.elemekLekerese = function () {
        var token = this.authService.getToken();
        return this.httpClient.get('https://bevasarlolista-8247e.firebaseio.com/elemek.json?auth=' + token, {
            observe: 'body',
            responseType: 'json'
        });
    };
    DbServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], DbServiceService);
    return DbServiceService;
}());



/***/ }),

/***/ "./src/app/lista-valaszto/lista-valaszto.component.html":
/*!**************************************************************!*\
  !*** ./src/app/lista-valaszto/lista-valaszto.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lista-wrapper\"\n     *ngIf=\"tabNum==0\">\n    <div class=\"lista-lista-panel\"\n         [ngClass]=\"{'rovid-lista': rovidE(), 'hosszabb-lista': !rovidE()}\">\n        <div class=\"lista\"\n             *ngFor=\"let lista of listak\"\n             (click)=\"listaKijeloles(lista)\">\n            <div class=\"lista-nev\">\n                {{lista.listaNev}}\n            </div>\n            <div class=\"lista-ikon pi pi-list\"></div>\n        </div>\n    </div>\n    <div class=\"lista-lista-gombsor\">\n        <button type=\"button\"\n                pButton\n                class=\"ui-button-warning\"\n                icon=\"pi pi-sign-out\"\n                (click)=\"kilepes()\"\n                label=\"Kilépés\"></button>\n        <button type=\"button\"\n                pButton\n                class=\"ui-button-success\"\n                icon=\"pi pi-plus\"\n                (click)=\"ujListaFelvetele()\"\n                label=\"Új Lista\"></button>\n    </div>\n</div>\n<div class=lista-elem-wrapper\n     *ngIf=\"tabNum==1\">\n    <div class=\"lista-nev\">{{kivalasztottLista.listaNev}}</div>\n    <div class=\"lista-felhasznalo\">{{kivalasztottLista.felhasznaloAzon}}</div>\n    <div class=\"lista-allapot\">{{kivalasztottLista.allapot}}</div>\n    <div class=\"elemek-wrappper\">\n        <div class=\"elem-lista\"\n             *ngIf=\"kivalasztottLista.elemek\">\n            <!-- <p-table [value]=\"kivalasztottLista?.elemek\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th *ngFor=\"let col of oszlopok\">\n                            {{col.header}}\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\"\n                             let-elem>\n                    <tr>\n                        <td *ngFor=\"let col of oszlopok\">\n                            {{elem[col.field]}}\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table> -->\n            <div class=\"lista-elem\"\n                 *ngFor=\"let elem of kivalasztottLista.elemek\">\n                {{elem.nev}}\n            </div>\n        </div>\n        <div class=\"elem-lista-gombsor\">\n            <button type=\"button\"\n                    pButton\n                    class=\"ui-button-warning\"\n                    icon=\"pi pi-chevron-left\"\n                    (click)=\"listaListakhozVissza()\"\n                    label=\"Vissza a listákhoz\"></button>\n            <button type=\"button\"\n                    pButton\n                    class=\"ui-button-success\"\n                    icon=\"pi pi-plus\"\n                    (click)=\"ujElemFelvetele()\"\n                    label=\"Új elem\"></button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lista-valaszto/lista-valaszto.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/lista-valaszto/lista-valaszto.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lista-wrapper {\n  height: 98%;\n  width: 100%;\n  padding: 0 30px;\n  display: flex;\n  flex-direction: column; }\n  .lista-wrapper .lista-lista-panel {\n    flex-grow: 1;\n    flex-shrink: 1;\n    overflow-y: auto;\n    overflow-x: hidden;\n    display: flex;\n    flex-direction: column; }\n  .lista-wrapper .lista-lista-panel .lista {\n      height: 20%;\n      min-height: 90px;\n      flex-grow: 0;\n      flex-shrink: 0;\n      border: 1px solid indigo;\n      background-color: lavender;\n      margin-bottom: 10px;\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n  .lista-wrapper .lista-lista-panel .lista .lista-nev {\n        margin-left: 10px;\n        flex-grow: 1;\n        text-align: center;\n        font-weight: 600;\n        font-size: 20px; }\n  .lista-wrapper .lista-lista-panel .lista .lista-ikon {\n        margin-right: 10px;\n        font-size: 30px;\n        flex-grow: 0; }\n  .lista-wrapper .lista-lista-gombsor {\n    height: 60px;\n    flex-grow: 0;\n    flex-shrink: 0;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  .lista-wrapper .lista-lista-gombsor button {\n      min-width: 200px;\n      width: 40%; }\n  .rovid-lista {\n  justify-content: space-evenly; }\n  .hosszabb-lista {\n  justify-content: start; }\n  .elem-lista-gombsor {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n  .elem-lista-gombsor .ui-button {\n    flex-shrink: 0;\n    flex-grow: 1;\n    min-width: 200px;\n    margin: 0 10px; }\n  .ui-button-text.ui-clickable {\n  margin-left: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGEtdmFsYXN6dG8vRDpcXFRhbnVsYXNcXGFuZ3VsYXIyXFxCRVZBU0FSTE9MSVNUQVxcYmV2YXNhcmxvLWxpc3RhL3NyY1xcYXBwXFxsaXN0YS12YWxhc3p0b1xcbGlzdGEtdmFsYXN6dG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUFMMUI7SUFRUSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFHbEIsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VBZjlCO01Ba0JZLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGNBQWM7TUFDZCx3QkFBd0I7TUFDeEIsMEJBQTBCO01BQzFCLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLG1CQUFtQixFQUFBO0VBM0IvQjtRQThCZ0IsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGVBQWUsRUFBQTtFQWxDL0I7UUFzQ2dCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsWUFBWSxFQUFBO0VBeEM1QjtJQThDUSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFFZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTtFQXJEdEM7TUF3RFksZ0JBQWdCO01BQ2hCLFVBQVUsRUFBQTtFQU10QjtFQUNJLDZCQUE2QixFQUFBO0VBR2pDO0VBQ0ksc0JBQXNCLEVBQUE7RUFHMUI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtFQUhuQjtJQU1RLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTtFQUl0QjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGlzdGEtdmFsYXN6dG8vbGlzdGEtdmFsYXN6dG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdGEtd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDk4JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmxpc3RhLWxpc3RhLXBhbmVsIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gICAgICAgIC8vIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLmxpc3RhIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGluZGlnbztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAubGlzdGEtbmV2IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpc3RhLWlrb24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saXN0YS1saXN0YS1nb21ic29yIHtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucm92aWQtbGlzdGEge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5ob3NzemFiYi1saXN0YSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4uZWxlbS1saXN0YS1nb21ic29yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC51aS1idXR0b24ge1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udWktYnV0dG9uLXRleHQudWktY2xpY2thYmxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/lista-valaszto/lista-valaszto.component.ts":
/*!************************************************************!*\
  !*** ./src/app/lista-valaszto/lista-valaszto.component.ts ***!
  \************************************************************/
/*! exports provided: ListaValasztoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaValasztoComponent", function() { return ListaValasztoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _db_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ListaValasztoComponent = /** @class */ (function () {
    function ListaValasztoComponent(dbServiceService, authService) {
        this.dbServiceService = dbServiceService;
        this.authService = authService;
        this.email = null;
        this.listak = [];
        this.elemek = [];
        this.kivalasztottLista = null;
        this.tabNum = 0;
    }
    ListaValasztoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = this.authService.getEmail();
        console.log('belépett emberke email címe: ', this.email);
        this.oszlopok = [
            { field: 'nev', header: 'Név' },
            { field: 'mennyiseg', header: 'Mennyiség' },
            { field: 'megjegyzes', header: 'Megjegyzés' }
        ];
        this.tabNum = 0;
        this.dbServiceService.listakLekerese().subscribe(function (listak) {
            // console.log('A lekért listák : ', listak);
            _this.listak = listak.filter(function (lista) { return lista.felhasznaloAzon === _this.email; });
        }, function (error) {
            console.error('Hiba a listák lekérése során: ', error);
        });
        this.dbServiceService.elemekLekerese().subscribe(function (elemek) {
            console.log('A lekért elemek : ', elemek);
            _this.elemek = elemek;
        }, function (error) {
            console.error('Hiba az elemek lekérése során: ', error);
        });
    };
    ListaValasztoComponent.prototype.rovidE = function () {
        return this.listak !== undefined && this.listak != null && this.listak.length < 4;
    };
    ListaValasztoComponent.prototype.listaKijeloles = function (lista) {
        console.log('listaKijeloles', lista);
        if (lista) {
            this.kivalasztottLista = lista;
            this.tabNum = 1;
        }
    };
    ListaValasztoComponent.prototype.ujListaFelvetele = function () {
        console.log('ÚJ LISTÁT AKAROK!');
        // this.dbServiceService.listakMentese(this.listak).subscribe(
        //     res => {
        //         console.log('A listák mentése sikeres: ', res);
        //     },
        //     error => {
        //         console.error('Hiba a listák mentése során: ', error);
        //     });
    };
    ListaValasztoComponent.prototype.ujElemFelvetele = function () {
        console.log('ÚJ ELEMET AKAROK!');
        // this.dbServiceService.elemekMentese(this.elemek).subscribe(
        //     res => {
        //         console.log('Az elemek mentése sikeres: ', res);
        //     },
        //     error => {
        //         console.error('Hiba az elemek mentése során: ', error);
        //     });
    };
    ListaValasztoComponent.prototype.listaListakhozVissza = function () {
        this.kivalasztottLista = null;
        this.tabNum = 0;
    };
    ListaValasztoComponent.prototype.kilepes = function () {
        this.authService.logout();
    };
    ListaValasztoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-lista-valaszto',
            template: __webpack_require__(/*! ./lista-valaszto.component.html */ "./src/app/lista-valaszto/lista-valaszto.component.html"),
            styles: [__webpack_require__(/*! ./lista-valaszto.component.scss */ "./src/app/lista-valaszto/lista-valaszto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_db_service_service__WEBPACK_IMPORTED_MODULE_2__["DbServiceService"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ListaValasztoComponent);
    return ListaValasztoComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-1 ui-md-2 ui-lg-3\"></div>\n    <div class=\"ui-g-10 ui-md-8 ui-lg-6\">\n        <div class=\"fejlec\">\n            <h2>Belépés</h2>\n        </div>\n        <div class=\"mezo\">\n            <span class=\"ui-float-label\">\n                <input type=\"text\"\n                       pInputText\n                       id=\"email\"\n                       [(ngModel)]=\"email\" />\n                <label for=\"email\"\n                       class=\"labelka\">Email</label>\n            </span>\n        </div>\n        <div class=\"mezo\">\n            <span class=\"ui-float-label\">\n                <input type=\"password\"\n                       pInputText\n                       id=\"jelszo\"\n                       [(ngModel)]=\"jelszo\" />\n                <label for=\"jelszo\">Jelszó</label>\n            </span>\n        </div>\n        <div class=\"gombsor\">\n            <button type=\"button\"\n                    pButton\n                    class=\"ui-button-success\"\n                    icon=\"pi pi-sign-in\"\n                    (click)=\"login()\"\n                    label=\"Belépés\"></button>\n            <button type=\"button\"\n                    pButton\n                    class=\"ui-button-info\"\n                    icon=\"pi pi-user\"\n                    (click)=\"regisztracio()\"\n                    label=\"Regisztráció\"></button>\n\n        </div>\n        <div *ngIf=\"loginHiba\"\n             class=\"hiba\">\n            <span><i class=\"pi pi-exclamation-triangle\"></i></span><span>{{loginHiba}}</span>\n        </div>\n\n    </div>\n    <div class=\"ui-g-1 ui-md-2 ui-lg-3\"></div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fejlec {\n  text-align: center; }\n\n.mezo {\n  margin-top: 50px; }\n\n.ui-float-label > label {\n  font-size: 16px;\n  font-weight: 800; }\n\n.gombsor {\n  width: 100%;\n  height: 60px;\n  margin-top: 40px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.gombsor button {\n    min-width: 120px;\n    width: 40%; }\n\n.hiba {\n  margin-top: 30px;\n  color: red;\n  border: 1px solid red;\n  border-radius: 3px;\n  line-height: 2;\n  padding-left: 10px; }\n\n.hiba i {\n    margin-right: 10px;\n    padding-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFRhbnVsYXNcXGFuZ3VsYXIyXFxCRVZBU0FSTE9MSVNUQVxcYmV2YXNhcmxvLWxpc3RhL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFFZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFWbEM7SUFhUSxnQkFBZ0I7SUFDaEIsVUFBVSxFQUFBOztBQUtsQjtFQUNJLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBTnRCO0lBU1Esa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVqbGVjIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1lem8ge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnVpLWZsb2F0LWxhYmVsPmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5nb21ic29yIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIC8vIGhlaWdodDogNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhpYmEge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.jelszo = null;
        this.email = null;
        this.loginHiba = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.semmi = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('Indul a login');
        this.authService.belepes(this.email, this.jelszo)
            .then(function (response) {
            console.log('Sikeres bejelentkezé. ', response);
            _this.loginHiba = null;
            _this.authService.getTokenPromise().then(function (token) {
                _this.authService.setToken(token, _this.email);
                _this.router.navigate(['/listaLista']);
            });
        })
            .catch(function (error) {
            console.error('Hiba a bejelentkezés során! ', error);
            if (error && error.message) {
                _this.loginHiba = error.message;
            }
            else {
                _this.loginHiba = 'Ismeretlen hiba...';
            }
        });
    };
    LoginComponent.prototype.regisztracio = function () {
        console.log('Irány a regisztráció');
        this.router.navigate(['/reg']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/regisztracio/regisztracio.component.html":
/*!**********************************************************!*\
  !*** ./src/app/regisztracio/regisztracio.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-1 ui-md-2 ui-lg-3\"></div>\n    <div class=\"ui-g-10 ui-md-8 ui-lg-6\">\n        <div class=\"fejlec\">\n            <h2>Regisztráció</h2>\n        </div>\n        <div class=\"mezo\">\n            <span class=\"ui-float-label\">\n                <input type=\"text\"\n                       pInputText\n                       name=\"email\"\n                       id=\"email\"\n                       [(ngModel)]=\"email\" />\n                <label for=\"email\"\n                       class=\"labelka\">Email</label>\n            </span>\n        </div>\n        <div class=\"mezo\">\n            <span class=\"ui-float-label\">\n                <input type=\"password\"\n                       pInputText\n                       name=\"jelszo\"\n                       id=\"jelszo\"\n                       [(ngModel)]=\"jelszo\" />\n                <label for=\"jelszo\">Jelszó</label>\n            </span>\n        </div>\n        <div class=\"gombsor\">\n            <button type=\"button\"\n                    pButton\n                    class=\"ui-button-warning\"\n                    icon=\"pi pi-chevron-left\"\n                    (click)=\"vissza()\"\n                    label=\"Vissza\"></button>\n            <button type=\"button\"\n                    pButton\n                    class=\"ui-button-success\"\n                    icon=\"pi pi-user\"\n                    (click)=\"regisztracio()\"\n                    label=\"Regisztráció\"></button>\n\n        </div>\n        <div *ngIf=\"regUzi\"\n             class=\"hiba\">\n            <span><i class=\"pi pi-exclamation-triangle\"></i></span><span>{{regUzi}}</span>\n        </div>\n\n    </div>\n    <div class=\"ui-g-1 ui-md-2 ui-lg-3\"></div>\n</div>"

/***/ }),

/***/ "./src/app/regisztracio/regisztracio.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/regisztracio/regisztracio.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fejlec {\n  text-align: center; }\n\n.mezo {\n  margin-top: 50px; }\n\n.ui-float-label > label {\n  font-size: 16px;\n  font-weight: 800; }\n\n.gombsor {\n  width: 100%;\n  height: 60px;\n  margin-top: 40px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.gombsor button {\n    min-width: 120px;\n    width: 40%; }\n\n.hiba {\n  margin-top: 30px;\n  color: red;\n  border: 1px solid red;\n  border-radius: 3px;\n  line-height: 2;\n  padding-left: 10px; }\n\n.hiba i {\n    margin-right: 10px;\n    padding-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN6dHJhY2lvL0Q6XFxUYW51bGFzXFxhbmd1bGFyMlxcQkVWQVNBUkxPTElTVEFcXGJldmFzYXJsby1saXN0YS9zcmNcXGFwcFxccmVnaXN6dHJhY2lvXFxyZWdpc3p0cmFjaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFFZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFWbEM7SUFhUSxnQkFBZ0I7SUFDaEIsVUFBVSxFQUFBOztBQUtsQjtFQUNJLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBTnRCO0lBU1Esa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN6dHJhY2lvL3JlZ2lzenRyYWNpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWpsZWMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWV6byB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4udWktZmxvYXQtbGFiZWw+bGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmdvbWJzb3Ige1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGliYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/regisztracio/regisztracio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/regisztracio/regisztracio.component.ts ***!
  \********************************************************/
/*! exports provided: RegisztracioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisztracioComponent", function() { return RegisztracioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var RegisztracioComponent = /** @class */ (function () {
    function RegisztracioComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.jelszo = null;
        this.email = null;
        this.regUzi = null;
    }
    RegisztracioComponent.prototype.ngOnInit = function () {
    };
    RegisztracioComponent.prototype.semmi = function () { };
    RegisztracioComponent.prototype.vissza = function () {
        this.router.navigate(['/login']);
    };
    RegisztracioComponent.prototype.regisztracio = function () {
        var _this = this;
        console.log('regisztracio: ', this.email, this.jelszo);
        // const result: any = this.authService.signupUser(this.email, this.jelszo).;
        this.authService.regisztracio(this.email, this.jelszo).then(function (result) {
            console.log(result);
            console.log('Sikeres regisztráció');
            _this.regUzi = null;
            _this.router.navigate(['/login']);
        }).catch(function (error) {
            console.error('regisztraciós hiba nyers:', error);
            if (error && error.message) {
                _this.regUzi = error.message;
            }
            else {
                _this.regUzi = 'Ismeretlen hiba...';
            }
            console.error('regisztraciós hiba:', _this.regUzi);
        });
    };
    RegisztracioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-regisztracio',
            template: __webpack_require__(/*! ./regisztracio.component.html */ "./src/app/regisztracio/regisztracio.component.html"),
            styles: [__webpack_require__(/*! ./regisztracio.component.scss */ "./src/app/regisztracio/regisztracio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisztracioComponent);
    return RegisztracioComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Tanulas\angular2\BEVASARLOLISTA\bevasarlo-lista\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map