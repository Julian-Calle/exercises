function getCloserTemp(ArrTemps) {
  if (ArrTemps.includes(0) || ArrTemps.length === 0) return 0;
  const arrOrdered = ArrTemps.sort((a, b) => a - b);

  const divider = getDivider(arrOrdered);
  const arrNegative = arrOrdered.slice(0, divider);
  const arrPositive = arrOrdered.slice(divider);
  const maxNegative = Math.max(...arrNegative);
  const minPositive = Math.min(...arrPositive);
  const absNegative = Math.abs(maxNegative);
  const absPositive = Math.abs(minPositive);
  if (absNegative === absPositive) {
    return minPositive;
  } else {
    return absNegative > absPositive ? minPositive : maxNegative;
  }
}
function getDivider(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      return i;
    }
  }
}
const test = [7, -10, 13, 8, 4, -2, 12, -3, 3, -9, 6, 1, -6, 7];
console.log(getCloserTemp(test));
console.log(getCloserTemp([]));
