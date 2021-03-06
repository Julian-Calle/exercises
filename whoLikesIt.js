// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
//We want to create the text that should be displayed next to such an item.

// Implement the function likes which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

// function likes(names) {
//   const arraySize = names.length;
//   let msg = `no one likes this`;
//   if (arraySize == 1) {
//     msg = `${names[0]} likes this`;
//   } else if (arraySize == 2) {
//     msg = `${names[0]} and ${names[1]} like this`;
//   } else if (arraySize == 3) {
//     msg = `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (arraySize > 3) {
//     msg = `${names[0]}, ${names[1]} and ${arraySize - 2} others like this`;
//   }
//   console.log(msg);
//   return msg;
// }
// likes([]);
// likes(["Peter"]);
// likes(["Jacob", "Alex"]);
// likes(["Max", "John", "Mark"]);
// likes(["Alex", "Jacob", "Mark", "Max"]);

function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

likes([]);
likes(["Peter"]);
likes(["Jacob", "Alex"]);
likes(["Max", "John", "Mark"]);
likes(["Alex", "Jacob", "Mark", "Max"]);
