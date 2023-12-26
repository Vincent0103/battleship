import Ship from './ship.js';

const Gameboard = () => {
  const grid = [];
  const opponentsGrid = [];

  const buildGrids = () => {
    for (let i = 0; i < 10; i += 1) {
      [grid, opponentsGrid].forEach((item) => item.push([]));
      for (let j = 0; j < 10; j += 1) {
        [grid, opponentsGrid].forEach((item, id) => item[i].push(
          { shipId: false, playerId: id },
        ));
      }
    }

    return { grid, opponentsGrid };
  };

  const occupyCells = ({ getLength, getId }, [y, x], orientation) => {
    if (orientation === 'rightward') {
      for (let i = 0; i < getLength(); i += 1) {
        grid[y][x + i].shipId = getId();
      }
    } else {
      for (let j = 0; j < getLength(); j += 1) {
        grid[y + j][x].shipId = getId();
      }
    }
    return grid;
  };

  const isCellAvailable = ([y, x], isPlaceable = true) => {
    let canBePlaced = isPlaceable;
    if (grid[y] === undefined || grid[y][x] === undefined) return false;
    if (grid[y][x].shipId) canBePlaced = false;
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
      return occupyCells(ship, coordinates, orientation);
    }
    return false;
  };

  // const receiveAttack = (coordinates) => {
  // }

  return { buildGrids, placeShip };
};

export default Gameboard;
