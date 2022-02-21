/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home-img.jpeg */ "./src/images/home-img.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --main-color:#d3ad7f;\r\n    --black: #13131a;\r\n    --bg: #010103;\r\n    --border: .1rem solid rgba(255,255,255,.3)\r\n}\r\n\r\n*{\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    border: none;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n    transition: .2s linear;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n    overflow-x: hidden;\r\n    scroll-padding-top: 9rem;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nhtml::-webkit-scrollbar {\r\n    width: .8rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar-track {\r\n    background: transparent;\r\n}\r\n\r\nhtml::-webkit-scrollbar-thumb {\r\n    background: #fff;\r\n    border-radius: 5rem;\r\n}\r\n\r\nbody{\r\n    background: var(--bg);\r\n}\r\n\r\nsection{\r\n    padding: 11rem 7%;\r\n}\r\n\r\n.heading{\r\n    text-align: center;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    padding-bottom: 3.5rem;\r\n    font-size: 4rem;\r\n}\r\n\r\n.heading span{\r\n    color: var(--main-color);\r\n    text-transform: uppercase;\r\n}\r\n\r\n.btn {\r\n    margin-top: 1rem;\r\n    display: inline-block;\r\n    padding: .9rem 3rem;\r\n    font-size: 1.7rem;\r\n    color: #fff;\r\n    background: var(--main-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover{\r\n    letter-spacing: .2rem;\r\n}\r\n\r\n.header {\r\n    background: var(--bg);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1.5rem 7%;\r\n    border-bottom: var(--border);\r\n    position: fixed;\r\n    top: 0; left: 0; right: 0;\r\n    z-index: 1000;\r\n}\r\n\r\n.header .logo img {\r\n    height: 6rem;\r\n}\r\n\r\n.header .navbar a{\r\n    margin: 0 1rem;\r\n    font-size: 1.6rem;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.header .navbar a:hover {\r\n    color: var(--main-color);\r\n    border-bottom: .1rem solid var(--main-color);\r\n    padding-bottom: .5rem;\r\n}\r\n\r\n.header .icons div{\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-size: 2.5rem;\r\n    margin-left: 2rem;\r\n}\r\n\r\n.header .icons div:hover{\r\n    color: var(--main-color);\r\n}\r\n\r\n#menu-btn {\r\n    display: none;\r\n}\r\n\r\n.header .search-form {\r\n    position: absolute;\r\n    top: 115%; right: 7%;\r\n    background: #fff;\r\n    width: 50rem;\r\n    height: 5rem;\r\n    display: flex;\r\n    align-items: center;\r\n    transform: scaleY(0);\r\n    transform-origin: top;\r\n}\r\n\r\n.header .search-form.active {\r\n    transform: scaleY(1);\r\n}\r\n\r\n.header .search-form input{\r\n   height: 100%;\r\n   width: 100%;\r\n   font-size: 1.6rem;\r\n   color: var(--black);\r\n   padding: 1rem;\r\n   text-transform: none;\r\n}\r\n\r\n.header .search-form label{\r\n    cursor: pointer;\r\n    font-size: 2.2rem;\r\n    margin-right: 1.5rem;\r\n    color: var(--black);\r\n }\r\n\r\n .header .search-form label:hover{\r\n    color: var(--main-color);\r\n }\r\n\r\n.header .cart-items-container{\r\n    position: absolute;\r\n    top: 100%; right: -100%;\r\n    height: calc(100vh - 9.5rem);\r\n    width: 35rem;\r\n    background: #fff;\r\n    padding: 0 1.5rem;\r\n}\r\n\r\n.header .cart-items-container.active{\r\n    right: 0;\r\n}\r\n\r\n.header .cart-items-container .cart-item{\r\n   position: relative;\r\n   margin: 2rem 0;\r\n   display: flex;\r\n   align-items: center;\r\n   gap: 1.5rem;\r\n}\r\n\r\n.header .cart-items-container .cart-item .fa-times{\r\n    position: absolute;\r\n    top: 1rem; right: 1rem;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n    color: var(--black);\r\n }\r\n\r\n.header .cart-items-container .cart-item .fa-times:hover {\r\n    color: var(--main-color);\r\n}\r\n\r\n.header .cart-items-container .cart-item img{\r\n    height: 7rem;\r\n}\r\n\r\n.header .cart-items-container .cart-item .content h3 {\r\n    font-size: 2rem;\r\n    color: var(--black);\r\n    padding-bottom: .5rem;\r\n}\r\n\r\n.header .cart-items-container .cart-item .content .price {\r\n    font-size: 1.5rem;\r\n    color: var(--main-color);\r\n}\r\n\r\n.header .cart-items-container .btn{\r\n    width: 100%;\r\n    text-align: center;    \r\n}\r\n\r\n.home{\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.home .content{\r\n    max-width: 60rem;\r\n}\r\n\r\n.home .content h3{\r\n    font-size: 6rem;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n}\r\n\r\n.home .content p{\r\n    font-size: 2rem;\r\n    font-weight: lighter;\r\n    line-height: 1.8;\r\n    padding: 1rem 0;\r\n    color: #eee;\r\n}\r\n\r\n.about .row{\r\n    display: flex;\r\n    align-items: center;\r\n    background: var(--black);\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.about .row .image{\r\n    flex: 1 1 45rem;\r\n}\r\n\r\n.about .row .image img{\r\n    width: 100%;\r\n}\r\n\r\n.about .row .content{\r\n    flex: 1 1 45rem;\r\n    padding: 2rem;\r\n}\r\n\r\n.about .row .content h3{\r\n    font-size: 3rem;\r\n    color: #fff;\r\n}\r\n\r\n.about .row .content p{\r\n    font-size: 1.6rem;\r\n    color: #ccc;\r\n    padding: 1rem 0;\r\n    line-height: 1.8;\r\n}\r\n\r\n.menu .box-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n    gap: 1.5rem;\r\n}\r\n\r\n.menu .box-container .box{\r\n    padding: 5rem;\r\n    text-align: center;\r\n    border: var(--border);\r\n}\r\n\r\n.menu .box-container .box img{\r\n    height: 10rem;\r\n}\r\n\r\n.menu .box-container .box h3{\r\n    color: #fff;\r\n    font-size: 2rem;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.menu .box-container .box .price{\r\n    color: #fff;\r\n    font-size: 2.5rem;\r\n    padding: .5rem 0;\r\n}\r\n\r\n.menu .box-container .box .price span{\r\n    font-size: 1.5rem;\r\n    text-decoration: line-through;\r\n    font-weight: lighter;\r\n}\r\n\r\n.menu .box-container .box:hover{\r\n    background: #fff;\r\n}\r\n\r\n.menu .box-container .box:hover > *{\r\n    color: var(--black);\r\n}\r\n\r\n.products .box-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n    gap: 1.5rem;\r\n}\r\n\r\n.products .box-container .box{\r\n    text-align: center;\r\n    border: var(--border);\r\n    padding: 2rem;\r\n}\r\n\r\n.products .box-container .box .icons a{\r\n    height: 5rem;\r\n    width: 5rem;\r\n    line-height: 5rem;\r\n    font-size: 2rem;\r\n    border: var(--border);\r\n    color: #fff;\r\n    margin: .3rem;\r\n}\r\n\r\n.products .box-container .box .icons a:hover{\r\n    background: var(--main-color);\r\n}\r\n\r\n.products .box-container .box .image{\r\n    padding: 2.5rem;\r\n}\r\n\r\n.products .box-container .box .image img{\r\n    height: 25rem;\r\n}\r\n\r\n.products .box-container .box .content h3{\r\n    color: #fff;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.products .box-container .box .content .stars{\r\n    padding: 1.5rem;\r\n}\r\n\r\n.products .box-container .box .content .stars i{\r\n    font-size: 1.7rem;\r\n    color: var(--main-color);\r\n}\r\n\r\n.products .box-container .box .content .price{\r\n    color: #fff;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.products .box-container .box .content .price span{\r\n    text-decoration: line-through;\r\n    font-weight: lighter;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.review .box-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n    gap: 1.5rem;\r\n}\r\n\r\n.review .box-container .box{\r\n    border: var(--border);\r\n    text-align: center;\r\n    padding: 3rem 2rem;\r\n}\r\n\r\n.review .box-container .box p{\r\n    font-size: 1.5rem;\r\n    line-height: 1.8;\r\n    color: #ccc;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.review .box-container .box .user {\r\n    height: 7rem;\r\n    width: 7rem;\r\n    border-radius: 50%;\r\n    object-fit: cover;\r\n}\r\n\r\n.review .box-container .box h3{\r\n    padding: 1rem 0;\r\n    font-size: 2rem;\r\n    color: #fff;\r\n}\r\n\r\n.review .box-container .box .stars i{\r\n    color: #fff;\r\n    color: var(--main-color);\r\n}\r\n\r\n.contact .row{\r\n    display: flex;\r\n    background: var(--black);\r\n    flex-wrap: wrap;\r\n    gap: 1rem;\r\n}\r\n\r\n.contact .row .map{\r\n    flex: 1 1 45rem;\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.contact .row form{\r\n    flex: 1 1 45rem;\r\n    padding: 5rem 2rem;\r\n    text-align: center;\r\n}\r\n\r\n.contact .row form h3{\r\n    text-transform: uppercase;\r\n    font-size: 3.5rem;\r\n    color: #fff;\r\n}\r\n\r\n.contact .row form .inputBox{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    background: var(--black);\r\n    border: var(--border);\r\n}\r\n\r\n.contact .row form .inputBox span{\r\n    color: #fff;\r\n    font-size: 2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.contact .row form .inputBox input{\r\n    width: 100%;\r\n    padding: 2rem;\r\n    font-size: 1.7rem;\r\n    color: #fff;\r\n    text-transform: none;\r\n    background: none;\r\n}\r\n\r\n.blogs .box-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n    gap: 1.5rem;\r\n}\r\n\r\n.blogs .box-container .box{\r\n    border: var(--border);\r\n}\r\n\r\n.blogs .box-container .box .image{\r\n    height: 25rem;\r\n    overflow: hidden;\r\n    width: 100%;\r\n}\r\n\r\n.blogs .box-container .box .image img{\r\n    height: 100%;\r\n    object-fit: cover;\r\n    width: 100%;\r\n}\r\n\r\n.blogs .box-container .box:hover .image img{\r\n    transform: scale(1.2);\r\n}\r\n\r\n.blogs .box-container .box .content{\r\n    padding: 2rem;\r\n}\r\n\r\n.blogs .box-container .box .title{\r\n    font-size: 2.5rem;\r\n    line-height: 1.5;\r\n    color: #fff;\r\n}\r\n\r\n.blogs .box-container .box .content .title:hover{\r\n    color: var(--main-color);\r\n}\r\n\r\n.blogs .box-container .box .content span{\r\n    color: var(--main-color);\r\n    display: block;\r\n    padding-top: 1rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.blogs .box-container .box .content p{\r\n    font-size: 1.6rem;\r\n    line-height: 1.8;\r\n    color: #ccc;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.footer{\r\n    background: var(--black);\r\n    text-align: center;\r\n}\r\n\r\n.footer .share{\r\n    padding: 1rem 0;\r\n}\r\n\r\n.footer .share a{\r\n    height: 5rem;\r\n    width: 5rem;\r\n    line-height: 5rem;\r\n    font-size: 2rem;\r\n    color: #fff;\r\n    border: var(--border);\r\n    margin: .3rem;\r\n    border-radius: 50%;\r\n}\r\n\r\n.footer .share a:hover{\r\n    background-color: var(--main-color);\r\n}\r\n\r\n.footer .links{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    padding: 2rem 0;\r\n    gap: 1rem;\r\n}\r\n\r\n.footer .links a{\r\n    padding: .7rem 2rem;\r\n    color: #fff;\r\n    border: var(--border);\r\n    font-size: 2rem;\r\n}\r\n\r\n.footer .links a:hover{\r\n    background: var(--main-color);\r\n}\r\n\r\n.footer .credit{\r\n    font-size: 2rem;\r\n    color: #fff;\r\n    font-weight: lighter;\r\n    padding: 1.5rem;\r\n}\r\n\r\n.footer .credit span{\r\n    color: var(--main-color);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* media queries */\r\n@media (max-width: 991px){\r\n    \r\n    html{\r\n        font-size: 55%;\r\n    }\r\n\r\n    .header{\r\n        padding:1.5rem 2rem;\r\n    }\r\n\r\n    section{\r\n        padding: 2rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n   #menu-btn{\r\n       display: inline-block;\r\n   }\r\n\r\n   .header .navbar{\r\n       position: absolute;\r\n       top: 100%; right: -100%;\r\n       background: #fff;\r\n       width: 30rem;\r\n       height: calc(100vh - 9.5rem);\r\n   }\r\n\r\n   .header .navbar.active{\r\n        right: 0;\r\n   }\r\n\r\n   .header .navbar a{\r\n        color: var(--black);\r\n        display: block;\r\n        margin: 1.5rem;\r\n        padding: .5rem;\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .header .search-form {\r\n        width: 90%;\r\n        right: 2rem;\r\n    }\r\n\r\n    .home{\r\n        background-position: left;\r\n        justify-content: center;\r\n        text-align: center;\r\n    }\r\n\r\n    .home .content h3{\r\n        font-size: 4.5rem;\r\n    }\r\n\r\n    .home .content p{\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 450px){\r\n    \r\n    html{\r\n        font-size: 50%;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');\r\n\r\n:root{\r\n    --main-color:#d3ad7f;\r\n    --black: #13131a;\r\n    --bg: #010103;\r\n    --border: .1rem solid rgba(255,255,255,.3)\r\n}\r\n\r\n*{\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    border: none;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n    transition: .2s linear;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n    overflow-x: hidden;\r\n    scroll-padding-top: 9rem;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nhtml::-webkit-scrollbar {\r\n    width: .8rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar-track {\r\n    background: transparent;\r\n}\r\n\r\nhtml::-webkit-scrollbar-thumb {\r\n    background: #fff;\r\n    border-radius: 5rem;\r\n}\r\n\r\nbody{\r\n    background: var(--bg);\r\n}\r\n\r\nsection{\r\n    padding: 11rem 7%;\r\n}\r\n\r\n.heading{\r\n    text-align: center;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    padding-bottom: 3.5rem;\r\n    font-size: 4rem;\r\n}\r\n\r\n.heading span{\r\n    color: var(--main-color);\r\n    text-transform: uppercase;\r\n}\r\n\r\n.btn {\r\n    margin-top: 1rem;\r\n    display: inline-block;\r\n    padding: .9rem 3rem;\r\n    font-size: 1.7rem;\r\n    color: #fff;\r\n    background: var(--main-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover{\r\n    letter-spacing: .2rem;\r\n}\r\n\r\n.header {\r\n    background: var(--bg);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1.5rem 7%;\r\n    border-bottom: var(--border);\r\n    position: fixed;\r\n    top: 0; left: 0; right: 0;\r\n    z-index: 1000;\r\n}\r\n\r\n.header .logo img {\r\n    height: 6rem;\r\n}\r\n\r\n.header .navbar a{\r\n    margin: 0 1rem;\r\n    font-size: 1.6rem;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.header .navbar a:hover {\r\n    color: var(--main-color);\r\n    border-bottom: .1rem solid var(--main-color);\r\n    padding-bottom: .5rem;\r\n}\r\n\r\n.header .icons div{\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-size: 2.5rem;\r\n    margin-left: 2rem;\r\n}\r\n\r\n.header .icons div:hover{\r\n    color: var(--main-color);\r\n}\r\n\r\n#menu-btn {\r\n    display: none;\r\n}\r\n\r\n.header .search-form {\r\n    position: absolute;\r\n    top: 115%; right: 7%;\r\n    background: #fff;\r\n    width: 50rem;\r\n    height: 5rem;\r\n    display: flex;\r\n    align-items: center;\r\n    transform: scaleY(0);\r\n    transform-origin: top;\r\n}\r\n\r\n.header .search-form.active {\r\n    transform: scaleY(1);\r\n}\r\n\r\n.header .search-form input{\r\n   height: 100%;\r\n   width: 100%;\r\n   font-size: 1.6rem;\r\n   color: var(--black);\r\n   padding: 1rem;\r\n   text-transform: none;\r\n}\r\n\r\n.header .search-form label{\r\n    cursor: pointer;\r\n    font-size: 2.2rem;\r\n    margin-right: 1.5rem;\r\n    color: var(--black);\r\n }\r\n\r\n .header .search-form label:hover{\r\n    color: var(--main-color);\r\n }\r\n\r\n.header .cart-items-container{\r\n    position: absolute;\r\n    top: 100%; right: -100%;\r\n    height: calc(100vh - 9.5rem);\r\n    width: 35rem;\r\n    background: #fff;\r\n    padding: 0 1.5rem;\r\n}\r\n\r\n.header .cart-items-container.active{\r\n    right: 0;\r\n}\r\n\r\n.header .cart-items-container .cart-item{\r\n   position: relative;\r\n   margin: 2rem 0;\r\n   display: flex;\r\n   align-items: center;\r\n   gap: 1.5rem;\r\n}\r\n\r\n.header .cart-items-container .cart-item .fa-times{\r\n    position: absolute;\r\n    top: 1rem; right: 1rem;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n    color: var(--black);\r\n }\r\n\r\n.header .cart-items-container .cart-item .fa-times:hover {\r\n    color: var(--main-color);\r\n}\r\n\r\n.header .cart-items-container .cart-item img{\r\n    height: 7rem;\r\n}\r\n\r\n.header .cart-items-container .cart-item .content h3 {\r\n    font-size: 2rem;\r\n    color: var(--black);\r\n    padding-bottom: .5rem;\r\n}\r\n\r\n.header .cart-items-container .cart-item .content .price {\r\n    font-size: 1.5rem;\r\n    color: var(--main-color);\r\n}\r\n\r\n.header .cart-items-container .btn{\r\n    width: 100%;\r\n    text-align: center;    \r\n}\r\n\r\n.home{\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    background: url(\"./images/home-img.jpeg\") no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.home .content{\r\n    max-width: 60rem;\r\n}\r\n\r\n.home .content h3{\r\n    font-size: 6rem;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n}\r\n\r\n.home .content p{\r\n    font-size: 2rem;\r\n    font-weight: lighter;\r\n    line-height: 1.8;\r\n    padding: 1rem 0;\r\n    color: #eee;\r\n}\r\n\r\n.about .row{\r\n    display: flex;\r\n    align-items: center;\r\n    background: var(--black);\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.about .row .image{\r\n    flex: 1 1 45rem;\r\n}\r\n\r\n.about .row .image img{\r\n    width: 100%;\r\n}\r\n\r\n.about .row .content{\r\n    flex: 1 1 45rem;\r\n    padding: 2rem;\r\n}\r\n\r\n.about .row .content h3{\r\n    font-size: 3rem;\r\n    color: #fff;\r\n}\r\n\r\n.about .row .content p{\r\n    font-size: 1.6rem;\r\n    color: #ccc;\r\n    padding: 1rem 0;\r\n    line-height: 1.8;\r\n}\r\n\r\n.menu .box-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n    gap: 1.5rem;\r\n}\r\n\r\n.menu .box-container .box{\r\n    padding: 5rem;\r\n    text-align: center;\r\n    border: var(--border);\r\n}\r\n\r\n.menu .box-container .box img{\r\n    height: 10rem;\r\n}\r\n\r\n.menu .box-container .box h3{\r\n    color: #fff;\r\n    font-size: 2rem;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.menu .box-container .box .price{\r\n    color: #fff;\r\n    font-size: 2.5rem;\r\n    padding: .5rem 0;\r\n}\r\n\r\n.menu .box-container .box .price span{\r\n    font-size: 1.5rem;\r\n    text-decoration: line-through;\r\n    font-weight: lighter;\r\n}\r\n\r\n.menu .box-container .box:hover{\r\n    background: #fff;\r\n}\r\n\r\n.menu .box-container .box:hover > *{\r\n    color: var(--black);\r\n}\r\n\r\n.products .box-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n    gap: 1.5rem;\r\n}\r\n\r\n.products .box-container .box{\r\n    text-align: center;\r\n    border: var(--border);\r\n    padding: 2rem;\r\n}\r\n\r\n.products .box-container .box .icons a{\r\n    height: 5rem;\r\n    width: 5rem;\r\n    line-height: 5rem;\r\n    font-size: 2rem;\r\n    border: var(--border);\r\n    color: #fff;\r\n    margin: .3rem;\r\n}\r\n\r\n.products .box-container .box .icons a:hover{\r\n    background: var(--main-color);\r\n}\r\n\r\n.products .box-container .box .image{\r\n    padding: 2.5rem;\r\n}\r\n\r\n.products .box-container .box .image img{\r\n    height: 25rem;\r\n}\r\n\r\n.products .box-container .box .content h3{\r\n    color: #fff;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.products .box-container .box .content .stars{\r\n    padding: 1.5rem;\r\n}\r\n\r\n.products .box-container .box .content .stars i{\r\n    font-size: 1.7rem;\r\n    color: var(--main-color);\r\n}\r\n\r\n.products .box-container .box .content .price{\r\n    color: #fff;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.products .box-container .box .content .price span{\r\n    text-decoration: line-through;\r\n    font-weight: lighter;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.review .box-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n    gap: 1.5rem;\r\n}\r\n\r\n.review .box-container .box{\r\n    border: var(--border);\r\n    text-align: center;\r\n    padding: 3rem 2rem;\r\n}\r\n\r\n.review .box-container .box p{\r\n    font-size: 1.5rem;\r\n    line-height: 1.8;\r\n    color: #ccc;\r\n    padding: 2rem 0;\r\n}\r\n\r\n.review .box-container .box .user {\r\n    height: 7rem;\r\n    width: 7rem;\r\n    border-radius: 50%;\r\n    object-fit: cover;\r\n}\r\n\r\n.review .box-container .box h3{\r\n    padding: 1rem 0;\r\n    font-size: 2rem;\r\n    color: #fff;\r\n}\r\n\r\n.review .box-container .box .stars i{\r\n    color: #fff;\r\n    color: var(--main-color);\r\n}\r\n\r\n.contact .row{\r\n    display: flex;\r\n    background: var(--black);\r\n    flex-wrap: wrap;\r\n    gap: 1rem;\r\n}\r\n\r\n.contact .row .map{\r\n    flex: 1 1 45rem;\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.contact .row form{\r\n    flex: 1 1 45rem;\r\n    padding: 5rem 2rem;\r\n    text-align: center;\r\n}\r\n\r\n.contact .row form h3{\r\n    text-transform: uppercase;\r\n    font-size: 3.5rem;\r\n    color: #fff;\r\n}\r\n\r\n.contact .row form .inputBox{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    background: var(--black);\r\n    border: var(--border);\r\n}\r\n\r\n.contact .row form .inputBox span{\r\n    color: #fff;\r\n    font-size: 2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.contact .row form .inputBox input{\r\n    width: 100%;\r\n    padding: 2rem;\r\n    font-size: 1.7rem;\r\n    color: #fff;\r\n    text-transform: none;\r\n    background: none;\r\n}\r\n\r\n.blogs .box-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n    gap: 1.5rem;\r\n}\r\n\r\n.blogs .box-container .box{\r\n    border: var(--border);\r\n}\r\n\r\n.blogs .box-container .box .image{\r\n    height: 25rem;\r\n    overflow: hidden;\r\n    width: 100%;\r\n}\r\n\r\n.blogs .box-container .box .image img{\r\n    height: 100%;\r\n    object-fit: cover;\r\n    width: 100%;\r\n}\r\n\r\n.blogs .box-container .box:hover .image img{\r\n    transform: scale(1.2);\r\n}\r\n\r\n.blogs .box-container .box .content{\r\n    padding: 2rem;\r\n}\r\n\r\n.blogs .box-container .box .title{\r\n    font-size: 2.5rem;\r\n    line-height: 1.5;\r\n    color: #fff;\r\n}\r\n\r\n.blogs .box-container .box .content .title:hover{\r\n    color: var(--main-color);\r\n}\r\n\r\n.blogs .box-container .box .content span{\r\n    color: var(--main-color);\r\n    display: block;\r\n    padding-top: 1rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.blogs .box-container .box .content p{\r\n    font-size: 1.6rem;\r\n    line-height: 1.8;\r\n    color: #ccc;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.footer{\r\n    background: var(--black);\r\n    text-align: center;\r\n}\r\n\r\n.footer .share{\r\n    padding: 1rem 0;\r\n}\r\n\r\n.footer .share a{\r\n    height: 5rem;\r\n    width: 5rem;\r\n    line-height: 5rem;\r\n    font-size: 2rem;\r\n    color: #fff;\r\n    border: var(--border);\r\n    margin: .3rem;\r\n    border-radius: 50%;\r\n}\r\n\r\n.footer .share a:hover{\r\n    background-color: var(--main-color);\r\n}\r\n\r\n.footer .links{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    padding: 2rem 0;\r\n    gap: 1rem;\r\n}\r\n\r\n.footer .links a{\r\n    padding: .7rem 2rem;\r\n    color: #fff;\r\n    border: var(--border);\r\n    font-size: 2rem;\r\n}\r\n\r\n.footer .links a:hover{\r\n    background: var(--main-color);\r\n}\r\n\r\n.footer .credit{\r\n    font-size: 2rem;\r\n    color: #fff;\r\n    font-weight: lighter;\r\n    padding: 1.5rem;\r\n}\r\n\r\n.footer .credit span{\r\n    color: var(--main-color);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* media queries */\r\n@media (max-width: 991px){\r\n    \r\n    html{\r\n        font-size: 55%;\r\n    }\r\n\r\n    .header{\r\n        padding:1.5rem 2rem;\r\n    }\r\n\r\n    section{\r\n        padding: 2rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n   #menu-btn{\r\n       display: inline-block;\r\n   }\r\n\r\n   .header .navbar{\r\n       position: absolute;\r\n       top: 100%; right: -100%;\r\n       background: #fff;\r\n       width: 30rem;\r\n       height: calc(100vh - 9.5rem);\r\n   }\r\n\r\n   .header .navbar.active{\r\n        right: 0;\r\n   }\r\n\r\n   .header .navbar a{\r\n        color: var(--black);\r\n        display: block;\r\n        margin: 1.5rem;\r\n        padding: .5rem;\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .header .search-form {\r\n        width: 90%;\r\n        right: 2rem;\r\n    }\r\n\r\n    .home{\r\n        background-position: left;\r\n        justify-content: center;\r\n        text-align: center;\r\n    }\r\n\r\n    .home .content h3{\r\n        font-size: 4.5rem;\r\n    }\r\n\r\n    .home .content p{\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 450px){\r\n    \r\n    html{\r\n        font-size: 50%;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/about */ "./src/modules/about.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/footer */ "./src/modules/footer.js");
/* harmony import */ var _modules_initial_page_load__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/initial-page-load */ "./src/modules/initial-page-load.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








