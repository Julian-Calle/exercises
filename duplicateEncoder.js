// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character
// appears only once in the original string, or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//dividir en array
//pasar a un case
//contar numeros de veces que aparece
//intercambiar por simbolo
//intergrar array

function duplicateEncode(word) {
  const letterArray = word.split("").map((letter) => letter.toUpperCase());
  const coincidencesArray = letterArray.map((letter) => {
    let times = 0;
    for (let i = 0; i < letterArray.length; i++) {
      times = letterArray[i] == letter ? times + 1 : times;
    }
    return times;
  });
  return coincidencesArray
    .map((item) => {
      return item > 1 ? ")" : "(";
    })
    .join("");
}

function duplicateEncode2(word) {
  const coincidences = word
    .toUpperCase()
    .split("")
    .reduce((acc, letter) => {
      acc[letter] = acc[letter] ? acc[letter] + 1 : 1;
      return acc;
    }, {});
  return word
    .toUpperCase()
    .split("")
    .map((letter) => {
      return coincidences[letter] > 1 ? ")" : "(";
    })
    .join("");
}

function duplicateEncode3(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("(( @"));
