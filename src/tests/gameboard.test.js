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
    ship2 = Ship(6);
    ship3 = Ship(2);
    ship4 = Ship(5);
    ship5 = Ship(1);
    ship6 = Ship(3);
    ship7 = Ship(2);
  });

  test('grids built correctly', () => {
    const grids = gameboard1.buildGrids();
    grids.grid.forEach((line) => line.forEach((item) => {
      expect(item.shipId).toBeNull();
    }));
    grids.opponentGrid.forEach((line) => line.forEach((item) => {
      expect(item.shipId).toBeNull();
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

  describe('receive attacks and missed shots coordinates', () => {
    beforeEach(() => {
      gameboard2.placeShip(ship1, [0, 2], 1, 'downward');
      gameboard2.placeShip(ship2, [3, 7], 1, 'downward');
      gameboard2.placeShip(ship3, [1, 5], 1);
      gameboard2.placeShip(ship4, [4, 1]); // 5
      gameboard2.placeShip(ship5, [5, 7], 0, 'downward'); // 1
      gameboard2.placeShip(ship6, [9, 0], 1);
      gameboard2.placeShip(ship7, [3, 4]); // 2
    });

    test('act correctly when given valid coordinates', () => {
      const ship4ReceivedAttack = gameboard2.receiveAttack([4, 3], 1);
      const ship2ReceivedAttack = gameboard2.receiveAttack([6, 7], 0);

      expect(gameboard2.receiveAttack([1, 2], 0).getId()).toEqual(ship1.getId());
      expect(ship4ReceivedAttack.getId()).toEqual(ship4.getId());
      expect(ship4ReceivedAttack.getHits()).toEqual(1);
      expect(ship2ReceivedAttack.getId()).toEqual(ship2.getId());
      expect(ship2ReceivedAttack.getHits()).toEqual(1);
      expect(typeof gameboard2.receiveAttack([0, 1], 0)).toEqual('object');
      expect(typeof gameboard2.receiveAttack([5, 8], 1)).toEqual('object');
      expect(gameboard2.receiveAttack([1, 6], 0).getId()).toEqual(ship3.getId());
    });

    test('reject out of bound coordinates', () => {
      expect(gameboard2.receiveAttack([12, 3], 1)).toBeFalsy();
      expect(gameboard2.receiveAttack([5, 29], 1)).toBeFalsy();
    });

    test('can\'t hit twice the same cell when receiving attacks', () => {
      expect(gameboard2.receiveAttack([4, 3], 1).getHits()).toEqual(1);
      expect(gameboard2.receiveAttack([4, 3], 1)).toBeFalsy();
      expect(gameboard2.receiveAttack([4, 2], 1).getHits()).toEqual(2);
      expect(gameboard2.receiveAttack([4, 1], 1).getHits()).toEqual(3);
      expect(gameboard2.receiveAttack([4, 1], 1)).toBeFalsy();
      expect(gameboard2.receiveAttack([4, 4], 1).getHits()).toEqual(4);
      expect(gameboard2.receiveAttack([4, 5], 1).getHits()).toEqual(5);
      expect(typeof gameboard2.receiveAttack([4, 6], 1)).toEqual('object');
    });

    test('can\'t receive attacks if a player\'s ships are all sunk', () => {
      gameboard3.receiveAttack([4, 1], 1);
      gameboard3.receiveAttack([3, 2], 0);
      gameboard3.receiveAttack([4, 2], 1);
      gameboard3.receiveAttack([5, 5], 0);
      gameboard3.receiveAttack([4, 3], 1);
      gameboard3.receiveAttack([4, 4], 1);
      gameboard3.receiveAttack([4, 5], 1);
      gameboard3.receiveAttack([5, 7], 1);
      gameboard3.receiveAttack([3, 4], 1);
      gameboard3.receiveAttack([3, 5], 1);
      expect(gameboard3.receiveAttack([4, 5], 0)).toBeFalsy();
      expect(gameboard3.receiveAttack([6, 8], 0)).toBeFalsy();
      expect(gameboard3.receiveAttack([5, 8], 1)).toBeFalsy();
    });

    test('get correct missed shots coordinates', () => {
      gameboard2.receiveAttack([0, 1], 0);
      gameboard2.receiveAttack([5, 8], 1);
      gameboard2.receiveAttack([9, 7], 0);
      const missedShotsCoordinates = gameboard2.getMissedShotsCoordinates();
      expect(missedShotsCoordinates[0].coordinates).toEqual([0, 1]);
      expect(missedShotsCoordinates[1].coordinates).toEqual([5, 8]);
      expect(missedShotsCoordinates[2].coordinates).toEqual([9, 7]);
      expect(missedShotsCoordinates[2].ofPlayerId).toEqual(0);
    });
  });

  describe('check if all ships are sunk', () => {
    beforeEach(() => {
      gameboard3.placeShip(ship1, [0, 2], 1, 'downward');
      gameboard3.placeShip(ship3, [3, 7], 0, 'downward');
      gameboard3.placeShip(ship5, [1, 5], 1);
      gameboard3.placeShip(ship6, [2, 1]);
    });

    test('all ships are not sunk when no one attacked', () => {
      expect(gameboard3.areAllShipsSunk(0)).toBeFalsy();
      expect(gameboard3.areAllShipsSunk(1)).toBeFalsy();
    });

    test('ships aren\'t sunk when there are some boats hit', () => {
      gameboard3.receiveAttack([0, 2], 0);
      gameboard3.receiveAttack([3, 7], 1);
      gameboard3.receiveAttack([1, 2], 0);
      gameboard3.receiveAttack([4, 7], 1);
      gameboard3.receiveAttack([2, 2], 0);
      gameboard3.receiveAttack([2, 1], 1);
      gameboard3.receiveAttack([6, 8], 0);

      expect(gameboard3.areAllShipsSunk(0)).toBeFalsy();
      expect(gameboard3.areAllShipsSunk(1)).toBeFalsy();
    });

    test('partner ships are all sunk', () => {
      gameboard3.receiveAttack([0, 2], 0);
      gameboard3.receiveAttack([3, 7], 1);
      gameboard3.receiveAttack([1, 2], 0);
      gameboard3.receiveAttack([4, 7], 1);
      gameboard3.receiveAttack([2, 2], 0);
      gameboard3.receiveAttack([2, 1], 1);
      gameboard3.receiveAttack([2, 2], 1);
      gameboard3.receiveAttack([2, 3], 1);

      expect(gameboard3.areAllShipsSunk(0)).toBeTruthy();
      expect(gameboard3.areAllShipsSunk(1)).toBeFalsy();
    });
  });
});
