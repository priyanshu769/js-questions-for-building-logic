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

// (c) return an array of objects with key as item and value as number of characters in the string.

const stringCharactersObj = (array) => {
  return array.map((string) => ({ [string]: string.length }));
};
// console.log(stringCharactersObj(fruits));
