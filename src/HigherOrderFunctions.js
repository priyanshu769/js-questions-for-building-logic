// Question: Given an array of integers
const integers = [
  8,
  23,
  5,
  16,
  78,
  2,
  97,
  4,
  45,
  6,
  9,
  12,
  35,
  2,
  13,
  5,
  85,
  3,
  7
];
// console.log(integers);

// (a) Find the sum of all odd numbers.
const oddIntegersSum = integers
  .filter((x) => x % 2 !== 0)
  .reduce((a, b) => a + b, 0);
console.log(oddIntegersSum);

// (b) Find the sum of all numbers at odd indexes.
const oddIndexSum = integers
  .filter((x) => integers.indexOf(x) % 2 !== 0)
  .reduce((a, b) => a + b, 0);
console.log(oddIndexSum);
