const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (let direction of moves) {
    if (direction === "north") {
      y++;
    }
    if (direction === "south") {
      y--;
    }
    if (direction === "west") {
      x--;
    }
    if (direction === "east") {
      x++;
    }
  } return [x, y];
}
console.log(finalPosition(moves));