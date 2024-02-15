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
    aiPlayer.notAttackedGridCoordinates = fillGridCoordinatesArray();

    const getRandomAiThinkingTime = () => Math.random() * 1900 + 100;

    // eslint-disable-next-line max-len
    const getValidAIRandomCoordinates = (player) => player.notAttackedGridCoordinates[Math.floor(Math.random() * player.notAttackedGridCoordinates.length)];

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

    const handleCurrentCoordinates = (coordinates = []) => {
      let currentCoordinates = coordinates;
      if (hitShipAfterAMissedShot) {
        if (coordinatesToCheck.values.rightward.length > 0) {
          currentCoordinates = coordinatesToCheck.values.rightward.pop();
        } else if (coordinatesToCheck.values.downward.length > 0) {
          currentCoordinates = coordinatesToCheck.values.downward.pop();
        }
      } else {
        currentCoordinates = getValidAIRandomCoordinates(aiPlayer);
      }
      while (currentCoordinates.length === 0
        && containsSubArray(aiPlayer.notAttackedGridCoordinates, currentCoordinates)) {
        currentCoordinates = getValidAIRandomCoordinates(aiPlayer);
      }

      aiPlayer.notAttackedGridCoordinates
        .splice(aiPlayer.notAttackedGridCoordinates.indexOf(currentCoordinates), 1);
      return currentCoordinates;
    };

    const getValidReceiveAttack = (receiveAttack) => {
      let attack = receiveAttack;
      while (!attack) attack = gameboard.receiveAttack(getRandomCoordinates(), aiPlayer.id);
      return attack;
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
            if (containsSubArray(aiPlayer.notAttackedGridCoordinates, [newY, newX])
             && isNotOutOfBoundOfGrid(newY, newX)) {
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
          if (containsSubArray(aiPlayer.notAttackedGridCoordinates, [newY, newX])
            && isNotOutOfBoundOfGrid(newY, newX)) {
            coordinatesToCheck.values[direction].push([newY, newX]);
          }
        }
      } else if (!coordinatesToCheck.oneSideCheck && hitShipAfterAMissedShot
        && typeof receiveAttack === 'object') {
        coordinatesToCheck.oneSideCheck = true;
      } else {
        hitShipAfterAMissedShot = false;
        coordinatesToCheck.sourceArray = null;
        coordinatesToCheck.lastArray = null;
        coordinatesToCheck.oneSideCheck = false;
        coordinatesToCheck.values.rightward.length = 0;
        coordinatesToCheck.values.downward.length = 0;
      }
    };

    const attack = () => {
      const currentCoordinates = getValidAIRandomCoordinates(aiPlayer);
      // uncomment the line below in order to use the ai (ai very buggy, use it at your own risk)
      // const currentCoordinates = handleCurrentCoordinates();
      let receiveAttack = gameboard.receiveAttack(currentCoordinates, aiPlayer.id);
      receiveAttack = getValidReceiveAttack(receiveAttack);
      // uncomment the line below in order to use the ai (ai very buggy, use it at your own risk)
      // handleShipEncounter(currentCoordinates, receiveAttack);

      if (typeof receiveAttack === 'object') {
        aiPlayer.attackedCoordinates.push(currentCoordinates);
        changeTurn();
        return new Promise((resolve) => {
          setTimeout(() => resolve(currentCoordinates), getRandomAiThinkingTime());
        });
      } if (receiveAttack === 'game ended') return receiveAttack;
      return false;
    };

    return { attack };
  };

  const initializeDefaultShips = (board, forPlayerId) => {
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
