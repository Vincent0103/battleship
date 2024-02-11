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

/***/ "./src/gameDOM.js":
/*!************************!*\
  !*** ./src/gameDOM.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_circle_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/circle.svg */ \"./src/components/circle.svg\");\n/* harmony import */ var _components_missed_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/missed.svg */ \"./src/components/missed.svg\");\n/* harmony import */ var _components_bomb_explosion_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bomb-explosion.svg */ \"./src/components/bomb-explosion.svg\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities.js */ \"./src/utilities.js\");\n\n\n\n\n\nconst GameDOM = (Player) => {\n  const player = Player;\n  let partnerGridContainer;\n  let opponentGridContainer;\n  let turnIndicator;\n\n  const handleSVGIntoCell = (targetCell, fromPlayerId, event = false) => {\n    const cell = targetCell;\n    const circleImg = document.createElement('img');\n    circleImg.src = _components_circle_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    circleImg.alt = 'target cell icon';\n    circleImg.classList.add('circle-icon');\n\n    const missedImg = document.createElement('img');\n    missedImg.src = _components_missed_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    missedImg.alt = 'missed cell icon';\n    missedImg.classList.add('missed-icon');\n    const isMissedImgAlready = cell.querySelector('img.missed-icon');\n\n    const explosionImg = document.createElement('img');\n    explosionImg.src = _components_bomb_explosion_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    explosionImg.alt = 'explosed cell icon';\n    explosionImg.classList.add('explosion-icon');\n    const isExplosedImgAlready = cell.querySelector('img.explosion-icon');\n\n    const y = Number.parseInt(cell.parentNode.getAttribute('data-line'), 10);\n    const x = Number.parseInt(cell.getAttribute('data-square'), 10);\n\n    if (fromPlayerId === 0) {\n      if (event === 'mouseenter') {\n        if (!isMissedImgAlready && !isExplosedImgAlready\n          && turnIndicator.textContent === 'YOUR TURN') cell.appendChild(circleImg);\n      } else if (event === 'mouseleave') {\n        const img = cell.querySelector('img.circle-icon');\n        if (img) cell.removeChild(img);\n      } else if (event === 'click') {\n        if (cell.getAttribute('data-has-ship') && !isExplosedImgAlready) {\n          cell.appendChild(explosionImg);\n          return { coordinates: [y, x] };\n        } if (!isMissedImgAlready && !isExplosedImgAlready) {\n          cell.appendChild(missedImg);\n          return { coordinates: [y, x] };\n        }\n        return false;\n      }\n    } else {\n      if (cell.getAttribute('data-has-ship') && !isExplosedImgAlready) {\n        cell.appendChild(explosionImg);\n        return { coordinates: [y, x] };\n      } if (!isMissedImgAlready && !isExplosedImgAlready) {\n        cell.appendChild(missedImg);\n        return { coordinates: [y, x] };\n      }\n    }\n    return false;\n  };\n\n  const changeTurnIndicator = (isGameEnded = false) => {\n    if (isGameEnded) {\n      if (partnerGridContainer.classList.contains('not-turn')) {\n        turnIndicator.textContent = 'PLAYER 1 WINS';\n      } else turnIndicator.textContent = 'PLAYER 2 WINS';\n      partnerGridContainer.classList.add('not-turn');\n      opponentGridContainer.classList.add('not-turn');\n      return 'game ended';\n    }\n    if (turnIndicator.classList.contains('player1')) {\n      turnIndicator.classList.remove('player1');\n      turnIndicator.classList.add('player2');\n      turnIndicator.textContent = 'OPPONENT TURN';\n      partnerGridContainer.classList.add('not-turn');\n      opponentGridContainer.classList.remove('not-turn');\n    } else {\n      turnIndicator.classList.remove('player2');\n      turnIndicator.classList.add('player1');\n      turnIndicator.textContent = 'YOUR TURN';\n      opponentGridContainer.classList.add('not-turn');\n      partnerGridContainer.classList.remove('not-turn');\n    }\n    return true;\n  };\n\n  const addTurnIndicator = () => {\n    turnIndicator = document.createElement('div');\n    turnIndicator.classList.add('turn-indicator');\n    turnIndicator.classList.add('player1');\n    turnIndicator.textContent = 'YOUR TURN';\n    return turnIndicator;\n  };\n\n  const listenOpponentGridCells = () => {\n    const grid = document.querySelector('.grid-container.partner');\n    let clickable = true;\n    const [player1, player2] = player.getPlayers();\n    for (let i = 0; i < 10; i += 1) {\n      const line = opponentGridContainer.children[i];\n      for (let j = 0; j < 10; j += 1) {\n        const square = line.children[j];\n        square.addEventListener('mouseenter', (e) => {\n          console.log('entering');\n          handleSVGIntoCell(e.target, player1.id, 'mouseenter');\n        });\n        square.addEventListener('mouseleave', (e) => {\n          handleSVGIntoCell(e.target, player1.id, 'mouseleave');\n        });\n        // eslint-disable-next-line no-loop-func\n        square.addEventListener('click', (async (e) => {\n          if (clickable) {\n            const playerMarkInGrid = handleSVGIntoCell(e.target, player1.id, 'click');\n            if (playerMarkInGrid) {\n              clickable = false;\n              let y; let x;\n              changeTurnIndicator();\n              const attackedCoordinates = await player.attack(playerMarkInGrid.coordinates);\n              if (!attackedCoordinates) {\n                changeTurnIndicator();\n                clickable = true;\n              } else if (Array.isArray(attackedCoordinates)) {\n                [y, x] = attackedCoordinates;\n                const partnerCell = grid.children[y].children[x];\n                handleSVGIntoCell(partnerCell, player2.id);\n                changeTurnIndicator();\n                clickable = true;\n              }\n              if (attackedCoordinates === 'game ended') {\n                changeTurnIndicator(true);\n                clickable = false;\n              }\n            }\n          }\n        }));\n      }\n    }\n  };\n\n  const addBodyBgi = () => {\n    const bodyBgi = document.createElement('div');\n    bodyBgi.classList.add('body-bgi');\n    document.body.appendChild(bodyBgi);\n  };\n\n  const populateDOMGrid = (gameboard, ofPlayerId) => {\n    gameboard.forEach((line, y) => line.forEach((square, x) => {\n      if (Number.isInteger(square.shipId)) {\n        if (ofPlayerId === 0) {\n          const cell = partnerGridContainer.children[y].children[x];\n          cell.classList.add('ship');\n          cell.setAttribute('data-has-ship', 'true');\n        } else opponentGridContainer.children[y].children[x].setAttribute('data-has-ship', 'true');\n      }\n    }));\n  };\n\n  const buildPlayerGrids = () => {\n    partnerGridContainer = document.createElement('div');\n    partnerGridContainer.classList.add('grid-container');\n    partnerGridContainer.classList.add('partner');\n    opponentGridContainer = document.createElement('div');\n    opponentGridContainer.classList.add('grid-container');\n    opponentGridContainer.classList.add('opponent');\n    opponentGridContainer.classList.add('not-turn');\n\n    [partnerGridContainer, opponentGridContainer]\n      .forEach((gridContainer) => (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.buildGrid)(gridContainer));\n\n    return [partnerGridContainer, opponentGridContainer];\n  };\n\n  addBodyBgi();\n  return {\n    addTurnIndicator, buildPlayerGrids, populateDOMGrid, listenOpponentGridCells,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameDOM);\n\n\n//# sourceURL=webpack://my_package/./src/gameDOM.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildGrid: () => (/* binding */ buildGrid),\n/* harmony export */   containsSubArray: () => (/* binding */ containsSubArray),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet ID;\nconst incrementalId = (defaultId) => {\n  if (Number.isInteger(defaultId)) ID = defaultId;\n  else if (ID === undefined) ID = 0;\n  else ID += 1;\n  return ID;\n};\n\nconst containsSubArray = (rootArray, targetArray) => {\n  const rootArrayString = rootArray.map((array) => array.toString());\n  const targetArrayString = targetArray.toString();\n  return rootArrayString.includes(targetArrayString);\n};\n\nconst buildGrid = (gridContainer) => {\n  for (let i = 0; i < 10; i += 1) {\n    const line = document.createElement('div');\n    line.classList.add('line');\n    line.setAttribute('data-line', i);\n    for (let j = 0; j < 10; j += 1) {\n      const square = document.createElement('div');\n      square.classList.add('square');\n      if (i === 0) square.classList.add('top');\n      if (i === 9) square.classList.add('bottom');\n      if (j === 0) square.classList.add('left');\n      if (j === 9) square.classList.add('right');\n      square.setAttribute('data-square', j);\n      line.appendChild(square);\n    }\n    gridContainer.appendChild(line);\n  }\n  return gridContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (incrementalId);\n\n\n\n//# sourceURL=webpack://my_package/./src/utilities.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameDOM.js");
/******/ 	
/******/ })()
;