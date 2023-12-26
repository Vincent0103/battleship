import Ship from './ship.js';

const Gameboard = () => {
  const partnerShips = []; const opponentShips = [];
  const grid = []; const opponentsGrid = [];
  // const missedShotsCoordinates = [];

  const buildGrids = () => {
    for (let i = 0; i < 10; i += 1) {
      [grid, opponentsGrid].forEach((item) => item.push([]));
      for (let j = 0; j < 10; j += 1) {
        [grid, opponentsGrid].forEach((item, id) => item[i].push(
          { hasShip: false, playerId: id },
        ));
      }
    }

    return { grid, opponentsGrid };
  };

  // const getShipFromCell = (x, y, ofPlayerId) => {
  //   let targetId;
  //   let ship;
  //   if (ofPlayerId === 1) {
  //     targetId = opponentsGrid[x][y].hasShip;
  //     ship = opponentShips.forEach((opponentShip) => {
  //       if (opponentShip.getId() === targetId) return targetId;
  //       throw new Error('Couldn\'t find the ship');
  //     });
  //   } else {
  //     targetId = grid[x][y].hasShip;
  //     ship = partnerShips.forEach((partnerShip) => {
  //       if (partnerShip.getId() === targetId) return targetId;
  //       throw new Error('Couldn\'t find the ship');
  //     });
  //   }
  //   return ship;
  // };

  const occupyCells = ({ getLength, getId }, [y, x], orientation) => {
    if (orientation === 'rightward') {
      for (let i = 0; i < getLength(); i += 1) {
        grid[y][x + i].hasShip = getId();
      }
    } else {
      for (let j = 0; j < getLength(); j += 1) {
        grid[y + j][x].hasShip = getId();
      }
    }
    return grid;
  };

  const isCellAvailable = ([y, x], isPlaceable = true) => {
    let canBePlaced = isPlaceable;
    if (grid[y] === undefined || grid[y][x] === undefined) return false;
    if (grid[y][x].hasShip) canBePlaced = false;
    return canBePlaced;
  };

  const isPlaceableSynchoronously = (length, [y, x], orientation, isPlaceable) => {
    let canBePlaced = isPlaceable;
    if (orientation === 'rightward') {
      for (let i = 0; i < length; i += 1) {
        canBePlaced = isCellAvailable([y, x + i], isPlaceable);
      }
    } else {
      for (let j = 0; j < length; j += 1) {
        canBePlaced = isCellAvailable([y + j, x], isPlaceable);
      }
    }

    return canBePlaced;
  };

  const areCellsAvailable = (length, coordinates, orientation) => {
    let isPlaceable = true;

    // the for loop acts asynchoronously so we had to seperate it into it's own function
    // in order to make it synchoronous
    isPlaceable = isPlaceableSynchoronously(length, coordinates, orientation, isPlaceable);
    return isPlaceable;
  };

  const placeShip = (ship, coordinates, orientation = 'rightward') => {
    if (areCellsAvailable(ship.getLength(), coordinates, orientation)) {
      partnerShips.push(ship);
      return occupyCells(ship, coordinates, orientation);
    }
    return false;
  };

  // const receiveAttack = (coordinates) => {
  //   const [x, y] = coordinates;
  //   if (Number.isInteger(opponentsGrid[x][y].hasShip)) {
  //     const ship = getShipFromCell(x, y, 1);
  //     ship.hit();
  //   } else {

  //   }
  // };

  return { buildGrids, placeShip };
};

export default Gameboard;
