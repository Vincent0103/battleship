import './style.css';
import LandingPage from './landingPage.js';
import GameDOM from './gameDOM.js';
import Player from './factories/player.js';

const loadGame = () => {
  const handleGamePage = (player, page) => {
    const [partnerGrid, opponentGrid] = player.getGrids();
    page.populateDOMGrid(partnerGrid, 0);
    page.populateDOMGrid(opponentGrid, 1);
    page.listenOpponentGridCells();
  };

  const loadContent = () => {
    window.addEventListener('DOMContentLoaded', () => {
      const player = Player();
      const page = GameDOM(player);
      const landingPageContainer = document.querySelector('.landing-page-container');
      const startBtn = landingPageContainer.querySelector('.start-btn');
      const landingPage = LandingPage(landingPageContainer);
      const placeableShipsContainer = landingPageContainer.querySelector('.placeable-ships-container');
      let isGameStarted = false;

      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'draggable') {
            if (Array.from(placeableShipsContainer.children).every((child) => child.getAttribute('draggable') === 'false')
            && !isGameStarted) {
              const pageContainer = document.querySelector('.page-container');
              const turnIndicatorContainer = page.addTurnIndicator();
              const gridContainers = page.buildPlayerGrids();
              pageContainer.append(turnIndicatorContainer, gridContainers[0], gridContainers[1]);

              const gameboard = landingPage.getGameboard();
              player.startGame('computer', gameboard);
              handleGamePage(player, page);

              startBtn.classList.add('enabled');
              isGameStarted = true;
            }
          }
        });
      });

      Array.from(placeableShipsContainer.children).forEach((child) => {
        observer.observe(child, { attributes: true });
      });
    });
  };

  loadContent();
};

export default loadGame;
