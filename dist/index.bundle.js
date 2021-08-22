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
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 0;\n  margin: 0;\n  background-color: #f6f6f6;\n  height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: sans-serif;\n  color: rgb(150, 145, 145);\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n.app-name {\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\n.app-name a,\n.item a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.item:hover,\n.app-name:hover {\n  cursor: pointer;\n  color: rgb(226, 214, 214);\n}\n\n.nav-items {\n  display: flex;\n  list-style-type: none;\n  gap: 5vw;\n  padding: 0;\n  margin: 0;\n  font-weight: bold;\n}\n\n.app {\n  width: 90vw;\n  margin: 20px auto;\n  background-color: #fff;\n  box-shadow: 0 3px 5px rgb(163, 158, 158);\n}\n\n.app-heading {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.refresh,\n.add {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.custom-row {\n  padding: 10px;\n  border-bottom: 0.5px solid rgb(230, 222, 222);\n  height: 30px;\n}\n\n::placeholder {\n  font-style: italic;\n  font-size: 1rem;\n  color: rgb(196, 185, 185);\n}\n\n.two {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox {\n  margin: 0 10px 0 0;\n}\n\n.fa-check {\n  display: none;\n  cursor: pointer;\n  color: rgb(13, 117, 30);\n  margin-right: 7px;\n}\n\n.to-do {\n  border: none;\n  padding: 0;\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n  height: 50px;\n  color: rgb(134, 122, 122);\n  font-size: 1.1rem;\n}\n\n.to-do:focus {\n  border: none;\n  outline: none;\n}\n\n.cross-out {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n.checkbox:hover {\n  cursor: pointer;\n}\n\n.clear-all {\n  text-align: center;\n  line-height: 30px;\n  background-color: #f6f6f6;\n  border-bottom: none;\n}\n\n.clear-text:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: rgb(75, 66, 66);\n}\n\n.to-do-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.refresh p {\n  margin: 0;\n  padding: 0;\n}\n\n.input {\n  border: none;\n  background-color: inherit;\n  font-size: 1.2rem;\n  color: rgb(150, 145, 145);\n  width: 100%;\n  font-style: italic;\n}\n\n.input:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-arrows-alt {\n  color: rgb(204, 187, 187);\n}\n\n.fa-arrows-alt:hover {\n  cursor: move;\n  color: rgb(75, 66, 66);\n}\n\n.fa-trash-alt {\n  color: tomato;\n}\n\n.fa-trash-alt:hover {\n  cursor: pointer;\n}\n\n.fa-sync {\n  transform: rotate(110deg);\n  transform-origin: initial;\n  transition: all 1s;\n}\n\n.rotate-sync {\n  transform: rotate(830deg);\n}\n\n.return {\n  font-size: 2rem;\n}\n\n.fa-sync:hover,\n.return:hover {\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n@media all and (min-width: 786px) {\n  .app {\n    width: 50vw;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,yBAAyB;EACzB,aAAa;EACb,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,MAAM;EACN,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;;EAEE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,QAAQ;EACR,UAAU;EACV,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6CAA6C;EAC7C,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE;IACE,WAAW;EACb;AACF","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n  background-color: #f6f6f6;\n  height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: sans-serif;\n  color: rgb(150, 145, 145);\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n.app-name {\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\n.app-name a,\n.item a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.item:hover,\n.app-name:hover {\n  cursor: pointer;\n  color: rgb(226, 214, 214);\n}\n\n.nav-items {\n  display: flex;\n  list-style-type: none;\n  gap: 5vw;\n  padding: 0;\n  margin: 0;\n  font-weight: bold;\n}\n\n.app {\n  width: 90vw;\n  margin: 20px auto;\n  background-color: #fff;\n  box-shadow: 0 3px 5px rgb(163, 158, 158);\n}\n\n.app-heading {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.refresh,\n.add {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.custom-row {\n  padding: 10px;\n  border-bottom: 0.5px solid rgb(230, 222, 222);\n  height: 30px;\n}\n\n::placeholder {\n  font-style: italic;\n  font-size: 1rem;\n  color: rgb(196, 185, 185);\n}\n\n.two {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox {\n  margin: 0 10px 0 0;\n}\n\n.fa-check {\n  display: none;\n  cursor: pointer;\n  color: rgb(13, 117, 30);\n  margin-right: 7px;\n}\n\n.to-do {\n  border: none;\n  padding: 0;\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n  height: 50px;\n  color: rgb(134, 122, 122);\n  font-size: 1.1rem;\n}\n\n.to-do:focus {\n  border: none;\n  outline: none;\n}\n\n.cross-out {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n.checkbox:hover {\n  cursor: pointer;\n}\n\n.clear-all {\n  text-align: center;\n  line-height: 30px;\n  background-color: #f6f6f6;\n  border-bottom: none;\n}\n\n.clear-text:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: rgb(75, 66, 66);\n}\n\n.to-do-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.refresh p {\n  margin: 0;\n  padding: 0;\n}\n\n.input {\n  border: none;\n  background-color: inherit;\n  font-size: 1.2rem;\n  color: rgb(150, 145, 145);\n  width: 100%;\n  font-style: italic;\n}\n\n.input:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-arrows-alt {\n  color: rgb(204, 187, 187);\n}\n\n.fa-arrows-alt:hover {\n  cursor: move;\n  color: rgb(75, 66, 66);\n}\n\n.fa-trash-alt {\n  color: tomato;\n}\n\n.fa-trash-alt:hover {\n  cursor: pointer;\n}\n\n.fa-sync {\n  transform: rotate(110deg);\n  transform-origin: initial;\n  transition: all 1s;\n}\n\n.rotate-sync {\n  transform: rotate(830deg);\n}\n\n.return {\n  font-size: 2rem;\n}\n\n.fa-sync:hover,\n.return:hover {\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n@media all and (min-width: 786px) {\n  .app {\n    width: 50vw;\n  }\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/completedToDo.js":
/*!******************************!*\
  !*** ./src/completedToDo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "addEventListenerToLinks": () => (/* binding */ addEventListenerToLinks)
