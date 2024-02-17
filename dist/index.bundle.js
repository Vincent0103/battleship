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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./components/NexaRustSans-Trial-BlackShadow1.ttf */ \"./src/components/NexaRustSans-Trial-BlackShadow1.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./components/wallpaper.jpg */ \"./src/components/wallpaper.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  --border-bgc: #3f294c;\n  --ship-color: #af69ef;\n  --start-btn-bgc: #e5c3d1;\n  --randomize-btn-bgc: #9974ff;\n}\n\n@font-face {\n  font-family: 'NexaRustSans';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n::selection {\n  background: var(--border-bgc);\n  color: white;\n}\n\nbody {\n  width: 100dvw;\n  height: 100dvh;\n  margin: 0;\n  padding: 0;\n  font-family: 'NexaRustSans', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 3rem;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.landing-page-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow-y: scroll;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  row-gap: 100px;\n  justify-items: center;\n  align-items: center;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.landing-page-container > .battleship-title {\n  margin-bottom: 0;\n  grid-column: 1 / 3;\n}\n\n.landing-page-container > .grid-container.user-placeable {\n  filter: none;\n  height: 70dvh;\n  width: 70dvh;\n  box-shadow: 0 0 30px rgba(0, 0, 0, .3);\n}\n\n.grid-container.user-placeable .over {\n  border: 1.5px solid #2c1b3d;\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, .15);\n}\n\n.grid-container.user-placeable .not-placeable {\n  border: 1.5px solid #ff0033;\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, .15);\n\n}\n\n\n.landing-page-container > .start-btn {\n  display: none;\n  cursor: pointer;\n  grid-column: 1 / 3;\n  height: min-content;\n  padding: 10px 20px;\n  font-size: 2.5rem;\n  background-color: #e5c3d1;\n  border-radius: 15px;\n  border: 3px solid black;\n  margin-bottom: 50px;\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);\n  font-family: 'Inter';\n  font-weight: bold;\n  transition: all .2s;\n}\n\n.landing-page-container > .start-btn:hover {\n  transform: scale(1.1) rotate(1deg);\n}\n\n.start-btn.enabled {\n  display: block;\n}\n\n.landing-page-container > .placeable-ships-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  background-image: linear-gradient(rgba(48, 38, 52, .8), rgba(21, 16, 23, .8));\n  border-radius: 20px;\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, .5);\n  height: 70dvh;\n  width: 50dvh;\n  transition: all .5s;\n}\n\n.landing-page-container > .placeable-ships-container > [id] {\n  display: flex;\n  cursor: move;\n}\n\n.placeable-ships-container > [id].already-in-use  {\n  opacity: .4;\n  cursor: default;\n}\n\n.placeable-ships-container .ship-cell {\n  background-color: var(--ship-color);\n  border: 1.5px solid #2c1b3d;\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, .15);\n  width: 50px;\n  height: 50px;\n}\n\n.placeable-ships-container > .randomize-btn {\n  cursor: pointer;\n  height: min-content;\n  padding: 10px 20px;\n  font-size: 2.5rem;\n  background-color: var(--randomize-btn-bgc);\n  border: 0;\n  border-radius: 10px;\n  box-shadow: inset 2px 2px 0 rgba(255, 255, 255, .15),\n  inset -2px -2px 0 rgba(255, 255, 255, .15);\n  margin-top: 40px;\n  margin-bottom: 50px;\n  font-family: 'Inter';\n  font-weight: bold;\n  transition: all .2s;\n}\n\n.placeable-ships-container > .randomize-btn:hover {\n  box-shadow: inset 2px 2px 0 rgba(255, 255, 255, .3),\n  inset -2px -2px 0 rgba(255, 255, 255, .3);\n}\n\n.body-bgi {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  filter: blur(5px);\n}\n\n.page-container {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 5fr;\n}\n\n.turn-indicator {\n  font-weight: bold;\n  grid-column: 1 / 3;\n  align-self: end;\n}\n\n.grid-container {\n  position: relative;\n  height: 50dvh;\n  width: 50dvh;\n  background-color: white;\n  border: 1rem solid var(--border-bgc);\n  border-radius: 10%;\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, .15);\n  filter: brightness(80%);\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  transition: all 0.5s;\n}\n\n.grid-container.not-turn {\n  filter: none;\n  cursor: crosshair;\n  height: 60dvh;\n  width: 60dvh;\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, .3);\n}\n\n.grid-container.partner {\n  cursor: default;\n}\n\n@media (max-width: 600px) {\n  .body {\n    margin: 10px;\n    height: auto;\n    width: auto;\n  }\n\n  .page-container {\n    flex-direction: column;\n  }\n\n  .grid-container {\n    height: 80dvw;\n    width: 80dvw;\n  }\n\n  .line .square {\n    width: 200px;\n    height: 20px;\n  }\n}\n\n.grid-container .line {\n  display: flex;\n}\n\n.ship {\n  background-color: var(--ship-color);\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, .15);\n}\n\n.line .square {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(188, 188, 188, 0.5);\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.line .square.top {\n  border-top: none;\n}\n\n.line .square.bottom {\n  border-bottom: none;\n}\n\n.line .square.left {\n  border-left: none;\n}\n\n.line .square.right {\n  border-right: none;\n}\n\n.circle-icon {\n  position: absolute;\n  height: 30%;\n  width: 30%;\n}\n\n.missed-icon {\n  position: absolute;\n  height: 30%;\n  width: 30%;\n}\n\n.explosion-icon {\n  position: absolute;\n  height: 70%;\n  width: 70%;\n}\n\n.restart-screen {\n  position: absolute;\n  display: flex;\n  opacity: 0;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .95);\n  transition: all .5s;\n}\n\n.restart-screen > .restart-btn {\n  cursor: pointer;\n  padding: 10px 20px;\n  font-size: 5rem;\n  background-color: rgba(0, 0, 0, 0);\n  color: var(--ship-color);\n  border: 0;\n  margin-bottom: 50px;\n  box-shadow: inset 0 0px 0px rgba(255, 255, 255);\n  font-family: 'Inter';\n  font-weight: bold;\n  transition: all .1s;\n}\n\n.restart-screen > .restart-btn:hover {\n  transform: scale(3) rotate(1deg);\n  color: #070407;\n  text-shadow: -1px 0 var(--ship-color), 0 1px var(--ship-color), 1px 0 var(--ship-color), 0 -1px var(--ship-color);\n}\n\n.restart-screen.enabled {\n  z-index: 2;\n  opacity: 1;\n}\n\n@keyframes fadeDown {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my_package/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my_package/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://my_package/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my_package/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/bomb-explosion.svg":
/*!*******************************************!*\
  !*** ./src/components/bomb-explosion.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bomb-explosion.bb0801340f0e599af9260a380cb48e5a.svg\");\n\n//# sourceURL=webpack://my_package/./src/components/bomb-explosion.svg?");

/***/ }),

