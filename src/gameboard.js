import Ship from './ship.js';

const Gameboard = () => {
  const partnerShips = []; const opponentShips = [];
  const grid = []; const opponentGrid = [];
  const missedShotsCoordinates = [];

  const buildGrids = () => {
    for (let i = 0; i < 10; i += 1) {
      [grid, opponentGrid].forEach((item) => item.push([]));
      for (let j = 0; j < 10; j += 1) {
        [grid, opponentGrid].forEach((item, id) => item[i].push(
          { shipId: false, playerId: id },
        ));
      }
    }

    return { grid, opponentGrid };
  };

  const getShipFromCell = (x, y, ofPlayerId) => {
    const [currentGrid, ships] = (ofPlayerId === 1)
      ? [opponentGrid, opponentShips] : [grid, partnerShips];
    const targetId = currentGrid[x][y].shipId;
    const [shipRetrieved] = ships.filter((opponentShip) => opponentShip.getId() === targetId);
    if (!shipRetrieved) throw new Error('Couldn\'t find the ship');
    return shipRetrieved;
  };

  const occupyCells = ({ getLength, getId }, [y, x], ofPlayerId, orientation) => {
    const currentGrid = (ofPlayerId === 0) ? grid : opponentGrid;
    if (orientation === 'rightward') {
      for (let i = 0; i < getLength(); i += 1) {
        currentGrid[y][x + i].shipId = getId();
      }
    } else {
      for (let j = 0; j < getLength(); j += 1) {
        currentGrid[y + j][x].shipId = getId();
      }
    }
    return currentGrid;
  };

  const isCellAvailable = ([y, x], ofPlayerId, isPlaceable = true) => {
    let canBePlaced = isPlaceable;
    const currentGrid = (ofPlayerId === 0) ? grid : opponentGrid;
    if (currentGrid[y] === undefined || currentGrid[y][x] === undefined) return false;
    if (currentGrid[y][x].shipId) canBePlaced = false;
    return canBePlaced;
  };

  const isPlaceableSynchoronously = (length, [y, x], ofPlayerId, orientation, isPlaceable) => {
    let canBePlaced = isPlaceable;
    if (orientation === 'rightward') {
      for (let i = 0; i < length; i += 1) {
        canBePlaced = isCellAvailable([y, x + i], ofPlayerId, isPlaceable);
      }
    } else {
      for (let j = 0; j < length; j += 1) {
        canBePlaced = isCellAvailable([y + j, x], ofPlayerId, isPlaceable);
      }
    }

    return canBePlaced;
  };

  const areCellsAvailable = (length, coordinates, ofPlayerId, orientation) => {
    let isPlaceable = true;

    // the for loop acts asynchoronously so we had to seperate it into it's own function
    // in order to make it synchoronous
    isPlaceable = isPlaceableSynchoronously(
      length,
      coordinates,
      ofPlayerId,
      orientation,
      isPlaceable,
    );
    return isPlaceable;
  };

  const placeShip = (ship, coordinates, ofPlayerId = 0, orientation = 'rightward') => {
    if (areCellsAvailable(ship.getLength(), coordinates, ofPlayerId, orientation)) {
      if (ofPlayerId === 0) partnerShips.push(ship);
      else opponentShips.push(ship);
      return occupyCells(ship, coordinates, ofPlayerId, orientation);
    }
    return false;
  };

  const receiveAttack = (coordinates, ofPlayerId) => {
    const [x, y] = coordinates;
    if (ofPlayerId === 0 && Number.isInteger(opponentGrid[x][y].shipId)) {
      const ship = getShipFromCell(x, y, 1);
      ship.hit();
      return ship;
    } if (ofPlayerId === 1 && Number.isInteger(grid[x][y].shipId)) {
      const ship = getShipFromCell(x, y, 0);
      ship.hit();
      return ship;
    }
    missedShotsCoordinates.push({ coordinates, ofPlayerId });
    return missedShotsCoordinates;
  };

  return { buildGrids, placeShip, receiveAttack };
};

// const gameboard2 = Gameboard();
// gameboard2.buildGrids();

// const ship1 = Ship(4);
// const ship2 = Ship(6, 3);
// const ship3 = Ship(2);
// const ship4 = Ship(5);
// const ship5 = Ship(1);
// const ship6 = Ship(3, 2);
// const ship7 = Ship(5);

// gameboard2.placeShip(ship1, [0, 2], 1, 'downward');
// gameboard2.placeShip(ship2, [3, 7], 1, 'downward');
// gameboard2.placeShip(ship3, [1, 5], 1);
// gameboard2.placeShip(ship4, [4, 1]);
// gameboard2.placeShip(ship5, [5, 7], 0, 'downward');
// gameboard2.placeShip(ship6, [9, 0], 1);
// gameboard2.placeShip(ship7, [3, 4]);
// console.log(gameboard2.receiveAttack([0, 2], 0));

export default Gameboard;
