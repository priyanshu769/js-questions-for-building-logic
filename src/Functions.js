// Easy Easy Easy
// Easy Easy Easy
// Easy Easy Easy
// Decided by the industry.

// Question1: Given a and b, your function should return the value of a to the power b.

const toThePower = (a, b) => console.log(Math.pow(a, b));
// I was unable to come up with a solution then I googled it and got to know about pow.

// toThePower(2, 3);

// Question2: Given length of a regular hexagon, your function should return area of the hexagon.

const hexagonArea = (a) => {
  return console.log(((3 * Math.sqrt(3)) / 2) * (a * a));
};
// hexagonArea(10);

// Question3: Given a sentence, your functions should return the number of words in the sentence.
const numberOfWords = (a) => {
  const b = a.split(" ");
  console.log(b.length);
};
// numberOfWords("We are neogrammers.");

// Question4: Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.

const minNum = (...array) => Math.min(...array);
// console.log(minNum(9,8,3,6,3,7,5));

// Question5: Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
const maxNum = (...array) => Math.max(...array);

// console.log(maxNum(9, 8, 3, 6, 3, 7, 5));

// Question6: Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all.
