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
  let currentDraggedShip = 0;

  const handleShipPlacement = (line, gridContainerX, ship) => {
    if (!gameboard.placeShip(ship, [+line.getAttribute('data-line'), gridContainerX], 0, 'rightward')) {
      for (let i = ship.getLength() - 1; i >= 0; i -= 1) {
        const currentSquareIndex = gridContainerX - i;
        const currentSquare = line.children[gridContainerX - i];
        if (currentSquareIndex > 9) break;
        currentSquare.classList.remove('over');
        currentSquare.classList.remove('not-placeable');
      }
      return false;
    }
    for (let i = ship.getLength() - 1; i >= 0; i -= 1) {
      const currentSquare = line.children[gridContainerX + i];
      currentSquare.classList.remove('over');
      currentSquare.classList.add('ship');
    }
    return true;
  };

  const toggleSquareClasses = (line, gridContainerX, loopStart, loopEnd, loopStep, extraClass) => {
    for (let i = loopStart; i !== loopEnd; i += loopStep) {
      const currentSquareIndex = gridContainerX + i;
      const currentSquare = line.children[currentSquareIndex];
      if (currentSquareIndex > 9) break;
      currentSquare.classList.toggle('over');
      if (extraClass) currentSquare.classList.toggle(extraClass);
    }
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

  function listenDragStart(ship) {
    const currentShip = ship;
    currentShip.classList.add('already-in-use');
    currentDraggedShip = Ship(currentShip.children.length);
  }

  function listenDragEnd() {
    // this.style.opacity = '1';
  }

  function listenDragOver(e) {
    e.preventDefault();
    return false;
  }

  function listenDragEnterOrLeave(square, ship) {
    const line = square.parentElement;
    const gridContainerX = +square.getAttribute('data-square');
    handleGridHoverHint(line, gridContainerX, ship);
  }

  function listenDrop(e, square, shipLength, draggedFromDIV) {
    e.stopPropagation();
    const line = square.parentElement;
    const gridContainerX = +square.getAttribute('data-square');
    if (!handleShipPlacement(line, gridContainerX, shipLength)) {
      draggedFromDIV.classList.remove('already-used');
    }
    draggedFromDIV.setAttribute('draggable', 'false');
    return false;
  }

  const listenStartBtn = () => {
    startBtn.addEventListener('click', () => {
      landingPageDIV.style.animation = 'fadeOut forwards .5s';
      setTimeout(() => landingPageDIV.remove(), 500);
    });
  };

  const handleShips = () => {
    for (let i = 0; i < 5; i += 1) {
      const currentShip = placeableShipsContainer.children[i];
      addShipCells(currentShip, currentShip.getAttribute('data-length'));

      // eslint-disable-next-line no-loop-func
      currentShip.addEventListener('dragstart', () => listenDragStart(currentShip));
      currentShip.addEventListener('dragend', listenDragEnd);
    }
  };

  const handleGridContainer = (gridContainerParam) => {
    Array.from(gridContainerParam.children).forEach((line) => {
      Array.from(line.children).forEach((square) => {
        square.addEventListener('dragover', listenDragOver);
        square.addEventListener('dragenter', () => listenDragEnterOrLeave(square, currentDraggedShip));
        square.addEventListener('dragleave', () => listenDragEnterOrLeave(square, currentDraggedShip));
        square.addEventListener('drop', (e) => listenDrop(e, square, currentDraggedShip, document.querySelector(`.placeable-ships-container > *[data-length="${currentDraggedShip.getLength()}"]`)));
      });
    });
  };

  const addContent = () => {
    gridContainer = buildGrid(gridContainer);
    listenStartBtn();
    handleShips();
    handleGridContainer(gridContainer);
  };

  addContent();
};

export default LandingPage;
