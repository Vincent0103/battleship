import './style.css';
import DOM from './DOM.js';
import Player from './factories/player.js';

window.addEventListener('DOMContentLoaded', () => {
  const page = DOM();
  const pageContainer = document.querySelector('.page-container');
  const [partnerGridContainer, opponentGridContainer] = page.addContent();
  pageContainer.append(partnerGridContainer, opponentGridContainer);
  const player = Player();
  player.startGame();
  const [partnerGrid, opponentGrid] = player.getGrids();
  console.log(partnerGrid);
  page.populateDOMGrid(partnerGrid, 0);
  page.populateDOMGrid(opponentGrid, 1);
});
