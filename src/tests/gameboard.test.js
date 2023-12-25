import Gameboard from '../gameboard';
import Ship from '../ship';

describe('Gameboard', () => {
  let gameboard1; let gameboard2; let ship1; let ship2; let
    ship3; let length1; let length2; let length3;
  beforeEach(() => {
    gameboard1 = Gameboard();
    gameboard2 = Gameboard();
    gameboard2.buildGrid();
    ship1 = Ship(4);
    ship2 = Ship(6, 3);
    ship3 = Ship(2);
    [length1, length2, length3] = [ship1.getLength(), ship2.getLength(), ship3.getLength()];
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

  test('ship can be placed rightward taking care of borders', () => {
    expect(gameboard2.placeShip(length1, [0, 2])).toBeTruthy();
    expect(gameboard2.placeShip(length1, [5, 7])).toBeFalsy();
    expect(gameboard2.placeShip(length2, [3, 2])).toBeTruthy();
    expect(gameboard2.placeShip(length3, [11, 2])).toBeFalsy();
  });

  test('ship can be placed downward taking care of borders', () => {
    expect(gameboard2.placeShip(length2, [11, 2], 'downward')).toBeFalsy();
    expect(gameboard2.placeShip(length1, [9, 8], 'downward')).toBeFalsy();
    expect(gameboard2.placeShip(length2, [3, 1], 'downward')).toBeTruthy();
    expect(gameboard2.placeShip(length3, [8, 9], 'downward')).toBeTruthy();
  });
});
