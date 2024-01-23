import { buildGrid } from './utilities.js';

const LandingPage = (landingPageContainer) => {
  const landingPageDIV = landingPageContainer;
  const placeableShipsContainer = landingPageDIV.querySelector('.placeable-ships-container');
  let gridContainer = landingPageDIV.querySelector('.grid-container.user-placeable');
  const startBtn = landingPageDIV.querySelector('.start-btn');

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

    for (let i = 0; i < 5; i += 1) {
      addShipCells(placeableShipsContainer.children[i], shipLengths[i]);
    }
  };

  addContent();
};

export default LandingPage;
