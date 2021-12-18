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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 0;\n  margin: 0;\n  background-color: #f0f0f0;\n  height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: sans-serif;\n  color: rgb(150, 145, 145);\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5vw;\n  font-size: 0.6rem;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n.sort-item {\n  background-color: #4c3c3c;\n  border-color: #fff;\n  color: white;\n  font-weight: bold;\n  outline: none;\n  font-size: 0.7rem;\n}\n\n.app-name {\n  font-weight: bold;\n}\n\n.app-name a,\n.item a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.item:hover,\n.app-name:hover {\n  cursor: pointer;\n  color: rgb(226, 214, 214);\n}\n\n.nav-items {\n  display: flex;\n  list-style-type: none;\n  gap: 5vw;\n  padding: 0;\n  margin: 0;\n  font-weight: bold;\n}\n\n.app {\n  width: 90vw;\n  margin: 20px auto;\n  background-color: #fff;\n  box-shadow: 0 3px 5px rgb(163, 158, 158);\n}\n\n.app-heading {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.refresh,\n.add {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.custom-row {\n  padding: 10px;\n  border-bottom: 0.5px solid rgb(230, 222, 222);\n  min-height: 30px;\n}\n\n.two {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox {\n  margin: 0 10px 0 0;\n}\n\n.fa-check {\n  display: none;\n  cursor: pointer;\n  color: rgb(134, 122, 122);\n  margin-right: 7px;\n}\n\n.to-do {\n  border: none;\n  padding: 5px 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -ms-word-break: break-all;\n  word-break: break-all;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  padding-right: 6px;\n  width: 100%;\n  min-height: 50px;\n  color: rgb(134, 122, 122);\n  font-size: 1.1rem;\n}\n\n.to-do:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-check:checked ~ .to-do {\n  color: rgb(150, 145, 145);\n}\n\n.cross-out {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n.fa-check:checked ~ .cross-out {\n  color: #ccc;\n}\n\n.checkbox:hover {\n  cursor: pointer;\n}\n\n.clear-all {\n  text-align: center;\n  line-height: 30px;\n  background-color: #f0f0f0;\n  border-bottom: none;\n}\n\n.clear-text:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: rgb(75, 66, 66);\n}\n\n.to-do-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n}\n\n.refresh p {\n  margin: 0;\n  padding: 0;\n}\n\n.placeholder {\n  font-style: italic;\n  color: #fff;\n}\n\n.placeholder::before {\n  content: 'Add your task here...';\n  font-style: italic;\n  color: #bbb;\n}\n\n.input {\n  border: none;\n  display: flex;\n  flex-wrap: wrap;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -ms-word-break: break-all;\n  word-break: break-all;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  padding: 0 0 0 20px;\n  width: 93%;\n  background-color: inherit;\n  font-size: 1.2rem;\n  color: rgb(150, 145, 145);\n  font-style: italic;\n}\n\n.input:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-arrows-alt {\n  color: rgb(204, 187, 187);\n}\n\n.fa-arrows-alt:hover {\n  cursor: move;\n  color: rgb(75, 66, 66);\n}\n\n.fa-trash-alt {\n  color: tomato;\n}\n\n.fa-trash-alt:hover {\n  cursor: pointer;\n}\n\n.fa-sync {\n  transform: rotate(110deg);\n  transform-origin: initial;\n  transition: all 1s;\n}\n\n.rotate-sync {\n  transform: rotate(830deg);\n}\n\n.return {\n  font-size: 2rem;\n}\n\n.fa-sync:hover,\n.return:hover {\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n@media all and (min-width: 786px) {\n  .app {\n    width: 50vw;\n  }\n\n  .nav-bar {\n    font-size: 1rem;\n  }\n\n  .app-name {\n    font-size: 1.3rem;\n  }\n\n  .sort-item {\n    font-size: 1rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n  background-color: #f0f0f0;\n  height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: sans-serif;\n  color: rgb(150, 145, 145);\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5vw;\n  font-size: 0.6rem;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n.sort-item {\n  background-color: #4c3c3c;\n  border-color: #fff;\n  color: white;\n  font-weight: bold;\n  outline: none;\n  font-size: 0.7rem;\n}\n\n.app-name {\n  font-weight: bold;\n}\n\n.app-name a,\n.item a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.item:hover,\n.app-name:hover {\n  cursor: pointer;\n  color: rgb(226, 214, 214);\n}\n\n.nav-items {\n  display: flex;\n  list-style-type: none;\n  gap: 5vw;\n  padding: 0;\n  margin: 0;\n  font-weight: bold;\n}\n\n.app {\n  width: 90vw;\n  margin: 20px auto;\n  background-color: #fff;\n  box-shadow: 0 3px 5px rgb(163, 158, 158);\n}\n\n.app-heading {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.refresh,\n.add {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.custom-row {\n  padding: 10px;\n  border-bottom: 0.5px solid rgb(230, 222, 222);\n  min-height: 30px;\n}\n\n.two {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox {\n  margin: 0 10px 0 0;\n}\n\n.fa-check {\n  display: none;\n  cursor: pointer;\n  color: rgb(134, 122, 122);\n  margin-right: 7px;\n}\n\n.to-do {\n  border: none;\n  padding: 5px 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -ms-word-break: break-all;\n  word-break: break-all;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  padding-right: 6px;\n  width: 100%;\n  min-height: 50px;\n  color: rgb(134, 122, 122);\n  font-size: 1.1rem;\n}\n\n.to-do:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-check:checked ~ .to-do {\n  color: rgb(150, 145, 145);\n}\n\n.cross-out {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n.fa-check:checked ~ .cross-out {\n  color: #ccc;\n}\n\n.checkbox:hover {\n  cursor: pointer;\n}\n\n.clear-all {\n  text-align: center;\n  line-height: 30px;\n  background-color: #f0f0f0;\n  border-bottom: none;\n}\n\n.clear-text:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: rgb(75, 66, 66);\n}\n\n.to-do-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n}\n\n.refresh p {\n  margin: 0;\n  padding: 0;\n}\n\n.placeholder {\n  font-style: italic;\n  color: #fff;\n}\n\n.placeholder::before {\n  content: 'Add your task here...';\n  font-style: italic;\n  color: #bbb;\n}\n\n.input {\n  border: none;\n  display: flex;\n  flex-wrap: wrap;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -ms-word-break: break-all;\n  word-break: break-all;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  padding: 0 0 0 20px;\n  width: 93%;\n  background-color: inherit;\n  font-size: 1.2rem;\n  color: rgb(150, 145, 145);\n  font-style: italic;\n}\n\n.input:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-arrows-alt {\n  color: rgb(204, 187, 187);\n}\n\n.fa-arrows-alt:hover {\n  cursor: move;\n  color: rgb(75, 66, 66);\n}\n\n.fa-trash-alt {\n  color: tomato;\n}\n\n.fa-trash-alt:hover {\n  cursor: pointer;\n}\n\n.fa-sync {\n  transform: rotate(110deg);\n  transform-origin: initial;\n  transition: all 1s;\n}\n\n.rotate-sync {\n  transform: rotate(830deg);\n}\n\n.return {\n  font-size: 2rem;\n}\n\n.fa-sync:hover,\n.return:hover {\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n@media all and (min-width: 786px) {\n  .app {\n    width: 50vw;\n  }\n\n  .nav-bar {\n    font-size: 1rem;\n  }\n\n  .app-name {\n    font-size: 1.3rem;\n  }\n\n  .sort-item {\n    font-size: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
  document.querySelector('.item:nth-child(2)').addEventListener('click', addToDo);
  document.querySelector('.item:nth-child(3)').addEventListener('click', remove);
  document.querySelector('.item:nth-child(4)').addEventListener('click', refresh);
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
/* harmony export */   "getFromStorage": () => (/* binding */ getFromStorage),
/* harmony export */   "storeLocally": () => (/* binding */ storeLocally),
/* harmony export */   "reorderIndices": () => (/* binding */ reorderIndices),
/* harmony export */   "removable": () => (/* binding */ removable),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
const tasks = [];
let dragStore = document.querySelector('.to-do-row');
const prevNextIds = {
  prevId: 0,
  nextId: 1,
};
const removable = {
  init: true,
  value: false,
};

