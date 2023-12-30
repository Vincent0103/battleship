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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = () => {\n  const partnerShips = []; const opponentShips = [];\n  const partnerGrid = []; const opponentGrid = [];\n  const missedShotsCoordinates = [];\n\n  const buildGrids = () => {\n    for (let i = 0; i < 10; i += 1) {\n      [partnerGrid, opponentGrid].forEach((item) => item.push([]));\n      for (let j = 0; j < 10; j += 1) {\n        [partnerGrid, opponentGrid].forEach((item) => item[i].push({ shipId: null }));\n      }\n    }\n\n    return { partnerGrid, opponentGrid };\n  };\n\n  const getShipFromCell = (cell, ofPlayerId) => {\n    const ships = (ofPlayerId === 1) ? opponentShips : partnerShips;\n    const targetId = cell.shipId;\n    const [shipRetrieved] = ships.filter((ship) => ship.getId() === targetId);\n    if (!shipRetrieved) throw new Error('Couldn\\'t find the ship');\n    return shipRetrieved;\n  };\n\n  const occupyCells = ({ getLength, getId }, [y, x], ofPlayerId, orientation) => {\n    const currentGrid = (ofPlayerId === 0) ? partnerGrid : opponentGrid;\n    let currentCell;\n    if (orientation === 'rightward') {\n      for (let i = 0; i < getLength(); i += 1) {\n        currentCell = currentGrid[y][x + i];\n        currentCell.shipId = getId();\n        currentCell.isHit = false;\n      }\n    } else {\n      for (let j = 0; j < getLength(); j += 1) {\n        currentCell = currentGrid[y + j][x];\n        currentCell.shipId = getId();\n        currentCell.isHit = false;\n      }\n    }\n    return currentGrid;\n  };\n\n  const offsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];\n\n  const hasShipId = (grid, y, x) => (y <= 9 && y >= 0 && x <= 9 && x >= 0)\n    && Number.isInteger(grid[y][x].shipId);\n\n  const isCellAvailable = (\n    [y, x],\n    ofPlayerId,\n    orientation,\n    isBackShip = false,\n    isFrontShip = false,\n  ) => {\n    const currentGrid = (ofPlayerId === 0) ? partnerGrid : opponentGrid;\n    let currentOffsets;\n    if (x > 9 || x < 0 || y > 9 || y < 0) return false;\n\n    if (orientation === 'rightward') {\n      currentOffsets = [offsets[0], offsets[1], offsets[2], offsets[5], offsets[6], offsets[7]];\n      return !(currentOffsets.some(([dy, dx]) => hasShipId(currentGrid, y + dy, x + dx))\n      || (isBackShip && hasShipId(currentGrid, y, x - 1))\n      || (isFrontShip && hasShipId(currentGrid, y, x + 1)));\n    }\n    if (orientation === 'downward') {\n      currentOffsets = [offsets[0], offsets[2], offsets[3], offsets[4], offsets[5], offsets[7]];\n      return !(currentOffsets.some(([dy, dx]) => hasShipId(currentGrid, y + dy, x + dx))\n      || (isBackShip && hasShipId(currentGrid, y - 1, x))\n      || (isFrontShip && hasShipId(currentGrid, y + 1, x)));\n    }\n    return true;\n  };\n\n  const areCellsAvailable = (length, [y, x], ofPlayerId, orientation) => {\n    for (let i = 0; i < length; i += 1) {\n      const currentCoordinates = (orientation === 'rightward') ? [y, x + i] : [y + i, x];\n      if (i === 0 && !isCellAvailable(currentCoordinates, ofPlayerId, orientation, true, false)) {\n        return false;\n      }\n      if (i === length - 1\n          && !isCellAvailable(currentCoordinates, ofPlayerId, orientation, false, true)) {\n        return false;\n      }\n      if (!isCellAvailable(currentCoordinates, ofPlayerId, orientation)) return false;\n    }\n    return true;\n  };\n\n  const placeShip = (ship, coordinates, ofPlayerId = 0, orientation = 'rightward') => {\n    if (areCellsAvailable(ship.getLength(), coordinates, ofPlayerId, orientation)) {\n      if (ofPlayerId === 0) partnerShips.push(ship);\n      else opponentShips.push(ship);\n      return occupyCells(ship, coordinates, ofPlayerId, orientation);\n    }\n    return false;\n  };\n\n  const areAllShipsSunk = (ofPlayerId) => {\n    const playersShips = (ofPlayerId === 0) ? partnerShips : opponentShips;\n    return playersShips.every((ship) => ship.isSunk());\n  };\n\n  const receiveAttack = (coordinates, toPlayerId) => {\n    if (areAllShipsSunk(0) || areAllShipsSunk(1)) return 'game ended';\n    const [y, x] = coordinates;\n    const currentId = toPlayerId;\n    const [currentGrid, getShipFromPlayerId] = (currentId === 0)\n      ? [opponentGrid, 1] : [partnerGrid, 0];\n    if (currentGrid[y] === undefined || currentGrid[y][x] === undefined) return false;\n    const currentCell = currentGrid[y][x];\n\n    if (Number.isInteger(currentCell.shipId) && !currentCell.isHit) {\n      const ship = getShipFromCell(currentCell, getShipFromPlayerId);\n      ship.hit();\n      currentCell.isHit = true;\n      return ship;\n    }\n    if (currentCell.isHit) return false;\n\n    const missedShotCoordinates = { coordinates, ofPlayerId: currentId };\n    missedShotsCoordinates.push(missedShotCoordinates);\n    return missedShotCoordinates;\n  };\n\n  return {\n    buildGrids,\n    placeShip,\n    receiveAttack,\n    areAllShipsSunk,\n    getMissedShotsCoordinates: () => missedShotsCoordinates,\n    getGrids: () => [partnerGrid, opponentGrid],\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://my_package/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/factories/gameboard.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.js */ \"./src/utilities.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ \"./src/factories/ship.js\");\n\r\n\r\n\r\n\r\nconst Player = () => {\r\n  let gameboard;\r\n  const player1 = { id: 0, turn: true, attackedCoordinates: [] };\r\n  const player2 = { id: 1, turn: false, attackedCoordinates: [] };\r\n  let gameMode;\r\n\r\n  const getRandomCoordinates = () => [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];\r\n\r\n  const getValidAIRandomCoordinates = () => {\r\n    const currentCoordinates = getRandomCoordinates();\r\n    if ((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.containsSubArray)(player2.attackedCoordinates, currentCoordinates)) {\r\n      return getValidAIRandomCoordinates(player2);\r\n    }\r\n    return currentCoordinates;\r\n  };\r\n\r\n  const initializeDefaultShips = (board) => {\r\n    const shipLengths = [5, 5, 4, 4, 3, 3, 3, 3, 2, 2];\r\n    for (let i = 0; i < 10; i += 1) {\r\n      const currentPlayer = (i % 2 === 0) ? player1 : player2;\r\n      const getRandomOrientation = Math.round(Math.random());\r\n      const orientation = (getRandomOrientation === 0) ? 'rightward' : 'downward';\r\n      let isPlaceable = board.placeShip(\r\n        (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shipLengths[i]),\r\n        getRandomCoordinates(),\r\n        currentPlayer.id,\r\n        orientation,\r\n      );\r\n      while (!isPlaceable) {\r\n        isPlaceable = board.placeShip(\r\n          (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shipLengths[i]),\r\n          getRandomCoordinates(),\r\n          currentPlayer.id,\r\n          orientation,\r\n        );\r\n      }\r\n    }\r\n  };\r\n\r\n  const changeTurn = () => {\r\n    if (!player2.turn) {\r\n      player1.turn = false;\r\n      player2.turn = true;\r\n    } else {\r\n      player1.turn = true;\r\n      player2.turn = false;\r\n    }\r\n  };\r\n\r\n  const getRandomAiThinkingTime = () => Math.random() * 2800 + 200;\r\n\r\n  const attackAI = () => {\r\n    const currentCoordinates = getValidAIRandomCoordinates(player2);\r\n    if (gameboard.receiveAttack(currentCoordinates, player2.id)\r\n    && !(0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.containsSubArray)(player2.attackedCoordinates, currentCoordinates)) {\r\n      player2.attackedCoordinates.push(currentCoordinates);\r\n      changeTurn();\r\n      return new Promise((resolve) => {\r\n        setTimeout(() => resolve(currentCoordinates), getRandomAiThinkingTime());\r\n      });\r\n    } if (gameboard.receiveAttack(currentCoordinates, player2.id) === 'game ended') {\r\n      return 'game ended';\r\n    }\r\n    return attackAI();\r\n  };\r\n\r\n  const attack = (coordinates) => {\r\n    if (!gameboard.areAllShipsSunk(player1.id) || !gameboard.areAllShipsSunk(player2.id)) {\r\n      const currentPlayer = (player1.turn) ? player1 : player2;\r\n      if (gameboard.receiveAttack(coordinates, currentPlayer.id)\r\n      && !(0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.containsSubArray)(currentPlayer.attackedCoordinates, coordinates)) {\r\n        currentPlayer.attackedCoordinates.push(coordinates);\r\n        changeTurn();\r\n        if (gameMode === 'computer') return attackAI();\r\n      }\r\n      return false;\r\n    }\r\n    return 'game ended';\r\n  };\r\n\r\n  const startGame = (mode = 'computer') => {\r\n    gameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    gameboard.buildGrids();\r\n    initializeDefaultShips(gameboard);\r\n    gameMode = mode;\r\n  };\r\n\r\n  return {\r\n    startGame,\r\n    attack,\r\n    getGrids: () => gameboard.getGrids(),\r\n    getPlayers: () => [player1, player2],\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://my_package/./src/factories/player.js?");

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