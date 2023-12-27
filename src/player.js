import Gameboard from './gameboard';
import Ship from './ship';

const Player = () => {
  let gameboard;
  const player1 = { id: 0, turn: true };
  const player2 = { id: 1, turn: false };
  const attackedCoordinates = [];
  const AIAttackedCoordinates = [];
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

  const getAttackedCoordinates = () => attackedCoordinates;

  const getRandomCoordinates = () => [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];

  const getValidAICoordinates = () => {
    const currentCoordinates = getRandomCoordinates();
    if (AIAttackedCoordinates.includes(currentCoordinates)) {
      return getValidAICoordinates();
    }
    AIAttackedCoordinates.push(currentCoordinates);
    return currentCoordinates;
  };

  const changeTurn = () => {
    if (!player2.turn) {
      player1.turn = false;
      player2.turn = true;
    }
    player1.turn = true;
    player2.turn = false;
  };

  const attackAI = () => {
    const currentCoordinates = getValidAICoordinates();
    if (gameboard.receiveAttack(currentCoordinates, player2.id)) {
      attackedCoordinates.push(currentCoordinates);
      changeTurn();
    } else attackAI();
  };

  const attack = (coordinates) => {
    if (!gameboard.areAllShipsSunk(player1.id) || !gameboard.areAllShipsSunk(player2.id)) {
      const currentPlayerId = (player1.turn) ? player1.id : player2.id;
      if (gameboard.receiveAttack(coordinates, currentPlayerId)) {
        attackedCoordinates.push(coordinates);
        changeTurn();
        if (gameMode === 'computer') attackAI();
      }
    }
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
