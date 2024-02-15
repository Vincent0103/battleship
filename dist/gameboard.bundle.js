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

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities.js */ \"./src/utilities.js\");\n\n\nconst Gameboard = () => {\n  const partnerShips = []; const opponentShips = [];\n  const partnerGrid = []; const opponentGrid = [];\n  const missedShotsCoordinates = [];\n\n  const buildGrids = () => {\n    for (let i = 0; i < 10; i += 1) {\n      [partnerGrid, opponentGrid].forEach((item) => item.push([]));\n      for (let j = 0; j < 10; j += 1) {\n        [partnerGrid, opponentGrid].forEach((item) => item[i].push({ shipId: null }));\n      }\n    }\n\n    return { partnerGrid, opponentGrid };\n  };\n\n  const getShipFromCell = (cell, ofPlayerId) => {\n    const ships = (ofPlayerId === 1) ? opponentShips : partnerShips;\n    const targetId = cell.shipId;\n    const [shipRetrieved] = ships.filter((ship) => ship.getId() === targetId);\n    if (!shipRetrieved) throw new Error('Couldn\\'t find the ship');\n    return shipRetrieved;\n  };\n\n  const occupyCells = ({ getLength, getId }, [y, x], ofPlayerId, orientation) => {\n    const currentGrid = (ofPlayerId === 0) ? partnerGrid : opponentGrid;\n    let currentCell;\n    if (orientation === 'rightward') {\n      for (let i = 0; i < getLength(); i += 1) {\n        currentCell = currentGrid[y][x + i];\n        currentCell.shipId = getId();\n        currentCell.isHit = false;\n      }\n    } else {\n      for (let j = 0; j < getLength(); j += 1) {\n        currentCell = currentGrid[y + j][x];\n        currentCell.shipId = getId();\n        currentCell.isHit = false;\n      }\n    }\n    return currentGrid;\n  };\n\n  const hasShipId = (grid, y, x) => (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.isNotOutOfBoundOfGrid)(y, x)\n   && Number.isInteger(grid[y][x].shipId);\n\n  const isCellAvailable = ([y, x], ofPlayerId) => {\n    if (x > 9 || x < 0 || y > 9 || y < 0) return false;\n    const currentGrid = (ofPlayerId === 0) ? partnerGrid : opponentGrid;\n    const offsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]];\n    return !(offsets.some(([dy, dx]) => hasShipId(currentGrid, y + dy, x + dx)));\n  };\n\n  const areCellsAvailable = (shipLength, [y, x], ofPlayerId, orientation) => {\n    for (let i = 0; i < shipLength; i += 1) {\n      if (!isCellAvailable((orientation === 'rightward') ? [y, x + i] : [y + i, x], ofPlayerId)) return false;\n    }\n    return true;\n  };\n\n  const placeShip = (ship, coordinates, ofPlayerId = 0, orientation = 'rightward') => {\n    if (areCellsAvailable(ship.getLength(), coordinates, ofPlayerId, orientation)) {\n      if (ofPlayerId === 0) partnerShips.push(ship);\n      else opponentShips.push(ship);\n      return occupyCells(ship, coordinates, ofPlayerId, orientation);\n    }\n    return false;\n  };\n\n  const areAllShipsSunk = (ofPlayerId) => {\n    const playersShips = (ofPlayerId === 0) ? partnerShips : opponentShips;\n    return playersShips.every((ship) => ship.isSunk());\n  };\n\n  const receiveAttack = (coordinates, toPlayerId) => {\n    if (areAllShipsSunk(0) || areAllShipsSunk(1)) return 'game ended';\n    const [y, x] = coordinates;\n    const currentId = toPlayerId;\n    const [currentGrid, getShipFromPlayerId] = (currentId === 0)\n      ? [opponentGrid, 1] : [partnerGrid, 0];\n    if (currentGrid[y] === undefined || currentGrid[y][x] === undefined) return false;\n    const currentCell = currentGrid[y][x];\n\n    if (Number.isInteger(currentCell.shipId) && !currentCell.isHit) {\n      const ship = getShipFromCell(currentCell, getShipFromPlayerId);\n      ship.hit();\n      currentCell.isHit = true;\n      return ship;\n    }\n    if (currentCell.isHit) return false;\n\n    const missedShotCoordinates = { coordinates, ofPlayerId: currentId };\n    missedShotsCoordinates.push(missedShotCoordinates);\n    return missedShotCoordinates;\n  };\n\n  return {\n    buildGrids,\n    placeShip,\n    areCellsAvailable,\n    receiveAttack,\n    areAllShipsSunk,\n    getMissedShotsCoordinates: () => missedShotsCoordinates,\n    getGrids: () => [partnerGrid, opponentGrid],\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://my_package/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildGrid: () => (/* binding */ buildGrid),\n/* harmony export */   containsSubArray: () => (/* binding */ containsSubArray),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   fillGridCoordinatesArray: () => (/* binding */ fillGridCoordinatesArray),\n/* harmony export */   isNotOutOfBoundOfGrid: () => (/* binding */ isNotOutOfBoundOfGrid)\n/* harmony export */ });\nlet ID;\nconst GRID_XY_LIMIT = 10;\nconst incrementalId = (defaultId) => {\n  if (Number.isInteger(defaultId)) ID = defaultId;\n  else if (ID === undefined) ID = 0;\n  else ID += 1;\n  return ID;\n};\n\nconst containsSubArray = (rootArray, targetArray) => {\n  if (!rootArray || rootArray.length === 0) return false;\n  const rootArrayString = rootArray.map((array) => array.toString());\n  const targetArrayString = targetArray.toString();\n  return rootArrayString.includes(targetArrayString);\n};\n\nconst buildGrid = (gridContainer) => {\n  for (let i = 0; i < 10; i += 1) {\n    const line = document.createElement('div');\n    line.classList.add('line');\n    line.setAttribute('data-line', i);\n    for (let j = 0; j < 10; j += 1) {\n      const square = document.createElement('div');\n      square.classList.add('square');\n      if (i === 0) square.classList.add('top');\n      if (i === 9) square.classList.add('bottom');\n      if (j === 0) square.classList.add('left');\n      if (j === 9) square.classList.add('right');\n      square.setAttribute('data-square', j);\n      line.appendChild(square);\n    }\n    gridContainer.appendChild(line);\n  }\n  return gridContainer;\n};\n\nconst isNotOutOfBoundOfGrid = (y, x) => (y <= 9 && y >= 0 && x <= 9 && x >= 0);\n\nconst fillGridCoordinatesArray = (array = []) => {\n  for (let i = 0; i < GRID_XY_LIMIT; i += 1) {\n    for (let j = 0; j < GRID_XY_LIMIT; j += 1) array.push([i, j]);\n  }\n  return array;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (incrementalId);\n\n\n\n//# sourceURL=webpack://my_package/./src/utilities.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/factories/gameboard.js");
/******/ 	
/******/ })()
;