// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

//verificar case
//determinar min y max
//devolver el faltante
function findMissingLetter(array) {
  const asciiArray = array.map((letter) => letter.charCodeAt(0));
  const min = Math.min(...asciiArray);
  const max = Math.max(...asciiArray);
  for (let i = min; i < max; i++) {
    if (!asciiArray.includes(i)) {
      return String.fromCharCode(i);
    }
  }
}

findMissingLetter(["a", "b", "c", "d", "f"]);

findMissingLetter(["O", "Q", "R", "S"]);
