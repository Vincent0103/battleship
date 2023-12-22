function Ship(shipLength, hits) {
  this.shipLength = shipLength;
  this.hits = hits;

  function hit() {
    this.hits += 1;
  }

  function isSunk() {
    if (this.shipLength === this.hits) return true;
    return false;
  }

  return { hit, isSunk };
}
