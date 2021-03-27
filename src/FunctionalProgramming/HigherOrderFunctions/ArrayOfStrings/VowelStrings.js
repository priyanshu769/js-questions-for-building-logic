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

// (b) return an array with strings which have vowel

const vowelStrings = (array) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return array.filter((string) =>
    vowels.some((vowel) => string.includes(vowel))
  );
};
// console.log(vowelStrings(fruits));
