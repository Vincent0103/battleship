import { buildGrid } from './utilities.js';
import Ship from './factories/ship.js';
import Gameboard from './factories/gameboard.js';

const LandingPage = (landingPageContainer, GameDOM, Player) => {
  const landingPageDIV = landingPageContainer;
  const placeableShipsContainer = landingPageDIV.querySelector('.placeable-ships-container');
  let gridContainer = landingPageDIV.querySelector('.grid-container.user-placeable');
  const gameboard = Gameboard();
  let shipFunction = null;
  let currentlyDraggedShip = null;
  let isShipBadDropped = true;

  const toggleSquareClasses = (line, gridContainerX, loopStart, loopEnd, loopStep, extraClass) => {
    for (let i = loopStart; i !== loopEnd; i += loopStep) {
      const currentSquareIndex = gridContainerX + i;
      const currentSquare = line.children[currentSquareIndex];
      if (currentSquareIndex > 9) break;
      currentSquare.classList.toggle('over');
      if (extraClass) currentSquare.classList.toggle(extraClass);
    }
  };

  const listenStartBtn = (player) => {
    const startBtn = landingPageDIV.querySelector('.start-btn');

    const handleGamePage = () => {
      const page = GameDOM;

      const Indicator = page.Indicator();
      const turnIndicatorContainer = Indicator.addTurnIndicator();

      const pageContainer = document.querySelector('.page-container');
      const gridContainers = page.buildPlayerGrids();
      pageContainer.append(turnIndicatorContainer, gridContainers[0], gridContainers[1]);

      player.startGame('computer', gameboard);

      const [partnerGrid, opponentGrid] = gameboard.getGrids();
      page.populateDOMGrid(partnerGrid, 0);
      page.populateDOMGrid(opponentGrid, 1);
      page.listenOpponentGridCells(Indicator);
    };

    const areAllShipsPlacedInGrid = () => {
      const placeableShips = Array.from(placeableShipsContainer.querySelectorAll('[id]'));
      return placeableShips.every((item) => item.getAttribute('draggable') === 'false');
    };

    startBtn.addEventListener('click', () => {
      if (areAllShipsPlacedInGrid()) {
        handleGamePage();
        landingPageDIV.style.animation = 'fadeOut forwards .5s';
        setTimeout(() => landingPageDIV.remove(), 500);
      }
    });
  };

  const handleShips = () => {
    const addShipCells = (shipContainer, shipLength) => {
      for (let i = 0; i < shipLength; i += 1) {
        const shipCell = document.createElement('div');
        shipCell.classList.add('ship-cell');
        shipContainer.appendChild(shipCell);
      }
    };

    function listenDragStart() {
      if (this.draggable) {
        this.classList.add('already-in-use');
        shipFunction = Ship(this.children.length);
        currentlyDraggedShip = this;
      }
    }

    function listenDragEnd() {
      if (isShipBadDropped && this.draggable === true) {
        this.classList.remove('already-in-use');
      } else {
        this.classList.add('already-in-use');
        this.draggable = false;
        isShipBadDropped = true;
      }
    }

    Array.from(placeableShipsContainer.children).forEach((ship) => {
      addShipCells(ship, ship.getAttribute('data-length'));
      ship.addEventListener('dragstart', listenDragStart);
      ship.addEventListener('dragend', listenDragEnd);
    });
  };

  const handleGridContainer = (gridContainerParam) => {
    const handleGridHoverHint = (line, gridContainerX, ship) => {
      if (!gameboard.areCellsAvailable(ship.getLength(), [+line.getAttribute('data-line'), gridContainerX], 0, 'rightward')) {
        toggleSquareClasses(line, gridContainerX, 0, ship.getLength(), 1, 'not-placeable');
      } else {
        toggleSquareClasses(line, gridContainerX, ship.getLength() - 1, -1, -1);
      }
    };

    const listenDragEnterOrLeave = (square, ship) => {
      if (currentlyDraggedShip.draggable === true) {
        const line = square.parentElement;
        const gridContainerX = +square.getAttribute('data-square');
        handleGridHoverHint(line, gridContainerX, ship);
      }
    };

    const listenDragOver = (e) => {
      e.preventDefault();
      return false;
    };

    const listenDrop = (e, square, shipLength) => {
      e.stopPropagation();

      const handleShipPlacement = (line, gridContainerX, ship) => {
        if (!gameboard.placeShip(ship, [+line.getAttribute('data-line'), gridContainerX], 0, 'rightward')) {
          toggleSquareClasses(line, gridContainerX, 0, ship.getLength(), 1, 'not-placeable');
          return false;
        }
        for (let i = ship.getLength() - 1; i >= 0; i -= 1) {
          const currentSquare = line.children[gridContainerX + i];
          currentSquare.classList.remove('over');
          currentSquare.classList.add('ship');
        }
        return true;
      };

      if (currentlyDraggedShip.draggable === true) {
        const line = square.parentElement;
        const gridContainerX = +square.getAttribute('data-square');
        if (handleShipPlacement(line, gridContainerX, shipLength)) isShipBadDropped = false;
      }
      return false;
    }

    Array.from(gridContainerParam.children).forEach((line) => {
      Array.from(line.children).forEach((square) => {
        square.addEventListener('dragover', listenDragOver);
        square.addEventListener('dragenter', () => listenDragEnterOrLeave(square, shipFunction));
        square.addEventListener('dragleave', () => listenDragEnterOrLeave(square, shipFunction));
        square.addEventListener('drop', (e) => {
          const draggedFromDIV = document.querySelector(`.placeable-ships-container > *[data-length="${shipFunction.getLength()}"]`);
          listenDrop(e, square, shipFunction, draggedFromDIV);
        });
      });
    });
  };

  const populateUserPlaceableGrid = (board) => {
    let cell;

    const emptyUserPlaceableGrid = () => {
      board.forEach((line, y) => line.forEach((square, x) => {
        cell = gridContainer.children[y].children[x];
        if (cell.classList.contains('ship')) {
          cell.classList.remove('ship');
        }
      }));
    };

    emptyUserPlaceableGrid(board);
    board.forEach((line, y) => line.forEach((square, x) => {
      if (Number.isInteger(square.shipId)) {
        cell = gridContainer.children[y].children[x];
        cell.classList.add('ship');
      }
    }));
  };

  const listenRandomizeBtn = (player) => {
    const randomizeBtn = placeableShipsContainer.querySelector('.randomize-btn');
    randomizeBtn.addEventListener('click', () => {
      const [firstPlayer] = player.getPlayers();
      player.initializeDefaultShips(gameboard, firstPlayer.id);
      const [partnerGridContainer] = gameboard.getGrids();
      populateUserPlaceableGrid(partnerGridContainer);
      const ships = placeableShipsContainer.querySelectorAll('[id]');
      ships.forEach((ship) => {
        ship.setAttribute('draggable', 'false');
        ship.classList.add('already-in-use');
      });
    });
  };

  const addContent = () => {
    const player = Player;
    gameboard.buildGrids();
    gridContainer = buildGrid(gridContainer);
    handleShips();
    handleGridContainer(gridContainer);
    listenRandomizeBtn(player);
    listenStartBtn(player);
  };

  addContent();
};

export default LandingPage;
