import './style.css';
import LandingPage from './landingPage.js';
import GameDOM from './gameDOM.js';
import Player from './factories/player.js';

window.addEventListener('DOMContentLoaded', () => {
  const player = Player();
  const page = GameDOM(player);
  const landingPageContainer = document.querySelector('.landing-page-container');
  const landingPage = LandingPage(landingPageContainer);
  const placeableShipsContainer = landingPageContainer.querySelector('.placeable-ships-container');
  let isGameStarted = false;

  const pageContainer = document.querySelector('.page-container');
  const turnIndicatorContainer = page.addTurnIndicator();
  const gridContainers = page.buildPlayerGrids();
  pageContainer.append(turnIndicatorContainer, gridContainers[0], gridContainers[1]);

  // Create a new MutationObserver instance
  const observer = new MutationObserver((mutationsList) => {
    // Look through all mutations that just occured
    mutationsList.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'draggable') {
        if (Array.from(placeableShipsContainer.children).every((child) => child.getAttribute('draggable') === 'false')
        && !isGameStarted) {
          const gameboard = landingPage.getGameboard();
          player.startGame('computer', gameboard);
          const [partnerGrid, opponentGrid] = player.getGrids();
          page.populateDOMGrid(partnerGrid, 0);
          page.populateDOMGrid(opponentGrid, 1);
          page.listenOpponentGridCells();
          isGameStarted = true;
        }
      }
    });
  });

  Array.from(placeableShipsContainer.children).forEach((child) => {
    observer.observe(child, { attributes: true });
  });
});
