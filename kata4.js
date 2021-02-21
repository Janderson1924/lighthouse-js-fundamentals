const instructorWithLongestName = function (instructors) {
  var n = 0;
  var names = [];

  for (var i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length >= n) {
      n = instructors[i].name.length;
      names = instructors[i];
    }
  }
  return names;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));