/***/ "./src/components/circle.svg":
/*!***********************************!*\
  !*** ./src/components/circle.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"circle.77f7a6b9b1a0b81919ecc80f77bccf55.svg\");\n\n//# sourceURL=webpack://my_package/./src/components/circle.svg?");

/***/ }),

/***/ "./src/components/missed.svg":
/*!***********************************!*\
  !*** ./src/components/missed.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"missed.d7b50a48b77d1753b349d0d872957498.svg\");\n\n//# sourceURL=webpack://my_package/./src/components/missed.svg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my_package/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/NexaRustSans-Trial-BlackShadow1.ttf":
/*!************************************************************!*\
  !*** ./src/components/NexaRustSans-Trial-BlackShadow1.ttf ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68e8224548ebc8b673ce.ttf\";\n\n//# sourceURL=webpack://my_package/./src/components/NexaRustSans-Trial-BlackShadow1.ttf?");

/***/ }),

/***/ "./src/components/wallpaper.jpg":
/*!**************************************!*\
  !*** ./src/components/wallpaper.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"62f36e21e53a735c09e8.jpg\";\n\n//# sourceURL=webpack://my_package/./src/components/wallpaper.jpg?");

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities.js */ \"./src/utilities.js\");\n\n\nconst Gameboard = () => {\n  const partnerShips = []; const opponentShips = [];\n  const partnerGrid = []; const opponentGrid = [];\n  const missedShotsCoordinates = [];\n\n  const emptyGrid = (ofPlayerId) => {\n    const grid = (ofPlayerId === 0) ? partnerGrid : opponentGrid;\n    grid.forEach((line) => {\n      line.forEach((square) => {\n        const cell = square;\n        cell.shipId = null;\n        cell.isHit = false;\n      });\n    });\n\n    return grid;\n  };\n\n  const buildGrids = () => {\n    for (let i = 0; i < 10; i += 1) {\n      [partnerGrid, opponentGrid].forEach((item) => item.push([]));\n      for (let j = 0; j < 10; j += 1) {\n        [partnerGrid, opponentGrid].forEach((item) => item[i].push({ shipId: null, isHit: false }));\n      }\n    }\n\n    return { partnerGrid, opponentGrid };\n  };\n\n  const getShipFromCell = (cell, ofPlayerId) => {\n    const ships = (ofPlayerId === 1) ? opponentShips : partnerShips;\n    const targetId = cell.shipId;\n    const [shipRetrieved] = ships.filter((ship) => ship.getId() === targetId);\n    if (!shipRetrieved) throw new Error('Couldn\\'t find the ship');\n    return shipRetrieved;\n  };\n\n  const occupyCells = ({ getLength, getId }, [y, x], ofPlayerId, orientation) => {\n    const currentGrid = (ofPlayerId === 0) ? partnerGrid : opponentGrid;\n    let currentCell;\n    if (orientation === 'rightward') {\n      for (let i = 0; i < getLength(); i += 1) {\n        currentCell = currentGrid[y][x + i];\n        currentCell.shipId = getId();\n        currentCell.isHit = false;\n      }\n    } else {\n      for (let j = 0; j < getLength(); j += 1) {\n        currentCell = currentGrid[y + j][x];\n        currentCell.shipId = getId();\n        currentCell.isHit = false;\n      }\n    }\n    return currentGrid;\n  };\n\n  const hasShipId = (grid, y, x) => (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.isNotOutOfBoundOfGrid)(y, x)\n   && Number.isInteger(grid[y][x].shipId);\n\n  const isCellAvailable = ([y, x], ofPlayerId) => {\n    if (x > 9 || x < 0 || y > 9 || y < 0) return false;\n    const currentGrid = (ofPlayerId === 0) ? partnerGrid : opponentGrid;\n    const offsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]];\n    return !(offsets.some(([dy, dx]) => hasShipId(currentGrid, y + dy, x + dx)));\n  };\n\n  const areCellsAvailable = (shipLength, [y, x], ofPlayerId, orientation) => {\n    for (let i = 0; i < shipLength; i += 1) {\n      if (!isCellAvailable((orientation === 'rightward') ? [y, x + i] : [y + i, x], ofPlayerId)) return false;\n    }\n    return true;\n  };\n\n  const placeShip = (ship, coordinates, ofPlayerId = 0, orientation = 'rightward') => {\n    if (areCellsAvailable(ship.getLength(), coordinates, ofPlayerId, orientation)) {\n      if (ofPlayerId === 0) partnerShips.push(ship);\n      else opponentShips.push(ship);\n      return occupyCells(ship, coordinates, ofPlayerId, orientation);\n    }\n    return false;\n  };\n\n  const areAllShipsSunk = (ofPlayerId) => {\n    const playersShips = (ofPlayerId === 0) ? partnerShips : opponentShips;\n    return playersShips.every((ship) => ship.isSunk());\n  };\n\n  const receiveAttack = (coordinates, toPlayerId) => {\n    if (areAllShipsSunk(0) || areAllShipsSunk(1)) return 'game ended';\n    const [y, x] = coordinates;\n    const currentId = toPlayerId;\n    const [currentGrid, getShipFromPlayerId] = (currentId === 0)\n      ? [opponentGrid, 1] : [partnerGrid, 0];\n    if (currentGrid[y] === undefined || currentGrid[y][x] === undefined) return false;\n    const currentCell = currentGrid[y][x];\n\n    if (Number.isInteger(currentCell.shipId) && !currentCell.isHit) {\n      const ship = getShipFromCell(currentCell, getShipFromPlayerId);\n      ship.hit();\n      currentCell.isHit = true;\n      return ship;\n    }\n    if (currentCell.isHit) return false;\n\n    const missedShotCoordinates = { coordinates, ofPlayerId: currentId };\n    missedShotsCoordinates.push(missedShotCoordinates);\n    return missedShotCoordinates;\n  };\n\n  return {\n    buildGrids,\n    emptyGrid,\n    placeShip,\n    areCellsAvailable,\n    receiveAttack,\n    areAllShipsSunk,\n    getMissedShotsCoordinates: () => missedShotsCoordinates,\n    getGrids: () => [partnerGrid, opponentGrid],\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://my_package/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/factories/gameboard.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ \"./src/utilities.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ \"./src/factories/ship.js\");\n\n\n\n\nconst Player = () => {\n  let gameboard;\n  let gameMode;\n  const player1 = {\n    id: 0, turn: true, attackedCoordinates: [],\n  };\n  const player2 = {\n    id: 1,\n    turn: false,\n    attackedCoordinates: [],\n  };\n  const GRID_XY_LIMIT = 10;\n\n  const changeTurn = () => {\n    if (!player2.turn) {\n      player1.turn = false;\n      player2.turn = true;\n    } else {\n      player1.turn = true;\n      player2.turn = false;\n    }\n  };\n\n  // eslint-disable-next-line max-len\n  const getRandomCoordinates = () => [Math.floor(Math.random() * GRID_XY_LIMIT), Math.floor(Math.random() * GRID_XY_LIMIT)];\n\n  const AI = (player) => {\n    const aiPlayer = player;\n    const directions = { rightward: [[0, -1], [0, 1]], downward: [[-1, 0], [1, 0]] };\n    const coordinatesToCheck = {\n      sourceArray: null,\n      lastArray: null,\n      values: { rightward: [], downward: [] },\n      oneSideCheck: false,\n    };\n    let hitShipAfterAMissedShot = false;\n    aiPlayer.notAttackedGridCoordinates = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.fillGridCoordinatesArray)();\n\n    const getRandomAiThinkingTime = () => Math.random() * 1900 + 100;\n\n    // eslint-disable-next-line max-len\n    const getValidAIRandomCoordinates = (player) => player.notAttackedGridCoordinates[Math.floor(Math.random() * player.notAttackedGridCoordinates.length)];\n\n    const getNextCoordinates = (coordinates, YDifference, XDifference, iterationCount = 0) => {\n      const currentCoordinates = coordinates;\n      let direction;\n      let [newY, newX] = [currentCoordinates[0], currentCoordinates[1]];\n      let paramY = YDifference;\n      let paramX = XDifference;\n\n      if (iterationCount === 2) return false;\n      if (Math.abs(paramX) === 1) {\n        direction = 'rightward';\n        newX = currentCoordinates[1] + paramX;\n        coordinatesToCheck.values.downward.length = 0;\n      } else if (Math.abs(paramY) === 1) {\n        direction = 'downward';\n        newY = currentCoordinates[0] + paramY;\n        coordinatesToCheck.values.rightward.length = 0;\n      } else {\n        paramY = currentCoordinates[0] - coordinatesToCheck.sourceArray[0];\n        paramX = currentCoordinates[1] - coordinatesToCheck.sourceArray[1];\n        return getNextCoordinates(currentCoordinates, paramY, paramX, iterationCount + 1);\n      }\n\n      return { direction, newY, newX };\n    };\n\n    const handleCurrentCoordinates = (coordinates = []) => {\n      let currentCoordinates = coordinates;\n      if (hitShipAfterAMissedShot) {\n        if (coordinatesToCheck.values.rightward.length > 0) {\n          currentCoordinates = coordinatesToCheck.values.rightward.pop();\n        } else if (coordinatesToCheck.values.downward.length > 0) {\n          currentCoordinates = coordinatesToCheck.values.downward.pop();\n        }\n      } else {\n        currentCoordinates = getValidAIRandomCoordinates(aiPlayer);\n      }\n      while (currentCoordinates.length === 0\n        && (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.containsSubArray)(aiPlayer.notAttackedGridCoordinates, currentCoordinates)) {\n        currentCoordinates = getValidAIRandomCoordinates(aiPlayer);\n      }\n\n      aiPlayer.notAttackedGridCoordinates\n        .splice(aiPlayer.notAttackedGridCoordinates.indexOf(currentCoordinates), 1);\n      return currentCoordinates;\n    };\n\n    const getValidReceiveAttack = (receiveAttack) => {\n      let attack = receiveAttack;\n      while (!attack) attack = gameboard.receiveAttack(getRandomCoordinates(), aiPlayer.id);\n      return attack;\n    };\n\n    const handleShipEncounter = (currentCoordinates, receiveAttack) => {\n      if (!hitShipAfterAMissedShot && receiveAttack.getHits && receiveAttack.getLength) {\n        hitShipAfterAMissedShot = true;\n        coordinatesToCheck.sourceArray = currentCoordinates;\n        coordinatesToCheck.lastArray = currentCoordinates;\n        Object.keys(directions).forEach((direction) => {\n          directions[direction].forEach(([dy, dx]) => {\n            const newY = currentCoordinates[0] + dy;\n            const newX = currentCoordinates[1] + dx;\n            if ((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.containsSubArray)(aiPlayer.notAttackedGridCoordinates, [newY, newX])\n             && (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.isNotOutOfBoundOfGrid)(newY, newX)) {\n              coordinatesToCheck.values[direction].push([newY, newX]);\n            }\n          });\n        });\n      } else if (hitShipAfterAMissedShot && receiveAttack.getHits && receiveAttack.getLength) {\n        const YDifference = currentCoordinates[0] - coordinatesToCheck.lastArray[0];\n        const XDifference = currentCoordinates[1] - coordinatesToCheck.lastArray[1];\n\n        const valuesOfGetNextCoordinates = getNextCoordinates(\n          currentCoordinates,\n          YDifference,\n          XDifference,\n        );\n        const { direction, newY, newX } = valuesOfGetNextCoordinates;\n\n        if (valuesOfGetNextCoordinates) {\n          coordinatesToCheck.lastArray = currentCoordinates;\n          if ((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.containsSubArray)(aiPlayer.notAttackedGridCoordinates, [newY, newX])\n            && (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.isNotOutOfBoundOfGrid)(newY, newX)) {\n            coordinatesToCheck.values[direction].push([newY, newX]);\n          }\n        }\n      } else if (!coordinatesToCheck.oneSideCheck && hitShipAfterAMissedShot\n        && typeof receiveAttack === 'object') {\n        coordinatesToCheck.oneSideCheck = true;\n      } else {\n        hitShipAfterAMissedShot = false;\n        coordinatesToCheck.sourceArray = null;\n        coordinatesToCheck.lastArray = null;\n        coordinatesToCheck.oneSideCheck = false;\n        coordinatesToCheck.values.rightward.length = 0;\n        coordinatesToCheck.values.downward.length = 0;\n      }\n    };\n\n    const attack = () => {\n      const currentCoordinates = getValidAIRandomCoordinates(aiPlayer);\n      // uncomment the line below in order to use the ai (ai very buggy, use it at your own risk)\n      // const currentCoordinates = handleCurrentCoordinates();\n      let receiveAttack = gameboard.receiveAttack(currentCoordinates, aiPlayer.id);\n      receiveAttack = getValidReceiveAttack(receiveAttack);\n      // uncomment the line below in order to use the ai (ai very buggy, use it at your own risk)\n      // handleShipEncounter(currentCoordinates, receiveAttack);\n\n      if (typeof receiveAttack === 'object') {\n        aiPlayer.attackedCoordinates.push(currentCoordinates);\n        changeTurn();\n        return new Promise((resolve) => {\n          // setTimeout(() => resolve(currentCoordinates), getRandomAiThinkingTime());\n          setTimeout(() => resolve(currentCoordinates), 0);\n        });\n      } if (receiveAttack === 'game ended') return receiveAttack;\n      return false;\n    };\n\n    return { attack };\n  };\n\n  const initializeDefaultShips = (board, forPlayerId) => {\n    board.emptyGrid(forPlayerId);\n    const shipLengths = [5, 4, 3, 3, 2];\n    for (let i = 0; i < 5; i += 1) {\n      const currentPlayer = (forPlayerId === 0) ? player1 : player2;\n      const getRandomOrientation = Math.round(Math.random());\n      const orientation = (getRandomOrientation === 0) ? 'rightward' : 'downward';\n      let isPlaceable = board.placeShip(\n        (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shipLengths[i]),\n        getRandomCoordinates(),\n        currentPlayer.id,\n        orientation,\n      );\n      while (!isPlaceable) {\n        isPlaceable = board.placeShip(\n          (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shipLengths[i]),\n          getRandomCoordinates(),\n          currentPlayer.id,\n          orientation,\n        );\n      }\n    }\n    return board;\n  };\n\n  const ai = AI((player1.turn) ? player2 : player1);\n  const attack = (coordinates) => {\n    if (!gameboard.areAllShipsSunk(player1.id) && !gameboard.areAllShipsSunk(player2.id)) {\n      const currentPlayer = (player1.turn) ? player1 : player2;\n      if (gameboard.receiveAttack(coordinates, currentPlayer.id)\n      && !(0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.containsSubArray)(currentPlayer.attackedCoordinates, coordinates)) {\n        currentPlayer.attackedCoordinates.push(coordinates);\n        changeTurn();\n        if (gameMode === 'computer') return ai.attack();\n      }\n      return false;\n    }\n    return 'game ended';\n  };\n\n  const startGame = (mode = 'computer', landingPageGameboard = null) => {\n    if (landingPageGameboard) {\n      gameboard = landingPageGameboard;\n      initializeDefaultShips(gameboard, player2.id);\n    } else {\n      gameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      gameboard.buildGrids();\n      initializeDefaultShips(gameboard, player1.id);\n      initializeDefaultShips(gameboard, player2.id);\n    }\n    gameMode = mode;\n  };\n\n  return {\n    startGame,\n    attack,\n    initializeDefaultShips,\n    getGameboard: () => gameboard,\n    getPlayers: () => [player1, player2],\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://my_package/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities.js */ \"./src/utilities.js\");\n\n\nconst Ship = (length, hitsCount = 0, id = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) => {\n  let hits = hitsCount;\n\n  const hit = () => { if (hits < length) hits += 1; };\n  const isSunk = () => hits === length;\n\n  return {\n    hit, isSunk, getHits: () => hits, getLength: () => length, getId: () => id,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://my_package/./src/factories/ship.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _landingPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingPage.js */ \"./src/landingPage.js\");\n/* harmony import */ var _gameDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameDOM.js */ \"./src/gameDOM.js\");\n/* harmony import */ var _factories_player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factories/player.js */ \"./src/factories/player.js\");\n\n\n// eslint-disable-next-line import/no-cycle\n\n\n\nconst game = () => {\n  const handleGamePage = ([partnerGrid, opponentGrid], page, indicator) => {\n    page.populateDOMGrid(partnerGrid, 0);\n    page.populateDOMGrid(opponentGrid, 1);\n    page.listenOpponentGridCells(indicator);\n  };\n\n  const loadContent = () => {\n    const player = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const page = (0,_gameDOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(player);\n    const landingPageContainer = document.querySelector('.landing-page-container');\n    const startBtn = landingPageContainer.querySelector('.start-btn');\n    const landingPage = (0,_landingPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(landingPageContainer, player);\n    const placeableShipsContainer = landingPageContainer.querySelector('.placeable-ships-container');\n    let isGameStarted = false;\n\n    const observer = new MutationObserver((mutationsList) => {\n      mutationsList.forEach((mutation) => {\n        if (mutation.type === 'attributes' && mutation.attributeName === 'draggable') {\n          if (Array.from(placeableShipsContainer.children).filter((child) => child.id).every((child) => child.getAttribute('draggable') === 'false')\n            && !isGameStarted) {\n            const pageContainer = document.querySelector('.page-container');\n            const indicator = page.Indicator();\n            const turnIndicatorContainer = indicator.addTurnIndicator();\n            const gridContainers = page.buildPlayerGrids();\n            pageContainer.append(turnIndicatorContainer, gridContainers[0], gridContainers[1]);\n\n            const gameboard = landingPage.getGameboard();\n            player.startGame('computer', gameboard);\n            handleGamePage(gameboard.getGrids(), page, indicator);\n\n            startBtn.classList.add('enabled');\n            isGameStarted = true;\n          }\n        }\n      });\n    });\n\n    Array.from(placeableShipsContainer.children).forEach((child) => {\n      observer.observe(child, { attributes: true });\n    });\n  };\n\n  const restartRound = () => {\n    Array.from(document.body.children).forEach((child) => child.remove());\n    document.body.innerHTML = `<div class=\"landing-page-container\">\n    <h1 class=\"battleship-title\">Battleship</h1>\n    <div class=\"grid-container user-placeable\"></div>\n    <div class=\"placeable-ships-container\">\n      <div draggable=\"true\" id=\"carrier\" data-length=\"5\"></div>\n      <div draggable=\"true\" id=\"battleship\" data-length=\"4\"></div>\n      <div draggable=\"true\" id=\"destroyer\" data-length=\"3\"></div>\n      <div draggable=\"true\" id=\"submarine\" data-length=\"3\"></div>\n      <div draggable=\"true\" id=\"patrol-boat\" data-length=\"2\"></div>\n    </div>\n    <button class=\"start-btn\" type=\"button\">START!</button>\n    </div>\n    <div class=\"page-container\"></div>\n    <div class=\"restart-screen\">\n      <button class=\"restart-btn\" type=\"button\">restart?</button>\n    </div>`;\n    loadContent();\n  };\n\n  return { loadContent, restartRound };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n\n//# sourceURL=webpack://my_package/./src/game.js?");

