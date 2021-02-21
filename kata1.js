const sumLargestNumbers = function (data) {
  let firstNumber = 0;
  let secondNumber = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > firstNumber) {
      firstNumber = data[i]
    }
    for (let j = 0; j < data.length; j++) {
      if (data[j] > secondNumber && data[j] < firstNumber) {
        secondNumber = data[j]
      }
    }
  }
  return (firstNumber + secondNumber);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));