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

  const getShipFromCell = (y, x, ofPlayerId) => {
    const [currentGrid, ships] = (ofPlayerId === 1)
      ? [opponentGrid, opponentShips] : [grid, partnerShips];
    const targetId = currentGrid[y][x].shipId;
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
    const [y, x] = coordinates;
    const [currentGrid, getShipFromPlayerId] = (ofPlayerId === 0)
      ? [opponentGrid, 1] : [grid, 0];
    if (currentGrid[y] === undefined || currentGrid[y][x] === undefined) return false;
    if (Number.isInteger(currentGrid[y][x].shipId)) {
      const ship = getShipFromCell(y, x, getShipFromPlayerId);
      ship.hit();
      return ship;
    }
    const missedShotCoordinates = { coordinates, ofPlayerId };
    missedShotsCoordinates.push(missedShotCoordinates);
    return missedShotCoordinates;
  };

  const getMissedShotsCoordinates = () => missedShotsCoordinates;

  // const areAllShipsSunk = (ofPlayerId) => {
  //   const playersShips = (ofPlayerId === 0) ? partnerShips : opponentShips;
  //   return playersShips.every((ship) => ship.isSunk());
  // };

  return {
    buildGrids, placeShip, receiveAttack, getMissedShotsCoordinates,
  };
};

export default Gameboard;
