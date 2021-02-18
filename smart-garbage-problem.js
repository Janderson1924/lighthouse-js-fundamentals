const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  if (trash === 'recycling') {
    bins.recycling += 1;
  } return bins;
};

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));







