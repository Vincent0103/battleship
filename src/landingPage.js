import { buildGrid } from './utilities.js';
import Ship from './factories/ship.js';
import Gameboard from './factories/gameboard.js';

const LandingPage = (landingPageContainer) => {
  const landingPageDIV = landingPageContainer;
  const placeableShipsContainer = landingPageDIV.querySelector('.placeable-ships-container');
  let gridContainer = landingPageDIV.querySelector('.grid-container.user-placeable');
  const startBtn = landingPageDIV.querySelector('.start-btn');
  const gameboard = Gameboard();
  gameboard.buildGrids();
  let shipFunction = null;
  let currentlyDraggedShip = null;
  let isShipBadDropped = true;

  const toggleSquareClasses = (line, gridContainerX, loopStart, loopEnd, loopStep, extraClass) => {
    for (let i = loopStart; i !== loopEnd; i += loopStep) {
      const currentSquareIndex = gridContainerX + i;
      const currentSquare = line.children[currentSquareIndex];
      if (currentSquareIndex > 9) break;
      currentSquare.classList.toggle('over');
      if (extraClass) currentSquare.classList.toggle(extraClass);
    }
  };

  const handleShipPlacement = (line, gridContainerX, ship) => {
    if (!gameboard.placeShip(ship, [+line.getAttribute('data-line'), gridContainerX], 0, 'rightward')) {
      toggleSquareClasses(line, gridContainerX, 0, ship.getLength(), 1, 'not-placeable');
      return false;
    }
    for (let i = ship.getLength() - 1; i >= 0; i -= 1) {
      const currentSquare = line.children[gridContainerX + i];
      currentSquare.classList.remove('over');
      currentSquare.classList.add('ship');
    }
    return true;
  };

  const areAllShipsPlacedInGrid = () => {
    const placeableShips = Array.from(placeableShipsContainer.querySelectorAll('[id]'));
    return placeableShips.every((item) => item.getAttribute('draggable') === 'false');
  };

  const handleGridHoverHint = (line, gridContainerX, ship) => {
    if (!gameboard.areCellsAvailable(ship.getLength(), [+line.getAttribute('data-line'), gridContainerX], 0, 'rightward')) {
      toggleSquareClasses(line, gridContainerX, 0, ship.getLength(), 1, 'not-placeable');
    } else {
      toggleSquareClasses(line, gridContainerX, ship.getLength() - 1, -1, -1);
    }
  };

  const addShipCells = (shipContainer, shipLength) => {
    for (let i = 0; i < shipLength; i += 1) {
      const shipCell = document.createElement('div');
      shipCell.classList.add('ship-cell');
      shipContainer.appendChild(shipCell);
    }
  };

  function listenDragStart() {
    if (this.draggable) {
      this.classList.add('already-in-use');
      shipFunction = Ship(this.children.length);
      currentlyDraggedShip = this;
    }
  }

  function listenDragEnd() {
    if (isShipBadDropped && this.draggable === true) {
      this.classList.remove('already-in-use');
    } else {
      this.classList.add('already-in-use');
      this.draggable = false;
      isShipBadDropped = true;
    }
  }

  function listenDragOver(e) {
    e.preventDefault();
    return false;
  }

  function listenDragEnterOrLeave(square, ship) {
    if (currentlyDraggedShip.draggable === true) {
      const line = square.parentElement;
      const gridContainerX = +square.getAttribute('data-square');
      handleGridHoverHint(line, gridContainerX, ship);
    }
  }

  function listenDrop(e, square, shipLength) {
    e.stopPropagation();
    if (currentlyDraggedShip.draggable === true) {
      const line = square.parentElement;
      const gridContainerX = +square.getAttribute('data-square');
      if (handleShipPlacement(line, gridContainerX, shipLength)) isShipBadDropped = false;
    }
    return false;
  }

  const listenStartBtn = () => {
    startBtn.addEventListener('click', () => {
      if (areAllShipsPlacedInGrid()) {
        landingPageDIV.style.animation = 'fadeOut forwards .5s';
        setTimeout(() => landingPageDIV.remove(), 500);
      }
    });
  };

  const handleShips = () => {
    Array.from(placeableShipsContainer.children).forEach((ship) => {
      addShipCells(ship, ship.getAttribute('data-length'));
      ship.addEventListener('dragstart', listenDragStart);
      ship.addEventListener('dragend', listenDragEnd);
    });
  };

  const handleGridContainer = (gridContainerParam) => {
    Array.from(gridContainerParam.children).forEach((line) => {
      Array.from(line.children).forEach((square) => {
        square.addEventListener('dragover', listenDragOver);
        square.addEventListener('dragenter', () => listenDragEnterOrLeave(square, shipFunction));
        square.addEventListener('dragleave', () => listenDragEnterOrLeave(square, shipFunction));
        square.addEventListener('drop', (e) => {
          const draggedFromDIV = document.querySelector(`.placeable-ships-container > *[data-length="${shipFunction.getLength()}"]`);
          listenDrop(e, square, shipFunction, draggedFromDIV);
        });
      });
    });
  };

  const addContent = () => {
    gridContainer = buildGrid(gridContainer);
    handleShips();
    handleGridContainer(gridContainer);
    listenStartBtn();
  };

  addContent();

  return { getGameboard: () => gameboard };
};

export default LandingPage;
