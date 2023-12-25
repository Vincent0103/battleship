import Gameboard from '../gameboard';
import Ship from '../ship';

describe('Gameboard', () => {
  let gameboard1; let gameboard2; let gameboard3; let gameboard4;
  let ship1; let ship2; let ship3;
  beforeEach(() => {
    gameboard1 = Gameboard();
    gameboard2 = Gameboard();
    gameboard2.buildGrid();
    gameboard3 = Gameboard();
    gameboard3.buildGrid();
    gameboard4 = Gameboard();
    gameboard4.buildGrid();
    ship1 = Ship(4);
    ship2 = Ship(6, 3);
    ship3 = Ship(2);
  });

  test('grid array built correctly', () => {
    expect(gameboard1.buildGrid()).toEqual([
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
    ]);
  });

  test.only('place ship correctly in the grid map', () => {
    let currentGridPartToTest = gameboard2.placeShip(ship1.getLength(), [0, 2])[0].slice(2, 6);
    currentGridPartToTest.forEach((item) => {
      expect(item).toBeTruthy();
    });

    currentGridPartToTest = gameboard3.placeShip(ship3.getLength(), [6, 3], 'downward').slice(6, 8);
    currentGridPartToTest.forEach((item) => {
      expect(item[3]).toBeTruthy();
    });

    currentGridPartToTest = gameboard4.placeShip(ship2.getLength(), [3, 8], 'downward').slice(3, 9);
    currentGridPartToTest.forEach((item) => {
      expect(item[8]).toBeTruthy();
    });
  });
});
