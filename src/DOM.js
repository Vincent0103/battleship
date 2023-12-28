const DOM = () => {
  const addGrids = () => {
    const partnerGridContainer = document.createElement('div');
    partnerGridContainer.classList.add('grid-container');
    const opponentGridContainer = document.createElement('div');
    opponentGridContainer.classList.add('grid-container');

    [partnerGridContainer, opponentGridContainer].forEach((gridContainer) => {
      for (let i = 0; i < 10; i += 1) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.setAttribute('data-line', i);
        for (let j = 0; j < 10; j += 1) {
          const square = document.createElement('div');
          square.classList.add('square');
          square.setAttribute('data-square', j);
          line.appendChild(square);
        }
        gridContainer.appendChild(line);
      }
    });

    return [partnerGridContainer, opponentGridContainer];
  };

  const addContent = () => addGrids();

  return { addContent };
};

export default DOM;