init();

const tabPanels = document.querySelectorAll(".tabPanel")

function showPanel(panelIndex) {
    tabPanels.forEach(function (node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "";
};

showPanel(0)

function init() {
    ;(0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
    ;(0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__["default"])()
    ;(0,_modules_footer__WEBPACK_IMPORTED_MODULE_4__["default"])()
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPanel);

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_about_img_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/about-img.jpeg */ "./src/images/about-img.jpeg");


const createAboutSection = function () {
    const about = document.createElement('section');
    about.classList.add('about', 'tabPanel')
    about.setAttribute('id', 'about')

    ///////////////////////////////////////////////////

    const header = document.createElement('h1');
    header.classList.add('heading');

    header.innerHTML = `<span>about</span> us`

    ///////////////////////////////////////////////////

    const row = document.createElement('div');
    row.classList.add('row');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image')

    const img = document.createElement('img');
    img.src = _images_about_img_jpeg__WEBPACK_IMPORTED_MODULE_0__;

    imageDiv.appendChild(img);

    const content = document.createElement('div');
    content.classList.add('content');

    const h3 = document.createElement('h3');
    h3.innerText = 'what makes our coffee special?';

    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere veniam perferendis reiciendis
    asperiores quibusdam non harum? Minima impedit sint eaque, non animi alias voluptate tempore hic
    labore, iste fuga.`

    const paragraph2 = document.createElement('p');
    paragraph2.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius, culpa voluptatum deserunt
    similique ipsa ratione pariatur sit nulla unde!`

    const button = document.createElement('a')
    button.href = '#';
    button.classList.add('btn');
    button.innerText = 'learn more';

    content.append(h3, paragraph, paragraph2, button);

    row.append(imageDiv, content);

    ///////////////////////////////////////////////////

    about.append(header, row);

    return about;
}

function loadAbout() {
    const content = document.getElementById('content');
    const aboutSection = createAboutSection();

    content.appendChild(aboutSection);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout); 

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContactSection = function () {
    const contact = document.createElement('section');
    contact.classList.add('contact', 'tabPanel')
    contact.setAttribute('id', 'contact')

    const header = document.createElement('h1');
    header.classList.add('heading');
    header.innerHTML = `<span>contact</span> us`

    ///////////////////////////////////////////////////

    const row = document.createElement('div');
    row.classList.add('row');

    const map = document.createElement('iframe');
    map.classList.add('map');
    map.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4854.788703251148!2d-79.48971222969561!3d43.65493730759945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b368c27e73377%3A0x7547a3ca2a1c7dc2!2sGolden%20Gecko%20Coffee!5e0!3m2!1sen!2sca!4v1645114579306!5m2!1sen!2sca`
    map.setAttribute('allowFullScreen', '')
    map.setAttribute('loading', 'lazy')

    ///////////////////

    const form = document.createElement('form');
    const h3 = document.createElement('h3');
    h3.innerText = 'get in touch';

    const inputBox1 = document.createElement('div');
    inputBox1.classList.add('inputBox')
    const input1 = document.createElement('input');
    input1.type = 'text'
    input1.placeholder = 'Name'
    const userIcon1 = document.createElement('span');
    userIcon1.classList.add('fas', 'fa-user');
    inputBox1.append(userIcon1, input1)

    const inputBox2 = document.createElement('div');
    inputBox2.classList.add('inputBox')
    const input2 = document.createElement('input');
    input2.type = 'email'
    input2.placeholder = 'Email'
    const userIcon2 = document.createElement('span');
    userIcon2.classList.add('fas', 'fa-envelope');
    inputBox2.append(userIcon2, input2)

    const inputBox3 = document.createElement('div');
    inputBox3.classList.add('inputBox')
    const input3 = document.createElement('input');
    input3.type = 'number'
    input3.placeholder = 'Number'
    const userIcon3 = document.createElement('span');
    userIcon3.classList.add('fas', 'fa-phone');
    inputBox3.append(userIcon3, input3)

    const inputBox4 = document.createElement('input');
    inputBox4.classList.add('btn');
    inputBox4.type = 'submit';
    inputBox4.value = 'contact now';

    form.append(h3, inputBox1, inputBox2, inputBox3, inputBox4);

    ///////////////////

    row.append(map, form);

    ///////////////////////////////////////////////////

    contact.append(header, row)

    return contact;
}

function loadContact() {
    const content = document.getElementById('content');
    const contactSection = createContactSection();

    content.appendChild(contactSection);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createFooterSection = function () {
    const footer = document.createElement('section');
    footer.classList.add('footer')
    footer.setAttribute('id', 'footer')

    const share = document.createElement('div');
    share.classList.add('share');

    const fb = document.createElement('a')
    fb.href = '#';
    fb.classList.add('fab', 'fa-facebook-f')

    const twitter = document.createElement('a')
    twitter.href = '#';
    twitter.classList.add('fab', 'fa-twitter')

    const instagram = document.createElement('a')
    instagram.href = '#';
    instagram.classList.add('fab', 'fa-instagram')

    const linkedin = document.createElement('a')
    linkedin.href = '#';
    linkedin.classList.add('fab', 'fa-linkedin')

    const pinterest = document.createElement('a')
    pinterest.href = '#';
    pinterest.classList.add('fab', 'fa-pinterest')

    share.append(fb, twitter, instagram, linkedin, pinterest);

    ///////////////////////////////////////////////////

    const links = document.createElement('div');
    links.classList.add('links');

    const home = document.createElement('a');
    home.href = '#';
    home.innerText = 'home';

    const about = document.createElement('a');
    about.href = '#';
    about.innerText = 'about';

    const menu = document.createElement('a');
    menu.href = '#';
    menu.innerText = 'menu';

    const products = document.createElement('a');
    products.href = '#';
    products.innerText = 'products';

    const review = document.createElement('a');
    review.href = '#';
    review.innerText = 'review';

    const contacts = document.createElement('a');
    contacts.href = '#';
    contacts.innerText = 'contacts';

    const blogs = document.createElement('a');
    blogs.href = '#';
    blogs.innerText = 'blogs';

    links.append(home, about, menu, products, review, contacts, blogs);

    ///////////////////////////////////////////////////

    const credits = document.createElement('div');
    credits.classList.add('credit')
    credits.innerHTML = `created by <span>abel espin</span> | all rights reserved`

    ///////////////////////////////////////////////////

    footer.append(share, links, credits);
    return footer;
}

function loadFooter() {
    const content = document.getElementById('content');
    const footerSection = createFooterSection();

    content.appendChild(footerSection);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFooter);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHomeSection = function () {
    const home = document.createElement('section');
    home.classList.add('home', 'tabPanel')
    home.setAttribute('id', 'home')

    const content = document.createElement('div');
    content.classList.add('content');
    home.appendChild(content);

    const header = document.createElement('h3');
    header.innerText = 'fresh coffee in the morning';

    const paragraph = document.createElement('p');
    paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt corrupti quo officia debitis aliquid doloribus.'

    const actionBtn = document.createElement('a');
    actionBtn.classList.add('btn');
    actionBtn.href = ('#');
    actionBtn.innerText = "get your's now";

    content.append(header, paragraph, actionBtn);
    return home;
}

function loadHome() {
    const content = document.getElementById('content');
    const homeSection = createHomeSection();

    content.appendChild(homeSection);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/modules/initial-page-load.js":
/*!******************************************!*\
  !*** ./src/modules/initial-page-load.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");


// import showPanel from '../index';

const createHeader = function () {
    const header = document.createElement('header');
    header.classList.add('header');

    ///////////////////////////////////////////////////

    const logoElement = document.createElement('a');
    logoElement.href = ('#');
    logoElement.classList.add('logo')

    const logo = document.createElement('img')
    logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    logoElement.appendChild(logo)

    ///////////////////////////////////////////////////

    const navElement = document.createElement('nav');
    navElement.classList.add('navbar');

    const home = document.createElement('a')
    home.href = ('#home');
    home.innerText = "home"
    home.onclick = function () {
        ;(0,_index__WEBPACK_IMPORTED_MODULE_1__["default"])(0)
    }
    navElement.appendChild(home);

    const about = document.createElement('a')
    about.href = ('#about');
    about.innerText = "About"
    about.onclick = function () {
        ;(0,_index__WEBPACK_IMPORTED_MODULE_1__["default"])(1)
    }
    navElement.appendChild(about);

    const menu = document.createElement('a')
    menu.href = ('#menu');
    menu.innerText = 'Menu'
    menu.onclick = function () {
        ;(0,_index__WEBPACK_IMPORTED_MODULE_1__["default"])(2)
    }
    navElement.appendChild(menu);

    const contact = document.createElement('a')
    contact.href = ('#contact');
    contact.innerText = 'Contact'
    contact.onclick = function () {
        ;(0,_index__WEBPACK_IMPORTED_MODULE_1__["default"])(3)
    }
    navElement.appendChild(contact);

    ///////////////////////////////////////////////////

    const icons = document.createElement('div');
    icons.classList.add('icons');

    const searchBtn = document.createElement('div');
    searchBtn.classList.add('fas', 'fa-search')
    searchBtn.setAttribute('id', 'search-btn')

    const shoppingCartBtn = document.createElement('div');
    shoppingCartBtn.classList.add('fas', 'fa-shopping-cart')
    shoppingCartBtn.setAttribute('id', 'cart-btn')

    const menuBtn = document.createElement('div');
    menuBtn.classList.add('fas', 'fa-bars')
    menuBtn.setAttribute('id', 'menu-btn')

    icons.append(searchBtn, shoppingCartBtn, menuBtn)

    ///////////////////////////////////////////////////

    header.append(logoElement, navElement, icons);

    return header;
}

function loadPage() {
    const content = document.getElementById('content');

    const header = createHeader();
    content.appendChild(header);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_menu_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menu-1.png */ "./src/images/menu-1.png");
/* harmony import */ var _images_menu_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/menu-2.png */ "./src/images/menu-2.png");
/* harmony import */ var _images_menu_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/menu-3.png */ "./src/images/menu-3.png");
/* harmony import */ var _images_menu_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/menu-4.png */ "./src/images/menu-4.png");
/* harmony import */ var _images_menu_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/menu-5.png */ "./src/images/menu-5.png");
/* harmony import */ var _images_menu_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/menu-6.png */ "./src/images/menu-6.png");







const createMenuSection = function () {
    const menu = document.createElement('section');
    menu.classList.add('menu', 'tabPanel')
    menu.setAttribute('id', 'menu')

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerHTML = `our <span>menu</span>`

    ///////////////////////////////////////////////////

    const boxContainer = document.createElement('div');
    boxContainer.classList.add('box-container');

    ///////////////////////////////////////////////////

    const box1 = document.createElement('div');
    box1.classList.add('box');

    const img1 = document.createElement('img');
    img1.src = _images_menu_1_png__WEBPACK_IMPORTED_MODULE_0__;

    const header1 = document.createElement('h3');
    header1.innerText = 'tasty and healthy';

    const price1 = document.createElement('div');
    price1.classList.add('price');
    price1.innerHTML = `$15.99 <span>20.99</span>`;

    const button1 = document.createElement('a');
    button1.href = '#';
    button1.classList.add('btn');
    button1.innerText = 'add to cart';

    box1.append(img1, header1, price1, button1)

    ///////////////////

    const box2 = document.createElement('div');
    box2.classList.add('box');

    const img2 = document.createElement('img');
    img2.src = _images_menu_2_png__WEBPACK_IMPORTED_MODULE_1__;

    const header2 = document.createElement('h3');
    header2.innerText = 'tasty and healthy';

    const price2 = document.createElement('div');
    price2.classList.add('price');
    price2.innerHTML = `$15.99 <span>20.99</span>`;

    const button2 = document.createElement('a');
    button2.href = '#';
    button2.classList.add('btn');
    button2.innerText = 'add to cart';

    box2.append(img2, header2, price2, button2)

    ///////////////////

    const box3 = document.createElement('div');
    box3.classList.add('box');

    const img3 = document.createElement('img');
    img3.src = _images_menu_3_png__WEBPACK_IMPORTED_MODULE_2__;

    const header3 = document.createElement('h3');
    header3.innerText = 'tasty and healthy';

    const price3 = document.createElement('div');
    price3.classList.add('price');
    price3.innerHTML = `$15.99 <span>20.99</span>`;

    const button3 = document.createElement('a');
    button3.href = '#';
    button3.classList.add('btn');
    button3.innerText = 'add to cart';

    box3.append(img3, header3, price3, button3)

    ///////////////////

    const box4 = document.createElement('div');
    box4.classList.add('box');

    const img4 = document.createElement('img');
    img4.src = _images_menu_4_png__WEBPACK_IMPORTED_MODULE_3__;

    const header4 = document.createElement('h3');
    header4.innerText = 'tasty and healthy';

    const price4 = document.createElement('div');
    price4.classList.add('price');
    price4.innerHTML = `$15.99 <span>20.99</span>`;

    const button4 = document.createElement('a');
    button4.href = '#';
    button4.classList.add('btn');
    button4.innerText = 'add to cart';

    box4.append(img4, header4, price4, button4)

    ///////////////////

    const box5 = document.createElement('div');
    box5.classList.add('box');

    const img5 = document.createElement('img');
    img5.src = _images_menu_5_png__WEBPACK_IMPORTED_MODULE_4__;

    const header5 = document.createElement('h3');
    header5.innerText = 'tasty and healthy';

    const price5 = document.createElement('div');
    price5.classList.add('price');
    price5.innerHTML = `$15.99 <span>20.99</span>`;

    const button5 = document.createElement('a');
    button5.href = '#';
    button5.classList.add('btn');
    button5.innerText = 'add to cart';

    box5.append(img5, header5, price5, button5)

    ///////////////////

    const box6 = document.createElement('div');
    box6.classList.add('box');

    const img6 = document.createElement('img');
    img6.src = _images_menu_6_png__WEBPACK_IMPORTED_MODULE_5__;

    const header6 = document.createElement('h3');
    header6.innerText = 'tasty and healthy';

    const price6 = document.createElement('div');
    price6.classList.add('price');
    price6.innerHTML = `$15.99 <span>20.99</span>`;

    const button6 = document.createElement('a');
    button6.href = '#';
    button6.classList.add('btn');
    button6.innerText = 'add to cart';

    ///////////////////

    box6.append(img6, header6, price6, button6)
    boxContainer.append(box1, box2, box3, box4, box5, box6)

    ///////////////////////////////////////////////////

    menu.append(heading, boxContainer)

    return menu;
}

function loadHome() {
    const content = document.getElementById('content');
    const menuSection = createMenuSection();

    content.appendChild(menuSection);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/images/about-img.jpeg":
/*!***********************************!*\
  !*** ./src/images/about-img.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/about-img.3f087d850ed9e2aef04a.jpeg";

/***/ }),

/***/ "./src/images/home-img.jpeg":
/*!**********************************!*\
  !*** ./src/images/home-img.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/home-img.e39539bb5a58d6827d50.jpeg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.f5be9322d8bd26550c8e.png";

/***/ }),

/***/ "./src/images/menu-1.png":
/*!*******************************!*\
  !*** ./src/images/menu-1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/menu-1.298439f74041cf927150.png";

/***/ }),

/***/ "./src/images/menu-2.png":
/*!*******************************!*\
  !*** ./src/images/menu-2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/menu-2.39568caf87617df10355.png";

/***/ }),

/***/ "./src/images/menu-3.png":
/*!*******************************!*\
  !*** ./src/images/menu-3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/menu-3.44d221229e80535a7010.png";

/***/ }),

/***/ "./src/images/menu-4.png":
/*!*******************************!*\
  !*** ./src/images/menu-4.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/menu-4.c16f535884cf407af21a.png";

/***/ }),

/***/ "./src/images/menu-5.png":
/*!*******************************!*\
  !*** ./src/images/menu-5.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/menu-5.43f882bf6e0cbe58dee4.png";

/***/ }),

/***/ "./src/images/menu-6.png":
/*!*******************************!*\
  !*** ./src/images/menu-6.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/menu-6.0913472918ae29b4626f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kODE0MWU0ZGVjODg5N2QwMjE1Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLElBQUksSUFBSSxrQkFBa0I7QUFDN0kseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGdEQUFnRCw2QkFBNkIseUJBQXlCLHNCQUFzQix1REFBdUQsVUFBVSwwQ0FBMEMsa0JBQWtCLG1CQUFtQiwrQkFBK0Isc0JBQXNCLHFCQUFxQiw4QkFBOEIsbUNBQW1DLCtCQUErQixLQUFLLGNBQWMseUJBQXlCLDJCQUEyQixpQ0FBaUMsZ0NBQWdDLEtBQUssaUNBQWlDLHFCQUFxQixLQUFLLHVDQUF1QyxnQ0FBZ0MsS0FBSyx1Q0FBdUMseUJBQXlCLDRCQUE0QixLQUFLLGFBQWEsOEJBQThCLEtBQUssZ0JBQWdCLDBCQUEwQixLQUFLLGlCQUFpQiwyQkFBMkIsb0JBQW9CLGtDQUFrQywrQkFBK0Isd0JBQXdCLEtBQUssc0JBQXNCLGlDQUFpQyxrQ0FBa0MsS0FBSyxjQUFjLHlCQUF5Qiw4QkFBOEIsNEJBQTRCLDBCQUEwQixvQkFBb0Isc0NBQXNDLHdCQUF3QixLQUFLLG1CQUFtQiw4QkFBOEIsS0FBSyxpQkFBaUIsOEJBQThCLHNCQUFzQiw0QkFBNEIsdUNBQXVDLDJCQUEyQixxQ0FBcUMsd0JBQXdCLGdCQUFnQixTQUFTLFNBQVMsc0JBQXNCLEtBQUssMkJBQTJCLHFCQUFxQixLQUFLLDBCQUEwQix1QkFBdUIsMEJBQTBCLG9CQUFvQix3QkFBd0IsS0FBSyxpQ0FBaUMsaUNBQWlDLHFEQUFxRCw4QkFBOEIsS0FBSywyQkFBMkIsb0JBQW9CLHdCQUF3QiwwQkFBMEIsMEJBQTBCLEtBQUssaUNBQWlDLGlDQUFpQyxLQUFLLG1CQUFtQixzQkFBc0IsS0FBSyw4QkFBOEIsMkJBQTJCLG1CQUFtQixVQUFVLHlCQUF5QixxQkFBcUIscUJBQXFCLHNCQUFzQiw0QkFBNEIsNkJBQTZCLDhCQUE4QixLQUFLLHFDQUFxQyw2QkFBNkIsS0FBSyxtQ0FBbUMsb0JBQW9CLG1CQUFtQix5QkFBeUIsMkJBQTJCLHFCQUFxQiw0QkFBNEIsS0FBSyxtQ0FBbUMsd0JBQXdCLDBCQUEwQiw2QkFBNkIsNEJBQTRCLE1BQU0sMENBQTBDLGlDQUFpQyxNQUFNLHNDQUFzQywyQkFBMkIsbUJBQW1CLGFBQWEscUNBQXFDLHFCQUFxQix5QkFBeUIsMEJBQTBCLEtBQUssNkNBQTZDLGlCQUFpQixLQUFLLGlEQUFpRCwwQkFBMEIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsbUJBQW1CLEtBQUssMkRBQTJELDJCQUEyQixtQkFBbUIsWUFBWSx3QkFBd0Isd0JBQXdCLDRCQUE0QixNQUFNLGtFQUFrRSxpQ0FBaUMsS0FBSyxxREFBcUQscUJBQXFCLEtBQUssOERBQThELHdCQUF3Qiw0QkFBNEIsOEJBQThCLEtBQUssa0VBQWtFLDBCQUEwQixpQ0FBaUMsS0FBSywyQ0FBMkMsb0JBQW9CLCtCQUErQixLQUFLLGNBQWMsMEJBQTBCLHNCQUFzQiw0QkFBNEIsOEVBQThFLCtCQUErQixvQ0FBb0MsS0FBSyx1QkFBdUIseUJBQXlCLEtBQUssMEJBQTBCLHdCQUF3QixrQ0FBa0Msb0JBQW9CLEtBQUsseUJBQXlCLHdCQUF3Qiw2QkFBNkIseUJBQXlCLHdCQUF3QixvQkFBb0IsS0FBSyxvQkFBb0Isc0JBQXNCLDRCQUE0QixpQ0FBaUMsd0JBQXdCLEtBQUssMkJBQTJCLHdCQUF3QixLQUFLLCtCQUErQixvQkFBb0IsS0FBSyw2QkFBNkIsd0JBQXdCLHNCQUFzQixLQUFLLGdDQUFnQyx3QkFBd0Isb0JBQW9CLEtBQUssK0JBQStCLDBCQUEwQixvQkFBb0Isd0JBQXdCLHlCQUF5QixLQUFLLDZCQUE2QixzQkFBc0Isb0VBQW9FLG9CQUFvQixLQUFLLGtDQUFrQyxzQkFBc0IsMkJBQTJCLDhCQUE4QixLQUFLLHNDQUFzQyxzQkFBc0IsS0FBSyxxQ0FBcUMsb0JBQW9CLHdCQUF3Qix3QkFBd0IsS0FBSyx5Q0FBeUMsb0JBQW9CLDBCQUEwQix5QkFBeUIsS0FBSyw4Q0FBOEMsMEJBQTBCLHNDQUFzQyw2QkFBNkIsS0FBSyx3Q0FBd0MseUJBQXlCLEtBQUssNENBQTRDLDRCQUE0QixLQUFLLGlDQUFpQyxzQkFBc0Isb0VBQW9FLG9CQUFvQixLQUFLLHNDQUFzQywyQkFBMkIsOEJBQThCLHNCQUFzQixLQUFLLCtDQUErQyxxQkFBcUIsb0JBQW9CLDBCQUEwQix3QkFBd0IsOEJBQThCLG9CQUFvQixzQkFBc0IsS0FBSyxxREFBcUQsc0NBQXNDLEtBQUssNkNBQTZDLHdCQUF3QixLQUFLLGlEQUFpRCxzQkFBc0IsS0FBSyxrREFBa0Qsb0JBQW9CLDBCQUEwQixLQUFLLHNEQUFzRCx3QkFBd0IsS0FBSyx3REFBd0QsMEJBQTBCLGlDQUFpQyxLQUFLLHNEQUFzRCxvQkFBb0IsMEJBQTBCLEtBQUssMkRBQTJELHNDQUFzQyw2QkFBNkIsMEJBQTBCLEtBQUssK0JBQStCLHNCQUFzQixvRUFBb0Usb0JBQW9CLEtBQUssb0NBQW9DLDhCQUE4QiwyQkFBMkIsMkJBQTJCLEtBQUssc0NBQXNDLDBCQUEwQix5QkFBeUIsb0JBQW9CLHdCQUF3QixLQUFLLDJDQUEyQyxxQkFBcUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIsS0FBSyx1Q0FBdUMsd0JBQXdCLHdCQUF3QixvQkFBb0IsS0FBSyw2Q0FBNkMsb0JBQW9CLGlDQUFpQyxLQUFLLHNCQUFzQixzQkFBc0IsaUNBQWlDLHdCQUF3QixrQkFBa0IsS0FBSywyQkFBMkIsd0JBQXdCLG9CQUFvQiwwQkFBMEIsS0FBSywyQkFBMkIsd0JBQXdCLDJCQUEyQiwyQkFBMkIsS0FBSyw4QkFBOEIsa0NBQWtDLDBCQUEwQixvQkFBb0IsS0FBSyxxQ0FBcUMsc0JBQXNCLDRCQUE0Qix5QkFBeUIsNEJBQTRCLGlDQUFpQyw4QkFBOEIsS0FBSywwQ0FBMEMsb0JBQW9CLHdCQUF3QiwyQkFBMkIsS0FBSywyQ0FBMkMsb0JBQW9CLHNCQUFzQiwwQkFBMEIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsS0FBSyw4QkFBOEIsc0JBQXNCLG9FQUFvRSxvQkFBb0IsS0FBSyxtQ0FBbUMsOEJBQThCLEtBQUssMENBQTBDLHNCQUFzQix5QkFBeUIsb0JBQW9CLEtBQUssOENBQThDLHFCQUFxQiwwQkFBMEIsb0JBQW9CLEtBQUssb0RBQW9ELDhCQUE4QixLQUFLLDRDQUE0QyxzQkFBc0IsS0FBSywwQ0FBMEMsMEJBQTBCLHlCQUF5QixvQkFBb0IsS0FBSyx5REFBeUQsaUNBQWlDLEtBQUssaURBQWlELGlDQUFpQyx1QkFBdUIsMEJBQTBCLHdCQUF3QixLQUFLLDhDQUE4QywwQkFBMEIseUJBQXlCLG9CQUFvQix3QkFBd0IsS0FBSyxnQkFBZ0IsaUNBQWlDLDJCQUEyQixLQUFLLHVCQUF1Qix3QkFBd0IsS0FBSyx5QkFBeUIscUJBQXFCLG9CQUFvQiwwQkFBMEIsd0JBQXdCLG9CQUFvQiw4QkFBOEIsc0JBQXNCLDJCQUEyQixLQUFLLCtCQUErQiw0Q0FBNEMsS0FBSyx1QkFBdUIsc0JBQXNCLGdDQUFnQyx3QkFBd0Isd0JBQXdCLGtCQUFrQixLQUFLLHlCQUF5Qiw0QkFBNEIsb0JBQW9CLDhCQUE4Qix3QkFBd0IsS0FBSywrQkFBK0Isc0NBQXNDLEtBQUssd0JBQXdCLHdCQUF3QixvQkFBb0IsNkJBQTZCLHdCQUF3QixLQUFLLDZCQUE2QixpQ0FBaUMsS0FBSyw2RkFBNkYscUJBQXFCLDJCQUEyQixTQUFTLG9CQUFvQixnQ0FBZ0MsU0FBUyxvQkFBb0IsMEJBQTBCLFNBQVMsS0FBSyxrQ0FBa0MsaUJBQWlCLGlDQUFpQyxRQUFRLDJCQUEyQiw4QkFBOEIsc0JBQXNCLGFBQWEsNEJBQTRCLHdCQUF3Qix3Q0FBd0MsUUFBUSxrQ0FBa0MscUJBQXFCLFFBQVEsNkJBQTZCLGdDQUFnQywyQkFBMkIsMkJBQTJCLDJCQUEyQiw0QkFBNEIsU0FBUyxrQ0FBa0MsdUJBQXVCLHdCQUF3QixTQUFTLGtCQUFrQixzQ0FBc0Msb0NBQW9DLCtCQUErQixTQUFTLDhCQUE4Qiw4QkFBOEIsU0FBUyw2QkFBNkIsOEJBQThCLFNBQVMsS0FBSyxrQ0FBa0MscUJBQXFCLDJCQUEyQixTQUFTLEtBQUssMkRBQTJELGdGQUFnRixZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyw4QkFBOEIsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVkscUJBQXFCLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLHFCQUFxQixhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVkscUJBQXFCLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGdCQUFnQixZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxxQkFBcUIsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSwrRkFBK0YsSUFBSSxJQUFJLElB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1EQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDakV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQzlFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNwRnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQy9Cb0I7QUFDVjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RnNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtDQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0NBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrQ0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtDQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0NBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrQ0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUt2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvaW5pdGlhbC1wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2hvbWUtaW1nLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgICAtLW1haW4tY29sb3I6I2QzYWQ3ZjtcXHJcXG4gICAgLS1ibGFjazogIzEzMTMxYTtcXHJcXG4gICAgLS1iZzogIzAxMDEwMztcXHJcXG4gICAgLS1ib3JkZXI6IC4xcmVtIHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjMpXFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIHRyYW5zaXRpb246IC4ycyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDYyLjUlO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIHNjcm9sbC1wYWRkaW5nLXRvcDogOXJlbTtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbntcXHJcXG4gICAgcGFkZGluZzogMTFyZW0gNyU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5ne1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nIHNwYW57XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzogLjlyZW0gM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVye1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDclO1xcclxcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ28gaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5uYXZiYXIgYXtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5uYXZiYXIgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogLjFyZW0gc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuaWNvbnMgZGl2e1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmljb25zIGRpdjpob3ZlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1idG4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5zZWFyY2gtZm9ybSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMTUlOyByaWdodDogNyU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHdpZHRoOiA1MHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5zZWFyY2gtZm9ybS5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuc2VhcmNoLWZvcm0gaW5wdXR7XFxyXFxuICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbiAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuc2VhcmNoLWZvcm0gbGFiZWx7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiB9XFxyXFxuXFxyXFxuIC5oZWFkZXIgLnNlYXJjaC1mb3JtIGxhYmVsOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuIH1cXHJcXG5cXHJcXG4uaGVhZGVyIC5jYXJ0LWl0ZW1zLWNvbnRhaW5lcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwMCU7IHJpZ2h0OiAtMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOS41cmVtKTtcXHJcXG4gICAgd2lkdGg6IDM1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuY2FydC1pdGVtcy1jb250YWluZXIuYWN0aXZle1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuY2FydC1pdGVtcy1jb250YWluZXIgLmNhcnQtaXRlbXtcXHJcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgbWFyZ2luOiAycmVtIDA7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5jYXJ0LWl0ZW1zLWNvbnRhaW5lciAuY2FydC1pdGVtIC5mYS10aW1lc3tcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDFyZW07IHJpZ2h0OiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gfVxcclxcblxcclxcbi5oZWFkZXIgLmNhcnQtaXRlbXMtY29udGFpbmVyIC5jYXJ0LWl0ZW0gLmZhLXRpbWVzOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5jYXJ0LWl0ZW1zLWNvbnRhaW5lciAuY2FydC1pdGVtIGltZ3tcXHJcXG4gICAgaGVpZ2h0OiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5jYXJ0LWl0ZW1zLWNvbnRhaW5lciAuY2FydC1pdGVtIC5jb250ZW50IGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmNhcnQtaXRlbXMtY29udGFpbmVyIC5jYXJ0LWl0ZW0gLmNvbnRlbnQgLnByaWNlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuY2FydC1pdGVtcy1jb250YWluZXIgLmJ0bntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXFxyXFxufVxcclxcblxcclxcbi5ob21le1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmNvbnRlbnR7XFxyXFxuICAgIG1heC13aWR0aDogNjByZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5jb250ZW50IGgze1xcclxcbiAgICBmb250LXNpemU6IDZyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuY29udGVudCBwe1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgLnJvd3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCAucm93IC5pbWFnZXtcXHJcXG4gICAgZmxleDogMSAxIDQ1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgLnJvdyAuaW1hZ2UgaW1ne1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IC5yb3cgLmNvbnRlbnR7XFxyXFxuICAgIGZsZXg6IDEgMSA0NXJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IC5yb3cgLmNvbnRlbnQgaDN7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCAucm93IC5jb250ZW50IHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBjb2xvcjogI2NjYztcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAuYm94LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHJlbSwgMWZyKSk7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAuYm94LWNvbnRhaW5lciAuYm94e1xcclxcbiAgICBwYWRkaW5nOiA1cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmJveC1jb250YWluZXIgLmJveCBpbWd7XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51IC5ib3gtY29udGFpbmVyIC5ib3ggaDN7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmJveC1jb250YWluZXIgLmJveCAucHJpY2V7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmJveC1jb250YWluZXIgLmJveCAucHJpY2Ugc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmJveC1jb250YWluZXIgLmJveDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmJveC1jb250YWluZXIgLmJveDpob3ZlciA+ICp7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cyAuYm94LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHJlbSwgMWZyKSk7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cyAuYm94LWNvbnRhaW5lciAuYm94IC5pY29ucyBhe1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBtYXJnaW46IC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveCAuaWNvbnMgYTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cyAuYm94LWNvbnRhaW5lciAuYm94IC5pbWFnZXtcXHJcXG4gICAgcGFkZGluZzogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveCAuaW1hZ2UgaW1ne1xcclxcbiAgICBoZWlnaHQ6IDI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveCAuY29udGVudCBoM3tcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveCAuY29udGVudCAuc3RhcnN7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RzIC5ib3gtY29udGFpbmVyIC5ib3ggLmNvbnRlbnQgLnN0YXJzIGl7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cyAuYm94LWNvbnRhaW5lciAuYm94IC5jb250ZW50IC5wcmljZXtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveCAuY29udGVudCAucHJpY2Ugc3BhbntcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJldmlldyAuYm94LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHJlbSwgMWZyKSk7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2aWV3IC5ib3gtY29udGFpbmVyIC5ib3h7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXZpZXcgLmJveC1jb250YWluZXIgLmJveCBwe1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG4gICAgY29sb3I6ICNjY2M7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJldmlldyAuYm94LWNvbnRhaW5lciAuYm94IC51c2VyIHtcXHJcXG4gICAgaGVpZ2h0OiA3cmVtO1xcclxcbiAgICB3aWR0aDogN3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJldmlldyAuYm94LWNvbnRhaW5lciAuYm94IGgze1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5yZXZpZXcgLmJveC1jb250YWluZXIgLmJveCAuc3RhcnMgaXtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgLnJvd3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgLnJvdyAubWFwe1xcclxcbiAgICBmbGV4OiAxIDEgNDVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgLnJvdyBmb3Jte1xcclxcbiAgICBmbGV4OiAxIDEgNDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVyZW0gMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCAucm93IGZvcm0gaDN7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgLnJvdyBmb3JtIC5pbnB1dEJveHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IC5yb3cgZm9ybSAuaW5wdXRCb3ggc3BhbntcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCAucm93IGZvcm0gLmlucHV0Qm94IGlucHV0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2dzIC5ib3gtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwcmVtLCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94e1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94IC5pbWFnZXtcXHJcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94IC5pbWFnZSBpbWd7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZ3MgLmJveC1jb250YWluZXIgLmJveDpob3ZlciAuaW1hZ2UgaW1ne1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94IC5jb250ZW50e1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZ3MgLmJveC1jb250YWluZXIgLmJveCAudGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2dzIC5ib3gtY29udGFpbmVyIC5ib3ggLmNvbnRlbnQgLnRpdGxlOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94IC5jb250ZW50IHNwYW57XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94IC5jb250ZW50IHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgICBjb2xvcjogI2NjYztcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuc2hhcmV7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuc2hhcmUgYXtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXHJcXG4gICAgbWFyZ2luOiAuM3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5zaGFyZSBhOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAubGlua3N7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5saW5rcyBhe1xcclxcbiAgICBwYWRkaW5nOiAuN3JlbSAycmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmxpbmtzIGE6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5jcmVkaXR7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmNyZWRpdCBzcGFue1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIG1lZGlhIHF1ZXJpZXMgKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpe1xcclxcbiAgICBcXHJcXG4gICAgaHRtbHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNTUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJ7XFxyXFxuICAgICAgICBwYWRkaW5nOjEuNXJlbSAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHNlY3Rpb257XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgI21lbnUtYnRue1xcclxcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIC5oZWFkZXIgLm5hdmJhcntcXHJcXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICB0b3A6IDEwMCU7IHJpZ2h0OiAtMTAwJTtcXHJcXG4gICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgd2lkdGg6IDMwcmVtO1xcclxcbiAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5LjVyZW0pO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAuaGVhZGVyIC5uYXZiYXIuYWN0aXZle1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIC5oZWFkZXIgLm5hdmJhciBhe1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOiAxLjVyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIC5zZWFyY2gtZm9ybSB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgICAgcmlnaHQ6IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhvbWV7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhvbWUgLmNvbnRlbnQgaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaG9tZSAuY29udGVudCBwe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KXtcXHJcXG4gICAgXFxyXFxuICAgIGh0bWx7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ks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QUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7Ozs7Ozs7Ozs7QUFXQSxrQkFBa0I7QUFDbEI7O0lBRUk7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0dBQ0c7T0FDSSxxQkFBcUI7R0FDekI7O0dBRUE7T0FDSSxrQkFBa0I7T0FDbEIsU0FBUyxFQUFFLFlBQVk7T0FDdkIsZ0JBQWdCO09BQ2hCLFlBQVk7T0FDWiw0QkFBNEI7R0FDaEM7O0dBRUE7UUFDSyxRQUFRO0dBQ2I7O0dBRUE7UUFDSyxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjojZDNhZDdmO1xcclxcbiAgICAtLWJsYWNrOiAjMTMxMzFhO1xcclxcbiAgICAtLWJnOiAjMDEwMTAzO1xcclxcbiAgICAtLWJvcmRlcjogLjFyZW0gc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMylcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgc2Nyb2xsLXBhZGRpbmctdG9wOiA5cmVtO1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogLjhyZW07XFxyXFxufVxcclxcblxcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9ue1xcclxcbiAgICBwYWRkaW5nOiAxMXJlbSA3JTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmd7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcgc3BhbntcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAuOXJlbSAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXJ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gNyU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubG9nbyBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDZyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm5hdmJhciBhe1xcclxcbiAgICBtYXJnaW46IDAgMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm5hdmJhciBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5pY29ucyBkaXZ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuaWNvbnMgZGl2OmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNtZW51LWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLnNlYXJjaC1mb3JtIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDExNSU7IHJpZ2h0OiA3JTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgd2lkdGg6IDUwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLnNlYXJjaC1mb3JtLmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5zZWFyY2gtZm9ybSBpbnB1dHtcXHJcXG4gICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5zZWFyY2gtZm9ybSBsYWJlbHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLmhlYWRlciAuc2VhcmNoLWZvcm0gbGFiZWw6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gfVxcclxcblxcclxcbi5oZWFkZXIgLmNhcnQtaXRlbXMtY29udGFpbmVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTAwJTsgcmlnaHQ6IC0xMDAlO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5LjVyZW0pO1xcclxcbiAgICB3aWR0aDogMzVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5jYXJ0LWl0ZW1zLWNvbnRhaW5lci5hY3RpdmV7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5jYXJ0LWl0ZW1zLWNvbnRhaW5lciAuY2FydC1pdGVte1xcclxcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICBtYXJnaW46IDJyZW0gMDtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmNhcnQtaXRlbXMtY29udGFpbmVyIC5jYXJ0LWl0ZW0gLmZhLXRpbWVze1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMXJlbTsgcmlnaHQ6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiB9XFxyXFxuXFxyXFxuLmhlYWRlciAuY2FydC1pdGVtcy1jb250YWluZXIgLmNhcnQtaXRlbSAuZmEtdGltZXM6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmNhcnQtaXRlbXMtY29udGFpbmVyIC5jYXJ0LWl0ZW0gaW1ne1xcclxcbiAgICBoZWlnaHQ6IDdyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmNhcnQtaXRlbXMtY29udGFpbmVyIC5jYXJ0LWl0ZW0gLmNvbnRlbnQgaDMge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuY2FydC1pdGVtcy1jb250YWluZXIgLmNhcnQtaXRlbSAuY29udGVudCAucHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5jYXJ0LWl0ZW1zLWNvbnRhaW5lciAuYnRue1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWV7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1hZ2VzL2hvbWUtaW1nLmpwZWdcXFwiKSBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmNvbnRlbnR7XFxyXFxuICAgIG1heC13aWR0aDogNjByZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5jb250ZW50IGgze1xcclxcbiAgICBmb250LXNpemU6IDZyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuY29udGVudCBwe1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgLnJvd3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCAucm93IC5pbWFnZXtcXHJcXG4gICAgZmxleDogMSAxIDQ1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgLnJvdyAuaW1hZ2UgaW1ne1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IC5yb3cgLmNvbnRlbnR7XFxyXFxuICAgIGZsZXg6IDEgMSA0NXJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IC5yb3cgLmNvbnRlbnQgaDN7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCAucm93IC5jb250ZW50IHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBjb2xvcjogI2NjYztcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAuYm94LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHJlbSwgMWZyKSk7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAuYm94LWNvbnRhaW5lciAuYm94e1xcclxcbiAgICBwYWRkaW5nOiA1cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmJveC1jb250YWluZXIgLmJveCBpbWd7XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51IC5ib3gtY29udGFpbmVyIC5ib3ggaDN7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmJveC1jb250YWluZXIgLmJveCAucHJpY2V7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmJveC1jb250YWluZXIgLmJveCAucHJpY2Ugc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmJveC1jb250YWluZXIgLmJveDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmJveC1jb250YWluZXIgLmJveDpob3ZlciA+ICp7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cyAuYm94LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHJlbSwgMWZyKSk7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cyAuYm94LWNvbnRhaW5lciAuYm94IC5pY29ucyBhe1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBtYXJnaW46IC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveCAuaWNvbnMgYTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cyAuYm94LWNvbnRhaW5lciAuYm94IC5pbWFnZXtcXHJcXG4gICAgcGFkZGluZzogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveCAuaW1hZ2UgaW1ne1xcclxcbiAgICBoZWlnaHQ6IDI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveCAuY29udGVudCBoM3tcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveCAuY29udGVudCAuc3RhcnN7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RzIC5ib3gtY29udGFpbmVyIC5ib3ggLmNvbnRlbnQgLnN0YXJzIGl7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cyAuYm94LWNvbnRhaW5lciAuYm94IC5jb250ZW50IC5wcmljZXtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHMgLmJveC1jb250YWluZXIgLmJveCAuY29udGVudCAucHJpY2Ugc3BhbntcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJldmlldyAuYm94LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHJlbSwgMWZyKSk7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2aWV3IC5ib3gtY29udGFpbmVyIC5ib3h7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXZpZXcgLmJveC1jb250YWluZXIgLmJveCBwe1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG4gICAgY29sb3I6ICNjY2M7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJldmlldyAuYm94LWNvbnRhaW5lciAuYm94IC51c2VyIHtcXHJcXG4gICAgaGVpZ2h0OiA3cmVtO1xcclxcbiAgICB3aWR0aDogN3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJldmlldyAuYm94LWNvbnRhaW5lciAuYm94IGgze1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5yZXZpZXcgLmJveC1jb250YWluZXIgLmJveCAuc3RhcnMgaXtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgLnJvd3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgLnJvdyAubWFwe1xcclxcbiAgICBmbGV4OiAxIDEgNDVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgLnJvdyBmb3Jte1xcclxcbiAgICBmbGV4OiAxIDEgNDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVyZW0gMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCAucm93IGZvcm0gaDN7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgLnJvdyBmb3JtIC5pbnB1dEJveHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IC5yb3cgZm9ybSAuaW5wdXRCb3ggc3BhbntcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCAucm93IGZvcm0gLmlucHV0Qm94IGlucHV0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2dzIC5ib3gtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwcmVtLCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94e1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94IC5pbWFnZXtcXHJcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94IC5pbWFnZSBpbWd7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZ3MgLmJveC1jb250YWluZXIgLmJveDpob3ZlciAuaW1hZ2UgaW1ne1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94IC5jb250ZW50e1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZ3MgLmJveC1jb250YWluZXIgLmJveCAudGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2dzIC5ib3gtY29udGFpbmVyIC5ib3ggLmNvbnRlbnQgLnRpdGxlOmhvdmVye1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94IC5jb250ZW50IHNwYW57XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5ibG9ncyAuYm94LWNvbnRhaW5lciAuYm94IC5jb250ZW50IHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgICBjb2xvcjogI2NjYztcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuc2hhcmV7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuc2hhcmUgYXtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXHJcXG4gICAgbWFyZ2luOiAuM3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5zaGFyZSBhOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAubGlua3N7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5saW5rcyBhe1xcclxcbiAgICBwYWRkaW5nOiAuN3JlbSAycmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmxpbmtzIGE6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5jcmVkaXR7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmNyZWRpdCBzcGFue1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIG1lZGlhIHF1ZXJpZXMgKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpe1xcclxcbiAgICBcXHJcXG4gICAgaHRtbHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNTUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJ7XFxyXFxuICAgICAgICBwYWRkaW5nOjEuNXJlbSAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHNlY3Rpb257XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgI21lbnUtYnRue1xcclxcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIC5oZWFkZXIgLm5hdmJhcntcXHJcXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICB0b3A6IDEwMCU7IHJpZ2h0OiAtMTAwJTtcXHJcXG4gICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgd2lkdGg6IDMwcmVtO1xcclxcbiAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5LjVyZW0pO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAuaGVhZGVyIC5uYXZiYXIuYWN0aXZle1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIC5oZWFkZXIgLm5hdmJhciBhe1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOiAxLjVyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIC5zZWFyY2gtZm9ybSB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgICAgcmlnaHQ6IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhvbWV7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhvbWUgLmNvbnRlbnQgaDN7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaG9tZSAuY29udGVudCBwe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KXtcXHJcXG4gICAgXFxyXFxuICAgIGh0bWx7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vbW9kdWxlcy9ob21lJztcclxuaW1wb3J0IGxvYWRBYm91dCBmcm9tICcuL21vZHVsZXMvYWJvdXQnO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tb2R1bGVzL21lbnUnO1xyXG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QnO1xyXG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tICcuL21vZHVsZXMvZm9vdGVyJztcclxuaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbW9kdWxlcy9pbml0aWFsLXBhZ2UtbG9hZCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuaW5pdCgpO1xyXG5cclxuY29uc3QgdGFiUGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJQYW5lbFwiKVxyXG5cclxuZnVuY3Rpb24gc2hvd1BhbmVsKHBhbmVsSW5kZXgpIHtcclxuICAgIHRhYlBhbmVscy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuICAgIHRhYlBhbmVsc1twYW5lbEluZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxufTtcclxuXHJcbnNob3dQYW5lbCgwKVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGxvYWRQYWdlKCk7XHJcbiAgICBsb2FkSG9tZSgpO1xyXG4gICAgbG9hZEFib3V0KCk7XHJcbiAgICBsb2FkTWVudSgpXHJcbiAgICBsb2FkQ29udGFjdCgpXHJcbiAgICBsb2FkRm9vdGVyKClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dQYW5lbDsiLCJpbXBvcnQgYWJvdXRJbWcgZnJvbSBcIi4uL2ltYWdlcy9hYm91dC1pbWcuanBlZ1wiO1xyXG5cclxuY29uc3QgY3JlYXRlQWJvdXRTZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcsICd0YWJQYW5lbCcpXHJcbiAgICBhYm91dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0JylcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcclxuXHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYDxzcGFuPmFib3V0PC9zcGFuPiB1c2BcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1hZ2VEaXYuY2xhc3NMaXN0LmFkZCgnaW1hZ2UnKVxyXG5cclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNyYyA9IGFib3V0SW1nO1xyXG5cclxuICAgIGltYWdlRGl2LmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDMuaW5uZXJUZXh0ID0gJ3doYXQgbWFrZXMgb3VyIGNvZmZlZSBzcGVjaWFsPyc7XHJcblxyXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IGBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSXBzYSBmYWNlcmUgdmVuaWFtIHBlcmZlcmVuZGlzIHJlaWNpZW5kaXNcclxuICAgIGFzcGVyaW9yZXMgcXVpYnVzZGFtIG5vbiBoYXJ1bT8gTWluaW1hIGltcGVkaXQgc2ludCBlYXF1ZSwgbm9uIGFuaW1pIGFsaWFzIHZvbHVwdGF0ZSB0ZW1wb3JlIGhpY1xyXG4gICAgbGFib3JlLCBpc3RlIGZ1Z2EuYFxyXG5cclxuICAgIGNvbnN0IHBhcmFncmFwaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhZ3JhcGgyLmlubmVySFRNTCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQbGFjZWF0IGVpdXMsIGN1bHBhIHZvbHVwdGF0dW0gZGVzZXJ1bnRcclxuICAgIHNpbWlsaXF1ZSBpcHNhIHJhdGlvbmUgcGFyaWF0dXIgc2l0IG51bGxhIHVuZGUhYFxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgYnV0dG9uLmhyZWYgPSAnIyc7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ2xlYXJuIG1vcmUnO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKGgzLCBwYXJhZ3JhcGgsIHBhcmFncmFwaDIsIGJ1dHRvbik7XHJcblxyXG4gICAgcm93LmFwcGVuZChpbWFnZURpdiwgY29udGVudCk7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgYWJvdXQuYXBwZW5kKGhlYWRlciwgcm93KTtcclxuXHJcbiAgICByZXR1cm4gYWJvdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgYWJvdXRTZWN0aW9uID0gY3JlYXRlQWJvdXRTZWN0aW9uKCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQ7ICIsImNvbnN0IGNyZWF0ZUNvbnRhY3RTZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcsICd0YWJQYW5lbCcpXHJcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpXHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYDxzcGFuPmNvbnRhY3Q8L3NwYW4+IHVzYFxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgbWFwLmNsYXNzTGlzdC5hZGQoJ21hcCcpO1xyXG4gICAgbWFwLnNyYyA9IGBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ0ODU0Ljc4ODcwMzI1MTE0OCEyZC03OS40ODk3MTIyMjk2OTU2MSEzZDQzLjY1NDkzNzMwNzU5OTQ1ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODJiMzY4YzI3ZTczMzc3JTNBMHg3NTQ3YTNjYTJhMWM3ZGMyITJzR29sZGVuJTIwR2Vja28lMjBDb2ZmZWUhNWUwITNtMiExc2VuITJzY2EhNHYxNjQ1MTE0NTc5MzA2ITVtMiExc2VuITJzY2FgXHJcbiAgICBtYXAuc2V0QXR0cmlidXRlKCdhbGxvd0Z1bGxTY3JlZW4nLCAnJylcclxuICAgIG1hcC5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnbGF6eScpXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoMy5pbm5lclRleHQgPSAnZ2V0IGluIHRvdWNoJztcclxuXHJcbiAgICBjb25zdCBpbnB1dEJveDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGlucHV0Qm94MS5jbGFzc0xpc3QuYWRkKCdpbnB1dEJveCcpXHJcbiAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQxLnR5cGUgPSAndGV4dCdcclxuICAgIGlucHV0MS5wbGFjZWhvbGRlciA9ICdOYW1lJ1xyXG4gICAgY29uc3QgdXNlckljb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdXNlckljb24xLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS11c2VyJyk7XHJcbiAgICBpbnB1dEJveDEuYXBwZW5kKHVzZXJJY29uMSwgaW5wdXQxKVxyXG5cclxuICAgIGNvbnN0IGlucHV0Qm94MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5wdXRCb3gyLmNsYXNzTGlzdC5hZGQoJ2lucHV0Qm94JylcclxuICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dDIudHlwZSA9ICdlbWFpbCdcclxuICAgIGlucHV0Mi5wbGFjZWhvbGRlciA9ICdFbWFpbCdcclxuICAgIGNvbnN0IHVzZXJJY29uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHVzZXJJY29uMi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtZW52ZWxvcGUnKTtcclxuICAgIGlucHV0Qm94Mi5hcHBlbmQodXNlckljb24yLCBpbnB1dDIpXHJcblxyXG4gICAgY29uc3QgaW5wdXRCb3gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnB1dEJveDMuY2xhc3NMaXN0LmFkZCgnaW5wdXRCb3gnKVxyXG4gICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0My50eXBlID0gJ251bWJlcidcclxuICAgIGlucHV0My5wbGFjZWhvbGRlciA9ICdOdW1iZXInXHJcbiAgICBjb25zdCB1c2VySWNvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB1c2VySWNvbjMuY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLXBob25lJyk7XHJcbiAgICBpbnB1dEJveDMuYXBwZW5kKHVzZXJJY29uMywgaW5wdXQzKVxyXG5cclxuICAgIGNvbnN0IGlucHV0Qm94NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dEJveDQuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICBpbnB1dEJveDQudHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgaW5wdXRCb3g0LnZhbHVlID0gJ2NvbnRhY3Qgbm93JztcclxuXHJcbiAgICBmb3JtLmFwcGVuZChoMywgaW5wdXRCb3gxLCBpbnB1dEJveDIsIGlucHV0Qm94MywgaW5wdXRCb3g0KTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgcm93LmFwcGVuZChtYXAsIGZvcm0pO1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGNvbnRhY3QuYXBwZW5kKGhlYWRlciwgcm93KVxyXG5cclxuICAgIHJldHVybiBjb250YWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBjcmVhdGVDb250YWN0U2VjdGlvbigpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJjb25zdCBjcmVhdGVGb290ZXJTZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXHJcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKVxyXG5cclxuICAgIGNvbnN0IHNoYXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaGFyZS5jbGFzc0xpc3QuYWRkKCdzaGFyZScpO1xyXG5cclxuICAgIGNvbnN0IGZiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBmYi5ocmVmID0gJyMnO1xyXG4gICAgZmIuY2xhc3NMaXN0LmFkZCgnZmFiJywgJ2ZhLWZhY2Vib29rLWYnKVxyXG5cclxuICAgIGNvbnN0IHR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIHR3aXR0ZXIuaHJlZiA9ICcjJztcclxuICAgIHR3aXR0ZXIuY2xhc3NMaXN0LmFkZCgnZmFiJywgJ2ZhLXR3aXR0ZXInKVxyXG5cclxuICAgIGNvbnN0IGluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgaW5zdGFncmFtLmhyZWYgPSAnIyc7XHJcbiAgICBpbnN0YWdyYW0uY2xhc3NMaXN0LmFkZCgnZmFiJywgJ2ZhLWluc3RhZ3JhbScpXHJcblxyXG4gICAgY29uc3QgbGlua2VkaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGxpbmtlZGluLmhyZWYgPSAnIyc7XHJcbiAgICBsaW5rZWRpbi5jbGFzc0xpc3QuYWRkKCdmYWInLCAnZmEtbGlua2VkaW4nKVxyXG5cclxuICAgIGNvbnN0IHBpbnRlcmVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgcGludGVyZXN0LmhyZWYgPSAnIyc7XHJcbiAgICBwaW50ZXJlc3QuY2xhc3NMaXN0LmFkZCgnZmFiJywgJ2ZhLXBpbnRlcmVzdCcpXHJcblxyXG4gICAgc2hhcmUuYXBwZW5kKGZiLCB0d2l0dGVyLCBpbnN0YWdyYW0sIGxpbmtlZGluLCBwaW50ZXJlc3QpO1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdsaW5rcycpO1xyXG5cclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBob21lLmhyZWYgPSAnIyc7XHJcbiAgICBob21lLmlubmVyVGV4dCA9ICdob21lJztcclxuXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGFib3V0LmhyZWYgPSAnIyc7XHJcbiAgICBhYm91dC5pbm5lclRleHQgPSAnYWJvdXQnO1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBtZW51LmhyZWYgPSAnIyc7XHJcbiAgICBtZW51LmlubmVyVGV4dCA9ICdtZW51JztcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIHByb2R1Y3RzLmhyZWYgPSAnIyc7XHJcbiAgICBwcm9kdWN0cy5pbm5lclRleHQgPSAncHJvZHVjdHMnO1xyXG5cclxuICAgIGNvbnN0IHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIHJldmlldy5ocmVmID0gJyMnO1xyXG4gICAgcmV2aWV3LmlubmVyVGV4dCA9ICdyZXZpZXcnO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29udGFjdHMuaHJlZiA9ICcjJztcclxuICAgIGNvbnRhY3RzLmlubmVyVGV4dCA9ICdjb250YWN0cyc7XHJcblxyXG4gICAgY29uc3QgYmxvZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBibG9ncy5ocmVmID0gJyMnO1xyXG4gICAgYmxvZ3MuaW5uZXJUZXh0ID0gJ2Jsb2dzJztcclxuXHJcbiAgICBsaW5rcy5hcHBlbmQoaG9tZSwgYWJvdXQsIG1lbnUsIHByb2R1Y3RzLCByZXZpZXcsIGNvbnRhY3RzLCBibG9ncyk7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY3JlZGl0cy5jbGFzc0xpc3QuYWRkKCdjcmVkaXQnKVxyXG4gICAgY3JlZGl0cy5pbm5lckhUTUwgPSBgY3JlYXRlZCBieSA8c3Bhbj5hYmVsIGVzcGluPC9zcGFuPiB8IGFsbCByaWdodHMgcmVzZXJ2ZWRgXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZChzaGFyZSwgbGlua3MsIGNyZWRpdHMpO1xyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvb3RlcigpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgZm9vdGVyU2VjdGlvbiA9IGNyZWF0ZUZvb3RlclNlY3Rpb24oKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlclNlY3Rpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkRm9vdGVyOyIsImNvbnN0IGNyZWF0ZUhvbWVTZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScsICd0YWJQYW5lbCcpXHJcbiAgICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpXHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ2ZyZXNoIGNvZmZlZSBpbiB0aGUgbW9ybmluZyc7XHJcblxyXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGFyYWdyYXBoLmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gU3VudCBjb3JydXB0aSBxdW8gb2ZmaWNpYSBkZWJpdGlzIGFsaXF1aWQgZG9sb3JpYnVzLidcclxuXHJcbiAgICBjb25zdCBhY3Rpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhY3Rpb25CdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICBhY3Rpb25CdG4uaHJlZiA9ICgnIycpO1xyXG4gICAgYWN0aW9uQnRuLmlubmVyVGV4dCA9IFwiZ2V0IHlvdXIncyBub3dcIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIsIHBhcmFncmFwaCwgYWN0aW9uQnRuKTtcclxuICAgIHJldHVybiBob21lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgaG9tZVNlY3Rpb24gPSBjcmVhdGVIb21lU2VjdGlvbigpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVNlY3Rpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJpbXBvcnQgbG9nb0ltYWdlIGZyb20gXCIuLi9pbWFnZXMvbG9nby5wbmdcIjtcclxuaW1wb3J0IHNob3dQYW5lbCBmcm9tIFwiLi4vaW5kZXhcIjtcclxuLy8gaW1wb3J0IHNob3dQYW5lbCBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5jb25zdCBjcmVhdGVIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBjb25zdCBsb2dvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGxvZ29FbGVtZW50LmhyZWYgPSAoJyMnKTtcclxuICAgIGxvZ29FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxyXG5cclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgbG9nby5zcmMgPSBsb2dvSW1hZ2U7XHJcbiAgICBsb2dvRWxlbWVudC5hcHBlbmRDaGlsZChsb2dvKVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XHJcblxyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgaG9tZS5ocmVmID0gKCcjaG9tZScpO1xyXG4gICAgaG9tZS5pbm5lclRleHQgPSBcImhvbWVcIlxyXG4gICAgaG9tZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNob3dQYW5lbCgwKVxyXG4gICAgfVxyXG4gICAgbmF2RWxlbWVudC5hcHBlbmRDaGlsZChob21lKTtcclxuXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgYWJvdXQuaHJlZiA9ICgnI2Fib3V0Jyk7XHJcbiAgICBhYm91dC5pbm5lclRleHQgPSBcIkFib3V0XCJcclxuICAgIGFib3V0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2hvd1BhbmVsKDEpXHJcbiAgICB9XHJcbiAgICBuYXZFbGVtZW50LmFwcGVuZENoaWxkKGFib3V0KTtcclxuXHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBtZW51LmhyZWYgPSAoJyNtZW51Jyk7XHJcbiAgICBtZW51LmlubmVyVGV4dCA9ICdNZW51J1xyXG4gICAgbWVudS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNob3dQYW5lbCgyKVxyXG4gICAgfVxyXG4gICAgbmF2RWxlbWVudC5hcHBlbmRDaGlsZChtZW51KTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBjb250YWN0LmhyZWYgPSAoJyNjb250YWN0Jyk7XHJcbiAgICBjb250YWN0LmlubmVyVGV4dCA9ICdDb250YWN0J1xyXG4gICAgY29udGFjdC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNob3dQYW5lbCgzKVxyXG4gICAgfVxyXG4gICAgbmF2RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBjb25zdCBpY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaWNvbnMuY2xhc3NMaXN0LmFkZCgnaWNvbnMnKTtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlYXJjaEJ0bi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtc2VhcmNoJylcclxuICAgIHNlYXJjaEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlYXJjaC1idG4nKVxyXG5cclxuICAgIGNvbnN0IHNob3BwaW5nQ2FydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hvcHBpbmdDYXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1zaG9wcGluZy1jYXJ0JylcclxuICAgIHNob3BwaW5nQ2FydEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcnQtYnRuJylcclxuXHJcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1iYXJzJylcclxuICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJ0bicpXHJcblxyXG4gICAgaWNvbnMuYXBwZW5kKHNlYXJjaEJ0biwgc2hvcHBpbmdDYXJ0QnRuLCBtZW51QnRuKVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmQobG9nb0VsZW1lbnQsIG5hdkVsZW1lbnQsIGljb25zKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTsiLCJpbXBvcnQgbWVudUl0ZW0xIGZyb20gXCIuLi9pbWFnZXMvbWVudS0xLnBuZ1wiO1xyXG5pbXBvcnQgbWVudUl0ZW0yIGZyb20gXCIuLi9pbWFnZXMvbWVudS0yLnBuZ1wiO1xyXG5pbXBvcnQgbWVudUl0ZW0zIGZyb20gXCIuLi9pbWFnZXMvbWVudS0zLnBuZ1wiO1xyXG5pbXBvcnQgbWVudUl0ZW00IGZyb20gXCIuLi9pbWFnZXMvbWVudS00LnBuZ1wiO1xyXG5pbXBvcnQgbWVudUl0ZW01IGZyb20gXCIuLi9pbWFnZXMvbWVudS01LnBuZ1wiO1xyXG5pbXBvcnQgbWVudUl0ZW02IGZyb20gXCIuLi9pbWFnZXMvbWVudS02LnBuZ1wiO1xyXG5cclxuY29uc3QgY3JlYXRlTWVudVNlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51JywgJ3RhYlBhbmVsJylcclxuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51JylcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xyXG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSBgb3VyIDxzcGFuPm1lbnU8L3NwYW4+YFxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGNvbnN0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JveC1jb250YWluZXInKTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBjb25zdCBib3gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib3gxLmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xyXG5cclxuICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZzEuc3JjID0gbWVudUl0ZW0xO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaGVhZGVyMS5pbm5lclRleHQgPSAndGFzdHkgYW5kIGhlYWx0aHknO1xyXG5cclxuICAgIGNvbnN0IHByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJpY2UxLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XHJcbiAgICBwcmljZTEuaW5uZXJIVE1MID0gYCQxNS45OSA8c3Bhbj4yMC45OTwvc3Bhbj5gO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBidXR0b24xLmhyZWYgPSAnIyc7XHJcbiAgICBidXR0b24xLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gICAgYnV0dG9uMS5pbm5lclRleHQgPSAnYWRkIHRvIGNhcnQnO1xyXG5cclxuICAgIGJveDEuYXBwZW5kKGltZzEsIGhlYWRlcjEsIHByaWNlMSwgYnV0dG9uMSlcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgY29uc3QgYm94MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm94Mi5jbGFzc0xpc3QuYWRkKCdib3gnKTtcclxuXHJcbiAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcyLnNyYyA9IG1lbnVJdGVtMjtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGhlYWRlcjIuaW5uZXJUZXh0ID0gJ3Rhc3R5IGFuZCBoZWFsdGh5JztcclxuXHJcbiAgICBjb25zdCBwcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaWNlMi5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xyXG4gICAgcHJpY2UyLmlubmVySFRNTCA9IGAkMTUuOTkgPHNwYW4+MjAuOTk8L3NwYW4+YDtcclxuXHJcbiAgICBjb25zdCBidXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYnV0dG9uMi5ocmVmID0gJyMnO1xyXG4gICAgYnV0dG9uMi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgIGJ1dHRvbjIuaW5uZXJUZXh0ID0gJ2FkZCB0byBjYXJ0JztcclxuXHJcbiAgICBib3gyLmFwcGVuZChpbWcyLCBoZWFkZXIyLCBwcmljZTIsIGJ1dHRvbjIpXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGNvbnN0IGJveDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJveDMuY2xhc3NMaXN0LmFkZCgnYm94Jyk7XHJcblxyXG4gICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nMy5zcmMgPSBtZW51SXRlbTM7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoZWFkZXIzLmlubmVyVGV4dCA9ICd0YXN0eSBhbmQgaGVhbHRoeSc7XHJcblxyXG4gICAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmljZTMuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcclxuICAgIHByaWNlMy5pbm5lckhUTUwgPSBgJDE1Ljk5IDxzcGFuPjIwLjk5PC9zcGFuPmA7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGJ1dHRvbjMuaHJlZiA9ICcjJztcclxuICAgIGJ1dHRvbjMuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICBidXR0b24zLmlubmVyVGV4dCA9ICdhZGQgdG8gY2FydCc7XHJcblxyXG4gICAgYm94My5hcHBlbmQoaW1nMywgaGVhZGVyMywgcHJpY2UzLCBidXR0b24zKVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBjb25zdCBib3g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib3g0LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xyXG5cclxuICAgIGNvbnN0IGltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZzQuc3JjID0gbWVudUl0ZW00O1xyXG5cclxuICAgIGNvbnN0IGhlYWRlcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaGVhZGVyNC5pbm5lclRleHQgPSAndGFzdHkgYW5kIGhlYWx0aHknO1xyXG5cclxuICAgIGNvbnN0IHByaWNlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJpY2U0LmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XHJcbiAgICBwcmljZTQuaW5uZXJIVE1MID0gYCQxNS45OSA8c3Bhbj4yMC45OTwvc3Bhbj5gO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBidXR0b240LmhyZWYgPSAnIyc7XHJcbiAgICBidXR0b240LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gICAgYnV0dG9uNC5pbm5lclRleHQgPSAnYWRkIHRvIGNhcnQnO1xyXG5cclxuICAgIGJveDQuYXBwZW5kKGltZzQsIGhlYWRlcjQsIHByaWNlNCwgYnV0dG9uNClcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgY29uc3QgYm94NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm94NS5jbGFzc0xpc3QuYWRkKCdib3gnKTtcclxuXHJcbiAgICBjb25zdCBpbWc1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWc1LnNyYyA9IG1lbnVJdGVtNTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGhlYWRlcjUuaW5uZXJUZXh0ID0gJ3Rhc3R5IGFuZCBoZWFsdGh5JztcclxuXHJcbiAgICBjb25zdCBwcmljZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaWNlNS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xyXG4gICAgcHJpY2U1LmlubmVySFRNTCA9IGAkMTUuOTkgPHNwYW4+MjAuOTk8L3NwYW4+YDtcclxuXHJcbiAgICBjb25zdCBidXR0b241ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYnV0dG9uNS5ocmVmID0gJyMnO1xyXG4gICAgYnV0dG9uNS5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgIGJ1dHRvbjUuaW5uZXJUZXh0ID0gJ2FkZCB0byBjYXJ0JztcclxuXHJcbiAgICBib3g1LmFwcGVuZChpbWc1LCBoZWFkZXI1LCBwcmljZTUsIGJ1dHRvbjUpXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGNvbnN0IGJveDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJveDYuY2xhc3NMaXN0LmFkZCgnYm94Jyk7XHJcblxyXG4gICAgY29uc3QgaW1nNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nNi5zcmMgPSBtZW51SXRlbTY7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoZWFkZXI2LmlubmVyVGV4dCA9ICd0YXN0eSBhbmQgaGVhbHRoeSc7XHJcblxyXG4gICAgY29uc3QgcHJpY2U2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmljZTYuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcclxuICAgIHByaWNlNi5pbm5lckhUTUwgPSBgJDE1Ljk5IDxzcGFuPjIwLjk5PC9zcGFuPmA7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGJ1dHRvbjYuaHJlZiA9ICcjJztcclxuICAgIGJ1dHRvbjYuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICBidXR0b242LmlubmVyVGV4dCA9ICdhZGQgdG8gY2FydCc7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGJveDYuYXBwZW5kKGltZzYsIGhlYWRlcjYsIHByaWNlNiwgYnV0dG9uNilcclxuICAgIGJveENvbnRhaW5lci5hcHBlbmQoYm94MSwgYm94MiwgYm94MywgYm94NCwgYm94NSwgYm94NilcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBtZW51LmFwcGVuZChoZWFkaW5nLCBib3hDb250YWluZXIpXHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGNyZWF0ZU1lbnVTZWN0aW9uKCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=