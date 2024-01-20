let ID;
const incrementalId = (defaultId) => {
  if (Number.isInteger(defaultId)) ID = defaultId;
  else if (ID === undefined) ID = 0;
  else ID += 1;
  return ID;
};

const containsSubArray = (rootArray, targetArray) => {
  const rootArrayString = rootArray.map((array) => array.toString());
  const targetArrayString = targetArray.toString();
  return rootArrayString.includes(targetArrayString);
};

const buildGrid = (gridContainer) => {
  for (let i = 0; i < 10; i += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    line.setAttribute('data-line', i);
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      if (i === 0) square.classList.add('top');
      if (i === 9) square.classList.add('bottom');
      if (j === 0) square.classList.add('left');
      if (j === 9) square.classList.add('right');
      square.setAttribute('data-square', j);
      line.appendChild(square);
    }
    gridContainer.appendChild(line);
  }
  return gridContainer;
};

export default incrementalId;
export { containsSubArray, buildGrid };
