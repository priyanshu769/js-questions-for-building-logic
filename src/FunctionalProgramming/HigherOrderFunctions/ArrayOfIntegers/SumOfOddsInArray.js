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
