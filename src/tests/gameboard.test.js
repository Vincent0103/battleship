import Gameboard from '../gameboard';
import Ship from '../ship';

describe('Gameboard', () => {
  let gameboard1; let gameboard2; let gameboard3; let gameboard4;
  let ship1; let ship2; let ship3;
  let currentGridPartToTest;
  beforeEach(() => {
    gameboard1 = Gameboard();
    gameboard2 = Gameboard();
    gameboard2.buildGrids();
    gameboard3 = Gameboard();
    gameboard3.buildGrids();
    gameboard4 = Gameboard();
    gameboard4.buildGrids();
    ship1 = Ship(4);
    ship2 = Ship(6, 3);
    ship3 = Ship(2);
  });

  test('grids built correctly', () => {
    const grids = gameboard1.buildGrids();
    grids.grid.forEach((line) => line.forEach((item) => {
      expect(item.shipId).toBeFalsy();
      expect(item.playerId).toEqual(0);
    }));
    grids.opponentsGrid.forEach((line) => line.forEach((item) => {
      expect(item.shipId).toBeFalsy();
      expect(item.playerId).toEqual(1);
    }));
  });

  test('place ship correctly in the grid map', () => {
    currentGridPartToTest = gameboard2.placeShip(ship1, [0, 2])[0].slice(2, 6);
    currentGridPartToTest.forEach((item) => {
      expect(item.shipId).toBeTruthy();
    });

    currentGridPartToTest = gameboard3.placeShip(ship3, [6, 3], 'downward').slice(6, 8);
    currentGridPartToTest.forEach((item) => {
      expect(item[3].shipId).toBeTruthy();
    });

    currentGridPartToTest = gameboard4.placeShip(ship2, [3, 8], 'downward').slice(3, 9);
    currentGridPartToTest.forEach((item) => {
      expect(item[8].shipId).toBeTruthy();
    });
  });

  test('ship can\'t be placed on an incorrect area of the grid', () => {
    currentGridPartToTest = gameboard2.placeShip(ship2, [2, 8], 'rightward');
    expect(currentGridPartToTest).toBeFalsy();

    currentGridPartToTest = gameboard3.placeShip(ship3, [10, 1], 'downward');
    expect(currentGridPartToTest).toBeFalsy();
  });
});