const toggleDraggable = () => {
  const allList = Array.from(document.querySelectorAll('.to-do-row'));
  allList.forEach((list) => {
    list.draggable = !list.draggable;
  });
};

const getFromStorage = () => {
  if (localStorage.tasks) {
    return JSON.parse(localStorage.getItem('tasks'));
  }
  return [];
};

const storeLocally = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return true;
};

const reorderIndices = (tasks) => {
  let index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  });
  storeLocally(tasks);
  return tasks;
};

const drag = (ev) => {
  const draggedElement = ev.target;
  dragStore = draggedElement;
  dragStore.style.backgroundColor = '#4c3c3c';
};

const getCorrectEventTarget = (e, id) => {
  let eventTarget = e.target || document.getElementById(id);
  const classArray = eventTarget.classList.value.split(' ');
  if (
    classArray.includes('fa-check')
    || classArray.includes('checkbox')
    || classArray.includes('to-do')
  ) {
    eventTarget = eventTarget.parentElement.parentElement;
  } else if (
    classArray.includes('fa-arrows-alt')
    || classArray.includes('two')
  ) {
    eventTarget = eventTarget.parentElement;
  }
  return eventTarget;
};

const colorElementOnDrag = (element) => {
  element.style.backgroundColor = '#4c3c3c';
  element.style.color = '#fff';
  Array.from(element.childNodes).forEach((node) => {
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

const removeColorOnDrop = (elUnder, showToDo) => {
  elUnder.style.backgroundColor = '#fff';
  elUnder.style.color = '#fff';
  Array.from(elUnder.childNodes).forEach((node) => {
    if (node.nodeName === 'DIV') {
      const nodes = node.childNodes;
      Array.from(nodes).forEach((one) => {
        one.style.backgroundColor = '#fff';
        one.style.color = 'rgb(134, 122, 122)';
      });
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
  showToDo(getFromStorage());
};

const dragStart = (e) => {
  const elUnder = getCorrectEventTarget(e, false);
  colorElementOnDrag(elUnder);
};

const drop = (ev, showToDo) => {
  ev.preventDefault();
  const elUnder = getCorrectEventTarget(ev, false);
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
      const elUnder = getCorrectEventTarget(false, id);
      colorElementOnDrag(elUnder);
      setTimeout(() => {
        removeColorOnDrop(getCorrectEventTarget(false, id), showToDo);
      }, 800);
      toggleDraggable();
    }, 10);
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    setTimeout(() => {
      const elUnder = getCorrectEventTarget(false, id);
      colorElementOnDrag(elUnder);
      setTimeout(() => {
        removeColorOnDrop(elUnder, showToDo);
      }, 800);
      toggleDraggable();
    }, 10);
  }
};

const dragEnd = (showToDo) => {
  setTimeout(() => {
    dragStore.style.backgroundColor = '#fff';
  }, 1000);

  const allToDoElements = Array.from(document.querySelectorAll('.to-do-row'));
  const ids = allToDoElements.map((el) => Number(el.id));
  let tasks = getFromStorage();
  const mockTasks = [];
  ids.forEach((id) => {
    mockTasks.push(tasks.filter((task) => task.index === id)[0]);
  });
  tasks = mockTasks;
  reorderIndices(tasks);
  storeLocally(tasks);
  showToDo(tasks);
};

const removeOne = (task, showToDo) => {
  let tasks = getFromStorage();
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
  storeLocally(tasks);
  return showToDo(tasks);
};

const removeSelected = (tasks, showToDo) => {
  tasks = getFromStorage(tasks);
  tasks = tasks.filter((task) => !task.completed);
  reorderIndices(tasks);
  storeLocally(tasks);
  showToDo(tasks);
  return true;
};

const addToDo = (tasks, showToDo) => {
  tasks = getFromStorage();
  const description = document.querySelector('.input').textContent;
  if (!description) {
    return false;
  }

  const data = {
    description,
    index: tasks.length + 1,
    completed: false,
    timeStamp: new Date().getTime(),
  };

  document.querySelector('.input').innerHTML = '';
  tasks.unshift(data);
  tasks = reorderIndices(tasks);
  storeLocally(tasks);
  showToDo();
  return true;
};




/***/ }),

/***/ "./src/sortBy.js":
/*!***********************!*\
  !*** ./src/sortBy.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manipulateToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manipulateToDo */ "./src/manipulateToDo.js");


let previousChoice = '';

const sortBy = (criteria, showToDo) => {
  if (criteria === previousChoice) {
    return false;
  }
  let tasks = (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)();
  switch (criteria) {
    case 'timeasc':
      tasks = tasks.sort((a, b) => a.timeStamp - b.timeStamp).reverse();
      break;
    case 'timedes':
      tasks = tasks.sort((a, b) => a.timeStamp - b.timeStamp);
      break;
    case 'doneasc':
      tasks = tasks.sort((a, b) => a.completed - b.completed).reverse();
      break;
    case 'donedes':
      tasks = tasks.sort((a, b) => a.completed - b.completed);
      break;
    case 'sizeasc':
      tasks = tasks
        .sort((a, b) => a.description.length - b.description.length)
        .reverse();
      break;
    case 'sizedes':
      tasks = tasks.sort((a, b) => a.description.length - b.description.length);
      break;
    default:
      tasks = tasks.sort();
  }

  previousChoice = criteria;
  tasks = (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_0__.reorderIndices)(tasks);
  (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_0__.storeLocally)(tasks);
  showToDo(tasks);
  return true;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortBy);


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
/* harmony import */ var _sortBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortBy */ "./src/sortBy.js");





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
  const tasks = (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.getFromStorage)();
  if (typeof tasks[0] === 'object') {
    tasks.forEach((task, index, tasks) => {
      // eslint-disable-next-line no-use-before-define
      generateToDoRows(task.description, task, tasks);
    });
    return true;
  }
  (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.storeLocally)(tasks);
  return true;
};

