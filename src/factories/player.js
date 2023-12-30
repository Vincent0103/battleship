import Gameboard from './gameboard.js';
import { containsSubArray } from '../utilities.js';
import Ship from './ship.js';

const Player = () => {
  let gameboard;
  const player1 = { id: 0, turn: true, attackedCoordinates: [] };
  const player2 = { id: 1, turn: false, attackedCoordinates: [] };
  let gameMode;

  const getRandomCoordinates = () => [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];

  const getValidAIRandomCoordinates = () => {
    const currentCoordinates = getRandomCoordinates();
    if (containsSubArray(player2.attackedCoordinates, currentCoordinates)) {
      return getValidAIRandomCoordinates(player2);
    }
    return currentCoordinates;
  };

  const initializeDefaultShips = (board) => {
    const shipLengths = [5, 5, 4, 4, 3, 3, 3, 3, 2, 2];
    for (let i = 0; i < 10; i += 1) {
      const currentPlayer = (i % 2 === 0) ? player1 : player2;
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

  const attackAI = () => {
    const currentCoordinates = getValidAIRandomCoordinates(player2);
    if (gameboard.receiveAttack(currentCoordinates, player2.id)
    && !containsSubArray(player2.attackedCoordinates, currentCoordinates)) {
      player2.attackedCoordinates.push(currentCoordinates);
      changeTurn();
      return new Promise((resolve) => {
        setTimeout(() => resolve(currentCoordinates), 1000);
      });
    } if (gameboard.receiveAttack(currentCoordinates, player2.id) === 'game ended') {
      return 'game ended';
    }
    return attackAI();
  };

  const attack = (coordinates) => {
    if (!gameboard.areAllShipsSunk(player1.id) || !gameboard.areAllShipsSunk(player2.id)) {
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

  const startGame = (mode = 'computer') => {
    gameboard = Gameboard();
    gameboard.buildGrids();
    initializeDefaultShips(gameboard);
    gameMode = mode;
  };

  return {
    startGame,
    attack,
    getGrids: () => gameboard.getGrids(),
    getPlayers: () => [player1, player2],
  };
};

export default Player;
