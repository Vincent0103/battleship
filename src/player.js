import Gameboard from './gameboard';
import Ship from './ship';

const Player = () => {
  const player1 = { id: 0, turn: true };
  const player2 = { id: 1, turn: false };

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

  // const getValidAICoordinates = () => {

  //   [Math.round(Math.random() * 9), Math.round(Math.random() * 9)];
  // }

  const changeTurn = () => {
    if (!player2.turn) {
      player1.turn = false;
      player2.turn = true;
      return player2.id;
    }
    player1.turn = true;
    player2.turn = false;
    return player1.id;
  };

  const startGame = () => {
    const gameboard = Gameboard();
    gameboard.buildGrids();
    initializeDefaultShips(gameboard);
    while (!gameboard.areAllShipsSunk(player1.id) || !gameboard.areAllShipsSunk(player2.id)) {
      let playerTurnId = 0;
      gameboard.receiveAttack([0, 8], playerTurnId);
      playerTurnId = changeTurn();
      gameboard.receiveAttack([4, 3], playerTurnId);
      playerTurnId = changeTurn();
      gameboard.receiveAttack([5, 6], playerTurnId);
      playerTurnId = changeTurn();
      gameboard.receiveAttack([1, 2], playerTurnId);
    }
  };

  return {};
};
