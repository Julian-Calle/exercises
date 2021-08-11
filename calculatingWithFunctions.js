// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

let firstNumber;
let secondNumber;
let operation = false;

function selectNum(number) {
  if (!operation) {
    secondNumber = number;
  } else {
    firstNumber = number;

    return calculate();
  }
}
function zero() {
  return selectNum(0);
}
function one() {
  return selectNum(1);
}
function two() {
  return selectNum(2);
}
function three() {
  return selectNum(3);
}
function four() {
  return selectNum(4);
}
function five() {
  return selectNum(5);
}
function six() {
  return selectNum(6);
}
function seven() {
  return selectNum(7);
}
function eight() {
  return selectNum(8);
}
function nine() {
  return selectNum(9);
}

function plus() {
  operation = "+";
}
function minus() {
  operation = "-";
}
function times() {
  operation = "*";
}
function dividedBy() {
  operation = "/";
}

function calculate() {
  let result;
  switch (operation) {
    case "*":
      result = firstNumber * secondNumber;
      break;

    case "+":
      result = firstNumber + secondNumber;
      break;

    case "-":
      result = firstNumber - secondNumber;
      break;

    case "/":
      result = Math.trunc(firstNumber / secondNumber);
      break;
  }
  operation = false;
  console.log(result);
  return result;
}
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));

// seven(times(five())); // must return 35
// console.log("------");
// four(plus(nine())); // must return 13
// console.log("------");
// eight(minus(three())); // must return 5
// console.log("------");
// six(dividedBy(two())); // must return 3
// console.log("------");