/* harmony export */ });
const updateCompleted = (task, tasks) => {
  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addEventListenerToLinks = (addToDo, remove, refresh) => {
  document.querySelector('.item:nth-child(1)').addEventListener('click', addToDo);
  document.querySelector('.item:nth-child(2)').addEventListener('click', remove);
  document.querySelector('.item:nth-child(3)').addEventListener('click', refresh);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCompleted);


/***/ }),

/***/ "./src/manipulateToDo.js":
/*!*******************************!*\
  !*** ./src/manipulateToDo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drop": () => (/* binding */ drop),
/* harmony export */   "dragEnd": () => (/* binding */ dragEnd),
/* harmony export */   "drag": () => (/* binding */ drag),
/* harmony export */   "dragStart": () => (/* binding */ dragStart),
/* harmony export */   "removeOne": () => (/* binding */ removeOne),
/* harmony export */   "removeSelected": () => (/* binding */ removeSelected),
/* harmony export */   "addToDo": () => (/* binding */ addToDo)
/* harmony export */ });
let dragStore = document.querySelector('.to-do-row');
const prevNextIds = {
  prevId: 0,
  nextId: 1,
};

const reorderIndices = (tasks) => {
  let index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  });
};

const drop = (ev) => {
  ev.preventDefault();
  let elUnder = ev.target;
  const classArray = elUnder.classList.value.split(' ');

  if (
    classArray.includes('fa-check')
    || classArray.includes('checkbox')
    || classArray.includes('to-do')
  ) {
    elUnder = elUnder.parentElement.parentElement;
  } else if (
    classArray.includes('fa-arrows-alt')
    || classArray.includes('two')
  ) {
    elUnder = elUnder.parentElement;
  }
  prevNextIds.nextId = Number(elUnder.id);
  prevNextIds.prevId = Number(dragStore.id);

  if (prevNextIds.prevId < prevNextIds.nextId) {
    elUnder.parentElement.insertBefore(
      dragStore,
      elUnder.nextElementSibling,
    );
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    elUnder.parentElement.insertBefore(dragStore, elUnder);
  }

  const { id } = elUnder;

  if (prevNextIds.prevId < prevNextIds.nextId) {
    setTimeout(() => {
      document.getElementById(id).style.backgroundColor = '#4c3c3c';
      setTimeout(() => {
        document.getElementById(id).style.backgroundColor = '#fff';
      }, 810);
    }, 10);
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    setTimeout(() => {
      document.getElementById(
        id,
      ).style.backgroundColor = '#4c3c3c';
      setTimeout(() => {
        document.getElementById(
          id,
        ).style.backgroundColor = '#fff';
      }, 810);
    }, 10);
  }
};

