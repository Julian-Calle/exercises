// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

//ver min y max
//probar con cada valor entre ellos y devolver el que no este en el array

function solution(A) {
  const min = Math.min(...A);
  const max = Math.max(...A);
  let result = 1;
  console.log(min, max);

  for (let i = min; i < max; i++) {
    if (!A.includes(i)) {
      result = i < 0 ? 1 : i;
      console.log(result);
      return result;
    } else {
      result = max + 1;
    }
  }
  console.log(result);
  return result;
}

solution([1, 3, 6, 4, 5, 1, 2, 7, 8, 9, 10, 12, 13, 14, 16, 17, 18, 19]);
solution([1, 2, 3, 4, 5, 7]);
solution([-1, 0, -3]);
