import './style.css';
import DOM from './DOM.js';
import Player from './factories/player.js';

window.addEventListener('DOMContentLoaded', () => {
  const page = DOM();
  const pageContainer = document.querySelector('.page-container');
  const gridContainers = page.addContent();
  gridContainers.forEach((gridContainer) => pageContainer.appendChild(gridContainer));

  const player = Player();
  player.startGame();
  const [partnerGrid] = player.getGrids();
  page.populateDOMGrid(partnerGrid, 0);
  page.listenOpponentGridCells();
});
