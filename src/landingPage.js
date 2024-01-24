import { buildGrid } from './utilities.js';

const LandingPage = (landingPageContainer) => {
  const landingPageDIV = landingPageContainer;
  const placeableShipsContainer = landingPageDIV.querySelector('.placeable-ships-container');
  let gridContainer = landingPageDIV.querySelector('.grid-container.user-placeable');
  const startBtn = landingPageDIV.querySelector('.start-btn');

  function listenDragEnd() {
    this.style.opacity = '1';
  }

  function listenDragOver(e) {
    e.preventDefault();
    return false;
  }

  function listenDragEnter(square, shipLength) {
    square.classList.toggle('over');
    const line = square.parentElement;
    const gridContainerX = parseInt(square.getAttribute('data-square'), 10);
    for (let i = 1; i < shipLength; i += 1) {
      const currentSquare = line.children[gridContainerX + i];
      if (currentSquare === undefined) return false;
      currentSquare.classList.toggle('over');
    }
  }

  function listenDragLeave(square, shipLength) {
    square.classList.toggle('over');
    const line = square.parentElement;
    const gridContainerX = parseInt(square.getAttribute('data-square'), 10);
    for (let i = 1; i < shipLength; i += 1) {
      const currentSquare = line.children[gridContainerX + i];
      if (currentSquare === undefined) return false;
      currentSquare.classList.toggle('over');
    }
  }

  function listenDrop(e, square, shipLength) {
    e.stopPropagation();
    square.classList.remove('over');
    square.classList.add('ship');
    const line = square.parentElement;
    const gridContainerX = parseInt(square.getAttribute('data-square'), 10);
    for (let i = 1; i < shipLength; i += 1) {
      const currentSquare = line.children[gridContainerX + i];
      if (currentSquare === undefined) return false;
      currentSquare.classList.remove('over');
      currentSquare.classList.add('ship');
    }
    return false;
  }

  const addShipCells = (shipContainer, shipLength) => {
    for (let i = 0; i < shipLength; i += 1) {
      const shipCell = document.createElement('div');
      shipCell.classList.add('ship-cell');
      shipContainer.appendChild(shipCell);
    }
  };

  const listenStartBtn = () => {
    startBtn.addEventListener('click', () => {
      landingPageDIV.style.animation = 'fadeOut forwards .5s';
      setTimeout(() => landingPageDIV.remove(), 500);
    });
  };

  const addContent = () => {
    gridContainer = buildGrid(gridContainer);
    listenStartBtn();
    const shipLengths = [5, 4, 3, 3, 2];
    let currentDraggedShipLength = 0;

    for (let i = 0; i < 5; i += 1) {
      const currentShip = placeableShipsContainer.children[i];
      currentShip.setAttribute('draggable', 'true');
      addShipCells(currentShip, shipLengths[i]);

      // eslint-disable-next-line no-loop-func
      currentShip.addEventListener('dragstart', () => {
        currentShip.style.opacity = '.4';
        currentDraggedShipLength = currentShip.children.length;
        console.log(currentDraggedShipLength);
      });
      currentShip.addEventListener('dragend', listenDragEnd);
    }

    Array.from(gridContainer.children).forEach((line) => {
      Array.from(line.children).forEach((square) => {
        square.addEventListener('dragover', listenDragOver);
        square.addEventListener('dragenter', () => listenDragEnter(square, currentDraggedShipLength));
        square.addEventListener('dragleave', () => listenDragLeave(square, currentDraggedShipLength));
        square.addEventListener('drop', (e) => listenDrop(e, square, currentDraggedShipLength));
      });
    });
  };

  addContent();
};

export default LandingPage;
