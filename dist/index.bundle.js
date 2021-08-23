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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 0;\n  margin: 0;\n  background-color: #f6f6f6;\n  height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: sans-serif;\n  color: rgb(150, 145, 145);\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n.app-name {\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\n.app-name a,\n.item a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.item:hover,\n.app-name:hover {\n  cursor: pointer;\n  color: rgb(226, 214, 214);\n}\n\n.nav-items {\n  display: flex;\n  list-style-type: none;\n  gap: 5vw;\n  padding: 0;\n  margin: 0;\n  font-weight: bold;\n}\n\n.app {\n  width: 90vw;\n  margin: 20px auto;\n  background-color: #fff;\n  box-shadow: 0 3px 5px rgb(163, 158, 158);\n}\n\n.app-heading {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.refresh,\n.add {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.custom-row {\n  padding: 10px;\n  border-bottom: 0.5px solid rgb(230, 222, 222);\n  height: 30px;\n}\n\n::placeholder {\n  font-style: italic;\n  font-size: 1rem;\n  color: rgb(196, 185, 185);\n}\n\n.two {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox {\n  margin: 0 10px 0 0;\n}\n\n.fa-check {\n  display: none;\n  cursor: pointer;\n  color: rgb(134, 122, 122);\n  margin-right: 7px;\n}\n\n.to-do {\n  border: none;\n  padding: 0;\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n  height: 50px;\n  color: rgb(134, 122, 122);\n  font-size: 1.1rem;\n}\n\n.to-do:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-check:checked ~ .to-do {\n  color: rgb(150, 145, 145);\n}\n\n.cross-out {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n.fa-check:checked ~ .cross-out {\n  color: #ccc;\n}\n\n.checkbox:hover {\n  cursor: pointer;\n}\n\n.clear-all {\n  text-align: center;\n  line-height: 30px;\n  background-color: #f6f6f6;\n  border-bottom: none;\n}\n\n.clear-text:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: rgb(75, 66, 66);\n}\n\n.to-do-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.refresh p {\n  margin: 0;\n  padding: 0;\n}\n\n.input {\n  border: none;\n  background-color: inherit;\n  font-size: 1.2rem;\n  color: rgb(150, 145, 145);\n  width: 100%;\n  font-style: italic;\n}\n\n.input:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-arrows-alt {\n  color: rgb(204, 187, 187);\n}\n\n.fa-arrows-alt:hover {\n  cursor: move;\n  color: rgb(75, 66, 66);\n}\n\n.fa-trash-alt {\n  color: tomato;\n}\n\n.fa-trash-alt:hover {\n  cursor: pointer;\n}\n\n.fa-sync {\n  transform: rotate(110deg);\n  transform-origin: initial;\n  transition: all 1s;\n}\n\n.rotate-sync {\n  transform: rotate(830deg);\n}\n\n.return {\n  font-size: 2rem;\n}\n\n.fa-sync:hover,\n.return:hover {\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n@media all and (min-width: 786px) {\n  .app {\n    width: 50vw;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,yBAAyB;EACzB,aAAa;EACb,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,MAAM;EACN,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;;EAEE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,QAAQ;EACR,UAAU;EACV,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6CAA6C;EAC7C,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE;IACE,WAAW;EACb;AACF","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n  background-color: #f6f6f6;\n  height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: sans-serif;\n  color: rgb(150, 145, 145);\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n.app-name {\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\n.app-name a,\n.item a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.item:hover,\n.app-name:hover {\n  cursor: pointer;\n  color: rgb(226, 214, 214);\n}\n\n.nav-items {\n  display: flex;\n  list-style-type: none;\n  gap: 5vw;\n  padding: 0;\n  margin: 0;\n  font-weight: bold;\n}\n\n.app {\n  width: 90vw;\n  margin: 20px auto;\n  background-color: #fff;\n  box-shadow: 0 3px 5px rgb(163, 158, 158);\n}\n\n.app-heading {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.refresh,\n.add {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.custom-row {\n  padding: 10px;\n  border-bottom: 0.5px solid rgb(230, 222, 222);\n  height: 30px;\n}\n\n::placeholder {\n  font-style: italic;\n  font-size: 1rem;\n  color: rgb(196, 185, 185);\n}\n\n.two {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox {\n  margin: 0 10px 0 0;\n}\n\n.fa-check {\n  display: none;\n  cursor: pointer;\n  color: rgb(134, 122, 122);\n  margin-right: 7px;\n}\n\n.to-do {\n  border: none;\n  padding: 0;\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n  height: 50px;\n  color: rgb(134, 122, 122);\n  font-size: 1.1rem;\n}\n\n.to-do:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-check:checked ~ .to-do {\n  color: rgb(150, 145, 145);\n}\n\n.cross-out {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n.fa-check:checked ~ .cross-out {\n  color: #ccc;\n}\n\n.checkbox:hover {\n  cursor: pointer;\n}\n\n.clear-all {\n  text-align: center;\n  line-height: 30px;\n  background-color: #f6f6f6;\n  border-bottom: none;\n}\n\n.clear-text:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: rgb(75, 66, 66);\n}\n\n.to-do-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.refresh p {\n  margin: 0;\n  padding: 0;\n}\n\n.input {\n  border: none;\n  background-color: inherit;\n  font-size: 1.2rem;\n  color: rgb(150, 145, 145);\n  width: 100%;\n  font-style: italic;\n}\n\n.input:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-arrows-alt {\n  color: rgb(204, 187, 187);\n}\n\n.fa-arrows-alt:hover {\n  cursor: move;\n  color: rgb(75, 66, 66);\n}\n\n.fa-trash-alt {\n  color: tomato;\n}\n\n.fa-trash-alt:hover {\n  cursor: pointer;\n}\n\n.fa-sync {\n  transform: rotate(110deg);\n  transform-origin: initial;\n  transition: all 1s;\n}\n\n.rotate-sync {\n  transform: rotate(830deg);\n}\n\n.return {\n  font-size: 2rem;\n}\n\n.fa-sync:hover,\n.return:hover {\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n@media all and (min-width: 786px) {\n  .app {\n    width: 50vw;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "addToDo": () => (/* binding */ addToDo),
/* harmony export */   "removable": () => (/* binding */ removable)
/* harmony export */ });
let dragStore = document.querySelector('.to-do-row');
const prevNextIds = {
  prevId: 0,
  nextId: 1,
};
const removable = {
  init: true,
  value: false,
};

