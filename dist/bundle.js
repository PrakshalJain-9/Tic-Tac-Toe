/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    background: linear-gradient(skyblue, wheat);\r\n    min-height: 100vh;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\nh1,\r\nh2 {\r\n    text-align: center;\r\n    padding: 2rem;\r\n}\r\n\r\n.buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10vw;\r\n    margin-top: 50px;\r\n    height: 40px;\r\n}\r\n\r\n.cross,\r\n.zero {\r\n    padding: 1rem;\r\n    background-color: rgb(218, 179, 131);\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    transition: transform 0.5s ease;\r\n    font-weight: 600;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.cross:hover,\r\n.zero:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.game {\r\n    height: 75vh;\r\n}\r\n\r\n.cube-container {\r\n    min-height: 70vh;\r\n    display: grid;\r\n    width: 30vw; \r\n    height: auto;\r\n    grid-template-rows: repeat(3, 1fr);\r\n    grid-template-columns: repeat(3, 1fr);\r\n    margin: 50px auto;\r\n    text-align: center;\r\n}\r\n@media (max-width: 1000px) {\r\n    .cube-container {\r\n        width: 60vw;\r\n        grid-template-rows: repeat(3, 1fr);\r\n        grid-template-columns: repeat(3, 1fr);\r\n    }\r\n\r\n    .cube {\r\n        font-size: 5vw; \r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .cube-container {\r\n        width: 80vw;\r\n        grid-template-rows: repeat(3, 1fr);\r\n        grid-template-columns: repeat(3, 1fr);\r\n    }\r\n\r\n    .cube {\r\n        font-size: 5vw; \r\n    }\r\n}\r\n\r\n\r\n\r\n.selected {\r\n    background-color: blue;\r\n}\r\n\r\n.cube-wrapper {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 3px solid black;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.cube {\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    background-color: inherit;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: none;\r\n}\r\n\r\n\r\n.newgame{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1rem;\r\n}\r\n\r\n.newgame button{\r\n    padding: 10px;\r\n    font-size: 1rem;\r\n    background-color: rgb(239, 175, 97);\r\n    border-radius: 10px;\r\n    font-weight: 600;\r\n    color: rgb(51, 11, 11);\r\n    border: 2px solid black;\r\n}\r\n\r\n.newgame button:hover{\r\n    background-color: rgba(239, 175, 97, 0.445);\r\n    cursor: pointer;\r\n    transform: scale(1.01);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tic-tac-toe/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tic-tac-toe/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tic-tac-toe/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tic-tac-toe/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tic-tac-toe/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tic-tac-toe/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tic-tac-toe/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tic-tac-toe/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gamecontroller.js":
/*!*******************************!*\
  !*** ./src/gamecontroller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound.js */ \"./src/sound.js\");\n/* harmony import */ var _optimalMove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optimalMove.js */ \"./src/optimalMove.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\nfunction gameController() {\r\n    /*eslint-disable no-undef*/\r\n    const cross = document.querySelector('.cross');\r\n    const zero = document.querySelector('.zero');\r\n    const cubes = document.querySelectorAll('.cube');\r\n    const heading = document.querySelector('h1');\r\n    const newgame = document.querySelector('.newgame');\r\n    const audioManage = (0,_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    document.addEventListener(\r\n        'click',\r\n        () => {\r\n            audioManage.Initialize();\r\n        },\r\n        { once: true }\r\n    );\r\n\r\n    cross.classList.add('selected');\r\n\r\n    const board = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.gameboard)().getBoard();\r\n    const open = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.opening)();\r\n    let playerName = open.getname() !== null ? open.getname() : 'Player 1';\r\n    open.assignment(cubes);\r\n\r\n    heading.textContent += ` ${playerName}`;\r\n\r\n    const players = [\r\n        { player: playerName, Sign: 'X' },\r\n        { player: 'Computer', Sign: 'O' },\r\n    ];\r\n\r\n    const change = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.toggler)(players,board);\r\n    let getmove = (0,_optimalMove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(players[0].Sign, players[1].Sign);\r\n\r\n    cross.addEventListener('click', (e) => {\r\n        if (getmove.isEmpty(board)) {\r\n            change.toggle(e);\r\n        } else {\r\n            alert(\"Can't change mid game\");\r\n        }\r\n    });\r\n\r\n    zero.addEventListener('click', (e) => {\r\n        if (getmove.isEmpty(board)) {\r\n            change.toggle(e);\r\n        } else {\r\n            alert(\"Can't change mid game\");\r\n        }\r\n    });\r\n\r\n    cubes.forEach((cube) => {\r\n        cube.addEventListener('click', (e) => {\r\n            if (getmove.evaluate(board) !== 0) {\r\n                audioManage.stopAll();\r\n                audioManage.EndGame();\r\n                return;\r\n            }\r\n            getmove = (0,_optimalMove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(players[0].Sign, players[1].Sign);\r\n            const row = e.target.dataset.row;\r\n            const col = e.target.dataset.col;\r\n\r\n            const check = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.checker)(board);\r\n\r\n            if (check.isAllowed(row, col)) {\r\n                board[row][col] = players[0].Sign;\r\n                audioManage.MoveSound();\r\n                e.target.textContent = players[0].Sign;\r\n                const computerMove = getmove.giveBest(board);\r\n\r\n                if (check.stopTheGame(computerMove, getmove)) {\r\n                    audioManage.stopAll();\r\n                    audioManage.EndGame();\r\n                    return;\r\n                }\r\n\r\n                board[computerMove.row][computerMove.col] = players[1].Sign;\r\n                document.querySelector(\r\n                    `.cube[data-row=\"${computerMove.row}\"][data-col=\"${computerMove.col}\"]`\r\n                ).textContent = players[1].Sign;\r\n\r\n                if (check.stopTheGame(computerMove, getmove)) {\r\n                    audioManage.stopAll();\r\n                    audioManage.EndGame();\r\n                    return;\r\n                }\r\n            }\r\n        });\r\n    });\r\n\r\n    newgame.addEventListener('click',()=>{\r\n        location.reload();\r\n    })\r\n\r\n}\r\n\r\ngameController();\r\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/gamecontroller.js?");

/***/ }),

/***/ "./src/optimalMove.js":
/*!****************************!*\
  !*** ./src/optimalMove.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ optimalMove)\n/* harmony export */ });\nfunction optimalMove(activeSign, computerSign) {\r\n    function isFull(board) {\r\n        for (let i = 0; i < 3; i++) {\r\n            for (let j = 0; j < 3; j++) {\r\n                if (board[i][j] === '') return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n\r\n    function evaluate(board) {\r\n        for (let i = 0; i < 3; i++) {\r\n            if (\r\n                board[i][0] === board[i][1] &&\r\n                board[i][1] === board[i][2] &&\r\n                board[i][0] !== ''\r\n            )\r\n                return board[i][0] === computerSign ? 10 : -10;\r\n            if (\r\n                board[0][i] === board[1][i] &&\r\n                board[1][i] === board[2][i] &&\r\n                board[0][i] !== ''\r\n            )\r\n                return board[0][i] === computerSign ? 10 : -10;\r\n        }\r\n\r\n        if (\r\n            board[0][0] === board[1][1] &&\r\n            board[1][1] === board[2][2] &&\r\n            board[1][1] !== ''\r\n        )\r\n            return board[1][1] === computerSign ? 10 : -10;\r\n        if (\r\n            board[2][0] === board[1][1] &&\r\n            board[1][1] === board[0][2] &&\r\n            board[1][1] !== ''\r\n        )\r\n            return board[1][1] === computerSign ? 10 : -10;\r\n\r\n        return 0;\r\n    }\r\n\r\n    function minmax(board, isMax, depth) {\r\n        const score = evaluate(board);\r\n\r\n        if (Math.abs(score) === 10) return score;\r\n\r\n        if (isFull(board)) return 0;\r\n\r\n        if (isMax) {\r\n            let bestscore = -Infinity;\r\n            for (let i = 0; i < 3; i++) {\r\n                for (let j = 0; j < 3; j++) {\r\n                    if (board[i][j] === '') {\r\n                        board[i][j] = computerSign;\r\n                        bestscore = Math.max(\r\n                            bestscore,\r\n                            minmax(board, !isMax, depth + 1) - depth\r\n                        );\r\n                        board[i][j] = '';\r\n                    }\r\n                }\r\n            }\r\n            return bestscore;\r\n        } else {\r\n            let bestscore = Infinity;\r\n            for (let i = 0; i < 3; i++) {\r\n                for (let j = 0; j < 3; j++) {\r\n                    if (board[i][j] === '') {\r\n                        board[i][j] = activeSign;\r\n                        bestscore = Math.min(\r\n                            bestscore,\r\n                            minmax(board, !isMax, depth + 1) + depth\r\n                        );\r\n                        board[i][j] = '';\r\n                    }\r\n                }\r\n            }\r\n            return bestscore;\r\n        }\r\n    }\r\n\r\n    function giveBest(board) {\r\n        let bestmove = { row: -1, col: -1 };\r\n        let bestscore = -Infinity;\r\n        for (let i = 0; i < 3; i++) {\r\n            for (let j = 0; j < 3; j++) {\r\n                if (board[i][j] === '') {\r\n                    board[i][j] = computerSign;\r\n                    let val = minmax(board, false, 0);\r\n                    if (val > bestscore) {\r\n                        bestscore = val;\r\n                        bestmove.row = i;\r\n                        bestmove.col = j;\r\n                    }\r\n                    board[i][j] = '';\r\n                }\r\n            }\r\n        }\r\n        return bestmove;\r\n    }\r\n\r\n    function isEmpty(board) {\r\n        for (let i = 0; i < 3; i++) {\r\n            for (let j = 0; j < 3; j++) {\r\n                if (board[i][j] !== '') {\r\n                    return false;\r\n                }\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n\r\n    return { giveBest, isFull, evaluate, isEmpty };\r\n}\r\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/optimalMove.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checker: () => (/* binding */ checker),\n/* harmony export */   gameboard: () => (/* binding */ gameboard),\n/* harmony export */   opening: () => (/* binding */ opening),\n/* harmony export */   toggler: () => (/* binding */ toggler)\n/* harmony export */ });\n/* harmony import */ var _optimalMove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optimalMove.js */ \"./src/optimalMove.js\");\n\r\n\r\n// export function audio() {\r\n//     const audioManager = {\r\n//         backgroundMusic: new Audio('./mario_forever.mp3'),\r\n//         moveSound: new Audio('./mario_coin.mp3'),\r\n//         endGameSound: new Audio('./mario_bros_die.mp3'),\r\n//     };\r\n//     function Initialize() {\r\n//         audioManager.backgroundMusic.loop = true;\r\n//         audioManager.backgroundMusic.play().catch(error => console.log('Background music error:', error));\r\n//     }\r\n\r\n//     function MoveSound() {\r\n//         audioManager.moveSound.play().catch(error => console.log('Move sound error:', error));\r\n//     }\r\n\r\n//     function EndGame() {\r\n//         audioManager.endGameSound.play().catch(error => console.log('End game sound error:', error));\r\n//     }\r\n\r\n//     function stopAll() {\r\n//         Object.values(audioManager).forEach(audio => {\r\n//             if (audio instanceof Audio) {\r\n//                 audio.pause();\r\n//                 audio.currentTime = 0;\r\n//             }\r\n//         });\r\n//     }\r\n//     return { Initialize, MoveSound, EndGame, stopAll };\r\n// }\r\n\r\nfunction opening() {\r\n    const name = 'Player 1';\r\n    const getname = () => name;\r\n\r\n    function assignment(cubes) {\r\n        let k = 0;\r\n        for (let row = 0; row < 3; row++) {\r\n            for (let col = 0; col < 3; col++) {\r\n                cubes[k].dataset.row = row;\r\n                cubes[k++].dataset.col = col;\r\n            }\r\n        }\r\n    }\r\n\r\n    return { getname, assignment };\r\n}\r\n\r\nfunction gameboard() {\r\n    const board = [];\r\n    for (let i = 0; i < 3; i++) {\r\n        board.push(new Array(3).fill(''));\r\n    }\r\n\r\n    const getBoard = () => board;\r\n\r\n    return { getBoard };\r\n}\r\n\r\n// function optimalMove(activeSign, computerSign) {\r\n//     function isFull(board) {\r\n//         for (let i = 0; i < 3; i++) {\r\n//             for (let j = 0; j < 3; j++) {\r\n//                 if (board[i][j] === '') return false;\r\n//             }\r\n//         }\r\n//         return true;\r\n//     }\r\n\r\n//     function evaluate(board) {\r\n//         for (let i = 0; i < 3; i++) {\r\n//             if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') return board[i][0] === computerSign ? 10 : -10;\r\n//             if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') return board[0][i] === computerSign ? 10 : -10;\r\n//         }\r\n\r\n//         if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] !== '') return board[1][1] === computerSign ? 10 : -10;\r\n//         if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[1][1] !== '') return board[1][1] === computerSign ? 10 : -10;\r\n\r\n//         return 0;\r\n//     }\r\n\r\n//     function minmax(board, isMax, depth) {\r\n//         const score = evaluate(board);\r\n\r\n//         if (Math.abs(score) === 10) return score;\r\n\r\n//         if (isFull(board)) return 0;\r\n\r\n//         if (isMax) {\r\n//             let bestscore = -Infinity;\r\n//             for (let i = 0; i < 3; i++) {\r\n//                 for (let j = 0; j < 3; j++) {\r\n//                     if (board[i][j] === '') {\r\n//                         board[i][j] = computerSign;\r\n//                         bestscore = Math.max(bestscore, minmax(board, !isMax, depth + 1) - depth);\r\n//                         board[i][j] = '';\r\n//                     }\r\n//                 }\r\n//             }\r\n//             return bestscore;\r\n//         } else {\r\n//             let bestscore = Infinity;\r\n//             for (let i = 0; i < 3; i++) {\r\n//                 for (let j = 0; j < 3; j++) {\r\n//                     if (board[i][j] === '') {\r\n//                         board[i][j] = activeSign;\r\n//                         bestscore = Math.min(bestscore, minmax(board, !isMax, depth + 1) + depth);\r\n//                         board[i][j] = '';\r\n//                     }\r\n//                 }\r\n//             }\r\n//             return bestscore;\r\n//         }\r\n//     }\r\n\r\n//     function giveBest(board) {\r\n//         let bestmove = { row: -1, col: -1 };\r\n//         let bestscore = -Infinity;\r\n//         for (let i = 0; i < 3; i++) {\r\n//             for (let j = 0; j < 3; j++) {\r\n//                 if (board[i][j] === '') {\r\n//                     board[i][j] = computerSign;\r\n//                     let val = minmax(board, false, 0);\r\n//                     if (val > bestscore) {\r\n//                         bestscore = val;\r\n//                         bestmove.row = i;\r\n//                         bestmove.col = j;\r\n//                     }\r\n//                     board[i][j] = '';\r\n//                 }\r\n//             }\r\n//         }\r\n//         return bestmove;\r\n//     }\r\n\r\n//     function isEmpty(board) {\r\n//         for (let i = 0; i < 3; i++) {\r\n//             for (let j = 0; j < 3; j++) {\r\n//                 if (board[i][j] !== '') {\r\n//                     return false;\r\n//                 }\r\n//             }\r\n//         }\r\n//         return true;\r\n//     }\r\n\r\n//     return { giveBest, isFull, evaluate, isEmpty };\r\n// }\r\n\r\nfunction toggler(players, board) {\r\n    function swap() {\r\n        let sign = players[0].Sign;\r\n        players[0].Sign = players[1].Sign;\r\n        players[1].Sign = sign;\r\n        console.log(players);\r\n    }\r\n\r\n    function firstChance() {\r\n        if (players[1].Sign == 'X') {\r\n            const move = (0,_optimalMove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('O', 'X');\r\n            console.log('insid');\r\n            const computerMove = move.giveBest(board);\r\n            board[computerMove.row][computerMove.col] = 'X';\r\n            document.querySelector(\r\n                `.cube[data-row=\"${computerMove.row}\"][data-col=\"${computerMove.col}\"]`\r\n            ).textContent = 'X';\r\n        }\r\n    }\r\n\r\n    function toggle(e) {\r\n        if (!e.target.classList.contains('selected')) {\r\n            document.querySelector('.selected').classList.remove('selected');\r\n            e.target.classList.add('selected');\r\n            swap();\r\n            console.log(players[1].Sign);\r\n            firstChance();\r\n        }\r\n    }\r\n\r\n    return { toggle };\r\n}\r\n\r\nfunction checker(board) {\r\n    function isAllowed(row, col) {\r\n        if (board[row][col] === '') return true;\r\n        alert(\"Can't use a filled square\");\r\n        return false;\r\n    }\r\n\r\n    function stopTheGame(computerMove, getmove) {\r\n        return (\r\n            computerMove.row === -1 ||\r\n            computerMove.col === -1 ||\r\n            getmove.evaluate(board) !== 0\r\n        );\r\n    }\r\n\r\n    return { isAllowed, stopTheGame };\r\n}\r\n\r\n// function gameController() {\r\n\r\n//     const cross = document.querySelector('.cross');\r\n//     const zero = document.querySelector('.zero');\r\n//     const cubes = document.querySelectorAll('.cube');\r\n//     const heading = document.querySelector('h1');\r\n//     const audioManage = audio();\r\n//     document.addEventListener('click', () => {\r\n//         audioManage.Initialize();\r\n//     }, { once: true });\r\n\r\n//     cross.classList.add('selected');\r\n\r\n//     const open = opening();\r\n//     let playerName = open.getname() !== null ? open.getname() : \"Player 1\";\r\n//     open.assignment(cubes);\r\n\r\n//     heading.textContent += ` ${playerName}`;\r\n\r\n//     const players = [\r\n//         { player: playerName, Sign: 'X' },\r\n//         { player: \"Computer\", Sign: 'O' }\r\n//     ];\r\n\r\n//     const change = toggler(players);\r\n//     const board = gameboard().getBoard();\r\n//     let getmove = optimalMove(players[0].Sign, players[1].Sign);\r\n\r\n//     cross.addEventListener('click', (e) => {\r\n//         if (getmove.isEmpty(board)) {\r\n//             change.toggle(e);\r\n//         } else {\r\n//             alert('Can\\'t change mid game');\r\n//         }\r\n//     });\r\n\r\n//     zero.addEventListener('click', (e) => {\r\n//         if (getmove.isEmpty(board)) {\r\n//             change.toggle(e);\r\n//         } else {\r\n//             alert('Can\\'t change mid game');\r\n//         }\r\n//     });\r\n\r\n//     cubes.forEach(cube => {\r\n//         cube.addEventListener('click', (e) => {\r\n//             if (getmove.evaluate(board) !== 0) {\r\n//                 audioManage.stopAll();\r\n//                 audioManage.EndGame();\r\n//                 return;\r\n//             }\r\n//             getmove = optimalMove(players[0].Sign, players[1].Sign);\r\n//             const row = e.target.dataset.row;\r\n//             const col = e.target.dataset.col;\r\n\r\n//             const check = checker(board);\r\n\r\n//             if (check.isAllowed(row, col)) {\r\n//                 board[row][col] = players[0].Sign;\r\n//                 audioManage.MoveSound();\r\n//                 e.target.textContent = players[0].Sign;\r\n//                 const computerMove = getmove.giveBest(board);\r\n//                 console.log(`Computer move: row ${computerMove.row}, col ${computerMove.col}`);\r\n\r\n//                 if (check.stopTheGame(computerMove, getmove)) {\r\n//                     audioManage.stopAll();\r\n//                     audioManage.EndGame();\r\n//                     return;\r\n//                 }\r\n\r\n//                 board[computerMove.row][computerMove.col] = players[1].Sign;\r\n//                 document.querySelector(`.cube[data-row=\"${computerMove.row}\"][data-col=\"${computerMove.col}\"]`).textContent = players[1].Sign;\r\n\r\n//                 if (check.stopTheGame(computerMove, getmove)) {\r\n//                     audioManage.stopAll();\r\n//                     audioManage.EndGame();\r\n//                     return;\r\n//                 }\r\n\r\n//             }\r\n//         });\r\n//     });\r\n// }\r\n\r\n// gameController();\r\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/script.js?");

/***/ }),

/***/ "./src/sound.js":
/*!**********************!*\
  !*** ./src/sound.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ audio)\n/* harmony export */ });\n/* harmony import */ var _mario_forever_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mario_forever.mp3 */ \"./src/mario_forever.mp3\");\n/* harmony import */ var _mario_coin_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mario_coin.mp3 */ \"./src/mario_coin.mp3\");\n/* harmony import */ var _mario_bros_die_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mario_bros_die.mp3 */ \"./src/mario_bros_die.mp3\");\n\r\n\r\n\r\n\r\nfunction audio() {\r\n    const audioManager = {\r\n        backgroundMusic: new Audio(_mario_forever_mp3__WEBPACK_IMPORTED_MODULE_0__),\r\n        moveSound: new Audio(_mario_coin_mp3__WEBPACK_IMPORTED_MODULE_1__),\r\n        endGameSound: new Audio(_mario_bros_die_mp3__WEBPACK_IMPORTED_MODULE_2__),\r\n    };\r\n    function Initialize() {\r\n        audioManager.backgroundMusic.loop = true;\r\n        audioManager.backgroundMusic\r\n            .play()\r\n            .catch((error) => console.error('Background music error:', error));\r\n    }\r\n\r\n    function MoveSound() {\r\n        audioManager.moveSound\r\n            .play()\r\n            .catch((error) => console.error('Move sound error:', error));\r\n    }\r\n\r\n    function EndGame() {\r\n        audioManager.endGameSound\r\n            .play()\r\n            .catch((error) => console.error('End game sound error:', error));\r\n    }\r\n\r\n    function stopAll() {\r\n        Object.values(audioManager).forEach((audio) => {\r\n            if (audio instanceof Audio) {\r\n                audio.pause();\r\n                audio.currentTime = 0;\r\n            }\r\n        });\r\n    }\r\n    return { Initialize, MoveSound, EndGame, stopAll };\r\n}\r\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/sound.js?");

/***/ }),

/***/ "./src/mario_bros_die.mp3":
/*!********************************!*\
  !*** ./src/mario_bros_die.mp3 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0974530524b7f2069f01.mp3\";\n\n//# sourceURL=webpack://tic-tac-toe/./src/mario_bros_die.mp3?");

/***/ }),

/***/ "./src/mario_coin.mp3":
/*!****************************!*\
  !*** ./src/mario_coin.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac9682af64e6826776eb.mp3\";\n\n//# sourceURL=webpack://tic-tac-toe/./src/mario_coin.mp3?");

/***/ }),

/***/ "./src/mario_forever.mp3":
/*!*******************************!*\
  !*** ./src/mario_forever.mp3 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e97821a5f257133748c0.mp3\";\n\n//# sourceURL=webpack://tic-tac-toe/./src/mario_forever.mp3?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gamecontroller.js");
/******/ 	
/******/ })()
;