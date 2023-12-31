import CircleIcon from './components/circle.svg';
import MissedIcon from './components/missed.svg';
import ExplosionIcon from './components/bomb-explosion.svg';

const DOM = (Player) => {
  const player = Player;
  let partnerGridContainer;
  let opponentGridContainer;
  let turnIndicator;

  const handleSVGIntoCell = (targetCell, fromPlayerId, event = false) => {
    const cell = targetCell;
    const circleImg = document.createElement('img');
    circleImg.src = CircleIcon;
    circleImg.alt = 'target cell icon';
    circleImg.classList.add('circle-icon');

    const missedImg = document.createElement('img');
    missedImg.src = MissedIcon;
    missedImg.alt = 'missed cell icon';
    missedImg.classList.add('missed-icon');
    const isMissedImgAlready = cell.querySelector('img.missed-icon');

    const explosionImg = document.createElement('img');
    explosionImg.src = ExplosionIcon;
    explosionImg.alt = 'explosed cell icon';
    explosionImg.classList.add('explosion-icon');
    const isExplosedImgAlready = cell.querySelector('img.explosion-icon');

    const y = Number.parseInt(cell.parentNode.getAttribute('data-line'), 10);
    const x = Number.parseInt(cell.getAttribute('data-square'), 10);

    if (fromPlayerId === 0) {
      if (event === 'mouseenter') {
        if (!isMissedImgAlready && !isExplosedImgAlready) cell.appendChild(circleImg);
      } else if (event === 'mouseleave') {
        const img = cell.querySelector('img.circle-icon');
        if (img) cell.removeChild(img);
      } else if (event === 'click') {
        if (cell.getAttribute('data-has-ship') && !isExplosedImgAlready) {
          cell.appendChild(explosionImg);
          return { coordinates: [y, x] };
        } if (!isMissedImgAlready && !isExplosedImgAlready) {
          cell.appendChild(missedImg);
          return { coordinates: [y, x] };
        }
        return false;
      }
    } else {
      if (cell.getAttribute('data-has-ship') && !isExplosedImgAlready) {
        cell.appendChild(explosionImg);
        return { coordinates: [y, x] };
      } if (!isMissedImgAlready && !isExplosedImgAlready) {
        cell.appendChild(missedImg);
        return { coordinates: [y, x] };
      }
    }
    return false;
  };

  const changeTurnIndicator = () => {
    if (turnIndicator.classList.contains('player1')) {
      turnIndicator.classList.remove('player1');
      turnIndicator.classList.add('player2');
      turnIndicator.textContent = 'OPPONENT TURN';
      partnerGridContainer.classList.add('not-turn');
      opponentGridContainer.classList.remove('not-turn');
    } else {
      turnIndicator.classList.remove('player2');
      turnIndicator.classList.add('player1');
      turnIndicator.textContent = 'YOUR TURN';
      opponentGridContainer.classList.add('not-turn');
      partnerGridContainer.classList.remove('not-turn');
    }
  };

  const addTurnIndicator = () => {
    turnIndicator = document.createElement('div');
    turnIndicator.classList.add('turn-indicator');
    turnIndicator.classList.add('player1');
    turnIndicator.textContent = 'YOUR TURN';
    return turnIndicator;
  };

  const listenOpponentGridCells = () => {
    const grid = document.querySelector('.grid-container.partner');
    let clickable = true;
    const [player1, player2] = player.getPlayers();
    for (let i = 0; i < 10; i += 1) {
      const line = opponentGridContainer.children[i];
      for (let j = 0; j < 10; j += 1) {
        const square = line.children[j];
        square.addEventListener('mouseenter', (e) => {
          handleSVGIntoCell(e.target, player1.id, 'mouseenter');
        });
        square.addEventListener('mouseleave', (e) => {
          handleSVGIntoCell(e.target, player1.id, 'mouseleave');
        });
        // eslint-disable-next-line no-loop-func
        square.addEventListener('click', (async (e) => {
          if (clickable) {
            const playerMarkInGrid = handleSVGIntoCell(e.target, player1.id, 'click');
            if (playerMarkInGrid) {
              clickable = false;
              let y; let x;
              changeTurnIndicator();
              const attackedCoordinates = await player.attack(playerMarkInGrid.coordinates);
              if (!attackedCoordinates) {
                changeTurnIndicator();
                clickable = true;
              } else if (Array.isArray(attackedCoordinates)) {
                [y, x] = attackedCoordinates;
                const partnerCell = grid.children[y].children[x];
                handleSVGIntoCell(partnerCell, player2.id);
                changeTurnIndicator();
                clickable = true;
              }
              if (attackedCoordinates === 'game ended') clickable = false;
            }
          }
        }));
      }
    }
  };

  const populateDOMGrid = (gameboard, ofPlayerId) => {
    gameboard.forEach((line, y) => line.forEach((square, x) => {
      if (Number.isInteger(square.shipId)) {
        if (ofPlayerId === 0) {
          const cell = partnerGridContainer.children[y].children[x];
          cell.classList.add('ship');
          cell.setAttribute('data-has-ship', 'true');
        } else opponentGridContainer.children[y].children[x].setAttribute('data-has-ship', 'true');
      }
    }));
  };

  const buildDOMGrids = () => {
    partnerGridContainer = document.createElement('div');
    partnerGridContainer.classList.add('grid-container');
    partnerGridContainer.classList.add('partner');
    opponentGridContainer = document.createElement('div');
    opponentGridContainer.classList.add('grid-container');
    opponentGridContainer.classList.add('opponent');
    opponentGridContainer.classList.add('not-turn');

    [partnerGridContainer, opponentGridContainer].forEach((gridContainer, index) => {
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
          if (index === 1) square.classList.add('opponent-square');
          square.setAttribute('data-square', j);
          line.appendChild(square);
        }
        gridContainer.appendChild(line);
      }
    });

    return [partnerGridContainer, opponentGridContainer];
  };

  return {
    addTurnIndicator, buildDOMGrids, populateDOMGrid, listenOpponentGridCells,
  };
};

export default DOM;
