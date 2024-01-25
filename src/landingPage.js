import { buildGrid } from './utilities.js';

const LandingPage = (landingPageContainer) => {
  const landingPageDIV = landingPageContainer;
  const placeableShipsContainer = landingPageDIV.querySelector('.placeable-ships-container');
  let gridContainer = landingPageDIV.querySelector('.grid-container.user-placeable');
  const startBtn = landingPageDIV.querySelector('.start-btn');
  let currentDraggedShipLength = 0;
  let isNotPlaceable = false;

  // use it for listenDrop() in order to fix
  // isNotPlaceable value priority between dragenter and dragleave
  let isNotPlaceableWhenEntering = false;

  const handleShipPlacement = (line, gridContainerX, shipLength) => {
    for (let i = shipLength - 1; i >= 0; i -= 1) {
      const currentSquare = line.children[gridContainerX + i];
      if (currentSquare) {
        if (isNotPlaceableWhenEntering) currentSquare.classList.remove('not-placeable');
        else {
          currentSquare.classList.remove('over');
          currentSquare.classList.add('ship');
        }
      }
    }
  };

  const handleGridHoverHint = (line, gridContainerX, shipLength, isEntering) => {
    for (let i = shipLength - 1; i >= 0; i -= 1) {
      const currentSquare = line.children[gridContainerX + i];
      if (currentSquare === undefined && !isNotPlaceable) {
        isNotPlaceable = true;
        if (isEntering) isNotPlaceableWhenEntering = true;
      }
      if (!isNotPlaceable) currentSquare.classList.toggle('over');
      else if (currentSquare) currentSquare.classList.toggle('not-placeable');
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
    currentShip.style.opacity = '.4';
    currentDraggedShipLength = currentShip.children.length;
  }

  function listenDragEnd() {
    this.style.opacity = '1';
  }

  function listenDragOver(e) {
    e.preventDefault();
    return false;
  }

  function listenDragEnterOrLeave(square, shipLength, isEntering = false) {
    const line = square.parentElement;
    const gridContainerX = +square.getAttribute('data-square');
    isNotPlaceable = false;
    if (isEntering) isNotPlaceableWhenEntering = false;
    handleGridHoverHint(line, gridContainerX, shipLength, isEntering);
  }

  function listenDrop(e, square, shipLength) {
    e.stopPropagation();
    const line = square.parentElement;
    const gridContainerX = +square.getAttribute('data-square');
    handleShipPlacement(line, gridContainerX, shipLength);
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
        square.addEventListener('dragenter', () => listenDragEnterOrLeave(square, currentDraggedShipLength, true));
        square.addEventListener('dragleave', () => listenDragEnterOrLeave(square, currentDraggedShipLength));
        square.addEventListener('drop', (e) => listenDrop(e, square, currentDraggedShipLength));
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
