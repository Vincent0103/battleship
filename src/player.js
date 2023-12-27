import Gameboard from './gameboard';
import { containsSubArray } from './utilities';
import Ship from './ship';

const Player = () => {
  let gameboard;
  const player1 = { id: 0, turn: true, attackedCoordinates: [] };
  const player2 = { id: 1, turn: false, attackedCoordinates: [] };
  let gameMode;

  const initializeDefaultShips = (gameboard) => {
    gameboard.placeShip(Ship(5), [1, 5], player1.id);
    gameboard.placeShip(Ship(5), [7, 4], player2.id);
    gameboard.placeShip(Ship(4), [2, 1], player1.id, 'downward');
    gameboard.placeShip(Ship(4), [5, 2], player2.id, 'downward');
    gameboard.placeShip(Ship(3), [3, 3], player1.id);
    gameboard.placeShip(Ship(3), [1, 8], player2.id, 'downward');
    gameboard.placeShip(Ship(3), [6, 8], player1.id, 'downward');
    gameboard.placeShip(Ship(3), [9, 4], player2.id);
    gameboard.placeShip(Ship(2), [9, 2], player1.id);
    gameboard.placeShip(Ship(2), [0, 0], player2.id, 'downward');
  };

  const getAttackedCoordinates = (ofPlayerId) => {
    if (ofPlayerId === 0) return player1.attackedCoordinates;
    if (ofPlayerId === 1) return player2.attackedCoordinates;
    return [player1.attackedCoordinates, player2.attackedCoordinates];
  };

  const getRandomCoordinates = () => [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];

  const getValidAICoordinates = () => {
    const currentCoordinates = getRandomCoordinates();
    if (containsSubArray(player2.attackedCoordinates, currentCoordinates)) {
      return getValidAICoordinates();
    }
    return currentCoordinates;
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
    const currentCoordinates = getValidAICoordinates();
    if (gameboard.receiveAttack(currentCoordinates, player2.id)
    && !containsSubArray(player2.attackedCoordinates, currentCoordinates)) {
      player2.attackedCoordinates.push(currentCoordinates);
      changeTurn();
      return true;
    }
    attackAI();
    return false;
  };

  const attack = (coordinates) => {
    if (!gameboard.areAllShipsSunk(player1.id) || !gameboard.areAllShipsSunk(player2.id)) {
      const currentPlayer = (player1.turn) ? player1 : player2;
      if (gameboard.receiveAttack(coordinates, currentPlayer.id)
      && !containsSubArray(currentPlayer.attackedCoordinates, coordinates)) {
        currentPlayer.attackedCoordinates.push(coordinates);
        changeTurn();
        if (gameMode === 'computer') attackAI();
        return true;
      }
      return false;
    }
    return false;
  };

  const startGame = (mode = 'computer') => {
    gameboard = Gameboard();
    gameboard.buildGrids();
    initializeDefaultShips(gameboard);
    gameMode = mode;
  };

  return { startGame, attack, getAttackedCoordinates };
};

export default Player;
