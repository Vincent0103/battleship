const DOM = () => {
  let partnerGridContainer;
  let opponentGridContainer;

  const populateDOMGrid = (gameboard, ofPlayerId) => {
    gameboard.forEach((line, y) => line.forEach((square, x) => {
      if (Number.isInteger(square.shipId)) {
        if (ofPlayerId === 0) partnerGridContainer.children[y].children[x].classList.add('ship');
        else opponentGridContainer.children[y].children[x].classList.add('ship');
      }
    }));
  };

  const buildDOMGrids = () => {
    partnerGridContainer = document.createElement('div');
    partnerGridContainer.classList.add('grid-container');
    opponentGridContainer = document.createElement('div');
    opponentGridContainer.classList.add('grid-container');

    [partnerGridContainer, opponentGridContainer].forEach((gridContainer, index) => {
      for (let i = 0; i < 10; i += 1) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.setAttribute('data-line', i);
        for (let j = 0; j < 10; j += 1) {
          const square = document.createElement('div');
          square.classList.add('square');
          if (index === 1) square.classList.add('opponent-square');
          square.setAttribute('data-square', j);
          line.appendChild(square);
        }
        gridContainer.appendChild(line);
      }
    });

    return [partnerGridContainer, opponentGridContainer];
  };

  const addContent = () => buildDOMGrids();

  return { addContent, populateDOMGrid };
};

export default DOM;
