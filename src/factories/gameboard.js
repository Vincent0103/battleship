const Gameboard = () => {
  const partnerShips = []; const opponentShips = [];
  const partnerGrid = []; const opponentGrid = [];
  const missedShotsCoordinates = [];

  const buildGrids = () => {
    for (let i = 0; i < 10; i += 1) {
      [partnerGrid, opponentGrid].forEach((item) => item.push([]));
      for (let j = 0; j < 10; j += 1) {
        [partnerGrid, opponentGrid].forEach((item) => item[i].push({ shipId: null }));
      }
    }

    return { partnerGrid, opponentGrid };
  };

  const getShipFromCell = (cell, ofPlayerId) => {
    const ships = (ofPlayerId === 1) ? opponentShips : partnerShips;
    const targetId = cell.shipId;
    const [shipRetrieved] = ships.filter((ship) => ship.getId() === targetId);
    if (!shipRetrieved) throw new Error('Couldn\'t find the ship');
    return shipRetrieved;
  };

  const occupyCells = ({ getLength, getId }, [y, x], ofPlayerId, orientation) => {
    const currentGrid = (ofPlayerId === 0) ? partnerGrid : opponentGrid;
    let currentCell;
    if (orientation === 'rightward') {
      for (let i = 0; i < getLength(); i += 1) {
        currentCell = currentGrid[y][x + i];
        currentCell.shipId = getId();
        currentCell.isHit = false;
      }
    } else {
      for (let j = 0; j < getLength(); j += 1) {
        currentCell = currentGrid[y + j][x];
        currentCell.shipId = getId();
        currentCell.isHit = false;
      }
    }
    return currentGrid;
  };

  const offsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  const hasShipId = (grid, y, x) => (y <= 9 && y >= 0 && x <= 9 && x >= 0)
    && Number.isInteger(grid[y][x].shipId);

  const isCellAvailable = (
    [y, x],
    ofPlayerId,
    orientation,
    isBackShip = false,
    isFrontShip = false,
  ) => {
    const currentGrid = (ofPlayerId === 0) ? partnerGrid : opponentGrid;
    let currentOffsets;
    if (x > 9 || x < 0 || y > 9 || y < 0) return false;

    if (orientation === 'rightward') {
      currentOffsets = [offsets[0], offsets[1], offsets[2], offsets[5], offsets[6], offsets[7]];
      if (currentOffsets.some(([dy, dx]) => hasShipId(currentGrid, y + dy, x + dx))
      || (isBackShip && hasShipId(currentGrid, y, x - 1))
      || (isFrontShip && hasShipId(currentGrid, y, x + 1))) {
        return false;
      }
    }
    if (orientation === 'downward') {
      currentOffsets = [offsets[0], offsets[2], offsets[3], offsets[4], offsets[5], offsets[7]];
      if (currentOffsets.some(([dy, dx]) => hasShipId(currentGrid, y + dy, x + dx))
      || (isBackShip && hasShipId(currentGrid, y - 1, x))
      || (isFrontShip && hasShipId(currentGrid, y + 1, x))) {
        return false;
      }
    }
    return true;
  };

  const areCellsAvailable = (length, [y, x], ofPlayerId, orientation) => {
    for (let i = 0; i < length; i += 1) {
      const currentCoordinates = (orientation === 'rightward') ? [y, x + i] : [y + i, x];
      if (i === 0 && !isCellAvailable(currentCoordinates, ofPlayerId, orientation, true, false)) {
        return false;
      }
      if (i === length - 1
          && !isCellAvailable(currentCoordinates, ofPlayerId, orientation, false, true)) {
        return false;
      }
      if (!isCellAvailable(currentCoordinates, ofPlayerId, orientation)) return false;
    }
    return true;
  };

  const placeShip = (ship, coordinates, ofPlayerId = 0, orientation = 'rightward') => {
    if (areCellsAvailable(ship.getLength(), coordinates, ofPlayerId, orientation)) {
      if (ofPlayerId === 0) partnerShips.push(ship);
      else opponentShips.push(ship);
      return occupyCells(ship, coordinates, ofPlayerId, orientation);
    }
    return false;
  };

  const areAllShipsSunk = (ofPlayerId) => {
    const playersShips = (ofPlayerId === 0) ? partnerShips : opponentShips;
    return playersShips.every((ship) => ship.isSunk());
  };

  const receiveAttack = (coordinates, toPlayerId) => {
    if (areAllShipsSunk(0) || areAllShipsSunk(1)) return false;
    const [y, x] = coordinates;
    const currentId = toPlayerId;
    const [currentGrid, getShipFromPlayerId] = (currentId === 0)
      ? [opponentGrid, 1] : [partnerGrid, 0];
    if (currentGrid[y] === undefined || currentGrid[y][x] === undefined) return false;
    const currentCell = currentGrid[y][x];

    if (Number.isInteger(currentCell.shipId) && !currentCell.isHit) {
      const ship = getShipFromCell(currentCell, getShipFromPlayerId);
      ship.hit();
      currentCell.isHit = true;
      return ship;
    }
    if (currentCell.isHit) return false;

    const missedShotCoordinates = { coordinates, ofPlayerId: currentId };
    missedShotsCoordinates.push(missedShotCoordinates);
    return missedShotCoordinates;
  };

  const getMissedShotsCoordinates = () => missedShotsCoordinates;

  return {
    buildGrids,
    placeShip,
    receiveAttack,
    getMissedShotsCoordinates,
    areAllShipsSunk,
    getGrids: () => [partnerGrid, opponentGrid],
  };
};

export default Gameboard;