const reorderIndices = (tasks) => {
  let index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  });
};

const drag = (ev) => {
  const draggedElement = ev.target;
  dragStore = draggedElement;
  dragStore.style.backgroundColor = '#4c3c3c';
};

const dragStart = (e) => {
  let elUnder = e.target;
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
  elUnder.style.backgroundColor = '#4c3c3c';
  elUnder.style.color = '#fff';
  Array.from(elUnder.childNodes).forEach((node) => {
    if (node.nodeName === 'DIV') {
      const nodes = node.childNodes;
      Array.from(nodes).forEach((one) => {
        one.style.backgroundColor = '#4c3c3c';
        one.style.color = '#fff';
      });
    }
    node.style.backgroundColor = '#4c3c3c';
    node.style.color = '#fff';
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
    elUnder.parentElement.insertBefore(dragStore, elUnder.nextElementSibling);
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    elUnder.parentElement.insertBefore(dragStore, elUnder);
  }

  const { id } = elUnder;

  if (prevNextIds.prevId < prevNextIds.nextId) {
    setTimeout(() => {
      let elUnder = document.getElementById(id);
      // document.getElementById(id).style.backgroundColor = "#4c3c3c";
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

      elUnder.style.backgroundColor = '#4c3c3c';
      elUnder.style.color = '#fff';
      Array.from(elUnder.childNodes).forEach((node) => {
        if (node.nodeName === 'DIV') {
          const nodes = node.childNodes;
          Array.from(nodes).forEach((one) => {
            one.style.backgroundColor = '#4c3c3c';
            one.style.color = '#fff';
          });
        }
        node.style.backgroundColor = '#4c3c3c';
        node.style.color = '#fff';
      });
      setTimeout(() => {
        // document.getElementById(id).style.backgroundColor = "#fff";
        let elUnder = document.getElementById(id);
        // document.getElementById(id).style.backgroundColor = "#4c3c3c";
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
        elUnder.style.backgroundColor = '#fff';
        elUnder.style.color = '#fff';
        Array.from(elUnder.childNodes).forEach((node) => {
          if (node.nodeName === 'DIV') {
            const nodes = node.childNodes;
            Array.from(nodes).forEach((one) => {
              one.style.backgroundColor = '#fff';
              one.style.color = 'rgb(134, 122, 122)';
            });
            // if (task.completed) {
            //   Array.from(Array.from(elUnder.childNodes)[0].childNodes)[2].style.color = '#ccc';
            // } else {

            // }
          }
          node.style.backgroundColor = '#fff';
          node.style.color = 'rgb(204, 187, 187)';
          if (node.classList.value.includes('fa-arrows-alt')) {
            node.addEventListener('mouseover', () => {
              node.style.color = 'rgb(75, 66, 66)';
            });
            node.addEventListener('mouseout', () => {
              node.style.color = 'rgb(204, 187, 187)';
            });
          }
        });
      }, 810);
    }, 10);
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    setTimeout(() => {
      let elUnder = document.getElementById(id);
      // document.getElementById(id).style.backgroundColor = "#4c3c3c";
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
      elUnder.style.backgroundColor = '#4c3c3c';
      elUnder.style.color = '#fff';
      Array.from(elUnder.childNodes).forEach((node) => {
        if (node.nodeName === 'DIV') {
          const nodes = node.childNodes;
          Array.from(nodes).forEach((one) => {
            one.style.backgroundColor = '#4c3c3c';
            one.style.color = '#fff';
          });
        }
        node.style.backgroundColor = '#4c3c3c';
        node.style.color = '#fff';
      });
      setTimeout(() => {
        // document.getElementById(id).style.backgroundColor = "#fff";
        let elUnder = document.getElementById(id);
        // document.getElementById(id).style.backgroundColor = "#4c3c3c";
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
        elUnder.style.backgroundColor = '#fff';
        elUnder.style.color = '#fff';
        Array.from(elUnder.childNodes).forEach((node) => {
          if (node.nodeName === 'DIV') {
            const nodes = node.childNodes;
            Array.from(nodes).forEach((one) => {
              one.style.backgroundColor = '#fff';
              one.style.color = 'rgb(134, 122, 122)';
            });
            // if (task.completed) {
            //   Array.from(Array.from(elUnder.childNodes)[0].childNodes)[2].style.color = '#ccc';
            // } else {
            //   Array.from(Array.from(elUnder.childNodes)[0].childNodes)[2].style.color = '#add';
            // }
          }
          node.style.backgroundColor = '#fff';
          node.style.color = 'rgb(204, 187, 187)';
          if (node.classList.value.includes('fa-arrows-alt')) {
            node.addEventListener('mouseover', () => {
              node.style.color = 'rgb(75, 66, 66)';
            });
            node.addEventListener('mouseout', () => {
              node.style.color = 'rgb(204, 187, 187)';
            });
          }
        });
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

const removeOne = (task, showToDo) => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  // tasks = tasks.filter((oneTask) => oneTask.index !== task.index);
  if (removable.value || removable.init) {
    tasks = tasks.filter((oneTask) => oneTask.index !== task.index);
    removable.init = false;
  }

  removable.value = false;

  setTimeout(() => {
    removable.init = false;
    removable.value = true;
  }, 500);

  reorderIndices(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return showToDo();
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
let removable = true;
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
    i.addEventListener('mousedown', () => {
      // removable = true;
      (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeOne)(task, showToDo, removable);
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
      removable = true;
      (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeOne)(task, showToDo, removable);
      return false;
    }
    task.description = value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // eslint-disable-next-line no-use-before-define
    showToDo();
    return true;
  };

  input2.addEventListener('blur', () => {
    input2.style.backgroundColor = '#fff';
    div.style.backgroundColor = '#fff';

    i.classList.remove('fa-trash-alt');
    i.classList.add('fa-arrows-alt');

    i.removeEventListener('click', () => {
      removable = true;
      (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeOne)(task, showToDo, removable);
      return true;
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9zcmMvY29tcGxldGVkVG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL3NyYy9tYW5pcHVsYXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNDUsIDE0NSk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmFwcC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hcHAtbmFtZSBhLFxcbi5pdGVtIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5pdGVtOmhvdmVyLFxcbi5hcHAtbmFtZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDIyNiwgMjE0LCAyMTQpO1xcbn1cXG5cXG4ubmF2LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBnYXA6IDV2dztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFwcCB7XFxuICB3aWR0aDogOTB2dztcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2IoMTYzLCAxNTgsIDE1OCk7XFxufVxcblxcbi5hcHAtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVmcmVzaCxcXG4uYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VzdG9tLXJvdyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiKDIzMCwgMjIyLCAyMjIpO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxODUsIDE4NSk7XFxufVxcblxcbi50d28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcXG59XFxuXFxuLmZhLWNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDEzNCwgMTIyLCAxMjIpO1xcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxufVxcblxcbi50by1kbyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogcmdiKDEzNCwgMTIyLCAxMjIpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi50by1kbzpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZmEtY2hlY2s6Y2hlY2tlZCB+IC50by1kbyB7XFxuICBjb2xvcjogcmdiKDE1MCwgMTQ1LCAxNDUpO1xcbn1cXG5cXG4uY3Jvc3Mtb3V0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5mYS1jaGVjazpjaGVja2VkIH4gLmNyb3NzLW91dCB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWFsbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4uY2xlYXItdGV4dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiByZ2IoNzUsIDY2LCA2Nik7XFxufVxcblxcbi50by1kby1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWZyZXNoIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNDUsIDE0NSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mYS1hcnJvd3MtYWx0IHtcXG4gIGNvbG9yOiByZ2IoMjA0LCAxODcsIDE4Nyk7XFxufVxcblxcbi5mYS1hcnJvd3MtYWx0OmhvdmVyIHtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIGNvbG9yOiByZ2IoNzUsIDY2LCA2Nik7XFxufVxcblxcbi5mYS10cmFzaC1hbHQge1xcbiAgY29sb3I6IHRvbWF0bztcXG59XFxuXFxuLmZhLXRyYXNoLWFsdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS1zeW5jIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDExMGRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBpbml0aWFsO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4ucm90YXRlLXN5bmMge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoODMwZGVnKTtcXG59XFxuXFxuLnJldHVybiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mYS1zeW5jOmhvdmVyLFxcbi5yZXR1cm46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc4NnB4KSB7XFxuICAuYXBwIHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsUUFBUTtFQUNSLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNDUsIDE0NSk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmFwcC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hcHAtbmFtZSBhLFxcbi5pdGVtIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5pdGVtOmhvdmVyLFxcbi5hcHAtbmFtZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDIyNiwgMjE0LCAyMTQpO1xcbn1cXG5cXG4ubmF2LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBnYXA6IDV2dztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFwcCB7XFxuICB3aWR0aDogOTB2dztcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2IoMTYzLCAxNTgsIDE1OCk7XFxufVxcblxcbi5hcHAtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVmcmVzaCxcXG4uYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VzdG9tLXJvdyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiKDIzMCwgMjIyLCAyMjIpO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxODUsIDE4NSk7XFxufVxcblxcbi50d28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcXG59XFxuXFxuLmZhLWNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDEzNCwgMTIyLCAxMjIpO1xcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxufVxcblxcbi50by1kbyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogcmdiKDEzNCwgMTIyLCAxMjIpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi50by1kbzpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZmEtY2hlY2s6Y2hlY2tlZCB+IC50by1kbyB7XFxuICBjb2xvcjogcmdiKDE1MCwgMTQ1LCAxNDUpO1xcbn1cXG5cXG4uY3Jvc3Mtb3V0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5mYS1jaGVjazpjaGVja2VkIH4gLmNyb3NzLW91dCB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWFsbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4uY2xlYXItdGV4dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiByZ2IoNzUsIDY2LCA2Nik7XFxufVxcblxcbi50by1kby1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWZyZXNoIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNDUsIDE0NSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mYS1hcnJvd3MtYWx0IHtcXG4gIGNvbG9yOiByZ2IoMjA0LCAxODcsIDE4Nyk7XFxufVxcblxcbi5mYS1hcnJvd3MtYWx0OmhvdmVyIHtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIGNvbG9yOiByZ2IoNzUsIDY2LCA2Nik7XFxufVxcblxcbi5mYS10cmFzaC1hbHQge1xcbiAgY29sb3I6IHRvbWF0bztcXG59XFxuXFxuLmZhLXRyYXNoLWFsdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS1zeW5jIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDExMGRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBpbml0aWFsO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4ucm90YXRlLXN5bmMge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoODMwZGVnKTtcXG59XFxuXFxuLnJldHVybiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mYS1zeW5jOmhvdmVyLFxcbi5yZXR1cm46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc4NnB4KSB7XFxuICAuYXBwIHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB1cGRhdGVDb21wbGV0ZWQgPSAodGFzaywgdGFza3MpID0+IHtcbiAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9MaW5rcyA9IChhZGRUb0RvLCByZW1vdmUsIHJlZnJlc2gpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDEpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb0RvKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDIpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMyknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZnJlc2gpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQ29tcGxldGVkO1xuZXhwb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvTGlua3MgfTsiLCJsZXQgZHJhZ1N0b3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLXJvdycpO1xuY29uc3QgcHJldk5leHRJZHMgPSB7XG4gIHByZXZJZDogMCxcbiAgbmV4dElkOiAxLFxufTtcbmNvbnN0IHJlbW92YWJsZSA9IHtcbiAgaW5pdDogdHJ1ZSxcbiAgdmFsdWU6IGZhbHNlLFxufTtcblxuY29uc3QgcmVvcmRlckluZGljZXMgPSAodGFza3MpID0+IHtcbiAgbGV0IGluZGV4ID0gMTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suaW5kZXggPSBpbmRleDtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcbn07XG5cbmNvbnN0IGRyYWcgPSAoZXYpID0+IHtcbiAgY29uc3QgZHJhZ2dlZEVsZW1lbnQgPSBldi50YXJnZXQ7XG4gIGRyYWdTdG9yZSA9IGRyYWdnZWRFbGVtZW50O1xuICBkcmFnU3RvcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzNjM2MnO1xufTtcblxuY29uc3QgZHJhZ1N0YXJ0ID0gKGUpID0+IHtcbiAgbGV0IGVsVW5kZXIgPSBlLnRhcmdldDtcbiAgY29uc3QgY2xhc3NBcnJheSA9IGVsVW5kZXIuY2xhc3NMaXN0LnZhbHVlLnNwbGl0KCcgJyk7XG4gIGlmIChcbiAgICBjbGFzc0FycmF5LmluY2x1ZGVzKCdmYS1jaGVjaycpXG4gICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygnY2hlY2tib3gnKVxuICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3RvLWRvJylcbiAgKSB7XG4gICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB9IGVsc2UgaWYgKFxuICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWFycm93cy1hbHQnKVxuICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3R3bycpXG4gICkge1xuICAgIGVsVW5kZXIgPSBlbFVuZGVyLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgZWxVbmRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRjM2MzYyc7XG4gIGVsVW5kZXIuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gIEFycmF5LmZyb20oZWxVbmRlci5jaGlsZE5vZGVzKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdESVYnKSB7XG4gICAgICBjb25zdCBub2RlcyA9IG5vZGUuY2hpbGROb2RlcztcbiAgICAgIEFycmF5LmZyb20obm9kZXMpLmZvckVhY2goKG9uZSkgPT4ge1xuICAgICAgICBvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzNjM2MnO1xuICAgICAgICBvbmUuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gICAgICB9KTtcbiAgICB9XG4gICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRjM2MzYyc7XG4gICAgbm9kZS5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgfSk7XG59O1xuXG5jb25zdCBkcm9wID0gKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBlbFVuZGVyID0gZXYudGFyZ2V0O1xuICBjb25zdCBjbGFzc0FycmF5ID0gZWxVbmRlci5jbGFzc0xpc3QudmFsdWUuc3BsaXQoJyAnKTtcblxuICBpZiAoXG4gICAgY2xhc3NBcnJheS5pbmNsdWRlcygnZmEtY2hlY2snKVxuICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2NoZWNrYm94JylcbiAgICB8fCBjbGFzc0FycmF5LmluY2x1ZGVzKCd0by1kbycpXG4gICkge1xuICAgIGVsVW5kZXIgPSBlbFVuZGVyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgfSBlbHNlIGlmIChcbiAgICBjbGFzc0FycmF5LmluY2x1ZGVzKCdmYS1hcnJvd3MtYWx0JylcbiAgICB8fCBjbGFzc0FycmF5LmluY2x1ZGVzKCd0d28nKVxuICApIHtcbiAgICBlbFVuZGVyID0gZWxVbmRlci5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHByZXZOZXh0SWRzLm5leHRJZCA9IE51bWJlcihlbFVuZGVyLmlkKTtcbiAgcHJldk5leHRJZHMucHJldklkID0gTnVtYmVyKGRyYWdTdG9yZS5pZCk7XG5cbiAgaWYgKHByZXZOZXh0SWRzLnByZXZJZCA8IHByZXZOZXh0SWRzLm5leHRJZCkge1xuICAgIGVsVW5kZXIucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZHJhZ1N0b3JlLCBlbFVuZGVyLm5leHRFbGVtZW50U2libGluZyk7XG4gIH0gZWxzZSBpZiAocHJldk5leHRJZHMucHJldklkID4gcHJldk5leHRJZHMubmV4dElkKSB7XG4gICAgZWxVbmRlci5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShkcmFnU3RvcmUsIGVsVW5kZXIpO1xuICB9XG5cbiAgY29uc3QgeyBpZCB9ID0gZWxVbmRlcjtcblxuICBpZiAocHJldk5leHRJZHMucHJldklkIDwgcHJldk5leHRJZHMubmV4dElkKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgZWxVbmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM0YzNjM2NcIjtcbiAgICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBlbFVuZGVyLmNsYXNzTGlzdC52YWx1ZS5zcGxpdCgnICcpO1xuICAgICAgaWYgKFxuICAgICAgICBjbGFzc0FycmF5LmluY2x1ZGVzKCdmYS1jaGVjaycpXG4gICAgICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2NoZWNrYm94JylcbiAgICAgICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygndG8tZG8nKVxuICAgICAgKSB7XG4gICAgICAgIGVsVW5kZXIgPSBlbFVuZGVyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWFycm93cy1hbHQnKVxuICAgICAgICB8fCBjbGFzc0FycmF5LmluY2x1ZGVzKCd0d28nKVxuICAgICAgKSB7XG4gICAgICAgIGVsVW5kZXIgPSBlbFVuZGVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGVsVW5kZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzNjM2MnO1xuICAgICAgZWxVbmRlci5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgIEFycmF5LmZyb20oZWxVbmRlci5jaGlsZE5vZGVzKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnRElWJykge1xuICAgICAgICAgIGNvbnN0IG5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICAgIEFycmF5LmZyb20obm9kZXMpLmZvckVhY2goKG9uZSkgPT4ge1xuICAgICAgICAgICAgb25lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGMzYzNjJztcbiAgICAgICAgICAgIG9uZS5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGMzYzNjJztcbiAgICAgICAgbm9kZS5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZcIjtcbiAgICAgICAgbGV0IGVsVW5kZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM0YzNjM2NcIjtcbiAgICAgICAgY29uc3QgY2xhc3NBcnJheSA9IGVsVW5kZXIuY2xhc3NMaXN0LnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjbGFzc0FycmF5LmluY2x1ZGVzKCdmYS1jaGVjaycpXG4gICAgICAgICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygnY2hlY2tib3gnKVxuICAgICAgICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3RvLWRvJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWFycm93cy1hbHQnKVxuICAgICAgICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3R3bycpXG4gICAgICAgICkge1xuICAgICAgICAgIGVsVW5kZXIgPSBlbFVuZGVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxVbmRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gICAgICAgIGVsVW5kZXIuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gICAgICAgIEFycmF5LmZyb20oZWxVbmRlci5jaGlsZE5vZGVzKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdESVYnKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IG5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgICAgIEFycmF5LmZyb20obm9kZXMpLmZvckVhY2goKG9uZSkgPT4ge1xuICAgICAgICAgICAgICBvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgICAgICAgICAgICBvbmUuc3R5bGUuY29sb3IgPSAncmdiKDEzNCwgMTIyLCAxMjIpJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICAvLyAgIEFycmF5LmZyb20oQXJyYXkuZnJvbShlbFVuZGVyLmNoaWxkTm9kZXMpWzBdLmNoaWxkTm9kZXMpWzJdLnN0eWxlLmNvbG9yID0gJyNjY2MnO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cbiAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgICAgICAgICBub2RlLnN0eWxlLmNvbG9yID0gJ3JnYigyMDQsIDE4NywgMTg3KSc7XG4gICAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdmYS1hcnJvd3MtYWx0JykpIHtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICBub2RlLnN0eWxlLmNvbG9yID0gJ3JnYig3NSwgNjYsIDY2KSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgIG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDIwNCwgMTg3LCAxODcpJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCA4MTApO1xuICAgIH0sIDEwKTtcbiAgfSBlbHNlIGlmIChwcmV2TmV4dElkcy5wcmV2SWQgPiBwcmV2TmV4dElkcy5uZXh0SWQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBlbFVuZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzRjM2MzY1wiO1xuICAgICAgY29uc3QgY2xhc3NBcnJheSA9IGVsVW5kZXIuY2xhc3NMaXN0LnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICBpZiAoXG4gICAgICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWNoZWNrJylcbiAgICAgICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygnY2hlY2tib3gnKVxuICAgICAgICB8fCBjbGFzc0FycmF5LmluY2x1ZGVzKCd0by1kbycpXG4gICAgICApIHtcbiAgICAgICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgY2xhc3NBcnJheS5pbmNsdWRlcygnZmEtYXJyb3dzLWFsdCcpXG4gICAgICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3R3bycpXG4gICAgICApIHtcbiAgICAgICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIGVsVW5kZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzNjM2MnO1xuICAgICAgZWxVbmRlci5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgIEFycmF5LmZyb20oZWxVbmRlci5jaGlsZE5vZGVzKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnRElWJykge1xuICAgICAgICAgIGNvbnN0IG5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICAgIEFycmF5LmZyb20obm9kZXMpLmZvckVhY2goKG9uZSkgPT4ge1xuICAgICAgICAgICAgb25lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGMzYzNjJztcbiAgICAgICAgICAgIG9uZS5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGMzYzNjJztcbiAgICAgICAgbm9kZS5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZcIjtcbiAgICAgICAgbGV0IGVsVW5kZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM0YzNjM2NcIjtcbiAgICAgICAgY29uc3QgY2xhc3NBcnJheSA9IGVsVW5kZXIuY2xhc3NMaXN0LnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjbGFzc0FycmF5LmluY2x1ZGVzKCdmYS1jaGVjaycpXG4gICAgICAgICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygnY2hlY2tib3gnKVxuICAgICAgICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3RvLWRvJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWFycm93cy1hbHQnKVxuICAgICAgICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3R3bycpXG4gICAgICAgICkge1xuICAgICAgICAgIGVsVW5kZXIgPSBlbFVuZGVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxVbmRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gICAgICAgIGVsVW5kZXIuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gICAgICAgIEFycmF5LmZyb20oZWxVbmRlci5jaGlsZE5vZGVzKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdESVYnKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IG5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgICAgIEFycmF5LmZyb20obm9kZXMpLmZvckVhY2goKG9uZSkgPT4ge1xuICAgICAgICAgICAgICBvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgICAgICAgICAgICBvbmUuc3R5bGUuY29sb3IgPSAncmdiKDEzNCwgMTIyLCAxMjIpJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICAvLyAgIEFycmF5LmZyb20oQXJyYXkuZnJvbShlbFVuZGVyLmNoaWxkTm9kZXMpWzBdLmNoaWxkTm9kZXMpWzJdLnN0eWxlLmNvbG9yID0gJyNjY2MnO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgQXJyYXkuZnJvbShBcnJheS5mcm9tKGVsVW5kZXIuY2hpbGROb2RlcylbMF0uY2hpbGROb2RlcylbMl0uc3R5bGUuY29sb3IgPSAnI2FkZCc7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgICAgICAgIG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDIwNCwgMTg3LCAxODcpJztcbiAgICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2ZhLWFycm93cy1hbHQnKSkge1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgIG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDc1LCA2NiwgNjYpJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgbm9kZS5zdHlsZS5jb2xvciA9ICdyZ2IoMjA0LCAxODcsIDE4NyknO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDgxMCk7XG4gICAgfSwgMTApO1xuICB9XG59O1xuXG5jb25zdCBkcmFnRW5kID0gKHNob3dUb0RvKSA9PiB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRyYWdTdG9yZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gIH0sIDEwMDApO1xuXG4gIGNvbnN0IGFsbFRvRG9FbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvLXJvdycpKTtcbiAgY29uc3QgaWRzID0gYWxsVG9Eb0VsZW1lbnRzLm1hcCgoZWwpID0+IE51bWJlcihlbC5pZCkpO1xuICBsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgY29uc3QgbW9ja1Rhc2tzID0gW107XG4gIGlkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgIG1vY2tUYXNrcy5wdXNoKHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCA9PT0gaWQpWzBdKTtcbiAgfSk7XG4gIHRhc2tzID0gbW9ja1Rhc2tzO1xuICByZW9yZGVySW5kaWNlcyh0YXNrcyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIHNob3dUb0RvKCk7XG59O1xuXG5jb25zdCByZW1vdmVPbmUgPSAodGFzaywgc2hvd1RvRG8pID0+IHtcbiAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIC8vIHRhc2tzID0gdGFza3MuZmlsdGVyKChvbmVUYXNrKSA9PiBvbmVUYXNrLmluZGV4ICE9PSB0YXNrLmluZGV4KTtcbiAgaWYgKHJlbW92YWJsZS52YWx1ZSB8fCByZW1vdmFibGUuaW5pdCkge1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKChvbmVUYXNrKSA9PiBvbmVUYXNrLmluZGV4ICE9PSB0YXNrLmluZGV4KTtcbiAgICByZW1vdmFibGUuaW5pdCA9IGZhbHNlO1xuICB9XG5cbiAgcmVtb3ZhYmxlLnZhbHVlID0gZmFsc2U7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVtb3ZhYmxlLmluaXQgPSBmYWxzZTtcbiAgICByZW1vdmFibGUudmFsdWUgPSB0cnVlO1xuICB9LCA1MDApO1xuXG4gIHJlb3JkZXJJbmRpY2VzKHRhc2tzKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgcmV0dXJuIHNob3dUb0RvKCk7XG59O1xuXG5jb25zdCByZW1vdmVTZWxlY3RlZCA9ICh0YXNrcywgc2hvd1RvRG8pID0+IHtcbiAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG4gIHJlb3JkZXJJbmRpY2VzKHRhc2tzKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgc2hvd1RvRG8oKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBhZGRUb0RvID0gKHRhc2tzLCBzaG93VG9EbywgZ29Ub0lucHV0KSA9PiB7XG4gIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0JykudmFsdWU7XG4gIGlmICghZGVzY3JpcHRpb24pIHtcbiAgICBnb1RvSW5wdXQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBkYXRhID0ge1xuICAgIGRlc2NyaXB0aW9uLFxuICAgIGluZGV4OiB0YXNrcy5sZW5ndGggKyAxLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH07XG5cbiAgdGFza3MucHVzaChkYXRhKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgc2hvd1RvRG8oKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0JykudmFsdWUgPSAnJztcbiAgZ29Ub0lucHV0KCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IHtcbiAgZHJvcCxcbiAgZHJhZ0VuZCxcbiAgZHJhZyxcbiAgZHJhZ1N0YXJ0LFxuICByZW1vdmVPbmUsXG4gIHJlbW92ZVNlbGVjdGVkLFxuICBhZGRUb0RvLFxuICByZW1vdmFibGUsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHVwZGF0ZUNvbXBsZXRlZCBmcm9tICcuL2NvbXBsZXRlZFRvRG8nO1xuaW1wb3J0IHtcbiAgZHJvcCxcbiAgZHJhZ0VuZCxcbiAgZHJhZyxcbiAgZHJhZ1N0YXJ0LFxuICByZW1vdmVPbmUsXG4gIHJlbW92ZVNlbGVjdGVkLFxuICBhZGRUb0RvLFxufSBmcm9tICcuL21hbmlwdWxhdGVUb0RvJztcblxubGV0IHRhc2tzID0gW107XG5sZXQgcmVtb3ZhYmxlID0gdHJ1ZTtcbmNvbnN0IGdvVG9JbnB1dCA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpLmZvY3VzKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcuZm9vdGVyLXRleHQnLFxuKS5pbm5lckhUTUwgPSBgJmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBIZW5yeS1LYywgYnVpbHQgd2l0aCDwn5KVIGZyb20gbWVgO1xuXG5jb25zdCBhbHRlcm5hdGVUaWNrQW5kQ2hlY2sgPSAodGljaywgY2hlY2ssIHRhc2ssIGlucHV0MikgPT4ge1xuICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICB0aWNrLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICBjaGVjay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlucHV0Mi5jbGFzc0xpc3QuYWRkKCdjcm9zcy1vdXQnKTtcbiAgfSBlbHNlIHtcbiAgICB0aWNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2hlY2suc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIGlucHV0Mi5jbGFzc0xpc3QucmVtb3ZlKCdjcm9zcy1vdXQnKTtcbiAgfVxufTtcblxuY29uc3Qgc2hvd1RvRG8gPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0JykuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIGlmICh0eXBlb2YgdGFza3NbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgsIHRhc2tzKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgIGdlbmVyYXRlVG9Eb1Jvd3ModGFzay5kZXNjcmlwdGlvbiwgdGFzaywgdGFza3MpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgcmVmcmVzaCA9IChzaG93VG9EbykgPT4ge1xuICAvLyB0YXNrcyA9IF8uc29ydEJ5KHRhc2tzLCAnaW5kZXgnKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpICE9PSBudWxsKSB7XG4gICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9XG4gIHNob3dUb0RvKCk7XG4gIGdvVG9JbnB1dCgpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb1Jvd3MgPSAodGV4dCwgdGFzaywgdGFza3MpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd0by1kby1yb3cnLCAnY3VzdG9tLXJvdycpO1xuICBkaXYuaWQgPSB0YXNrLmluZGV4O1xuICBkaXYuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3R3bycpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG5cbiAgY29uc3QgdGljayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgdGljay5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtY2hlY2snKTtcblxuICBkaXYyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgZGl2Mi5hcHBlbmRDaGlsZCh0aWNrKTtcblxuICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dDIuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgaW5wdXQyLmNsYXNzTGlzdC5hZGQoJ3RvLWRvJyk7XG5cbiAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0Mi52YWx1ZSA9IHRleHQ7XG4gIGRpdjIuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcblxuICBkaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XG5cbiAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgaS5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtYXJyb3dzLWFsdCcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaSk7XG5cbiAgaW5wdXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgIGlucHV0Mi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmVjYSc7XG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZWNhJztcbiAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWFycm93cy1hbHQnKTtcbiAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhLXRyYXNoLWFsdCcpO1xuICAgIGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgLy8gcmVtb3ZhYmxlID0gdHJ1ZTtcbiAgICAgIHJlbW92ZU9uZSh0YXNrLCBzaG93VG9EbywgcmVtb3ZhYmxlKTtcbiAgICB9KTtcbiAgfSk7XG4gIHRpY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlQ29tcGxldGVkKHRhc2ssIHRhc2tzKTtcbiAgICBhbHRlcm5hdGVUaWNrQW5kQ2hlY2sodGljaywgaW5wdXQsIHRhc2ssIGlucHV0Mik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlQ29tcGxldGVkKHRhc2ssIHRhc2tzKTtcbiAgICBhbHRlcm5hdGVUaWNrQW5kQ2hlY2sodGljaywgaW5wdXQsIHRhc2ssIGlucHV0Mik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICB0aWNrLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlucHV0Mi5jbGFzc0xpc3QuYWRkKCdjcm9zcy1vdXQnKTtcbiAgfSBlbHNlIGlmICghdGFzay5jb21wbGV0ZWQpIHtcbiAgICB0aWNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIGlucHV0Mi5jbGFzc0xpc3QucmVtb3ZlKCdjcm9zcy1vdXQnKTtcbiAgfVxuXG4gIGNvbnN0IGVkaXRUb0RvID0gKGlucHV0LCB0YXNrLCB0YXNrcykgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xuICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJlbW92YWJsZSA9IHRydWU7XG4gICAgICByZW1vdmVPbmUodGFzaywgc2hvd1RvRG8sIHJlbW92YWJsZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRhc2suZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIHNob3dUb0RvKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgaW5wdXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgaW5wdXQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuXG4gICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdmYS10cmFzaC1hbHQnKTtcbiAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhLWFycm93cy1hbHQnKTtcblxuICAgIGkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW1vdmFibGUgPSB0cnVlO1xuICAgICAgcmVtb3ZlT25lKHRhc2ssIHNob3dUb0RvLCByZW1vdmFibGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlucHV0Mi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgZWRpdFRvRG8oaW5wdXQyLCB0YXNrLCB0YXNrcyk7XG4gIH0pO1xuXG4gIGlucHV0Mi5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGlucHV0Mi5ibHVyKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QnKTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnJywgKGV2KSA9PiBkcmFnKGV2KSk7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4gZHJhZ1N0YXJ0KGUpKTtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiBkcmFnRW5kKHNob3dUb0RvKSk7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2KSA9PiBkcm9wKGV2KSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItdGV4dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgIT09IG51bGwpIHtcbiAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICB9XG4gIHJlbW92ZVNlbGVjdGVkKHRhc2tzLCBzaG93VG9Ebyk7XG59KTtcblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoJy5yZXR1cm4nKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRUb0RvKHRhc2tzLCBzaG93VG9EbywgZ29Ub0lucHV0KSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc3luYycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc3luYycpLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZS1zeW5jJyk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDMpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1zeW5jJykuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlLXN5bmMnKTtcbn0pO1xuXG5jb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXN5bmMnKTtcbnJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlZnJlc2goc2hvd1RvRG8pO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGFkZFRvRG8odGFza3MsIHNob3dUb0RvLCBnb1RvSW5wdXQpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMSknKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRUb0RvKHRhc2tzLCBzaG93VG9EbywgZ29Ub0lucHV0KSk7XG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDIpJylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVtb3ZlU2VsZWN0ZWQodGFza3MsIHNob3dUb0RvKSk7XG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDMpJylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVmcmVzaChzaG93VG9EbykpO1xuXG5yZWZyZXNoKHNob3dUb0RvKTtcblxuc2hvd1RvRG8oKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXN5bmMnKS50aXRsZSA9ICdyZW1vdmUgdGFza3MgY29tcGxldGVkIG1vcmUgdGhhbiBvbmUgbW9udGggYWdvJztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtOm50aC1jaGlsZCgzKScpLnRpdGxlID0gJ3JlbW92ZSB0YXNrcyBjb21wbGV0ZWQgbW9yZSB0aGFuIG9uZSBtb250aCBhZ28nO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDIpJykudGl0bGUgPSAncmVtb3ZlIGNvbXBsZXRlZCB0YXNrcyc7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMSknKS50aXRsZSA9ICdhZGQgdGFza3MnO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLXRleHQnKS50aXRsZSA9ICdyZW1vdmUgY29tcGxldGVkIHRhc2tzJztcbmNvbnN0IGFsbENoZWNrYm94ZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpKTtcbmFsbENoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgY2hlY2tib3gudGl0bGUgPSAnbWFyayBhcyBjb21wbGV0ZWQnO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuY29uc3QgYWxsVGlja01hcmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtY2hlY2snKSk7XG5hbGxUaWNrTWFya3MuZm9yRWFjaCgodGlja01hcmspID0+IHtcbiAgdGlja01hcmsudGl0bGUgPSAndW5tYXJrIGFzIGNvbXBsZXRlZCc7XG4gIHJldHVybiB0cnVlO1xufSk7XG5jb25zdCBhbGxUb2RvSXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpKTtcbmFsbFRvZG9JdGVtcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gIHRvZG8udGl0bGUgPSAnY2xpY2sgdG8gZGVsZXRlL2VkaXQsIGRyYWcgdG8gbW92ZSc7XG4gIHJldHVybiB0cnVlO1xufSk7XG5jb25zdCBhbGxNb3ZlQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZmEtYXJyb3dzLWFsdCcpKTtcbmFsbE1vdmVCdXR0b25zLmZvckVhY2goKG1vdmVCdXR0b24pID0+IHtcbiAgbW92ZUJ1dHRvbi50aXRsZSA9ICdkcmFnIHdpdGhpbiB0aGUgYm94IHRvIG1vdmUnO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9