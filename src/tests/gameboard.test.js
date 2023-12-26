import Gameboard from '../gameboard';
import Ship from '../ship';

describe('Gameboard', () => {
  let gameboard1; let gameboard2; let gameboard3; let gameboard4;
  let ship1; let ship2; let ship3; let ship4; let ship5; let ship6; let ship7;
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
    ship4 = Ship(5);
    ship5 = Ship(1);
    ship6 = Ship(3, 2);
    ship7 = Ship(5);
  });

  test('grids built correctly', () => {
    const grids = gameboard1.buildGrids();
    grids.grid.forEach((line) => line.forEach((item) => {
      expect(item.shipId).toBe(false);
      expect(item.playerId).toEqual(0);
    }));
    grids.opponentGrid.forEach((line) => line.forEach((item) => {
      expect(item.shipId).toBe(false);
      expect(item.playerId).toEqual(1);
    }));
  });

  test('place ship correctly in the grid map', () => {
    currentGridPartToTest = gameboard2.placeShip(ship1, [0, 2])[0].slice(2, 6);
    currentGridPartToTest.forEach((item) => {
      expect(Number.isInteger(item.shipId)).toBeTruthy();
    });

    currentGridPartToTest = gameboard3.placeShip(ship3, [6, 3], 1, 'downward').slice(6, 8);
    currentGridPartToTest.forEach((item) => {
      expect(Number.isInteger(item[3].shipId)).toBeTruthy();
    });

    currentGridPartToTest = gameboard4.placeShip(ship2, [3, 8], 0, 'downward').slice(3, 9);
    currentGridPartToTest.forEach((item) => {
      expect(Number.isInteger(item[8].shipId)).toBeTruthy();
    });
  });

  test('ship can\'t be placed on an incorrect area of the grid', () => {
    currentGridPartToTest = gameboard2.placeShip(ship2, [2, 8], 1, 'rightward');
    expect(currentGridPartToTest).toBe(false);

    currentGridPartToTest = gameboard3.placeShip(ship3, [10, 1], 0, 'downward');
    expect(currentGridPartToTest).toBe(false);
  });

  describe('receive attack', () => {
    gameboard2.placeShip(ship1, [0, 2], 1, 'downward');
    gameboard2.placeShip(ship2, [3, 7], 1, 'downward');
    gameboard2.placeShip(ship3, [1, 5], 1);
    gameboard2.placeShip(ship4, [4, 1]);
    gameboard2.placeShip(ship5, [5, 7], 0, 'downward');
    gameboard2.placeShip(ship6, [9, 0], 1);
    gameboard2.placeShip(ship7, [3, 4]);

    test('act correctly when given valid coordinates', () => {
      const ship4ReceivedAttack = gameboard2.receiveAttack([4, 3], 1);
      const ship2ReceivedAttack = gameboard2.receiveAttack([6, 7], 0);

      expect(gameboard2.receiveAttack([1, 2], 0).getId()).toEqual(ship1.getId());
      expect(ship4ReceivedAttack.getId()).toEqual(ship4.getId());
      expect(ship4ReceivedAttack.getHits()).toEqual(1);
      expect(ship2ReceivedAttack.getId()).toEqual(ship2.getId());
      expect(ship2ReceivedAttack.getHits()).toEqual(4);
      expect(typeof gameboard2.receiveAttack([0, 1], 0)).toEqual('object');
      expect(typeof gameboard2.receiveAttack([5, 8], 1)).toEqual('object');
      expect(gameboard2.receiveAttack([1, 6], 0).getId()).toEqual(ship3.getId());
    });

    test('reject out of bound coordinates', () => {
      expect(gameboard2.receiveAttack([12, 3], 1)).toBeFalsy();
      expect(gameboard2.receiveAttack([5, 29], 1)).toBeFalsy();
    });
  });
});
