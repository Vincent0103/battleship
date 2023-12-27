import Player from '../player';

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = Player();
  });

  test('Game works correctly when playing against an ai', () => {
    player.startGame();
    player.attack([0, 4]);
    player.attack([5, 7]);
    player.attack([4, 3]);
    expect(player.getAttackedCoordinates()[2]).toEqual([5, 7]);
    expect(player.getAttackedCoordinates()[4]).toEqual([4, 3]);
  });
});
