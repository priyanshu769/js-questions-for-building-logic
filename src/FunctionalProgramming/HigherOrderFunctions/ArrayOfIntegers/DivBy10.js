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

// (d) Find the numbers divisible by 10.
const divByTen = integers.filter((a) => a % 10 === 0);
// console.log(divByTen);
