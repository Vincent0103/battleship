import './style.css';
import DOM from './DOM.js';
import Player from './factories/player.js';

window.addEventListener('DOMContentLoaded', () => {
  const player = Player();
  const page = DOM(player);
  const pageContainer = document.querySelector('.page-container');
  const gridContainers = page.addContent();
  gridContainers.forEach((gridContainer) => pageContainer.appendChild(gridContainer));

  player.startGame('computer');
  const [partnerGrid, opponentGrid] = player.getGrids();
  page.populateDOMGrid(partnerGrid, 0);
  page.populateDOMGrid(opponentGrid, 1);
  page.listenOpponentGridCells();
});
