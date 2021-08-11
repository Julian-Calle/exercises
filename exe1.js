function solution(s) {
  const c = !Number.isInteger(s) ? s[0] : s;
  //   const c = s[0];
  console.log(c);
  if (!Number.isInteger(c) && c == c.toUpperCase()) {
    // please fix condition
    return "upper";
  } else if (!Number.isInteger(c) && c == c.toLowerCase()) {
    // please fix condition
    return "lower";
  } else if (Number.isInteger(c)) {
    // please fix condition
    return "digit";
  } else {
    return "other";
  }
}
console.log(solution("digit"));
console.log("----");
console.log(solution("Digit"));
console.log("----");
console.log(solution(8));
console.log("----");
console.log(solution("@"));

// const c = !Number.isInteger(s) ? s[0] : s;
// //   const c = s[0];
// console.log(c);
// if (!Number.isInteger(c) && c == c.toUpperCase()) {
//   // please fix condition
//   return "upper";
// } else if (!Number.isInteger(c) && c == c.toLowerCase()) {
//   // please fix condition
//   return "lower";
// } else if (Number.isInteger(c)) {
//   // please fix condition
//   return "digit";
// } else {
//   return typeof s == "string" && s == s.toUpperCase()
//     ? "upper"
//     : s == s.toLowerCase()
//     ? "lower"
//     : "other";
// }
// }
