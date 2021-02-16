const isOdd = function (num) {
  if (num = num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("3 is odd: " + isOdd(8));