import { buildGrid } from "./utilities.js";

const LandingPage = (landingPageContainer) => {
  const landingPageDIV = landingPageContainer;
  let gridContainer = landingPageDIV.querySelector('.grid-container.user-placeable');
  const startBtn = landingPageContainer.querySelector('.start-btn');

  const listenStartBtn = () => {
    startBtn.addEventListener('click', () => {
      landingPageDIV.style.animation = 'fadeOut forwards .5s';
      setTimeout(() => landingPageDIV.remove(), 500);
    });
  };

  gridContainer = buildGrid(gridContainer);
  listenStartBtn();
};

export default LandingPage;
