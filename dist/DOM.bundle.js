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

/***/ "./src/components/bomb-explosion.svg":
/*!*******************************************!*\
  !*** ./src/components/bomb-explosion.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bomb-explosion.d9d596012aa2487e72a8560451903a63.svg\");\n\n//# sourceURL=webpack://my_package/./src/components/bomb-explosion.svg?");

/***/ }),

/***/ "./src/components/circle.svg":
/*!***********************************!*\
  !*** ./src/components/circle.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"circle.4ca7cf1ceafcaf6bc2b75cb35a6b3569.svg\");\n\n//# sourceURL=webpack://my_package/./src/components/circle.svg?");

/***/ }),

/***/ "./src/components/missed.svg":
/*!***********************************!*\
  !*** ./src/components/missed.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"missed.61efdfd1d684466ab89d9fd25d7b1be5.svg\");\n\n//# sourceURL=webpack://my_package/./src/components/missed.svg?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_circle_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/circle.svg */ \"./src/components/circle.svg\");\n/* harmony import */ var _components_missed_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/missed.svg */ \"./src/components/missed.svg\");\n/* harmony import */ var _components_bomb_explosion_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bomb-explosion.svg */ \"./src/components/bomb-explosion.svg\");\n\r\n\r\n\r\n\r\nconst DOM = (Player) => {\r\n  const player = Player;\r\n  let partnerGridContainer;\r\n  let opponentGridContainer;\r\n\r\n  const handleSVGIntoCell = (targetCell, fromPlayerId, event = false) => {\r\n    const cell = targetCell;\r\n    const circleImg = document.createElement('img');\r\n    circleImg.src = _components_circle_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    circleImg.alt = 'target cell icon';\r\n    circleImg.classList.add('circle-icon');\r\n\r\n    const missedImg = document.createElement('img');\r\n    missedImg.src = _components_missed_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    missedImg.alt = 'missed cell icon';\r\n    missedImg.classList.add('missed-icon');\r\n    const isMissedImgAlready = cell.querySelector('img.missed-icon');\r\n\r\n    const explosionImg = document.createElement('img');\r\n    explosionImg.src = _components_bomb_explosion_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n    explosionImg.alt = 'explosed cell icon';\r\n    explosionImg.classList.add('explosion-icon');\r\n    const isExplosedImgAlready = cell.querySelector('img.explosion-icon');\r\n\r\n    const y = Number.parseInt(cell.parentNode.getAttribute('data-line'), 10);\r\n    const x = Number.parseInt(cell.getAttribute('data-square'), 10);\r\n\r\n    if (fromPlayerId === 0) {\r\n      if (event === 'mouseenter') {\r\n        if (!isMissedImgAlready && !isExplosedImgAlready) cell.appendChild(circleImg);\r\n      } else if (event === 'mouseleave') {\r\n        const img = cell.querySelector('img.circle-icon');\r\n        if (img) cell.removeChild(img);\r\n      } else if (event === 'click') {\r\n        if (cell.getAttribute('data-has-ship') && !isExplosedImgAlready) {\r\n          cell.appendChild(explosionImg);\r\n          return { coordinates: [y, x] };\r\n        } if (!isMissedImgAlready && !isExplosedImgAlready) {\r\n          cell.appendChild(missedImg);\r\n          return { coordinates: [y, x] };\r\n        }\r\n        return false;\r\n      }\r\n    } else {\r\n      if (cell.getAttribute('data-has-ship') && !isExplosedImgAlready) {\r\n        cell.appendChild(explosionImg);\r\n        return { coordinates: [y, x] };\r\n      } if (!isMissedImgAlready && !isExplosedImgAlready) {\r\n        cell.appendChild(missedImg);\r\n        return { coordinates: [y, x] };\r\n      }\r\n    }\r\n    return false;\r\n  };\r\n\r\n  const listenOpponentGridCells = () => {\r\n    const grid = document.querySelector('.grid-container.partner');\r\n    let clickable = true;\r\n    const [player1, player2] = player.getPlayers();\r\n    for (let i = 0; i < 10; i += 1) {\r\n      const line = opponentGridContainer.children[i];\r\n      for (let j = 0; j < 10; j += 1) {\r\n        const square = line.children[j];\r\n        square.addEventListener('mouseenter', (e) => {\r\n          handleSVGIntoCell(e.target, player1.id, 'mouseenter');\r\n        });\r\n        square.addEventListener('mouseleave', (e) => {\r\n          handleSVGIntoCell(e.target, player1.id, 'mouseleave');\r\n        });\r\n        // eslint-disable-next-line no-loop-func\r\n        square.addEventListener('click', (async (e) => {\r\n          if (clickable) {\r\n            const playerMarkInGrid = handleSVGIntoCell(e.target, player1.id, 'click');\r\n            if (playerMarkInGrid) {\r\n              clickable = false;\r\n              let y; let x;\r\n              const attackedCoordinates = await player.attack(playerMarkInGrid.coordinates);\r\n              if (Array.isArray(attackedCoordinates)) {\r\n                [y, x] = attackedCoordinates;\r\n                const partnerCell = grid.children[y].children[x];\r\n                handleSVGIntoCell(partnerCell, player2.id);\r\n                clickable = true;\r\n              }\r\n              if (!attackedCoordinates) clickable = true;\r\n              if (attackedCoordinates === 'game ended') clickable = false;\r\n            }\r\n          }\r\n        }));\r\n      }\r\n    }\r\n  };\r\n\r\n  const populateDOMGrid = (gameboard, ofPlayerId) => {\r\n    gameboard.forEach((line, y) => line.forEach((square, x) => {\r\n      if (Number.isInteger(square.shipId)) {\r\n        if (ofPlayerId === 0) {\r\n          const cell = partnerGridContainer.children[y].children[x];\r\n          cell.classList.add('ship');\r\n          cell.setAttribute('data-has-ship', 'true');\r\n        } else opponentGridContainer.children[y].children[x].setAttribute('data-has-ship', 'true');\r\n      }\r\n    }));\r\n  };\r\n\r\n  const buildDOMGrids = () => {\r\n    partnerGridContainer = document.createElement('div');\r\n    partnerGridContainer.classList.add('grid-container');\r\n    partnerGridContainer.classList.add('partner');\r\n    opponentGridContainer = document.createElement('div');\r\n    opponentGridContainer.classList.add('grid-container');\r\n    opponentGridContainer.classList.add('opponent');\r\n\r\n    [partnerGridContainer, opponentGridContainer].forEach((gridContainer, index) => {\r\n      for (let i = 0; i < 10; i += 1) {\r\n        const line = document.createElement('div');\r\n        line.classList.add('line');\r\n        line.setAttribute('data-line', i);\r\n        for (let j = 0; j < 10; j += 1) {\r\n          const square = document.createElement('div');\r\n          square.classList.add('square');\r\n          if (index === 1) square.classList.add('opponent-square');\r\n          square.setAttribute('data-square', j);\r\n          line.appendChild(square);\r\n        }\r\n        gridContainer.appendChild(line);\r\n      }\r\n    });\r\n\r\n    return [partnerGridContainer, opponentGridContainer];\r\n  };\r\n\r\n  const addContent = () => buildDOMGrids();\r\n\r\n  return { addContent, populateDOMGrid, listenOpponentGridCells };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);\r\n\n\n//# sourceURL=webpack://my_package/./src/DOM.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/DOM.js");
/******/ 	
/******/ })()
;