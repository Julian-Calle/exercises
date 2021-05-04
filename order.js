/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */

function order(words) {
  let listOrdered = [];
  if (words === "" || words === " ") return words;
  const listOfWords = words.split(" ");

  for (let i = 0; i < listOfWords.length; i++) {
    listOrdered.splice(numPos(listOfWords[i]) - 1, 0, listOfWords[i]);
  }
  const result = listOrdered.join(" ");
  if (!check(result)) {
    return order(result);
  } else {
    console.log(result);
    return result;
  }
}
function check(words) {
  let checkResult = true;
  const listOfWords = words.split(" ");
  for (let i = 1; i < listOfWords.length; i++) {
    if (!listOfWords[i - 1].includes(`${i}`)) {
      checkResult = false;
    }
  }
  return checkResult;
}
function numPos(word) {
  for (let i = 1; i <= 9; i++) {
    if (word.includes(`${i}`)) {
      return i;
    }
  }
}

function order2(words) {
  var array = words.split(" ");
  var sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].includes(i)) {
        sortedArray.push(array[j]);
      }
    }
  }
  console.log(sortedArray.join(" "));
  return sortedArray.join(" ");
}

order2("is2 Thi1s T4est 3a");
order2("4of Fo1r pe6ople g3ood th5e the2");
order2(" ");
