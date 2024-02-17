import './style.css';
import LandingPage from './landingPage.js';
// eslint-disable-next-line import/no-cycle
import GameDOM from './gameDOM.js';
import Player from './factories/player.js';

const game = () => {
  const loadContent = () => {
    const player = Player();
    const page = GameDOM(player);

    const landingPageContainer = document.querySelector('.landing-page-container');
    const startBtn = landingPageContainer.querySelector('.start-btn');
    const placeableShipsContainer = landingPageContainer.querySelector('.placeable-ships-container');
    LandingPage(landingPageContainer, page, player);

    let isGameStarted = false;

    const shipsObserver = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'draggable') {
          if (Array.from(placeableShipsContainer.children).filter((child) => child.id).every((child) => child.getAttribute('draggable') === 'false')
          && isGameStarted === false) {
            startBtn.classList.add('enabled');
            isGameStarted = true;
          }
        }
      });
    });

    Array.from(placeableShipsContainer.children).forEach((child) => {
      shipsObserver.observe(child, { attributes: true });
    });
  };

  const restartRound = () => {
    Array.from(document.body.children).forEach((child) => child.remove());
    document.body.innerHTML = `<div class="landing-page-container">
    <h1 class="battleship-title">Battleship</h1>
    <div class="grid-container user-placeable"></div>
    <div class="placeable-ships-container">
      <div draggable="true" id="carrier" data-length="5"></div>
      <div draggable="true" id="battleship" data-length="4"></div>
      <div draggable="true" id="destroyer" data-length="3"></div>
      <div draggable="true" id="submarine" data-length="3"></div>
      <div draggable="true" id="patrol-boat" data-length="2"></div>
      <button class="randomize-btn">randomize</button>
    </div>
    <button class="start-btn" type="button">START!</button>
    </div>
    <div class="page-container"></div>
    <div class="restart-screen">
      <button class="restart-btn" type="button">restart?</button>
    </div>`;
    loadContent();
  };

  return { loadContent, restartRound };
};

export default game;
