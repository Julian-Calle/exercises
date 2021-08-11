// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//separar
//a acada elemento multiplicarlo por dos , siendo el primero mayusculua. Salvo el primer elemento
//unir con guiones
function accumLarge(s) {
  const letterArray = s.split("");
  const mumblingArray = letterArray.map((letter, index) => {
    return `${letter.toUpperCase()}${letter.toLowerCase().repeat(index)}`;
  });

  console.log(mumblingArray.join("-"));
  return mumblingArray.join("-");
}

function accumCompact(s) {
  return s
    .split("")
    .map((letter, index) => {
      return `${letter.toUpperCase()}${letter.toLowerCase().repeat(index)}`;
    })
    .join("-");
}

accum("abcd");
accum("RqaEzty");
accum("cwAt");
