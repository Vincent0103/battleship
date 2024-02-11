import Ship from '../ship';

describe('Ship', () => {
  let ship1; let ship2; let ship3; let ship4;
  beforeEach(() => {
    ship1 = Ship(4, 0, 0);
    ship2 = Ship(6, 3);
    ship3 = Ship(5);
    ship4 = Ship(18);
  });

  test('get number of time hits', () => {
    ship1.hit();
    ship1.hit();
    expect(ship1.getHits()).toBe(2);
    expect(ship2.getHits()).toBe(3);
  });

  test('check if the ship sunk', () => {
    expect(ship2.isSunk()).toBeFalsy();
    ship2.hit();
    ship2.hit();
    ship2.hit();
    ship1.hit();
    ship1.hit();
    expect(ship2.getHits()).toBe(6);
    expect(ship2.isSunk()).toBeTruthy();
    expect(ship1.isSunk()).toBeFalsy();
  });

  test('cannot be hit more than it\'s length', () => {
    for (let i = 0; i < 5; i += 1) {
      ship1.hit();
      ship2.hit();
    }
    expect(ship1.getHits()).toBe(4);
    expect(ship2.getHits()).toBe(6);
  });

  test('different ships cannot have the same ids', () => {
    expect(ship3.getId()).toEqual(ship3.getId());
    expect(ship2.getId()).not.toEqual(ship3.getId());
    expect(ship2.getId()).not.toEqual(ship3.getId());
    expect(ship3.getId()).not.toEqual(ship4.getId());
  });
});
