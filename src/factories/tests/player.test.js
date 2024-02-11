import Player from '../player';

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = Player();
  });

  test('Game works correctly when playing against an ai', () => {
    player.startGame('computer');
    player.attack([0, 4]);
    player.attack([5, 7]);
    player.attack([4, 3]);
    expect(player.getPlayers()[0].attackedCoordinates).toEqual([[0, 4], [5, 7], [4, 3]]);
  });

  test('Players can\'t attack twice onto the same coordinates and players attack by turn even on bad coordinates attack', () => {
    player.startGame('computer');
    expect(player.attack([2, 4])).toBeTruthy();
    expect(player.attack([4, 4])).toBeTruthy();
    expect(player.attack([5, 3])).toBeTruthy();
    expect(player.attack([5, 3])).toBeFalsy();
    expect(player.attack([2, 4])).toBeFalsy();
    player.attack([3, 5]);
    player.attack([6, 2]);
    player.attack([1, 1]);
    player.attack([0, 8]);
    expect(player.getPlayers()[0].attackedCoordinates.length).toBe(7);
    expect(player.getPlayers()[1].attackedCoordinates.length).toBe(7);
  });

  test('Players can\'t attack on invalid coordinates', () => {
    player.startGame('computer');
    expect(player.attack([10, 10])).toBeFalsy();
    expect(player.attack([-1, -1])).toBeFalsy();
    expect(player.attack([5, 7])).toBeTruthy();
    expect(player.attack([0, 10])).toBeFalsy();
    expect(player.attack([10, 0])).toBeFalsy();
    expect(player.attack([1, 2])).toBeTruthy();
    expect(player.attack([0, -1])).toBeFalsy();
    expect(player.getPlayers()[0].attackedCoordinates.length).toBe(2);
    expect(player.getPlayers()[1].attackedCoordinates.length).toBe(2);
  });
});
