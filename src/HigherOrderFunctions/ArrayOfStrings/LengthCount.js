// Question: Given an array of strings.
const fruits = [
  "mango",
  "apple",
  "guava",
  "orange",
  "grapes",
  "berry",
  "qwrt",
  "lkjh"
];

// (a) Find the number of strings with similar number of characters.

// const stringLength = (array) => {
//   return array.map((string) => string.length);
// };
// console.log(stringLength(fruits));

const lengthCount = (array) => {
  return array.reduce((obj, string) => {
    if ([string.length] in obj) {
      return { ...obj, [string.length]: obj[string.length] + 1 };
    } else return { ...obj, [string.length]: 1 };
  }, {});
};
// console.log(lengthCount(fruits));
