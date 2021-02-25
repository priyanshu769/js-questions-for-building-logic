// Question: Given an array of integers
const integers = [
  8,
  23,
  5,
  16,
  30,
  78,
  2,
  97,
  4,
  45,
  6,
  90,
  9,
  12,
  35,
  2,
  40,
  13,
  70,
  5,
  85,
  3,
  7,
  20
];
// console.log(integers);

// (a) Find the sum of all odd numbers.
const oddIntegersSum = integers
  .filter((x) => x % 2 !== 0)
  .reduce((a, b) => a + b, 0);
// console.log(oddIntegersSum);

// (b) Find the sum of all numbers at odd indices.
const oddIndexSum = integers
  .filter((x) => integers.indexOf(x) % 2 !== 0)
  .reduce((a, b) => a + b, 0);
// console.log(oddIndexSum);

// (c) Find the biggest number in the array.
const biggestNum = Math.max(...integers);
// console.log(biggestNum);

// (d) Find the numbers divisible by 10.
const divByTen = integers.filter((a) => a % 10 === 0);
// console.log(divByTen);

// (e) Return an array of numbers where odd numbers are incrementd by 1 and even numbers are decremented by one.
const oddEvenGame = (array) => {
  return array.map((a) => {
    if (a % 2 === 0) {
      return a - 1;
    } else return a + 1;
  });
};
// console.log(oddEvenGame(integers));

// (f) Return an object with some of all odd numbers and even numbers separately.
// |wrong approach|
// const filterOdd = integers.filter((a) => a % 2 !== 0);
// const filterEven = integers.filter((a) => a % 2 === 0);
// const obj = {
//   sumOfOdd: filterOdd.reduce((a, b) => a + b, 0),
//   sumOfEven: filterEven.reduce((a, b) => a + b, 0)
// };
// console.log(obj);

const oddEvenSum = (array) => {
  return array.reduce(
    (a, b) => {
      if (b % 2) {
        return { ...a, evenSum: a.evenSum - b };
      } else return { ...a, oddSum: a.oddSum + b };
    },
    { oddSum: 0, evenSum: 0 } //This is our second argument which is a in parameters and b comes from the array[i].
  );
};
// console.log(oddEvenSum(integers));

// Question: Given an array of strings.
const fruits = ["mango", "apple", "guava", "orange", "grapes", "berry"];

// (a) Find the number of strings with similar number of characters.
const stringCharacters = (array) => {
  return array.map((string) => string.length);
};
// console.log(stringCharacters(fruits));

const stringCharactersObj = (array) => {
  return array.map((string) => ({ [string]: string.length }));
};
// console.log(stringCharactersObj(fruits));