const option = document.querySelector('.sort-item');
option.addEventListener('click', () => {
  const criteria = document.querySelector('.sort-item').value;
  (0,_sortBy__WEBPACK_IMPORTED_MODULE_3__.default)(criteria, showToDo);
});

const refresh = (showToDo) => {
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

  const input2 = document.createElement('span');
  input2.contentEditable = true;
  input2.classList.add('to-do');

  input2.textContent = text;
  div2.appendChild(input2);

  div.appendChild(div2);

  const i = document.createElement('i');
  i.classList.add('fas', 'fa-arrows-alt');
  div.appendChild(i);

  const input2TrashRemoveEvent = () => {
    _manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removable.value = true;
    (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeOne)(task, showToDo, _manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removable);
    return true;
  };

  input2.addEventListener('focus', () => {
    input2.style.backgroundColor = '#fffeca';
    div.style.backgroundColor = '#fffeca';
    i.classList.remove('fa-arrows-alt');
    i.classList.add('fa-trash-alt');
    i.addEventListener('mousedown', input2TrashRemoveEvent);
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
    const { textContent } = input;
    task.description = textContent;
    (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.storeLocally)(tasks);
    return true;
  };

  input2.addEventListener('blur', () => {
    input2.style.backgroundColor = '#fff';
    div.style.backgroundColor = '#fff';
    if (input2.textContent === '') {
      _manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removable.value = true;
      (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeOne)(task, showToDo, _manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removable);
    }
    i.classList.remove('fa-trash-alt');
    i.classList.add('fa-arrows-alt');
    i.removeEventListener('mousedown', input2TrashRemoveEvent);
  });

  input2.addEventListener('keyup', () => {
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
  div.addEventListener('drop', (ev) => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.drop)(ev, showToDo));

  return true;
};

document.querySelector('.clear-text').addEventListener('click', () => {
  const tasks = (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.getFromStorage)();
  (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeSelected)(tasks, showToDo);
});

document
  .querySelector('.return')
  .addEventListener('click', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.addToDo)(_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.tasks, showToDo, goToInput));
document.querySelector('.fa-sync').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate-sync');
});

document.querySelector('.item:nth-child(4)').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate-sync');
});

const refreshButton = document.querySelector('.fa-sync');
refreshButton.addEventListener('click', () => {
  refresh(showToDo);
  return true;
});

document.querySelector('.input').addEventListener('keypress', (e) => {
  document.querySelector('.input').classList.toggle('placeholder');
  if (e.key === 'Enter') {
    (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.addToDo)(_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.tasks, showToDo, goToInput, e);
  }
  return true;
});

document
  .querySelector('.item:nth-child(2)')
  .addEventListener('click', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.addToDo)(_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.tasks, showToDo, goToInput));
document
  .querySelector('.item:nth-child(3)')
  .addEventListener('click', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeSelected)(_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.tasks, showToDo));
document
  .querySelector('.item:nth-child(4)')
  .addEventListener('click', () => refresh(showToDo));

refresh(showToDo);

showToDo();
document.querySelector('.input').addEventListener('keypress', (e) => {
  if (e.key !== 'Enter') {
    document.querySelector('.input').classList.remove('placeholder');
  }
});
document.querySelector('.input').addEventListener('click', () => {
  document.querySelector('.input').classList.remove('placeholder');
});

document.querySelector('.input').addEventListener('blur', () => {
  document.querySelector('.input').classList.add('placeholder');
});