/***/ }),

/***/ "./src/gameDOM.js":
/*!************************!*\
  !*** ./src/gameDOM.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_circle_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/circle.svg */ \"./src/components/circle.svg\");\n/* harmony import */ var _components_missed_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/missed.svg */ \"./src/components/missed.svg\");\n/* harmony import */ var _components_bomb_explosion_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bomb-explosion.svg */ \"./src/components/bomb-explosion.svg\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities.js */ \"./src/utilities.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\n\n// eslint-disable-next-line import/no-cycle\n\n\n\nconst GameDOM = (Player) => {\n  const player = Player;\n  let partnerGridContainer;\n  let opponentGridContainer;\n  let turnIndicator;\n\n  const handleGameEnd = (restartScreen) => {\n    const restartContainer = restartScreen;\n    restartContainer.classList.add('enabled');\n    const restartBtn = restartContainer.querySelector('.restart-btn');\n    restartBtn.addEventListener('click', () => (0,_game_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().restartRound());\n  };\n\n  const handleGridClick = (\n    cell,\n    [explosionImg, missedImg],\n    [isExplosedImgAlready, isMissedImgAlready],\n  ) => {\n    const y = Number.parseInt(cell.parentNode.getAttribute('data-line'), 10);\n    const x = Number.parseInt(cell.getAttribute('data-square'), 10);\n\n    if (cell.getAttribute('data-has-ship') && !isExplosedImgAlready) {\n      cell.appendChild(explosionImg.cloneNode(true));\n      return { coordinates: [y, x] };\n    } if (!isMissedImgAlready && !isExplosedImgAlready) {\n      cell.appendChild(missedImg.cloneNode(true));\n      return { coordinates: [y, x] };\n    }\n    return false;\n  };\n\n  const handleGridEnter = (\n    cell,\n    circleImg,\n    [isMissedImgAlready, isExplosedImgAlready],\n  ) => {\n    if (!isMissedImgAlready && !isExplosedImgAlready\n      && turnIndicator.textContent === 'YOUR TURN') cell.appendChild(circleImg);\n  };\n\n  const handleGridLeave = (cell) => {\n    const img = cell.querySelector('img.circle-icon');\n    if (img) cell.removeChild(img);\n  };\n\n  const handleSVGIntoCell = (targetCell, fromPlayerId, event = false) => {\n    const cell = targetCell;\n    const circleImg = document.createElement('img');\n    circleImg.src = _components_circle_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    circleImg.alt = 'target cell icon';\n    circleImg.classList.add('circle-icon');\n\n    const missedImg = document.createElement('img');\n    missedImg.src = _components_missed_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    missedImg.alt = 'missed cell icon';\n    missedImg.classList.add('missed-icon');\n\n    const explosionImg = document.createElement('img');\n    explosionImg.src = _components_bomb_explosion_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    explosionImg.alt = 'explosed cell icon';\n    explosionImg.classList.add('explosion-icon');\n    const imgs = [explosionImg, missedImg];\n\n    const isMissedImgAlready = cell.querySelector('img.missed-icon');\n    const isExplosedImgAlready = cell.querySelector('img.explosion-icon');\n    const alreadyImgs = [isExplosedImgAlready, isMissedImgAlready];\n\n    if (fromPlayerId === 0) {\n      if (event === 'mouseenter') handleGridEnter(cell, circleImg, alreadyImgs);\n      else if (event === 'mouseleave') handleGridLeave(cell);\n    }\n    if (event === 'click') return handleGridClick(cell, imgs, alreadyImgs);\n    return false;\n  };\n\n  const Indicator = () => {\n    const changeTurnIndicator = (winnerId = false) => {\n      if (Number.isInteger(winnerId)) {\n        if (winnerId === 0) turnIndicator.textContent = 'PLAYER 1 WINS';\n        else turnIndicator.textContent = 'PLAYER 2 WINS';\n        partnerGridContainer.classList.add('not-turn');\n        opponentGridContainer.classList.add('not-turn');\n        setTimeout(() => handleGameEnd(document.querySelector('.restart-screen')), 5000);\n        return 'game ended';\n      }\n      if (turnIndicator.classList.contains('player1')) {\n        turnIndicator.classList.remove('player1');\n        turnIndicator.classList.add('player2');\n        turnIndicator.textContent = 'OPPONENT TURN';\n        partnerGridContainer.classList.add('not-turn');\n        opponentGridContainer.classList.remove('not-turn');\n      } else {\n        turnIndicator.classList.remove('player2');\n        turnIndicator.classList.add('player1');\n        turnIndicator.textContent = 'YOUR TURN';\n        opponentGridContainer.classList.add('not-turn');\n        partnerGridContainer.classList.remove('not-turn');\n      }\n      return true;\n    };\n\n    const addTurnIndicator = () => {\n      turnIndicator = document.createElement('div');\n      turnIndicator.classList.add('turn-indicator');\n      turnIndicator.classList.add('player1');\n      turnIndicator.textContent = 'YOUR TURN';\n      return turnIndicator;\n    };\n\n    return { addTurnIndicator, changeTurnIndicator };\n  };\n\n  const listenOpponentGridCells = (indicator) => {\n    const grid = document.querySelector('.grid-container.partner');\n    const [player1, player2] = player.getPlayers();\n\n    let clickable = true;\n    const getClickable = () => clickable;\n    const setClickable = (value) => {\n      clickable = value;\n    };\n\n    const checkGameEnded = (gameboard, playerId, otherPlayerId) => {\n      if (gameboard.areAllShipsSunk(playerId)) {\n        indicator.changeTurnIndicator(otherPlayerId);\n        return true;\n      }\n      return false;\n    };\n\n    const handleClick = async (e) => {\n      if (getClickable()) {\n        const playerMarkInGrid = handleSVGIntoCell(e.target, player1.id, 'click');\n        if (playerMarkInGrid) {\n          setClickable(false);\n          indicator.changeTurnIndicator();\n          const attackedCoordinates = await player.attack(playerMarkInGrid.coordinates);\n          const gameboard = player.getGameboard();\n          if (checkGameEnded(gameboard, player1.id, player2.id) || checkGameEnded(gameboard, player1.id, player2.id)) {\n            setClickable(false);\n            return 'game ended';\n          }\n          if (!attackedCoordinates || attackedCoordinates.length === 0) indicator.changeTurnIndicator();\n          else {\n            const [y, x] = attackedCoordinates;\n            const partnerCell = grid.children[y].children[x];\n            handleSVGIntoCell(partnerCell, player2.id, 'click');\n            indicator.changeTurnIndicator();\n          }\n          setClickable(true);\n        }\n      }\n      return true;\n    };\n\n    for (let i = 0; i < 10; i += 1) {\n      const line = opponentGridContainer.children[i];\n      for (let j = 0; j < 10; j += 1) {\n        const square = line.children[j];\n        square.addEventListener('mouseenter', (e) => handleSVGIntoCell(e.target, player1.id, 'mouseenter'));\n        square.addEventListener('mouseleave', (e) => handleSVGIntoCell(e.target, player1.id, 'mouseleave'));\n        square.addEventListener('click', handleClick);\n      }\n    }\n  };\n\n  const addBodyBgi = () => {\n    const bodyBgi = document.createElement('div');\n    bodyBgi.classList.add('body-bgi');\n    document.body.appendChild(bodyBgi);\n  };\n\n  const populateDOMGrid = (gameboard, ofPlayerId) => {\n    gameboard.forEach((line, y) => line.forEach((square, x) => {\n      if (Number.isInteger(square.shipId)) {\n        if (ofPlayerId === 0) {\n          const cell = partnerGridContainer.children[y].children[x];\n          cell.classList.add('ship');\n          cell.setAttribute('data-has-ship', 'true');\n        } else opponentGridContainer.children[y].children[x].setAttribute('data-has-ship', 'true');\n      }\n    }));\n  };\n\n  const buildPlayerGrids = () => {\n    partnerGridContainer = document.createElement('div');\n    partnerGridContainer.classList.add('grid-container');\n    partnerGridContainer.classList.add('partner');\n    opponentGridContainer = document.createElement('div');\n    opponentGridContainer.classList.add('grid-container');\n    opponentGridContainer.classList.add('opponent');\n    opponentGridContainer.classList.add('not-turn');\n\n    [partnerGridContainer, opponentGridContainer]\n      .forEach((gridContainer) => (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.buildGrid)(gridContainer));\n\n    return [partnerGridContainer, opponentGridContainer];\n  };\n\n  addBodyBgi();\n  return {\n    Indicator, buildPlayerGrids, populateDOMGrid, listenOpponentGridCells,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameDOM);\n\n\n//# sourceURL=webpack://my_package/./src/gameDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', () => (0,_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().loadContent());\n\n\n//# sourceURL=webpack://my_package/./src/index.js?");

