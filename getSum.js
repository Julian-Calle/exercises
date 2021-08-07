// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  //   console.log(min, max);
  let arrayNumsBetween = [];
  //   console.log(min);
  for (let i = max; i >= min; i--) {
    arrayNumsBetween = [i, ...arrayNumsBetween];
  }
  //   console.log(arrayNumsBetween);

  const result =
    min == max
      ? max
      : arrayNumsBetween.reduce((acc, num) => {
          return acc + num;
        }, 0);
  console.log(min, max, arrayNumsBetween, result);
  return result;
}

// Examples
getSum(1, 0) == 1; // 1 + 0 = 1
getSum(1, 2) == 3; // 1 + 2 = 3
getSum(0, 1) == 1; // 0 + 1 = 1
getSum(1, 1) == 1; // 1 Since both are same
getSum(-1, 0) == -1; // -1 + 0 = -1
getSum(-1, 2) == 2; // -1 + 0 + 1 + 2 = 2
