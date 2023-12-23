import Ship from '../ship';

describe('test ship factory function', () => {
  test('isSunk function', () => {
    expect(Ship(2, 5).isSunk()).toBe(false);
  });
});
