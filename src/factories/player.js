import Gameboard from './gameboard.js';
import { containsSubArray, isNotOutOfBoundOfGrid, fillGridCoordinatesArray } from '../utilities.js';
import Ship from './ship.js';

const Player = () => {
  let gameboard;
  let gameMode;
  const player1 = {
    id: 0, turn: true, attackedCoordinates: [],
  };
  const player2 = {
    id: 1,
    turn: false,
    attackedCoordinates: [],
  };
  const GRID_XY_LIMIT = 10;

  const changeTurn = () => {
    if (!player2.turn) {
      player1.turn = false;
      player2.turn = true;
    } else {
      player1.turn = true;
      player2.turn = false;
    }
  };

  // eslint-disable-next-line max-len
  const getRandomCoordinates = () => [Math.floor(Math.random() * GRID_XY_LIMIT), Math.floor(Math.random() * GRID_XY_LIMIT)];

  const AI = (player) => {
    const aiPlayer = player;
    const directions = { rightward: [[0, -1], [0, 1]], downward: [[-1, 0], [1, 0]] };
    const coordinatesToCheck = {
      sourceArray: null,
      lastArray: null,
      values: { rightward: [], downward: [] },
      oneSideCheck: false,
    };
    let hitShipAfterAMissedShot = false;

    const getRandomAiThinkingTime = () => Math.random() * 1900 + 100;

    const getNextCoordinates = (coordinates, YDifference, XDifference, iterationCount = 0) => {
      const currentCoordinates = coordinates;
      let direction;
      let [newY, newX] = [currentCoordinates[0], currentCoordinates[1]];
      let paramY = YDifference;
      let paramX = XDifference;

      if (iterationCount === 2) return false;
      if (Math.abs(paramX) === 1) {
        direction = 'rightward';
        newX = currentCoordinates[1] + paramX;
        coordinatesToCheck.values.downward.length = 0;
      } else if (Math.abs(paramY) === 1) {
        direction = 'downward';
        newY = currentCoordinates[0] + paramY;
        coordinatesToCheck.values.rightward.length = 0;
      } else {
        paramY = currentCoordinates[0] - coordinatesToCheck.sourceArray[0];
        paramX = currentCoordinates[1] - coordinatesToCheck.sourceArray[1];
        return getNextCoordinates(currentCoordinates, paramY, paramX, iterationCount + 1);
      }

      return { direction, newY, newX };
    };

    const handleCurrentCoordinates = () => {
      let currentCoordinates = getRandomCoordinates();
      if (hitShipAfterAMissedShot) {
        let hasCoordinates = false;
        let direction = (Math.round(Math.random()) === 1) ? 'rightward' : 'downward';
        if (coordinatesToCheck.values[direction].length > 0) {
          currentCoordinates = coordinatesToCheck.values[direction].pop();
          hasCoordinates = true;
        } else if (direction === 'rightward') {
          direction = 'downward';
        } else {
          direction = 'rightward';
        }

        if (!hasCoordinates && coordinatesToCheck.values[direction].length > 0) {
          currentCoordinates = coordinatesToCheck.values[direction].pop();
        }
      }

      let receiveAttack = gameboard.receiveAttack(currentCoordinates, aiPlayer.id);
      if (receiveAttack === 'game ended') return 'game ended';
      while (!receiveAttack) {
        currentCoordinates = getRandomCoordinates();
        receiveAttack = gameboard.receiveAttack(currentCoordinates, aiPlayer.id);
      }
      return { currentCoordinates, receiveAttack };
    };

    const handleShipEncounter = (currentCoordinates, receiveAttack) => {
      if (!hitShipAfterAMissedShot && receiveAttack.getHits && receiveAttack.getLength) {
        hitShipAfterAMissedShot = true;
        coordinatesToCheck.sourceArray = currentCoordinates;
        coordinatesToCheck.lastArray = currentCoordinates;
        Object.keys(directions).forEach((direction) => {
          directions[direction].forEach(([dy, dx]) => {
            const newY = currentCoordinates[0] + dy;
            const newX = currentCoordinates[1] + dx;
            if (isNotOutOfBoundOfGrid(newY, newX)
            && !containsSubArray(aiPlayer.attackedCoordinates, [newY, newX])) {
              coordinatesToCheck.values[direction].push([newY, newX]);
            }
          });
        });
      } else if (hitShipAfterAMissedShot && receiveAttack.getHits && receiveAttack.getLength) {
        const YDifference = currentCoordinates[0] - coordinatesToCheck.lastArray[0];
        const XDifference = currentCoordinates[1] - coordinatesToCheck.lastArray[1];

        const valuesOfGetNextCoordinates = getNextCoordinates(
          currentCoordinates,
          YDifference,
          XDifference,
        );
        const { direction, newY, newX } = valuesOfGetNextCoordinates;

        if (valuesOfGetNextCoordinates) {
          coordinatesToCheck.lastArray = currentCoordinates;
          if (isNotOutOfBoundOfGrid(newY, newX)
          && !containsSubArray(aiPlayer.attackedCoordinates, [newY, newX])) {
            coordinatesToCheck.values[direction].push([newY, newX]);
          }
        }
      } else if (!coordinatesToCheck.oneSideCheck && hitShipAfterAMissedShot
        && typeof receiveAttack === 'object') {
        coordinatesToCheck.oneSideCheck = true;
      } else if (coordinatesToCheck.oneSideCheck && hitShipAfterAMissedShot
         && typeof receiveAttack === 'object'
         && coordinatesToCheck.values.rightward.length === 0
         && coordinatesToCheck.values.downward.length === 0) {
        hitShipAfterAMissedShot = false;
        coordinatesToCheck.sourceArray = null;
        coordinatesToCheck.lastArray = null;
        coordinatesToCheck.oneSideCheck = false;
      }
    };

    const attack = () => {
      const result = handleCurrentCoordinates();
      if (result === 'game ended') return result;

      const { currentCoordinates, receiveAttack } = result;
      handleShipEncounter(currentCoordinates, receiveAttack);

      if (typeof receiveAttack === 'object') {
        aiPlayer.attackedCoordinates.push(currentCoordinates);
        changeTurn();
        return new Promise((resolve) => {
          // setTimeout(() => resolve(currentCoordinates), getRandomAiThinkingTime());
          setTimeout(() => resolve(currentCoordinates), 0);
        });
      }
      return false;
    };

    return { attack };
  };

  const initializeDefaultShips = (board, forPlayerId) => {
    board.emptyGrid(forPlayerId);
    const shipLengths = [5, 4, 3, 3, 2];
    for (let i = 0; i < 5; i += 1) {
      const currentPlayer = (forPlayerId === 0) ? player1 : player2;
      const getRandomOrientation = Math.round(Math.random());
      const orientation = (getRandomOrientation === 0) ? 'rightward' : 'downward';
      let isPlaceable = board.placeShip(
        Ship(shipLengths[i]),
        getRandomCoordinates(),
        currentPlayer.id,
        orientation,
      );
      while (!isPlaceable) {
        isPlaceable = board.placeShip(
          Ship(shipLengths[i]),
          getRandomCoordinates(),
          currentPlayer.id,
          orientation,
        );
      }
    }
    return board;
  };

  const ai = AI((player1.turn) ? player2 : player1);
  const attack = (coordinates) => {
    if (!gameboard.areAllShipsSunk(player1.id) && !gameboard.areAllShipsSunk(player2.id)) {
      const currentPlayer = (player1.turn) ? player1 : player2;
      if (gameboard.receiveAttack(coordinates, currentPlayer.id)
      && !containsSubArray(currentPlayer.attackedCoordinates, coordinates)) {
        currentPlayer.attackedCoordinates.push(coordinates);
        changeTurn();
        if (gameMode === 'computer') return ai.attack();
      }
      return false;
    }
    return 'game ended';
  };

  const startGame = (mode = 'computer', landingPageGameboard = null) => {
    if (landingPageGameboard) {
      gameboard = landingPageGameboard;
      initializeDefaultShips(gameboard, player2.id);
    } else {
      gameboard = Gameboard();
      gameboard.buildGrids();
      initializeDefaultShips(gameboard, player1.id);
      initializeDefaultShips(gameboard, player2.id);
    }
    gameMode = mode;
  };

  return {
    startGame,
    attack,
    initializeDefaultShips,
    getGameboard: () => gameboard,
    getPlayers: () => [player1, player2],
  };
};

export default Player;