const dragEnd = (showToDo) => {
  setTimeout(() => {
    dragStore.style.backgroundColor = '#fff';
  }, 1000);

  const allToDoElements = Array.from(document.querySelectorAll('.to-do-row'));
  const ids = allToDoElements.map((el) => Number(el.id));
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  const mockTasks = [];
  ids.forEach((id) => {
    mockTasks.push(tasks.filter((task) => task.index === id)[0]);
  });
  tasks = mockTasks;
  reorderIndices(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo();
};

const drag = (ev) => {
  const draggedElement = ev.target;
  dragStore = draggedElement;
  dragStore.style.backgroundColor = '#4c3c3c';
};

const dragStart = (e) => {
  e.target.style.backgroundColor = '#4c3c3c';
};

const removeOne = (task, showToDo) => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter((oneTask) => oneTask.index !== task.index);
  reorderIndices(tasks);
  // eslint-disable-next-line no-use-before-define
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo();
};

const removeSelected = (tasks, showToDo) => {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter((task) => !task.completed);
  reorderIndices(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo();
  return true;
};

const addToDo = (tasks, showToDo, goToInput) => {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  const description = document.querySelector('.input').value;
  if (!description) {
    goToInput();
    return false;
  }

  const data = {
    description,
    index: tasks.length + 1,
    completed: false,
  };
  tasks.push(data);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo();
  document.querySelector('.input').value = '';
  goToInput();
  return true;
};




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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _completedToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completedToDo */ "./src/completedToDo.js");
/* harmony import */ var _manipulateToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manipulateToDo */ "./src/manipulateToDo.js");




let tasks = [];
const goToInput = () => document.querySelector('.input').focus();

document.querySelector(
  '.footer-text',
).innerHTML = `&copy; ${new Date().getFullYear()} Henry-Kc, built with 💕 from me`;

const alternateTickAndCheck = (tick, check, task, input2) => {
  if (task.completed) {
    tick.style.display = 'inline-block';
    check.style.display = 'none';
    input2.classList.add('cross-out');
  } else {
    tick.style.display = 'none';
    check.style.display = 'inline-block';
    input2.classList.remove('cross-out');
  }
};

const showToDo = () => {
  document.querySelector('.to-do-list').innerHTML = '';
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (typeof tasks[0] === 'object') {
    tasks.forEach((task, index, tasks) => {
      // eslint-disable-next-line no-use-before-define
      generateToDoRows(task.description, task, tasks);
    });
    return true;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return true;
};

const refresh = (showToDo) => {
  // tasks = _.sortBy(tasks, 'index');
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  showToDo();
  goToInput();
  return true;
};

const generateToDoRows = (text, task, tasks) => {
  const div = document.createElement('div');
  div.classList.add('to-do-row', 'custom-row');
  div.id = task.index;
  div.draggable = true;
  const div2 = document.createElement('div');
  div2.classList.add('two');

  const input = document.createElement('input');
  input.classList.add('checkbox');
  input.type = 'checkbox';

  const tick = document.createElement('i');
  tick.classList.add('fas', 'fa-check');

  div2.appendChild(input);
  div2.appendChild(tick);

  const input2 = document.createElement('input');
  input2.contentEditable = true;
  input2.classList.add('to-do');

  input2.type = 'text';
  input2.value = text;
  div2.appendChild(input2);

  div.appendChild(div2);

  const i = document.createElement('i');
  i.classList.add('fas', 'fa-arrows-alt');
  div.appendChild(i);

  input2.addEventListener('focus', () => {
    input2.style.backgroundColor = '#fffeca';
    div.style.backgroundColor = '#fffeca';
    i.classList.remove('fa-arrows-alt');
    i.classList.add('fa-trash-alt');
    i.addEventListener('click', () => {
      (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeOne)(task, showToDo);
    });
  });
  tick.addEventListener('click', () => {
    (0,_completedToDo__WEBPACK_IMPORTED_MODULE_1__.default)(task, tasks);
    alternateTickAndCheck(tick, input, task, input2);
    return true;
  });

  input.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_completedToDo__WEBPACK_IMPORTED_MODULE_1__.default)(task, tasks);
    alternateTickAndCheck(tick, input, task, input2);
    return true;
  });
  if (task.completed) {
    tick.style.display = 'inline-block';
    input.style.display = 'none';
    input2.classList.add('cross-out');
  } else if (!task.completed) {
    tick.style.display = 'none';
    input.style.display = 'inline-block';
    input2.classList.remove('cross-out');
  }

  const editToDo = (input, task, tasks) => {
    const { value } = input;
    if (value === '') {
      (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeOne)(task, showToDo);
    }
    task.description = value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // eslint-disable-next-line no-use-before-define
    showToDo();
  };

  input2.addEventListener('blur', () => {
    input2.style.backgroundColor = '#fff';
    div.style.backgroundColor = '#fff';

    setTimeout(() => {
      i.classList.remove('fa-trash-alt');
      i.classList.add('fa-arrows-alt');
      i.removeEventListener('click', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeOne)(task, showToDo));
    }, 200);
  });

  input2.addEventListener('change', () => {
    editToDo(input2, task, tasks);
  });

  input2.addEventListener('keypress', (e) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      input2.blur();
    }
  });

  const toDoContainer = document.querySelector('.to-do-list');
  toDoContainer.appendChild(div);
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  div.addEventListener('drag', (ev) => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.drag)(ev));
  div.addEventListener('dragstart', (e) => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.dragStart)(e));
  div.addEventListener('dragend', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.dragEnd)(showToDo));
  div.addEventListener('drop', (ev) => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.drop)(ev));

  return true;
};

