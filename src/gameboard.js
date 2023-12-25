const Gameboard = () => {
  const grid = [];

  const buildGrid = () => {
    for (let i = 0; i < 10; i += 1) {
      grid.push([]);
      for (let j = 0; j < 10; j += 1) {
        grid[i].push(false);
      }
    }
    return grid;
  };

  // const occupyCells = (length, [y, x], orientation) => {
  //   if (orientation === 'rightward') {
  //     for (let i = 0; i < length; i += 1) {
  //       grid[y][x + i] = true;
  //     }
  //   } else {
  //     for (let j = 0; j < length; j += 1) {
  //       grid[y + j][x] = true;
  //     }
  //   }
  // };

  const isCellAvailable = ([y, x], isPlaceable) => {
    let canBePlaced = isPlaceable;
    if (grid[y] === undefined || grid[y][x] === undefined) return false;
    if (grid[y][x]) canBePlaced = false;
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

  const placeShip = (length, coordinates, orientation = 'rightward') => {
    if (areCellsAvailable(length, coordinates, orientation)) {

    }
  };

  return { buildGrid, placeShip };
};

export default Gameboard;
