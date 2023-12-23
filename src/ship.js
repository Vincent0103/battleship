function Ship(length, hitsCount) {
  const shipLength = length;
  let hits = hitsCount;
  function hit() {
    hits += 1;
  }

  function isSunk() {
    if (shipLength === hits) return true;
    return false;
  }

  return { hit, isSunk };
}

export default Ship;
