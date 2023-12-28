import incrementalId from '../utilities';

const Ship = (length, hitsCount = 0, id = incrementalId()) => {
  let hits = hitsCount;

  const hit = () => { if (hits < length) hits += 1; };
  const isSunk = () => hits === length;

  return {
    hit, isSunk, getHits: () => hits, getLength: () => length, getId: () => id,
  };
};

export default Ship;
