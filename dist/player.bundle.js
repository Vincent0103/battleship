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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/factories/ship.js\");\n\n\nconst Gameboard = () => {\n  const partnerShips = []; const opponentShips = [];\n  const grid = []; const opponentGrid = [];\n  const missedShotsCoordinates = [];\n\n  const buildGrids = () => {\n    for (let i = 0; i < 10; i += 1) {\n      [grid, opponentGrid].forEach((item) => item.push([]));\n      for (let j = 0; j < 10; j += 1) {\n        [grid, opponentGrid].forEach((item) => item[i].push({ shipId: null }));\n      }\n    }\n\n    return { grid, opponentGrid };\n  };\n\n  const getShipFromCell = (cell, ofPlayerId) => {\n    const ships = (ofPlayerId === 1) ? opponentShips : partnerShips;\n    const targetId = cell.shipId;\n    const [shipRetrieved] = ships.filter((ship) => ship.getId() === targetId);\n    if (!shipRetrieved) throw new Error('Couldn\\'t find the ship');\n    return shipRetrieved;\n  };\n\n  const occupyCells = ({ getLength, getId }, [y, x], ofPlayerId, orientation) => {\n    const currentGrid = (ofPlayerId === 0) ? grid : opponentGrid;\n    let currentCell;\n    if (orientation === 'rightward') {\n      for (let i = 0; i < getLength(); i += 1) {\n        currentCell = currentGrid[y][x + i];\n        currentCell.shipId = getId();\n        currentCell.isHit = false;\n      }\n    } else {\n      for (let j = 0; j < getLength(); j += 1) {\n        currentCell = currentGrid[y + j][x];\n        currentCell.shipId = getId();\n        currentCell.isHit = false;\n      }\n    }\n    return currentGrid;\n  };\n\n  const isCellAvailable = ([y, x], ofPlayerId, isPlaceable = true) => {\n    let canBePlaced = isPlaceable;\n    const currentGrid = (ofPlayerId === 0) ? grid : opponentGrid;\n    if (currentGrid[y] === undefined || currentGrid[y][x] === undefined) return false;\n    if (currentGrid[y][x].shipId) canBePlaced = false;\n    return canBePlaced;\n  };\n\n  const isPlaceableSynchoronously = (length, [y, x], ofPlayerId, orientation, isPlaceable) => {\n    let canBePlaced = isPlaceable;\n    if (orientation === 'rightward') {\n      for (let i = 0; i < length; i += 1) {\n        canBePlaced = isCellAvailable([y, x + i], ofPlayerId, isPlaceable);\n      }\n    } else {\n      for (let j = 0; j < length; j += 1) {\n        canBePlaced = isCellAvailable([y + j, x], ofPlayerId, isPlaceable);\n      }\n    }\n\n    return canBePlaced;\n  };\n\n  const areCellsAvailable = (length, coordinates, ofPlayerId, orientation) => {\n    let isPlaceable = true;\n\n    // the for loop acts asynchoronously so we had to seperate it into it's own function\n    // in order to make it synchoronous\n    isPlaceable = isPlaceableSynchoronously(\n      length,\n      coordinates,\n      ofPlayerId,\n      orientation,\n      isPlaceable,\n    );\n    return isPlaceable;\n  };\n\n  const placeShip = (ship, coordinates, ofPlayerId = 0, orientation = 'rightward') => {\n    if (areCellsAvailable(ship.getLength(), coordinates, ofPlayerId, orientation)) {\n      if (ofPlayerId === 0) partnerShips.push(ship);\n      else opponentShips.push(ship);\n      return occupyCells(ship, coordinates, ofPlayerId, orientation);\n    }\n    return false;\n  };\n\n  const areAllShipsSunk = (ofPlayerId) => {\n    const playersShips = (ofPlayerId === 0) ? partnerShips : opponentShips;\n    return playersShips.every((ship) => ship.isSunk());\n  };\n\n  const receiveAttack = (coordinates, toPlayerId) => {\n    if (areAllShipsSunk(0) || areAllShipsSunk(1)) return false;\n    const [y, x] = coordinates;\n    const currentId = toPlayerId;\n    const [currentGrid, getShipFromPlayerId] = (currentId === 0)\n      ? [opponentGrid, 1] : [grid, 0];\n    if (currentGrid[y] === undefined || currentGrid[y][x] === undefined) return false;\n    const currentCell = currentGrid[y][x];\n\n    if (Number.isInteger(currentCell.shipId) && !currentCell.isHit) {\n      const ship = getShipFromCell(currentCell, getShipFromPlayerId);\n      ship.hit();\n      currentCell.isHit = true;\n      return ship;\n    }\n    if (currentCell.isHit) return false;\n\n    const missedShotCoordinates = { coordinates, ofPlayerId: currentId };\n    missedShotsCoordinates.push(missedShotCoordinates);\n    return missedShotCoordinates;\n  };\n\n  const getMissedShotsCoordinates = () => missedShotsCoordinates;\n\n  return {\n    buildGrids, placeShip, receiveAttack, getMissedShotsCoordinates, areAllShipsSunk,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://my_package/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/factories/gameboard.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ \"./src/utilities.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ \"./src/factories/ship.js\");\n\n\n\n\nconst Player = () => {\n  let gameboard;\n  const player1 = { id: 0, turn: true, attackedCoordinates: [] };\n  const player2 = { id: 1, turn: false, attackedCoordinates: [] };\n  let gameMode;\n\n  const initializeDefaultShips = (board) => {\n    board.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5), [1, 5], player1.id);\n    board.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5), [7, 4], player2.id);\n    board.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(4), [2, 1], player1.id, 'downward');\n    board.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(4), [5, 2], player2.id, 'downward');\n    board.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3), [3, 3], player1.id);\n    board.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3), [1, 8], player2.id, 'downward');\n    board.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3), [6, 8], player1.id, 'downward');\n    board.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3), [9, 4], player2.id);\n    board.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2), [9, 2], player1.id);\n    board.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2), [0, 0], player2.id, 'downward');\n  };\n\n  const getAttackedCoordinates = (ofPlayerId) => {\n    if (ofPlayerId === 0) return player1.attackedCoordinates;\n    if (ofPlayerId === 1) return player2.attackedCoordinates;\n    return [player1.attackedCoordinates, player2.attackedCoordinates];\n  };\n\n  const getRandomCoordinates = () => [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];\n\n  const getValidAICoordinates = () => {\n    const currentCoordinates = getRandomCoordinates();\n    if ((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.containsSubArray)(player2.attackedCoordinates, currentCoordinates)) {\n      return getValidAICoordinates();\n    }\n    return currentCoordinates;\n  };\n\n  const changeTurn = () => {\n    if (!player2.turn) {\n      player1.turn = false;\n      player2.turn = true;\n    } else {\n      player1.turn = true;\n      player2.turn = false;\n    }\n  };\n\n  const attackAI = () => {\n    const currentCoordinates = getValidAICoordinates();\n    if (gameboard.receiveAttack(currentCoordinates, player2.id)\n    && !(0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.containsSubArray)(player2.attackedCoordinates, currentCoordinates)) {\n      player2.attackedCoordinates.push(currentCoordinates);\n      changeTurn();\n      return true;\n    }\n    attackAI();\n    return false;\n  };\n\n  const attack = (coordinates) => {\n    if (!gameboard.areAllShipsSunk(player1.id) || !gameboard.areAllShipsSunk(player2.id)) {\n      const currentPlayer = (player1.turn) ? player1 : player2;\n      if (gameboard.receiveAttack(coordinates, currentPlayer.id)\n      && !(0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.containsSubArray)(currentPlayer.attackedCoordinates, coordinates)) {\n        currentPlayer.attackedCoordinates.push(coordinates);\n        changeTurn();\n        if (gameMode === 'computer') attackAI();\n        return true;\n      }\n      return false;\n    }\n    return false;\n  };\n\n  const startGame = (mode = 'computer') => {\n    gameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    gameboard.buildGrids();\n    initializeDefaultShips(gameboard);\n    gameMode = mode;\n  };\n\n  return { startGame, attack, getAttackedCoordinates };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://my_package/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities.js */ \"./src/utilities.js\");\n\n\nconst Ship = (length, hitsCount = 0, id = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) => {\n  let hits = hitsCount;\n\n  const hit = () => { if (hits < length) hits += 1; };\n  const isSunk = () => hits === length;\n\n  return {\n    hit, isSunk, getHits: () => hits, getLength: () => length, getId: () => id,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://my_package/./src/factories/ship.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   containsSubArray: () => (/* binding */ containsSubArray),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet ID;\nconst incrementalId = (defaultId) => {\n  if (Number.isInteger(defaultId)) ID = defaultId;\n  else if (ID === undefined) ID = 0;\n  else ID += 1;\n  return ID;\n};\n\nconst containsSubArray = (rootArray, targetArray) => {\n  const rootArrayString = rootArray.map((array) => array.toString());\n  const targetArrayString = targetArray.toString();\n  return rootArrayString.includes(targetArrayString);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (incrementalId);\n\n\n\n//# sourceURL=webpack://my_package/./src/utilities.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/factories/player.js");
/******/ 	
/******/ })()
;