document.querySelector('.fa-sync').title = 'remove tasks completed more than one month ago';
document.querySelector('.item:nth-child(4)').title = 'remove tasks completed more than one month ago';
document.querySelector('.item:nth-child(3)').title = 'remove completed tasks';
document.querySelector('.item:nth-child(2)').title = 'add tasks';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLCtCQUErQixlQUFlLGNBQWMsOEJBQThCLGtCQUFrQixZQUFZLGtCQUFrQiwyQkFBMkIsbUNBQW1DLDRCQUE0Qiw4QkFBOEIsR0FBRyxhQUFhLHFCQUFxQixXQUFXLGdCQUFnQixHQUFHLGNBQWMsa0JBQWtCLG1DQUFtQyx3QkFBd0IsbUJBQW1CLHNCQUFzQiw4QkFBOEIsaUJBQWlCLGlCQUFpQixHQUFHLGdCQUFnQiw4QkFBOEIsdUJBQXVCLGlCQUFpQixzQkFBc0Isa0JBQWtCLHNCQUFzQixHQUFHLGVBQWUsc0JBQXNCLEdBQUcsMkJBQTJCLDBCQUEwQixtQkFBbUIsR0FBRyxtQ0FBbUMsb0JBQW9CLDhCQUE4QixHQUFHLGdCQUFnQixrQkFBa0IsMEJBQTBCLGFBQWEsZUFBZSxjQUFjLHNCQUFzQixHQUFHLFVBQVUsZ0JBQWdCLHNCQUFzQiwyQkFBMkIsNkNBQTZDLEdBQUcsa0JBQWtCLHVCQUF1Qix5QkFBeUIsR0FBRyxZQUFZLHNCQUFzQixHQUFHLHFCQUFxQixrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLGlCQUFpQixrQkFBa0Isa0RBQWtELHFCQUFxQixHQUFHLFVBQVUsa0JBQWtCLGdDQUFnQyx3QkFBd0IsZ0JBQWdCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxlQUFlLGtCQUFrQixvQkFBb0IsOEJBQThCLHNCQUFzQixHQUFHLFlBQVksaUJBQWlCLG1CQUFtQixjQUFjLGtCQUFrQix3QkFBd0IsOEJBQThCLDBCQUEwQiw4QkFBOEIsMEJBQTBCLDJCQUEyQixzQkFBc0IsdUJBQXVCLDBCQUEwQixrQkFBa0IsdUJBQXVCLGdCQUFnQixxQkFBcUIsOEJBQThCLHNCQUFzQixHQUFHLGtCQUFrQixpQkFBaUIsa0JBQWtCLEdBQUcsZ0NBQWdDLDhCQUE4QixHQUFHLGdCQUFnQixrQ0FBa0MsZ0JBQWdCLEdBQUcsb0NBQW9DLGdCQUFnQixHQUFHLHFCQUFxQixvQkFBb0IsR0FBRyxnQkFBZ0IsdUJBQXVCLHNCQUFzQiw4QkFBOEIsd0JBQXdCLEdBQUcsdUJBQXVCLG9CQUFvQiwrQkFBK0IsMkJBQTJCLEdBQUcsZ0JBQWdCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLG9CQUFvQixHQUFHLGdCQUFnQixjQUFjLGVBQWUsR0FBRyxrQkFBa0IsdUJBQXVCLGdCQUFnQixHQUFHLDBCQUEwQixxQ0FBcUMsdUJBQXVCLGdCQUFnQixHQUFHLFlBQVksaUJBQWlCLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQiw4QkFBOEIsMEJBQTBCLDJCQUEyQixzQkFBc0IsdUJBQXVCLDBCQUEwQixrQkFBa0Isd0JBQXdCLGVBQWUsOEJBQThCLHNCQUFzQiw4QkFBOEIsdUJBQXVCLEdBQUcsa0JBQWtCLGlCQUFpQixrQkFBa0IsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsMEJBQTBCLGlCQUFpQiwyQkFBMkIsR0FBRyxtQkFBbUIsa0JBQWtCLEdBQUcseUJBQXlCLG9CQUFvQixHQUFHLGNBQWMsOEJBQThCLDhCQUE4Qix1QkFBdUIsR0FBRyxrQkFBa0IsOEJBQThCLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxvQ0FBb0Msb0JBQW9CLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLDRCQUE0Qix1QkFBdUIsbUJBQW1CLDhCQUE4QixpQkFBaUIsaUJBQWlCLEdBQUcsdUNBQXVDLFVBQVUsa0JBQWtCLEtBQUssZ0JBQWdCLHNCQUFzQixLQUFLLGlCQUFpQix3QkFBd0IsS0FBSyxrQkFBa0Isc0JBQXNCLEtBQUssR0FBRyxxQkFBcUI7QUFDendWO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5QywwR0FBMEcsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRW5mLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLG1GQUFPLElBQUksMEZBQWMsR0FBRywwRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWC9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsVUFBVSxLQUFLO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTzhFOztBQUVoRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsK0RBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSwrREFBYztBQUN4QixFQUFFLDZEQUFZO0FBQ2Q7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQ3pDdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUN5QjtBQWFwQjtBQUNJOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLEVBQUUsMEJBQTBCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiwrREFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRSw2REFBWTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnREFBTTtBQUNSLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNERBQWU7QUFDbkIsSUFBSSwwREFBUyxpQkFBaUIsc0RBQVM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLHVEQUFlO0FBQ25CO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLHVEQUFlO0FBQ25CO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0EsSUFBSSw2REFBWTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBZTtBQUNyQixNQUFNLDBEQUFTLGlCQUFpQixzREFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUNBQXVDLHFEQUFJO0FBQzNDLDJDQUEyQywwREFBUztBQUNwRCx3Q0FBd0Msd0RBQU87QUFDL0MsdUNBQXVDLHFEQUFJOztBQUUzQztBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLCtEQUFjO0FBQzlCLEVBQUUsK0RBQWM7QUFDaEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsbUNBQW1DLHdEQUFPLENBQUMsa0RBQUs7QUFDaEQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQU8sQ0FBQyxrREFBSztBQUNqQjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsbUNBQW1DLHdEQUFPLENBQUMsa0RBQUs7QUFDaEQ7QUFDQTtBQUNBLG1DQUFtQywrREFBYyxDQUFDLGtEQUFLO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vc3JjL2NvbXBsZXRlZFRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9zcmMvbWFuaXB1bGF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9zcmMvc29ydEJ5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYigxNTAsIDE0NSwgMTQ1KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA1dnc7XFxuICBmb250LXNpemU6IDAuNnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5zb3J0LWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4uYXBwLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hcHAtbmFtZSBhLFxcbi5pdGVtIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5pdGVtOmhvdmVyLFxcbi5hcHAtbmFtZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDIyNiwgMjE0LCAyMTQpO1xcbn1cXG5cXG4ubmF2LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBnYXA6IDV2dztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFwcCB7XFxuICB3aWR0aDogOTB2dztcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2IoMTYzLCAxNTgsIDE1OCk7XFxufVxcblxcbi5hcHAtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVmcmVzaCxcXG4uYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VzdG9tLXJvdyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiKDIzMCwgMjIyLCAyMjIpO1xcbiAgbWluLWhlaWdodDogMzBweDtcXG59XFxuXFxuLnR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xcbn1cXG5cXG4uZmEtY2hlY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTM0LCAxMjIsIDEyMik7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgLW1zLXdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAtbXMtaHlwaGVuczogYXV0bztcXG4gIC1tb3otaHlwaGVuczogYXV0bztcXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcXG4gIGh5cGhlbnM6IGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogcmdiKDEzNCwgMTIyLCAxMjIpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi50by1kbzpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZmEtY2hlY2s6Y2hlY2tlZCB+IC50by1kbyB7XFxuICBjb2xvcjogcmdiKDE1MCwgMTQ1LCAxNDUpO1xcbn1cXG5cXG4uY3Jvc3Mtb3V0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5mYS1jaGVjazpjaGVja2VkIH4gLmNyb3NzLW91dCB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWFsbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4uY2xlYXItdGV4dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiByZ2IoNzUsIDY2LCA2Nik7XFxufVxcblxcbi50by1kby1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi5yZWZyZXNoIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ucGxhY2Vob2xkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnQWRkIHlvdXIgdGFzayBoZXJlLi4uJztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAtbXMtd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xcbiAgaHlwaGVuczogYXV0bztcXG4gIHBhZGRpbmc6IDAgMCAwIDIwcHg7XFxuICB3aWR0aDogOTMlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHJnYigxNTAsIDE0NSwgMTQ1KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mYS1hcnJvd3MtYWx0IHtcXG4gIGNvbG9yOiByZ2IoMjA0LCAxODcsIDE4Nyk7XFxufVxcblxcbi5mYS1hcnJvd3MtYWx0OmhvdmVyIHtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIGNvbG9yOiByZ2IoNzUsIDY2LCA2Nik7XFxufVxcblxcbi5mYS10cmFzaC1hbHQge1xcbiAgY29sb3I6IHRvbWF0bztcXG59XFxuXFxuLmZhLXRyYXNoLWFsdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS1zeW5jIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDExMGRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBpbml0aWFsO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4ucm90YXRlLXN5bmMge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoODMwZGVnKTtcXG59XFxuXFxuLnJldHVybiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mYS1zeW5jOmhvdmVyLFxcbi5yZXR1cm46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc4NnB4KSB7XFxuICAuYXBwIHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICB9XFxuXFxuICAubmF2LWJhciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5hcHAtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgfVxcblxcbiAgLnNvcnQtaXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUixVQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYigxNTAsIDE0NSwgMTQ1KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA1dnc7XFxuICBmb250LXNpemU6IDAuNnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5zb3J0LWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4uYXBwLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hcHAtbmFtZSBhLFxcbi5pdGVtIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5pdGVtOmhvdmVyLFxcbi5hcHAtbmFtZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDIyNiwgMjE0LCAyMTQpO1xcbn1cXG5cXG4ubmF2LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBnYXA6IDV2dztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFwcCB7XFxuICB3aWR0aDogOTB2dztcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2IoMTYzLCAxNTgsIDE1OCk7XFxufVxcblxcbi5hcHAtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVmcmVzaCxcXG4uYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VzdG9tLXJvdyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiKDIzMCwgMjIyLCAyMjIpO1xcbiAgbWluLWhlaWdodDogMzBweDtcXG59XFxuXFxuLnR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xcbn1cXG5cXG4uZmEtY2hlY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTM0LCAxMjIsIDEyMik7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgLW1zLXdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAtbXMtaHlwaGVuczogYXV0bztcXG4gIC1tb3otaHlwaGVuczogYXV0bztcXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcXG4gIGh5cGhlbnM6IGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogcmdiKDEzNCwgMTIyLCAxMjIpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi50by1kbzpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZmEtY2hlY2s6Y2hlY2tlZCB+IC50by1kbyB7XFxuICBjb2xvcjogcmdiKDE1MCwgMTQ1LCAxNDUpO1xcbn1cXG5cXG4uY3Jvc3Mtb3V0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5mYS1jaGVjazpjaGVja2VkIH4gLmNyb3NzLW91dCB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWFsbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4uY2xlYXItdGV4dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiByZ2IoNzUsIDY2LCA2Nik7XFxufVxcblxcbi50by1kby1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi5yZWZyZXNoIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ucGxhY2Vob2xkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnQWRkIHlvdXIgdGFzayBoZXJlLi4uJztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAtbXMtd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xcbiAgaHlwaGVuczogYXV0bztcXG4gIHBhZGRpbmc6IDAgMCAwIDIwcHg7XFxuICB3aWR0aDogOTMlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHJnYigxNTAsIDE0NSwgMTQ1KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mYS1hcnJvd3MtYWx0IHtcXG4gIGNvbG9yOiByZ2IoMjA0LCAxODcsIDE4Nyk7XFxufVxcblxcbi5mYS1hcnJvd3MtYWx0OmhvdmVyIHtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIGNvbG9yOiByZ2IoNzUsIDY2LCA2Nik7XFxufVxcblxcbi5mYS10cmFzaC1hbHQge1xcbiAgY29sb3I6IHRvbWF0bztcXG59XFxuXFxuLmZhLXRyYXNoLWFsdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS1zeW5jIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDExMGRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBpbml0aWFsO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4ucm90YXRlLXN5bmMge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoODMwZGVnKTtcXG59XFxuXFxuLnJldHVybiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mYS1zeW5jOmhvdmVyLFxcbi5yZXR1cm46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzNjM2M7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc4NnB4KSB7XFxuICAuYXBwIHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICB9XFxuXFxuICAubmF2LWJhciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5hcHAtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgfVxcblxcbiAgLnNvcnQtaXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHVwZGF0ZUNvbXBsZXRlZCA9ICh0YXNrLCB0YXNrcykgPT4ge1xuICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0xpbmtzID0gKGFkZFRvRG8sIHJlbW92ZSwgcmVmcmVzaCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMiknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvRG8pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMyknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtOm50aC1jaGlsZCg0KScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVmcmVzaCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVDb21wbGV0ZWQ7XG5leHBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9MaW5rcyB9OyIsImNvbnN0IHRhc2tzID0gW107XG5sZXQgZHJhZ1N0b3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLXJvdycpO1xuY29uc3QgcHJldk5leHRJZHMgPSB7XG4gIHByZXZJZDogMCxcbiAgbmV4dElkOiAxLFxufTtcbmNvbnN0IHJlbW92YWJsZSA9IHtcbiAgaW5pdDogdHJ1ZSxcbiAgdmFsdWU6IGZhbHNlLFxufTtcblxuY29uc3QgdG9nZ2xlRHJhZ2dhYmxlID0gKCkgPT4ge1xuICBjb25zdCBhbGxMaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8tcm93JykpO1xuICBhbGxMaXN0LmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBsaXN0LmRyYWdnYWJsZSA9ICFsaXN0LmRyYWdnYWJsZTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgfVxuICByZXR1cm4gW107XG59O1xuXG5jb25zdCBzdG9yZUxvY2FsbHkgPSAodGFza3MpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCByZW9yZGVySW5kaWNlcyA9ICh0YXNrcykgPT4ge1xuICBsZXQgaW5kZXggPSAxO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzay5pbmRleCA9IGluZGV4O1xuICAgIGluZGV4ICs9IDE7XG4gIH0pO1xuICBzdG9yZUxvY2FsbHkodGFza3MpO1xuICByZXR1cm4gdGFza3M7XG59O1xuXG5jb25zdCBkcmFnID0gKGV2KSA9PiB7XG4gIGNvbnN0IGRyYWdnZWRFbGVtZW50ID0gZXYudGFyZ2V0O1xuICBkcmFnU3RvcmUgPSBkcmFnZ2VkRWxlbWVudDtcbiAgZHJhZ1N0b3JlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGMzYzNjJztcbn07XG5cbmNvbnN0IGdldENvcnJlY3RFdmVudFRhcmdldCA9IChlLCBpZCkgPT4ge1xuICBsZXQgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGNvbnN0IGNsYXNzQXJyYXkgPSBldmVudFRhcmdldC5jbGFzc0xpc3QudmFsdWUuc3BsaXQoJyAnKTtcbiAgaWYgKFxuICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWNoZWNrJylcbiAgICB8fCBjbGFzc0FycmF5LmluY2x1ZGVzKCdjaGVja2JveCcpXG4gICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygndG8tZG8nKVxuICApIHtcbiAgICBldmVudFRhcmdldCA9IGV2ZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgfSBlbHNlIGlmIChcbiAgICBjbGFzc0FycmF5LmluY2x1ZGVzKCdmYS1hcnJvd3MtYWx0JylcbiAgICB8fCBjbGFzc0FycmF5LmluY2x1ZGVzKCd0d28nKVxuICApIHtcbiAgICBldmVudFRhcmdldCA9IGV2ZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGV2ZW50VGFyZ2V0O1xufTtcblxuY29uc3QgY29sb3JFbGVtZW50T25EcmFnID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRjM2MzYyc7XG4gIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdESVYnKSB7XG4gICAgICBjb25zdCBub2RlcyA9IG5vZGUuY2hpbGROb2RlcztcbiAgICAgIEFycmF5LmZyb20obm9kZXMpLmZvckVhY2goKG9uZSkgPT4ge1xuICAgICAgICBvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzNjM2MnO1xuICAgICAgICBvbmUuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gICAgICB9KTtcbiAgICB9XG4gICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRjM2MzYyc7XG4gICAgbm9kZS5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgfSk7XG59O1xuXG5jb25zdCByZW1vdmVDb2xvck9uRHJvcCA9IChlbFVuZGVyLCBzaG93VG9EbykgPT4ge1xuICBlbFVuZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgZWxVbmRlci5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgQXJyYXkuZnJvbShlbFVuZGVyLmNoaWxkTm9kZXMpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ0RJVicpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgICAgQXJyYXkuZnJvbShub2RlcykuZm9yRWFjaCgob25lKSA9PiB7XG4gICAgICAgIG9uZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gICAgICAgIG9uZS5zdHlsZS5jb2xvciA9ICdyZ2IoMTM0LCAxMjIsIDEyMiknO1xuICAgICAgfSk7XG4gICAgfVxuICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgIG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDIwNCwgMTg3LCAxODcpJztcbiAgICBpZiAobm9kZS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2ZhLWFycm93cy1hbHQnKSkge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDc1LCA2NiwgNjYpJztcbiAgICAgIH0pO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgbm9kZS5zdHlsZS5jb2xvciA9ICdyZ2IoMjA0LCAxODcsIDE4NyknO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgc2hvd1RvRG8oZ2V0RnJvbVN0b3JhZ2UoKSk7XG59O1xuXG5jb25zdCBkcmFnU3RhcnQgPSAoZSkgPT4ge1xuICBjb25zdCBlbFVuZGVyID0gZ2V0Q29ycmVjdEV2ZW50VGFyZ2V0KGUsIGZhbHNlKTtcbiAgY29sb3JFbGVtZW50T25EcmFnKGVsVW5kZXIpO1xufTtcblxuY29uc3QgZHJvcCA9IChldiwgc2hvd1RvRG8pID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZWxVbmRlciA9IGdldENvcnJlY3RFdmVudFRhcmdldChldiwgZmFsc2UpO1xuICBwcmV2TmV4dElkcy5uZXh0SWQgPSBOdW1iZXIoZWxVbmRlci5pZCk7XG4gIHByZXZOZXh0SWRzLnByZXZJZCA9IE51bWJlcihkcmFnU3RvcmUuaWQpO1xuICBpZiAocHJldk5leHRJZHMucHJldklkIDwgcHJldk5leHRJZHMubmV4dElkKSB7XG4gICAgZWxVbmRlci5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShkcmFnU3RvcmUsIGVsVW5kZXIubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgfSBlbHNlIGlmIChwcmV2TmV4dElkcy5wcmV2SWQgPiBwcmV2TmV4dElkcy5uZXh0SWQpIHtcbiAgICBlbFVuZGVyLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRyYWdTdG9yZSwgZWxVbmRlcik7XG4gIH1cblxuICBjb25zdCB7IGlkIH0gPSBlbFVuZGVyO1xuICBpZiAocHJldk5leHRJZHMucHJldklkIDwgcHJldk5leHRJZHMubmV4dElkKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBlbFVuZGVyID0gZ2V0Q29ycmVjdEV2ZW50VGFyZ2V0KGZhbHNlLCBpZCk7XG4gICAgICBjb2xvckVsZW1lbnRPbkRyYWcoZWxVbmRlcik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVtb3ZlQ29sb3JPbkRyb3AoZ2V0Q29ycmVjdEV2ZW50VGFyZ2V0KGZhbHNlLCBpZCksIHNob3dUb0RvKTtcbiAgICAgIH0sIDgwMCk7XG4gICAgICB0b2dnbGVEcmFnZ2FibGUoKTtcbiAgICB9LCAxMCk7XG4gIH0gZWxzZSBpZiAocHJldk5leHRJZHMucHJldklkID4gcHJldk5leHRJZHMubmV4dElkKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBlbFVuZGVyID0gZ2V0Q29ycmVjdEV2ZW50VGFyZ2V0KGZhbHNlLCBpZCk7XG4gICAgICBjb2xvckVsZW1lbnRPbkRyYWcoZWxVbmRlcik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVtb3ZlQ29sb3JPbkRyb3AoZWxVbmRlciwgc2hvd1RvRG8pO1xuICAgICAgfSwgODAwKTtcbiAgICAgIHRvZ2dsZURyYWdnYWJsZSgpO1xuICAgIH0sIDEwKTtcbiAgfVxufTtcblxuY29uc3QgZHJhZ0VuZCA9IChzaG93VG9EbykgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkcmFnU3RvcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICB9LCAxMDAwKTtcblxuICBjb25zdCBhbGxUb0RvRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kby1yb3cnKSk7XG4gIGNvbnN0IGlkcyA9IGFsbFRvRG9FbGVtZW50cy5tYXAoKGVsKSA9PiBOdW1iZXIoZWwuaWQpKTtcbiAgbGV0IHRhc2tzID0gZ2V0RnJvbVN0b3JhZ2UoKTtcbiAgY29uc3QgbW9ja1Rhc2tzID0gW107XG4gIGlkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgIG1vY2tUYXNrcy5wdXNoKHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCA9PT0gaWQpWzBdKTtcbiAgfSk7XG4gIHRhc2tzID0gbW9ja1Rhc2tzO1xuICByZW9yZGVySW5kaWNlcyh0YXNrcyk7XG4gIHN0b3JlTG9jYWxseSh0YXNrcyk7XG4gIHNob3dUb0RvKHRhc2tzKTtcbn07XG5cbmNvbnN0IHJlbW92ZU9uZSA9ICh0YXNrLCBzaG93VG9EbykgPT4ge1xuICBsZXQgdGFza3MgPSBnZXRGcm9tU3RvcmFnZSgpO1xuICBpZiAocmVtb3ZhYmxlLnZhbHVlIHx8IHJlbW92YWJsZS5pbml0KSB7XG4gICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKG9uZVRhc2spID0+IG9uZVRhc2suaW5kZXggIT09IHRhc2suaW5kZXgpO1xuICAgIHJlbW92YWJsZS5pbml0ID0gZmFsc2U7XG4gIH1cblxuICByZW1vdmFibGUudmFsdWUgPSBmYWxzZTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByZW1vdmFibGUuaW5pdCA9IGZhbHNlO1xuICAgIHJlbW92YWJsZS52YWx1ZSA9IHRydWU7XG4gIH0sIDUwMCk7XG5cbiAgcmVvcmRlckluZGljZXModGFza3MpO1xuICBzdG9yZUxvY2FsbHkodGFza3MpO1xuICByZXR1cm4gc2hvd1RvRG8odGFza3MpO1xufTtcblxuY29uc3QgcmVtb3ZlU2VsZWN0ZWQgPSAodGFza3MsIHNob3dUb0RvKSA9PiB7XG4gIHRhc2tzID0gZ2V0RnJvbVN0b3JhZ2UodGFza3MpO1xuICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgcmVvcmRlckluZGljZXModGFza3MpO1xuICBzdG9yZUxvY2FsbHkodGFza3MpO1xuICBzaG93VG9Ebyh0YXNrcyk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgYWRkVG9EbyA9ICh0YXNrcywgc2hvd1RvRG8pID0+IHtcbiAgdGFza3MgPSBnZXRGcm9tU3RvcmFnZSgpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpLnRleHRDb250ZW50O1xuICBpZiAoIWRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIHRpbWVTdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gIH07XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0JykuaW5uZXJIVE1MID0gJyc7XG4gIHRhc2tzLnVuc2hpZnQoZGF0YSk7XG4gIHRhc2tzID0gcmVvcmRlckluZGljZXModGFza3MpO1xuICBzdG9yZUxvY2FsbHkodGFza3MpO1xuICBzaG93VG9EbygpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB7XG4gIGRyb3AsXG4gIGRyYWdFbmQsXG4gIGRyYWcsXG4gIGRyYWdTdGFydCxcbiAgcmVtb3ZlT25lLFxuICByZW1vdmVTZWxlY3RlZCxcbiAgYWRkVG9EbyxcbiAgZ2V0RnJvbVN0b3JhZ2UsXG4gIHN0b3JlTG9jYWxseSxcbiAgcmVvcmRlckluZGljZXMsXG4gIHJlbW92YWJsZSxcbiAgdGFza3MsXG59O1xuIiwiaW1wb3J0IHsgZ2V0RnJvbVN0b3JhZ2UsIHJlb3JkZXJJbmRpY2VzLCBzdG9yZUxvY2FsbHkgfSBmcm9tICcuL21hbmlwdWxhdGVUb0RvJztcblxubGV0IHByZXZpb3VzQ2hvaWNlID0gJyc7XG5cbmNvbnN0IHNvcnRCeSA9IChjcml0ZXJpYSwgc2hvd1RvRG8pID0+IHtcbiAgaWYgKGNyaXRlcmlhID09PSBwcmV2aW91c0Nob2ljZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBsZXQgdGFza3MgPSBnZXRGcm9tU3RvcmFnZSgpO1xuICBzd2l0Y2ggKGNyaXRlcmlhKSB7XG4gICAgY2FzZSAndGltZWFzYyc6XG4gICAgICB0YXNrcyA9IHRhc2tzLnNvcnQoKGEsIGIpID0+IGEudGltZVN0YW1wIC0gYi50aW1lU3RhbXApLnJldmVyc2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RpbWVkZXMnOlxuICAgICAgdGFza3MgPSB0YXNrcy5zb3J0KChhLCBiKSA9PiBhLnRpbWVTdGFtcCAtIGIudGltZVN0YW1wKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RvbmVhc2MnOlxuICAgICAgdGFza3MgPSB0YXNrcy5zb3J0KChhLCBiKSA9PiBhLmNvbXBsZXRlZCAtIGIuY29tcGxldGVkKS5yZXZlcnNlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkb25lZGVzJzpcbiAgICAgIHRhc2tzID0gdGFza3Muc29ydCgoYSwgYikgPT4gYS5jb21wbGV0ZWQgLSBiLmNvbXBsZXRlZCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzaXplYXNjJzpcbiAgICAgIHRhc2tzID0gdGFza3NcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZGVzY3JpcHRpb24ubGVuZ3RoIC0gYi5kZXNjcmlwdGlvbi5sZW5ndGgpXG4gICAgICAgIC5yZXZlcnNlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzaXplZGVzJzpcbiAgICAgIHRhc2tzID0gdGFza3Muc29ydCgoYSwgYikgPT4gYS5kZXNjcmlwdGlvbi5sZW5ndGggLSBiLmRlc2NyaXB0aW9uLmxlbmd0aCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGFza3MgPSB0YXNrcy5zb3J0KCk7XG4gIH1cblxuICBwcmV2aW91c0Nob2ljZSA9IGNyaXRlcmlhO1xuICB0YXNrcyA9IHJlb3JkZXJJbmRpY2VzKHRhc2tzKTtcbiAgc3RvcmVMb2NhbGx5KHRhc2tzKTtcbiAgc2hvd1RvRG8odGFza3MpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNvcnRCeTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB1cGRhdGVDb21wbGV0ZWQgZnJvbSAnLi9jb21wbGV0ZWRUb0RvJztcbmltcG9ydCB7XG4gIGRyb3AsXG4gIGRyYWdFbmQsXG4gIGRyYWcsXG4gIGRyYWdTdGFydCxcbiAgcmVtb3ZlT25lLFxuICByZW1vdmVTZWxlY3RlZCxcbiAgYWRkVG9EbyxcbiAgc3RvcmVMb2NhbGx5LFxuICBnZXRGcm9tU3RvcmFnZSxcbiAgcmVtb3ZhYmxlLFxuICB0YXNrcyxcbn0gZnJvbSAnLi9tYW5pcHVsYXRlVG9Ebyc7XG5pbXBvcnQgc29ydEJ5IGZyb20gJy4vc29ydEJ5JztcblxuY29uc3QgZ29Ub0lucHV0ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0JykuZm9jdXMoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy5mb290ZXItdGV4dCcsXG4pLmlubmVySFRNTCA9IGAmY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEhlbnJ5LUtjLCBidWlsdCB3aXRoIPCfkpUgZnJvbSBtZWA7XG5cbmNvbnN0IGFsdGVybmF0ZVRpY2tBbmRDaGVjayA9ICh0aWNrLCBjaGVjaywgdGFzaywgaW5wdXQyKSA9PiB7XG4gIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgIHRpY2suc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIGNoZWNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaW5wdXQyLmNsYXNzTGlzdC5hZGQoJ2Nyb3NzLW91dCcpO1xuICB9IGVsc2Uge1xuICAgIHRpY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjaGVjay5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgaW5wdXQyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nyb3NzLW91dCcpO1xuICB9XG59O1xuXG5jb25zdCBzaG93VG9EbyA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QnKS5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgdGFza3MgPSBnZXRGcm9tU3RvcmFnZSgpO1xuICBpZiAodHlwZW9mIHRhc2tzWzBdID09PSAnb2JqZWN0Jykge1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4LCB0YXNrcykgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICBnZW5lcmF0ZVRvRG9Sb3dzKHRhc2suZGVzY3JpcHRpb24sIHRhc2ssIHRhc2tzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBzdG9yZUxvY2FsbHkodGFza3MpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0LWl0ZW0nKTtcbm9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgY3JpdGVyaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC1pdGVtJykudmFsdWU7XG4gIHNvcnRCeShjcml0ZXJpYSwgc2hvd1RvRG8pO1xufSk7XG5cbmNvbnN0IHJlZnJlc2ggPSAoc2hvd1RvRG8pID0+IHtcbiAgc2hvd1RvRG8oKTtcbiAgZ29Ub0lucHV0KCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgZ2VuZXJhdGVUb0RvUm93cyA9ICh0ZXh0LCB0YXNrLCB0YXNrcykgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RvLWRvLXJvdycsICdjdXN0b20tcm93Jyk7XG4gIGRpdi5pZCA9IHRhc2suaW5kZXg7XG4gIGRpdi5kcmFnZ2FibGUgPSB0cnVlO1xuICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjIuY2xhc3NMaXN0LmFkZCgndHdvJyk7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICBpbnB1dC50eXBlID0gJ2NoZWNrYm94JztcblxuICBjb25zdCB0aWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICB0aWNrLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1jaGVjaycpO1xuXG4gIGRpdjIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBkaXYyLmFwcGVuZENoaWxkKHRpY2spO1xuXG4gIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5wdXQyLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gIGlucHV0Mi5jbGFzc0xpc3QuYWRkKCd0by1kbycpO1xuXG4gIGlucHV0Mi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGRpdjIuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcblxuICBkaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XG5cbiAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgaS5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtYXJyb3dzLWFsdCcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaSk7XG5cbiAgY29uc3QgaW5wdXQyVHJhc2hSZW1vdmVFdmVudCA9ICgpID0+IHtcbiAgICByZW1vdmFibGUudmFsdWUgPSB0cnVlO1xuICAgIHJlbW92ZU9uZSh0YXNrLCBzaG93VG9EbywgcmVtb3ZhYmxlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBpbnB1dDIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgaW5wdXQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZWNhJztcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZlY2EnO1xuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnZmEtYXJyb3dzLWFsdCcpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtdHJhc2gtYWx0Jyk7XG4gICAgaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBpbnB1dDJUcmFzaFJlbW92ZUV2ZW50KTtcbiAgfSk7XG4gIHRpY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlQ29tcGxldGVkKHRhc2ssIHRhc2tzKTtcbiAgICBhbHRlcm5hdGVUaWNrQW5kQ2hlY2sodGljaywgaW5wdXQsIHRhc2ssIGlucHV0Mik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlQ29tcGxldGVkKHRhc2ssIHRhc2tzKTtcbiAgICBhbHRlcm5hdGVUaWNrQW5kQ2hlY2sodGljaywgaW5wdXQsIHRhc2ssIGlucHV0Mik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgIHRpY2suc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaW5wdXQyLmNsYXNzTGlzdC5hZGQoJ2Nyb3NzLW91dCcpO1xuICB9IGVsc2UgaWYgKCF0YXNrLmNvbXBsZXRlZCkge1xuICAgIHRpY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgaW5wdXQyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nyb3NzLW91dCcpO1xuICB9XG5cbiAgY29uc3QgZWRpdFRvRG8gPSAoaW5wdXQsIHRhc2ssIHRhc2tzKSA9PiB7XG4gICAgY29uc3QgeyB0ZXh0Q29udGVudCB9ID0gaW5wdXQ7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IHRleHRDb250ZW50O1xuICAgIHN0b3JlTG9jYWxseSh0YXNrcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgaW5wdXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgaW5wdXQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgIGlmIChpbnB1dDIudGV4dENvbnRlbnQgPT09ICcnKSB7XG4gICAgICByZW1vdmFibGUudmFsdWUgPSB0cnVlO1xuICAgICAgcmVtb3ZlT25lKHRhc2ssIHNob3dUb0RvLCByZW1vdmFibGUpO1xuICAgIH1cbiAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXRyYXNoLWFsdCcpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtYXJyb3dzLWFsdCcpO1xuICAgIGkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaW5wdXQyVHJhc2hSZW1vdmVFdmVudCk7XG4gIH0pO1xuXG4gIGlucHV0Mi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBlZGl0VG9EbyhpbnB1dDIsIHRhc2ssIHRhc2tzKTtcbiAgfSk7XG5cbiAgaW5wdXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaW5wdXQyLmJsdXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpO1xuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWcnLCAoZXYpID0+IGRyYWcoZXYpKTtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiBkcmFnU3RhcnQoZSkpO1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGRyYWdFbmQoc2hvd1RvRG8pKTtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXYpID0+IGRyb3AoZXYsIHNob3dUb0RvKSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItdGV4dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCB0YXNrcyA9IGdldEZyb21TdG9yYWdlKCk7XG4gIHJlbW92ZVNlbGVjdGVkKHRhc2tzLCBzaG93VG9Ebyk7XG59KTtcblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoJy5yZXR1cm4nKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRUb0RvKHRhc2tzLCBzaG93VG9EbywgZ29Ub0lucHV0KSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc3luYycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc3luYycpLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZS1zeW5jJyk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDQpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1zeW5jJykuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlLXN5bmMnKTtcbn0pO1xuXG5jb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXN5bmMnKTtcbnJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlZnJlc2goc2hvd1RvRG8pO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpLmNsYXNzTGlzdC50b2dnbGUoJ3BsYWNlaG9sZGVyJyk7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGFkZFRvRG8odGFza3MsIHNob3dUb0RvLCBnb1RvSW5wdXQsIGUpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMiknKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRUb0RvKHRhc2tzLCBzaG93VG9EbywgZ29Ub0lucHV0KSk7XG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDMpJylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVtb3ZlU2VsZWN0ZWQodGFza3MsIHNob3dUb0RvKSk7XG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDQpJylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVmcmVzaChzaG93VG9EbykpO1xuXG5yZWZyZXNoKHNob3dUb0RvKTtcblxuc2hvd1RvRG8oKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ICE9PSAnRW50ZXInKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2Vob2xkZXInKTtcbiAgfVxufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2Vob2xkZXInKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdwbGFjZWhvbGRlcicpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1zeW5jJykudGl0bGUgPSAncmVtb3ZlIHRhc2tzIGNvbXBsZXRlZCBtb3JlIHRoYW4gb25lIG1vbnRoIGFnbyc7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoNCknKS50aXRsZSA9ICdyZW1vdmUgdGFza3MgY29tcGxldGVkIG1vcmUgdGhhbiBvbmUgbW9udGggYWdvJztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtOm50aC1jaGlsZCgzKScpLnRpdGxlID0gJ3JlbW92ZSBjb21wbGV0ZWQgdGFza3MnO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDIpJykudGl0bGUgPSAnYWRkIHRhc2tzJztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci10ZXh0JykudGl0bGUgPSAncmVtb3ZlIGNvbXBsZXRlZCB0YXNrcyc7XG5jb25zdCBhbGxDaGVja2JveGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKSk7XG5hbGxDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gIGNoZWNrYm94LnRpdGxlID0gJ21hcmsgYXMgY29tcGxldGVkJztcbiAgcmV0dXJuIHRydWU7XG59KTtcbmNvbnN0IGFsbFRpY2tNYXJrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNoZWNrJykpO1xuYWxsVGlja01hcmtzLmZvckVhY2goKHRpY2tNYXJrKSA9PiB7XG4gIHRpY2tNYXJrLnRpdGxlID0gJ3VubWFyayBhcyBjb21wbGV0ZWQnO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuY29uc3QgYWxsVG9kb0l0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8nKSk7XG5hbGxUb2RvSXRlbXMuZm9yRWFjaCgodG9kbykgPT4ge1xuICB0b2RvLnRpdGxlID0gJ2NsaWNrIHRvIGRlbGV0ZS9lZGl0LCBkcmFnIHRvIG1vdmUnO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuY29uc3QgYWxsTW92ZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZhLWFycm93cy1hbHQnKSk7XG5hbGxNb3ZlQnV0dG9ucy5mb3JFYWNoKChtb3ZlQnV0dG9uKSA9PiB7XG4gIG1vdmVCdXR0b24udGl0bGUgPSAnZHJhZyB3aXRoaW4gdGhlIGJveCB0byBtb3ZlJztcbiAgcmV0dXJuIHRydWU7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=