document.querySelector('.clear-text').addEventListener('click', () => {
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeSelected)(tasks, showToDo);
});

document
  .querySelector('.return')
  .addEventListener('click', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.addToDo)(tasks, showToDo, goToInput));
document.querySelector('.fa-sync').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate-sync');
});

document.querySelector('.item:nth-child(3)').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate-sync');
});

const refreshButton = document.querySelector('.fa-sync');
refreshButton.addEventListener('click', () => {
  refresh(showToDo);
  return true;
});

document.querySelector('.input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.addToDo)(tasks, showToDo, goToInput);
  }
  return true;
});

document
  .querySelector('.item:nth-child(1)')
  .addEventListener('click', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.addToDo)(tasks, showToDo, goToInput));
document
  .querySelector('.item:nth-child(2)')
  .addEventListener('click', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeSelected)(tasks, showToDo));
document
  .querySelector('.item:nth-child(3)')
  .addEventListener('click', () => refresh(showToDo));

refresh(showToDo);

showToDo();

document.querySelector('.fa-sync').title = 'remove tasks completed more than one month ago';
document.querySelector('.item:nth-child(3)').title = 'remove tasks completed more than one month ago';
document.querySelector('.item:nth-child(2)').title = 'remove completed tasks';
document.querySelector('.item:nth-child(1)').title = 'add tasks';
document.querySelector('.clear-text').title = 'remove completed tasks';
const allCheckboxes = Array.from(document.querySelectorAll('.checkbox'));
allCheckboxes.forEach((checkbox) => {
  checkbox.title = 'mark as completed';
  return true;
});
const allTickMarks = Array.from(document.querySelectorAll('.fa-check'));
allTickMarks.forEach((tickMark) => {
  tickMark.title = 'unmark as completed';
  return true;
});
const allTodoItems = Array.from(document.querySelectorAll('.to-do'));
allTodoItems.forEach((todo) => {
  todo.title = 'click to delete/edit, drag to move';
  return true;
});
const allMoveButtons = Array.from(document.querySelectorAll('fa-arrows-alt'));
allMoveButtons.forEach((moveButton) => {
  moveButton.title = 'drag within the box to move';
  return true;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL3NyYy9jb21wbGV0ZWRUb0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vc3JjL21hbmlwdWxhdGVUb0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYigxNTAsIDE0NSwgMTQ1KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA1dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGMzYzNjO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYXBwLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFwcC1uYW1lIGEsXFxuLml0ZW0gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLml0ZW06aG92ZXIsXFxuLmFwcC1uYW1lOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjI2LCAyMTQsIDIxNCk7XFxufVxcblxcbi5uYXYtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGdhcDogNXZ3O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYXBwIHtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IHJnYigxNjMsIDE1OCwgMTU4KTtcXG59XFxuXFxuLmFwcC1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWZyZXNoLFxcbi5hZGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jdXN0b20tcm93IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2IoMjMwLCAyMjIsIDIyMik7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHJnYigxOTYsIDE4NSwgMTg1KTtcXG59XFxuXFxuLnR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xcbn1cXG5cXG4uZmEtY2hlY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTMsIDExNywgMzApO1xcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxufVxcblxcbi50by1kbyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogcmdiKDEzNCwgMTIyLCAxMjIpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi50by1kbzpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY3Jvc3Mtb3V0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5jaGVja2JveDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1hbGwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLmNsZWFyLXRleHQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogcmdiKDc1LCA2NiwgNjYpO1xcbn1cXG5cXG4udG8tZG8tcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVmcmVzaCBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogcmdiKDE1MCwgMTQ1LCAxNDUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5pbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZmEtYXJyb3dzLWFsdCB7XFxuICBjb2xvcjogcmdiKDIwNCwgMTg3LCAxODcpO1xcbn1cXG5cXG4uZmEtYXJyb3dzLWFsdDpob3ZlciB7XFxuICBjdXJzb3I6IG1vdmU7XFxuICBjb2xvcjogcmdiKDc1LCA2NiwgNjYpO1xcbn1cXG5cXG4uZmEtdHJhc2gtYWx0IHtcXG4gIGNvbG9yOiB0b21hdG87XFxufVxcblxcbi5mYS10cmFzaC1hbHQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmEtc3luYyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTBkZWcpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogaW5pdGlhbDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG59XFxuXFxuLnJvdGF0ZS1zeW5jIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDgzMGRlZyk7XFxufVxcblxcbi5yZXR1cm4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZmEtc3luYzpob3ZlcixcXG4ucmV0dXJuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMCA1dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGMzYzNjO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3ODZweCkge1xcbiAgLmFwcCB7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUixVQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiKDE1MCwgMTQ1LCAxNDUpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5hcHAtbmFtZSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYXBwLW5hbWUgYSxcXG4uaXRlbSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uaXRlbTpob3ZlcixcXG4uYXBwLW5hbWU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYigyMjYsIDIxNCwgMjE0KTtcXG59XFxuXFxuLm5hdi1pdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZ2FwOiA1dnc7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hcHAge1xcbiAgd2lkdGg6IDkwdnc7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDNweCA1cHggcmdiKDE2MywgMTU4LCAxNTgpO1xcbn1cXG5cXG4uYXBwLWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlZnJlc2gsXFxuLmFkZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmN1c3RvbS1yb3cge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYigyMzAsIDIyMiwgMjIyKTtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogcmdiKDE5NiwgMTg1LCAxODUpO1xcbn1cXG5cXG4udHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBtYXJnaW46IDAgMTBweCAwIDA7XFxufVxcblxcbi5mYS1jaGVjayB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYigxMywgMTE3LCAzMCk7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGNvbG9yOiByZ2IoMTM0LCAxMjIsIDEyMik7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnRvLWRvOmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jcm9zcy1vdXQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWFsbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4uY2xlYXItdGV4dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiByZ2IoNzUsIDY2LCA2Nik7XFxufVxcblxcbi50by1kby1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWZyZXNoIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNDUsIDE0NSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mYS1hcnJvd3MtYWx0IHtcXG4gIGNvbG9yOiByZ2IoMjA0LCAxODcsIDE4Nyk7XFxufVxcblxcbi5mYS1hcnJvd3MtYWx0OmhvdmVyIHtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIGNvbG9yOiByZ2IoNzUsIDY2LCA2Nik7XFxufVxcblxcbi5mYS10cmFzaC1hbHQge1xcbiAgY29sb3I6IHRvbWF0bztcXG59XFxuXFxuLmZhLXRyYXNoLWFsdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS1zeW5jIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDExMGRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBpbml0aWFsO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4ucm90YXRlLXN5bmMge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoODMwZGVnKTtcXG59XFxuXFxuLnJldHVybiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mYS1zeW5jOmhvdmVyLFxcbi5yZXR1cm46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc4NnB4KSB7XFxuICAuYXBwIHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB1cGRhdGVDb21wbGV0ZWQgPSAodGFzaywgdGFza3MpID0+IHtcbiAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9MaW5rcyA9IChhZGRUb0RvLCByZW1vdmUsIHJlZnJlc2gpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDEpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb0RvKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDIpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMyknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZnJlc2gpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQ29tcGxldGVkO1xuZXhwb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvTGlua3MgfTsiLCJsZXQgZHJhZ1N0b3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLXJvdycpO1xuY29uc3QgcHJldk5leHRJZHMgPSB7XG4gIHByZXZJZDogMCxcbiAgbmV4dElkOiAxLFxufTtcblxuY29uc3QgcmVvcmRlckluZGljZXMgPSAodGFza3MpID0+IHtcbiAgbGV0IGluZGV4ID0gMTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suaW5kZXggPSBpbmRleDtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcbn07XG5cbmNvbnN0IGRyb3AgPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IGVsVW5kZXIgPSBldi50YXJnZXQ7XG4gIGNvbnN0IGNsYXNzQXJyYXkgPSBlbFVuZGVyLmNsYXNzTGlzdC52YWx1ZS5zcGxpdCgnICcpO1xuXG4gIGlmIChcbiAgICBjbGFzc0FycmF5LmluY2x1ZGVzKCdmYS1jaGVjaycpXG4gICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygnY2hlY2tib3gnKVxuICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3RvLWRvJylcbiAgKSB7XG4gICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB9IGVsc2UgaWYgKFxuICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWFycm93cy1hbHQnKVxuICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3R3bycpXG4gICkge1xuICAgIGVsVW5kZXIgPSBlbFVuZGVyLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcHJldk5leHRJZHMubmV4dElkID0gTnVtYmVyKGVsVW5kZXIuaWQpO1xuICBwcmV2TmV4dElkcy5wcmV2SWQgPSBOdW1iZXIoZHJhZ1N0b3JlLmlkKTtcblxuICBpZiAocHJldk5leHRJZHMucHJldklkIDwgcHJldk5leHRJZHMubmV4dElkKSB7XG4gICAgZWxVbmRlci5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcbiAgICAgIGRyYWdTdG9yZSxcbiAgICAgIGVsVW5kZXIubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICk7XG4gIH0gZWxzZSBpZiAocHJldk5leHRJZHMucHJldklkID4gcHJldk5leHRJZHMubmV4dElkKSB7XG4gICAgZWxVbmRlci5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShkcmFnU3RvcmUsIGVsVW5kZXIpO1xuICB9XG5cbiAgY29uc3QgeyBpZCB9ID0gZWxVbmRlcjtcblxuICBpZiAocHJldk5leHRJZHMucHJldklkIDwgcHJldk5leHRJZHMubmV4dElkKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzNjM2MnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gICAgICB9LCA4MTApO1xuICAgIH0sIDEwKTtcbiAgfSBlbHNlIGlmIChwcmV2TmV4dElkcy5wcmV2SWQgPiBwcmV2TmV4dElkcy5uZXh0SWQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBpZCxcbiAgICAgICkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzNjM2MnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgIGlkLFxuICAgICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgICAgIH0sIDgxMCk7XG4gICAgfSwgMTApO1xuICB9XG59O1xuXG5jb25zdCBkcmFnRW5kID0gKHNob3dUb0RvKSA9PiB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRyYWdTdG9yZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gIH0sIDEwMDApO1xuXG4gIGNvbnN0IGFsbFRvRG9FbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvLXJvdycpKTtcbiAgY29uc3QgaWRzID0gYWxsVG9Eb0VsZW1lbnRzLm1hcCgoZWwpID0+IE51bWJlcihlbC5pZCkpO1xuICBsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgY29uc3QgbW9ja1Rhc2tzID0gW107XG4gIGlkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgIG1vY2tUYXNrcy5wdXNoKHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCA9PT0gaWQpWzBdKTtcbiAgfSk7XG4gIHRhc2tzID0gbW9ja1Rhc2tzO1xuICByZW9yZGVySW5kaWNlcyh0YXNrcyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIHNob3dUb0RvKCk7XG59O1xuXG5jb25zdCBkcmFnID0gKGV2KSA9PiB7XG4gIGNvbnN0IGRyYWdnZWRFbGVtZW50ID0gZXYudGFyZ2V0O1xuICBkcmFnU3RvcmUgPSBkcmFnZ2VkRWxlbWVudDtcbiAgZHJhZ1N0b3JlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGMzYzNjJztcbn07XG5cbmNvbnN0IGRyYWdTdGFydCA9IChlKSA9PiB7XG4gIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGMzYzNjJztcbn07XG5cbmNvbnN0IHJlbW92ZU9uZSA9ICh0YXNrLCBzaG93VG9EbykgPT4ge1xuICBsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKG9uZVRhc2spID0+IG9uZVRhc2suaW5kZXggIT09IHRhc2suaW5kZXgpO1xuICByZW9yZGVySW5kaWNlcyh0YXNrcyk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICBzaG93VG9EbygpO1xufTtcblxuY29uc3QgcmVtb3ZlU2VsZWN0ZWQgPSAodGFza3MsIHNob3dUb0RvKSA9PiB7XG4gIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICByZW9yZGVySW5kaWNlcyh0YXNrcyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIHNob3dUb0RvKCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgYWRkVG9EbyA9ICh0YXNrcywgc2hvd1RvRG8sIGdvVG9JbnB1dCkgPT4ge1xuICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpLnZhbHVlO1xuICBpZiAoIWRlc2NyaXB0aW9uKSB7XG4gICAgZ29Ub0lucHV0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9O1xuICB0YXNrcy5wdXNoKGRhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICBzaG93VG9EbygpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKS52YWx1ZSA9ICcnO1xuICBnb1RvSW5wdXQoKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQge1xuICBkcm9wLCBkcmFnRW5kLCBkcmFnLCBkcmFnU3RhcnQsIHJlbW92ZU9uZSwgcmVtb3ZlU2VsZWN0ZWQsIGFkZFRvRG8sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHVwZGF0ZUNvbXBsZXRlZCBmcm9tICcuL2NvbXBsZXRlZFRvRG8nO1xuaW1wb3J0IHtcbiAgZHJvcCxcbiAgZHJhZ0VuZCxcbiAgZHJhZyxcbiAgZHJhZ1N0YXJ0LFxuICByZW1vdmVPbmUsXG4gIHJlbW92ZVNlbGVjdGVkLFxuICBhZGRUb0RvLFxufSBmcm9tICcuL21hbmlwdWxhdGVUb0RvJztcblxubGV0IHRhc2tzID0gW107XG5jb25zdCBnb1RvSW5wdXQgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKS5mb2N1cygpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnLmZvb3Rlci10ZXh0JyxcbikuaW5uZXJIVE1MID0gYCZjb3B5OyAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gSGVucnktS2MsIGJ1aWx0IHdpdGgg8J+SlSBmcm9tIG1lYDtcblxuY29uc3QgYWx0ZXJuYXRlVGlja0FuZENoZWNrID0gKHRpY2ssIGNoZWNrLCB0YXNrLCBpbnB1dDIpID0+IHtcbiAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgdGljay5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgY2hlY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpbnB1dDIuY2xhc3NMaXN0LmFkZCgnY3Jvc3Mtb3V0Jyk7XG4gIH0gZWxzZSB7XG4gICAgdGljay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNoZWNrLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICBpbnB1dDIuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3Mtb3V0Jyk7XG4gIH1cbn07XG5cbmNvbnN0IHNob3dUb0RvID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICBpZiAodHlwZW9mIHRhc2tzWzBdID09PSAnb2JqZWN0Jykge1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4LCB0YXNrcykgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICBnZW5lcmF0ZVRvRG9Sb3dzKHRhc2suZGVzY3JpcHRpb24sIHRhc2ssIHRhc2tzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHJlZnJlc2ggPSAoc2hvd1RvRG8pID0+IHtcbiAgLy8gdGFza3MgPSBfLnNvcnRCeSh0YXNrcywgJ2luZGV4Jyk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSAhPT0gbnVsbCkge1xuICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfVxuICBzaG93VG9EbygpO1xuICBnb1RvSW5wdXQoKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRvRG9Sb3dzID0gKHRleHQsIHRhc2ssIHRhc2tzKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgndG8tZG8tcm93JywgJ2N1c3RvbS1yb3cnKTtcbiAgZGl2LmlkID0gdGFzay5pbmRleDtcbiAgZGl2LmRyYWdnYWJsZSA9IHRydWU7XG4gIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKCd0d28nKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuXG4gIGNvbnN0IHRpY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHRpY2suY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWNoZWNrJyk7XG5cbiAgZGl2Mi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGRpdjIuYXBwZW5kQ2hpbGQodGljayk7XG5cbiAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQyLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gIGlucHV0Mi5jbGFzc0xpc3QuYWRkKCd0by1kbycpO1xuXG4gIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuICBpbnB1dDIudmFsdWUgPSB0ZXh0O1xuICBkaXYyLmFwcGVuZENoaWxkKGlucHV0Mik7XG5cbiAgZGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuXG4gIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGkuY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWFycm93cy1hbHQnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGkpO1xuXG4gIGlucHV0Mi5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBpbnB1dDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZlY2EnO1xuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmVjYSc7XG4gICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1hcnJvd3MtYWx0Jyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYS10cmFzaC1hbHQnKTtcbiAgICBpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlT25lKHRhc2ssIHNob3dUb0RvKTtcbiAgICB9KTtcbiAgfSk7XG4gIHRpY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlQ29tcGxldGVkKHRhc2ssIHRhc2tzKTtcbiAgICBhbHRlcm5hdGVUaWNrQW5kQ2hlY2sodGljaywgaW5wdXQsIHRhc2ssIGlucHV0Mik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlQ29tcGxldGVkKHRhc2ssIHRhc2tzKTtcbiAgICBhbHRlcm5hdGVUaWNrQW5kQ2hlY2sodGljaywgaW5wdXQsIHRhc2ssIGlucHV0Mik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICB0aWNrLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlucHV0Mi5jbGFzc0xpc3QuYWRkKCdjcm9zcy1vdXQnKTtcbiAgfSBlbHNlIGlmICghdGFzay5jb21wbGV0ZWQpIHtcbiAgICB0aWNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIGlucHV0Mi5jbGFzc0xpc3QucmVtb3ZlKCdjcm9zcy1vdXQnKTtcbiAgfVxuXG4gIGNvbnN0IGVkaXRUb0RvID0gKGlucHV0LCB0YXNrLCB0YXNrcykgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xuICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJlbW92ZU9uZSh0YXNrLCBzaG93VG9Ebyk7XG4gICAgfVxuICAgIHRhc2suZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIHNob3dUb0RvKCk7XG4gIH07XG5cbiAgaW5wdXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgaW5wdXQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXRyYXNoLWFsdCcpO1xuICAgICAgaS5jbGFzc0xpc3QuYWRkKCdmYS1hcnJvd3MtYWx0Jyk7XG4gICAgICBpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVtb3ZlT25lKHRhc2ssIHNob3dUb0RvKSk7XG4gICAgfSwgMjAwKTtcbiAgfSk7XG5cbiAgaW5wdXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBlZGl0VG9EbyhpbnB1dDIsIHRhc2ssIHRhc2tzKTtcbiAgfSk7XG5cbiAgaW5wdXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaW5wdXQyLmJsdXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpO1xuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWcnLCAoZXYpID0+IGRyYWcoZXYpKTtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiBkcmFnU3RhcnQoZSkpO1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGRyYWdFbmQoc2hvd1RvRG8pKTtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXYpID0+IGRyb3AoZXYpKTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci10ZXh0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSAhPT0gbnVsbCkge1xuICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIH1cbiAgcmVtb3ZlU2VsZWN0ZWQodGFza3MsIHNob3dUb0RvKTtcbn0pO1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcignLnJldHVybicpXG4gIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZFRvRG8odGFza3MsIHNob3dUb0RvLCBnb1RvSW5wdXQpKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1zeW5jJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1zeW5jJykuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlLXN5bmMnKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMyknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXN5bmMnKS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUtc3luYycpO1xufSk7XG5cbmNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc3luYycpO1xucmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVmcmVzaChzaG93VG9Ebyk7XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgYWRkVG9Ebyh0YXNrcywgc2hvd1RvRG8sIGdvVG9JbnB1dCk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtOm50aC1jaGlsZCgxKScpXG4gIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZFRvRG8odGFza3MsIHNob3dUb0RvLCBnb1RvSW5wdXQpKTtcbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMiknKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW1vdmVTZWxlY3RlZCh0YXNrcywgc2hvd1RvRG8pKTtcbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMyknKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZWZyZXNoKHNob3dUb0RvKSk7XG5cbnJlZnJlc2goc2hvd1RvRG8pO1xuXG5zaG93VG9EbygpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc3luYycpLnRpdGxlID0gJ3JlbW92ZSB0YXNrcyBjb21wbGV0ZWQgbW9yZSB0aGFuIG9uZSBtb250aCBhZ28nO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDMpJykudGl0bGUgPSAncmVtb3ZlIHRhc2tzIGNvbXBsZXRlZCBtb3JlIHRoYW4gb25lIG1vbnRoIGFnbyc7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMiknKS50aXRsZSA9ICdyZW1vdmUgY29tcGxldGVkIHRhc2tzJztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtOm50aC1jaGlsZCgxKScpLnRpdGxlID0gJ2FkZCB0YXNrcyc7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItdGV4dCcpLnRpdGxlID0gJ3JlbW92ZSBjb21wbGV0ZWQgdGFza3MnO1xuY29uc3QgYWxsQ2hlY2tib3hlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94JykpO1xuYWxsQ2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICBjaGVja2JveC50aXRsZSA9ICdtYXJrIGFzIGNvbXBsZXRlZCc7XG4gIHJldHVybiB0cnVlO1xufSk7XG5jb25zdCBhbGxUaWNrTWFya3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1jaGVjaycpKTtcbmFsbFRpY2tNYXJrcy5mb3JFYWNoKCh0aWNrTWFyaykgPT4ge1xuICB0aWNrTWFyay50aXRsZSA9ICd1bm1hcmsgYXMgY29tcGxldGVkJztcbiAgcmV0dXJuIHRydWU7XG59KTtcbmNvbnN0IGFsbFRvZG9JdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvJykpO1xuYWxsVG9kb0l0ZW1zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgdG9kby50aXRsZSA9ICdjbGljayB0byBkZWxldGUvZWRpdCwgZHJhZyB0byBtb3ZlJztcbiAgcmV0dXJuIHRydWU7XG59KTtcbmNvbnN0IGFsbE1vdmVCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmYS1hcnJvd3MtYWx0JykpO1xuYWxsTW92ZUJ1dHRvbnMuZm9yRWFjaCgobW92ZUJ1dHRvbikgPT4ge1xuICBtb3ZlQnV0dG9uLnRpdGxlID0gJ2RyYWcgd2l0aGluIHRoZSBib3ggdG8gbW92ZSc7XG4gIHJldHVybiB0cnVlO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9