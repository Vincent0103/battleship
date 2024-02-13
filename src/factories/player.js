import Gameboard from './gameboard.js';
import { containsSubArray, fillCoordinatesArray } from '../utilities.js';
import Ship from './ship.js';

const Player = () => {
  let gameboard;
  const player1 = { id: 0, turn: true, attackedCoordinates: [] };
  const player2 = { id: 1, turn: false, attackedCoordinates: [] };
  let gameMode;
  const GRID_XY_LIMIT = 10;
  const notAttackedGridCoordinates = fillCoordinatesArray([]);

  // eslint-disable-next-line max-len
  const getRandomCoordinates = () => [Math.floor(Math.random() * GRID_XY_LIMIT), Math.floor(Math.random() * GRID_XY_LIMIT)];
  // eslint-disable-next-line max-len
  const getValidAIRandomCoordinates = () => notAttackedGridCoordinates.splice([Math.floor(Math.random() * notAttackedGridCoordinates.length)], 1)[0];

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
  };

  const changeTurn = () => {
    if (!player2.turn) {
      player1.turn = false;
      player2.turn = true;
    } else {
      player1.turn = true;
      player2.turn = false;
    }
  };

  const getRandomAiThinkingTime = () => Math.random() * 1900 + 100;

  const attackAI = () => {
    const currentCoordinates = getValidAIRandomCoordinates(player2);
    if (gameboard.receiveAttack(currentCoordinates, player2.id)) {
      player2.attackedCoordinates.push(currentCoordinates);
      changeTurn();
      return new Promise((resolve) => {
        setTimeout(() => resolve(currentCoordinates), getRandomAiThinkingTime());
      });
    } if (gameboard.receiveAttack(currentCoordinates, player2.id) === 'game ended') {
      return 'game ended';
    }
    return false;
  };

  const attack = (coordinates) => {
    if (!gameboard.areAllShipsSunk(player1.id) && !gameboard.areAllShipsSunk(player2.id)) {
      const currentPlayer = (player1.turn) ? player1 : player2;
      if (gameboard.receiveAttack(coordinates, currentPlayer.id)
      && !containsSubArray(currentPlayer.attackedCoordinates, coordinates)) {
        currentPlayer.attackedCoordinates.push(coordinates);
        changeTurn();
        if (gameMode === 'computer') return attackAI();
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
    getGameboard: () => gameboard,
    getPlayers: () => [player1, player2],
  };
};

export default Player;