/***/ }),

/***/ "./src/landingPage.js":
/*!****************************!*\
  !*** ./src/landingPage.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./src/utilities.js\");\n/* harmony import */ var _factories_ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/ship.js */ \"./src/factories/ship.js\");\n/* harmony import */ var _factories_gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/gameboard.js */ \"./src/factories/gameboard.js\");\n\n\n\n\nconst LandingPage = (landingPageContainer, Player) => {\n  const player = Player;\n  const [firstPlayer] = player.getPlayers();\n  const landingPageDIV = landingPageContainer;\n  const placeableShipsContainer = landingPageDIV.querySelector('.placeable-ships-container');\n  let gridContainer = landingPageDIV.querySelector('.grid-container.user-placeable');\n  const randomizeBtn = placeableShipsContainer.querySelector('.randomize-btn');\n  const startBtn = landingPageDIV.querySelector('.start-btn');\n  const gameboard = (0,_factories_gameboard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  gameboard.buildGrids();\n  let shipFunction = null;\n  let currentlyDraggedShip = null;\n  let isShipBadDropped = true;\n\n  const toggleSquareClasses = (line, gridContainerX, loopStart, loopEnd, loopStep, extraClass) => {\n    for (let i = loopStart; i !== loopEnd; i += loopStep) {\n      const currentSquareIndex = gridContainerX + i;\n      const currentSquare = line.children[currentSquareIndex];\n      if (currentSquareIndex > 9) break;\n      currentSquare.classList.toggle('over');\n      if (extraClass) currentSquare.classList.toggle(extraClass);\n    }\n  };\n\n  const handleShipPlacement = (line, gridContainerX, ship) => {\n    if (!gameboard.placeShip(ship, [+line.getAttribute('data-line'), gridContainerX], 0, 'rightward')) {\n      toggleSquareClasses(line, gridContainerX, 0, ship.getLength(), 1, 'not-placeable');\n      return false;\n    }\n    for (let i = ship.getLength() - 1; i >= 0; i -= 1) {\n      const currentSquare = line.children[gridContainerX + i];\n      currentSquare.classList.remove('over');\n      currentSquare.classList.add('ship');\n    }\n    return true;\n  };\n\n  const areAllShipsPlacedInGrid = () => {\n    const placeableShips = Array.from(placeableShipsContainer.querySelectorAll('[id]'));\n    return placeableShips.every((item) => item.getAttribute('draggable') === 'false');\n  };\n\n  const handleGridHoverHint = (line, gridContainerX, ship) => {\n    if (!gameboard.areCellsAvailable(ship.getLength(), [+line.getAttribute('data-line'), gridContainerX], 0, 'rightward')) {\n      toggleSquareClasses(line, gridContainerX, 0, ship.getLength(), 1, 'not-placeable');\n    } else {\n      toggleSquareClasses(line, gridContainerX, ship.getLength() - 1, -1, -1);\n    }\n  };\n\n  const addShipCells = (shipContainer, shipLength) => {\n    for (let i = 0; i < shipLength; i += 1) {\n      const shipCell = document.createElement('div');\n      shipCell.classList.add('ship-cell');\n      shipContainer.appendChild(shipCell);\n    }\n  };\n\n  function listenDragStart() {\n    if (this.draggable) {\n      this.classList.add('already-in-use');\n      shipFunction = (0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.children.length);\n      currentlyDraggedShip = this;\n    }\n  }\n\n  function listenDragEnd() {\n    if (isShipBadDropped && this.draggable === true) {\n      this.classList.remove('already-in-use');\n    } else {\n      this.classList.add('already-in-use');\n      this.draggable = false;\n      isShipBadDropped = true;\n    }\n  }\n\n  function listenDragOver(e) {\n    e.preventDefault();\n    return false;\n  }\n\n  function listenDragEnterOrLeave(square, ship) {\n    if (currentlyDraggedShip.draggable === true) {\n      const line = square.parentElement;\n      const gridContainerX = +square.getAttribute('data-square');\n      handleGridHoverHint(line, gridContainerX, ship);\n    }\n  }\n\n  function listenDrop(e, square, shipLength) {\n    e.stopPropagation();\n    if (currentlyDraggedShip.draggable === true) {\n      const line = square.parentElement;\n      const gridContainerX = +square.getAttribute('data-square');\n      if (handleShipPlacement(line, gridContainerX, shipLength)) isShipBadDropped = false;\n    }\n    return false;\n  }\n\n  const emptyUserPlaceableGrid = (board) => {\n    board.forEach((line, y) => line.forEach((square, x) => {\n      const cell = gridContainer.children[y].children[x];\n      if (cell.classList.contains('ship')) {\n        cell.classList.remove('ship');\n      }\n    }));\n  };\n\n  const populateUserPlaceableGrid = (board) => {\n    emptyUserPlaceableGrid(board);\n    board.forEach((line, y) => line.forEach((square, x) => {\n      if (Number.isInteger(square.shipId)) {\n        const cell = gridContainer.children[y].children[x];\n        cell.classList.add('ship');\n      }\n    }));\n  };\n\n  const listenRandomizeBtn = () => {\n    randomizeBtn.addEventListener('click', () => {\n      player.initializeDefaultShips(gameboard, firstPlayer.id);\n      const [partnerGridContainer] = gameboard.getGrids();\n      populateUserPlaceableGrid(partnerGridContainer);\n      const ships = placeableShipsContainer.querySelectorAll('[id]');\n      ships.forEach((ship) => {\n        ship.setAttribute('draggable', 'false');\n        ship.classList.add('already-in-use');\n      });\n    });\n  };\n\n  const listenStartBtn = () => {\n    startBtn.addEventListener('click', () => {\n      if (areAllShipsPlacedInGrid()) {\n        landingPageDIV.style.animation = 'fadeOut forwards .5s';\n        setTimeout(() => landingPageDIV.remove(), 500);\n      }\n    });\n  };\n\n  const handleShips = () => {\n    Array.from(placeableShipsContainer.children).forEach((ship) => {\n      addShipCells(ship, ship.getAttribute('data-length'));\n      ship.addEventListener('dragstart', listenDragStart);\n      ship.addEventListener('dragend', listenDragEnd);\n    });\n  };\n\n  const handleGridContainer = (gridContainerParam) => {\n    Array.from(gridContainerParam.children).forEach((line) => {\n      Array.from(line.children).forEach((square) => {\n        square.addEventListener('dragover', listenDragOver);\n        square.addEventListener('dragenter', () => listenDragEnterOrLeave(square, shipFunction));\n        square.addEventListener('dragleave', () => listenDragEnterOrLeave(square, shipFunction));\n        square.addEventListener('drop', (e) => {\n          const draggedFromDIV = document.querySelector(`.placeable-ships-container > *[data-length=\"${shipFunction.getLength()}\"]`);\n          listenDrop(e, square, shipFunction, draggedFromDIV);\n        });\n      });\n    });\n  };\n\n  const addContent = () => {\n    gridContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.buildGrid)(gridContainer);\n    handleShips();\n    handleGridContainer(gridContainer);\n    listenRandomizeBtn();\n    listenStartBtn();\n  };\n\n  addContent();\n\n  return { getGameboard: () => gameboard };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);\n\n\n//# sourceURL=webpack://my_package/./src/landingPage.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildGrid: () => (/* binding */ buildGrid),\n/* harmony export */   containsSubArray: () => (/* binding */ containsSubArray),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   fillGridCoordinatesArray: () => (/* binding */ fillGridCoordinatesArray),\n/* harmony export */   isNotOutOfBoundOfGrid: () => (/* binding */ isNotOutOfBoundOfGrid)\n/* harmony export */ });\nlet ID;\nconst GRID_XY_LIMIT = 10;\nconst incrementalId = (defaultId) => {\n  if (Number.isInteger(defaultId)) ID = defaultId;\n  else if (ID === undefined) ID = 0;\n  else ID += 1;\n  return ID;\n};\n\nconst containsSubArray = (rootArray, targetArray) => {\n  if (!rootArray || !targetArray || rootArray.length === 0\n    || targetArray.length === 0) return false;\n  return rootArray.some((rootSubArray) => rootSubArray.length === targetArray.length\n    && rootSubArray.every((value, index) => value === targetArray[index]));\n};\n\nconst buildGrid = (gridContainer) => {\n  for (let i = 0; i < 10; i += 1) {\n    const line = document.createElement('div');\n    line.classList.add('line');\n    line.setAttribute('data-line', i);\n    for (let j = 0; j < 10; j += 1) {\n      const square = document.createElement('div');\n      square.classList.add('square');\n      if (i === 0) square.classList.add('top');\n      if (i === 9) square.classList.add('bottom');\n      if (j === 0) square.classList.add('left');\n      if (j === 9) square.classList.add('right');\n      square.setAttribute('data-square', j);\n      line.appendChild(square);\n    }\n    gridContainer.appendChild(line);\n  }\n  return gridContainer;\n};\n\nconst isNotOutOfBoundOfGrid = (y, x) => (y <= 9 && y >= 0 && x <= 9 && x >= 0);\n\nconst fillGridCoordinatesArray = (array = []) => {\n  for (let i = 0; i < GRID_XY_LIMIT; i += 1) {\n    for (let j = 0; j < GRID_XY_LIMIT; j += 1) array.push([i, j]);\n  }\n  return array;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (incrementalId);\n\n\n\n//# sourceURL=webpack://my_package/./src/utilities.js?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;