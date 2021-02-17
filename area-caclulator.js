function calculateRectangleArea(length, width) {
  if ((length * width) <= 0) {
    return undefined;
  }
  return length * width;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

function calculateTriangleArea(base, height) {
  if ((base * height / 2) <= 0) {
    return undefined;
  }
  return base * height / 2;
}
console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

function calculateCircleArea(radius) {
  if (radius <= 0) {
    return undefined;
  }
  return Math.PI * (radius * radius);
}
console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined