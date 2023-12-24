function Ship(length, hitsCount = 0) {
  const shipLength = length;
  let hits = hitsCount;

  const hit = () => { if (hits < shipLength) hits += 1; };
  const isSunk = () => hits === shipLength;

  return { hit, isSunk, getHits: () => hits };
}

export default Ship;
