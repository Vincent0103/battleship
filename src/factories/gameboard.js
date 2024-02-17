import { isNotOutOfBoundOfGrid } from '../utilities.js';

const Gameboard = () => {
  const partnerShips = []; const opponentShips = [];
  const partnerGrid = []; const opponentGrid = [];
  const missedShotsCoordinates = [];

  const emptyGrid = (ofPlayerId) => {
    const [grid, ships] = (ofPlayerId === 0) ? [partnerGrid, partnerShips]
      : [opponentGrid, opponentShips];
    grid.forEach((line) => {
      line.forEach((square) => {
        const cell = square;
        cell.shipId = null;
        cell.isHit = false;
      });
    });
    ships.length = 0;

    return grid;
  };

  const buildGrids = () => {
    for (let i = 0; i < 10; i += 1) {
      [partnerGrid, opponentGrid].forEach((item) => item.push([]));
      for (let j = 0; j < 10; j += 1) {
        [partnerGrid, opponentGrid].forEach((item) => item[i].push({ shipId: null, isHit: false }));
      }
    }

    return { partnerGrid, opponentGrid };
  };

  const hasShipId = (grid, y, x) => isNotOutOfBoundOfGrid(y, x)
  && Number.isInteger(grid[y][x].shipId);

  const isCellAvailable = ([y, x], grid) => {
    if (x > 9 || x < 0 || y > 9 || y < 0) return false;
    const offsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]];
    return !(offsets.some(([dy, dx]) => hasShipId(grid, y + dy, x + dx)));
  };

  const areCellsAvailable = (shipLength, [y, x], ofPlayerId, orientation) => {
    const currentGrid = (ofPlayerId === 0) ? partnerGrid : opponentGrid;
    for (let i = 0; i < shipLength; i += 1) {
      const [a, b] = (orientation === 'rightward') ? [y, x + i] : [y + i, x];
      if (!isCellAvailable([a, b], currentGrid)) return false;
    }
    return true;
  };

  const occupyCells = ({ getLength, getId }, [y, x], ofPlayerId, orientation) => {
    const currentGrid = (ofPlayerId === 0) ? partnerGrid : opponentGrid;
    let currentCell;
    if (orientation === 'rightward') {
      for (let i = 0; i < getLength(); i += 1) {
        currentCell = currentGrid[y][x + i];
        currentCell.shipId = getId();
      }
    } else {
      for (let j = 0; j < getLength(); j += 1) {
        currentCell = currentGrid[y + j][x];
        currentCell.shipId = getId();
      }
    }
    return currentGrid;
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

  const getShipFromCell = (cell, ofPlayerId) => {
    const ships = (ofPlayerId === 1) ? opponentShips : partnerShips;
    const targetId = cell.shipId;
    const [shipRetrieved] = ships.filter((ship) => ship.getId() === targetId);
    if (!shipRetrieved) throw new Error('Couldn\'t find the ship');
    return shipRetrieved;
  };

  const receiveAttack = (coordinates, toPlayerId) => {
    if (areAllShipsSunk(0) || areAllShipsSunk(1)) return 'game ended';
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

    if (!currentCell.isHit) currentCell.isHit = true;
    const missedShotCoordinates = { coordinates, ofPlayerId: currentId };
    missedShotsCoordinates.push(missedShotCoordinates);
    return missedShotCoordinates;
  };

  return {
    buildGrids,
    emptyGrid,
    placeShip,
    areCellsAvailable,
    receiveAttack,
    areAllShipsSunk,
    getMissedShotsCoordinates: () => missedShotsCoordinates,
    getGrids: () => [partnerGrid, opponentGrid],
  };
};

export default Gameboard;
