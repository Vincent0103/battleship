import './style.css';
import LandingPage from './landingPage.js';
import GameDOM from './gameDOM.js';
import Player from './factories/player.js';

window.addEventListener('DOMContentLoaded', () => {
  const player = Player();
  const page = GameDOM(player);
  const landingPage = LandingPage(document.querySelector('.landing-page-container'));
  const pageContainer = document.querySelector('.page-container');
  const turnIndicatorContainer = page.addTurnIndicator();
  const gridContainers = page.buildPlayerGrids();
  pageContainer.append(turnIndicatorContainer, gridContainers[0], gridContainers[1]);

  player.startGame('computer');
  const [partnerGrid, opponentGrid] = player.getGrids();
  page.populateDOMGrid(partnerGrid, 0);
  page.populateDOMGrid(opponentGrid, 1);
  page.listenOpponentGridCells();
});
