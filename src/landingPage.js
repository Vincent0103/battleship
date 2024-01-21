const LandingPage = (landingPageContainer) => {
  const landingPageDIV = landingPageContainer;
  const startBtn = landingPageContainer.querySelector('.start-btn');

  const listenStartBtn = () => {
    startBtn.addEventListener('click', () => {
      landingPageDIV.style.animation = 'fadeOut forwards .5s';
      setTimeout(() => landingPageDIV.remove(), 500);
    });
  };

  listenStartBtn();
};

export default LandingPage;
